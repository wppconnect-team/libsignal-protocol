import * as util from './helpers'
import {
    BaseKeyType,
    Chain,
    IndexInfo,
    OldRatchetInfo,
    PendingPreKey,
    Ratchet,
    RecordType,
    SessionType,
} from './session-types'
import { KeyPairType } from './types'

const ARCHIVED_STATES_MAX_LENGTH = 40
const OLD_RATCHETS_MAX_LENGTH = 10
const SESSION_RECORD_VERSION = 'v1'

export class SessionRecord implements RecordType {
    private static migrations = [
        {
            version: 'v1',
            migrate: function migrateV1(data: any) {
                const sessions = data.sessions
                let key
                if (data.registrationId) {
                    for (key in sessions) {
                        if (!sessions[key].registrationId) {
                            sessions[key].registrationId = data.registrationId
                        }
                    }
                } else {
                    for (key in sessions) {
                        if (sessions[key].indexInfo.closed === -1) {
                            //    console.log(
                            //       'V1 session storage migration error: registrationId',
                            //      data.registrationId,
                            //     'for open session version',
                            //     data.version
                            // )
                        }
                    }
                }
            },
        },
    ]

    private static migrate(data: any): void {
        let run = data.version === undefined
        for (let i = 0; i < SessionRecord.migrations.length; ++i) {
            if (run) {
                SessionRecord.migrations[i].migrate(data)
            } else if (SessionRecord.migrations[i].version === data.version) {
                run = true
            }
        }
        if (!run) {
            throw new Error('Error migrating SessionRecord')
        }
    }

    registrationId?: number
    sessions: { [k: string]: SessionType } = {}
    version = SESSION_RECORD_VERSION
    constructor(registrationId?: number) {
        this.registrationId = registrationId
    }

    static deserialize(serialized: string): SessionRecord {
        const data = JSON.parse(serialized)
        if (data.version !== SESSION_RECORD_VERSION) {
            SessionRecord.migrate(data)
        }

        const record = new SessionRecord()
        record.sessions = {}
        for (const k of Object.keys(data.sessions)) {
            record.sessions[k] = sessionTypeStringToUint8Array(data.sessions[k])
        }
        if (
            record.sessions === undefined ||
            record.sessions === null ||
            typeof record.sessions !== 'object' ||
            Array.isArray(record.sessions)
        ) {
            throw new Error('Error deserializing SessionRecord')
        }
        return record
    }

    serialize(): string {
        const sessions: { [k: string]: SessionType<string> } = {}
        for (const k of Object.keys(this.sessions)) {
            sessions[k] = sessionTypeUint8ArrayToString(this.sessions[k])
        }
        const json = {
            sessions,
            version: this.version,
        }
        return JSON.stringify(json)
    }

    haveOpenSession(): boolean {
        const openSession = this.getOpenSession()
        return !!openSession && typeof openSession.registrationId === 'number'
    }

    getSessionByBaseKey(baseKey: Uint8Array): SessionType | undefined {
        const idx = util.uint8ArrayToBinaryString(baseKey)
        if (!idx) {
            return undefined
        }
        const session = this.sessions[idx]
        if (session && session.indexInfo.baseKeyType === BaseKeyType.OURS) {
            return undefined
        }
        return session
    }

    getSessionByRemoteEphemeralKey(remoteEphemeralKey: Uint8Array): SessionType | undefined {
        this.detectDuplicateOpenSessions()
        const sessions = this.sessions

        const searchKey = util.uint8ArrayToBinaryString(remoteEphemeralKey)

        if (searchKey) {
            let openSession
            for (const key in sessions) {
                if (sessions[key].indexInfo.closed == -1) {
                    openSession = sessions[key]
                }
                if (sessions[key].chains[searchKey] !== undefined) {
                    return sessions[key]
                }
            }
            if (openSession !== undefined) {
                return openSession
            }
        }

        return undefined
    }

    getOpenSession(): SessionType | undefined {
        const sessions = this.sessions
        if (sessions === undefined) {
            return undefined
        }

        this.detectDuplicateOpenSessions()

        for (const key in sessions) {
            if (sessions[key].indexInfo.closed == -1) {
                return sessions[key]
            }
        }
        return undefined
    }

    private detectDuplicateOpenSessions(): void {
        let openSession: SessionType | null = null
        const sessions = this.sessions
        for (const key in sessions) {
            if (sessions[key].indexInfo.closed == -1) {
                if (openSession !== null) {
                    throw new Error('Datastore inconsistensy: multiple open sessions')
                }
                openSession = sessions[key]
            }
        }
    }

    updateSessionState(session: SessionType): void {
        const sessions = this.sessions

        this.removeOldChains(session)

        const idx = session.indexInfo.baseKey && util.uint8ArrayToBinaryString(session.indexInfo.baseKey)
        if (!idx) {
            throw new Error(`invalid index for session`)
        }
        sessions[idx] = session

        this.removeOldSessions()
    }

    getSessions(): SessionType[] {
        // return an array of sessions ordered by time closed,
        // followed by the open session
        let list: SessionType[] = []
        let openSession: SessionType | null = null
        for (const k in this.sessions) {
            if (this.sessions[k].indexInfo.closed === -1) {
                openSession = this.sessions[k]
            } else {
                list.push(this.sessions[k])
            }
        }
        list = list.sort(function (s1, s2) {
            return s1.indexInfo.closed - s2.indexInfo.closed
        })
        if (openSession) {
            list.push(openSession)
        }
        return list
    }

    archiveCurrentState(): void {
        const open_session = this.getOpenSession()
        if (open_session !== undefined) {
            open_session.indexInfo.closed = Date.now()
            this.updateSessionState(open_session)
        }
    }
    promoteState(session: SessionType): void {
        session.indexInfo.closed = -1
    }

    removeOldChains(session: SessionType): void {
        // Sending ratchets are always removed when we step because we never need them again
        // Receiving ratchets are added to the oldRatchetList, which we parse
        // here and remove all but the last ten.
        while (session.oldRatchetList.length > OLD_RATCHETS_MAX_LENGTH) {
            let index = 0
            let oldest = session.oldRatchetList[0]
            for (let i = 0; i < session.oldRatchetList.length; i++) {
                if (session.oldRatchetList[i].added < oldest.added) {
                    oldest = session.oldRatchetList[i]
                    index = i
                }
            }
            const idx = util.uint8ArrayToBinaryString(oldest.ephemeralKey)
            if (!idx) {
                throw new Error(`invalid index for chain`)
            }
            delete session[idx]
            session.oldRatchetList.splice(index, 1)
        }
    }

    removeOldSessions(): void {
        // Retain only the last 20 sessions
        const { sessions } = this
        let oldestBaseKey: string | null = null
        let oldestSession: SessionType | null = null
        while (Object.keys(sessions).length > ARCHIVED_STATES_MAX_LENGTH) {
            for (const key in sessions) {
                const session = sessions[key]
                if (
                    session.indexInfo.closed > -1 && // session is closed
                    (!oldestSession || session.indexInfo.closed < oldestSession.indexInfo.closed)
                ) {
                    oldestBaseKey = key
                    oldestSession = session
                }
            }
            if (oldestBaseKey) {
                delete sessions[oldestBaseKey]
            }
        }
    }
    deleteAllSessions(): void {
        // Used primarily in session reset scenarios, where we really delete sessions
        this.sessions = {}
    }
}

// Serialization helpers
function toUA(s: string): Uint8Array {
    return util.base64ToUint8Array(s)
}
function uaToS(b: Uint8Array): string {
    return util.uint8ArrayToBase64(b)
}

export function keyPairStringToUint8Array(kp: KeyPairType<string>): KeyPairType<Uint8Array> {
    return {
        pubKey: toUA(kp.pubKey),
        privKey: toUA(kp.privKey),
    }
}

export function keyPairUint8ArrayToString(kp: KeyPairType<Uint8Array>): KeyPairType<string> {
    return {
        pubKey: uaToS(kp.pubKey),
        privKey: uaToS(kp.privKey),
    }
}

export function pendingPreKeyStringToUint8Array(ppk: PendingPreKey<string>): PendingPreKey<Uint8Array> {
    const { preKeyId, signedKeyId } = ppk
    return {
        baseKey: toUA(ppk.baseKey),
        preKeyId,
        signedKeyId,
    }
}

export function pendingPreKeyUint8ArrayToString(ppk: PendingPreKey<Uint8Array>): PendingPreKey<string> {
    const { preKeyId, signedKeyId } = ppk
    return {
        baseKey: uaToS(ppk.baseKey),
        preKeyId,
        signedKeyId,
    }
}

export function chainStringToUint8Array(c: Chain<string>): Chain<Uint8Array> {
    const { chainType, chainKey, messageKeys } = c
    const { key, counter } = chainKey
    const newMessageKeys: { [k: number]: Uint8Array } = {}
    for (const k of Object.keys(messageKeys)) {
        newMessageKeys[k] = toUA(messageKeys[k])
    }
    return {
        chainType,
        chainKey: {
            key: key ? toUA(key) : undefined,
            counter,
        },
        messageKeys: newMessageKeys,
    }
}

export function chainUint8ArrayToString(c: Chain<Uint8Array>): Chain<string> {
    const { chainType, chainKey, messageKeys } = c
    const { key, counter } = chainKey
    const newMessageKeys: { [k: number]: string } = {}
    for (const k of Object.keys(messageKeys)) {
        newMessageKeys[k] = uaToS(messageKeys[k])
    }
    return {
        chainType,
        chainKey: {
            key: key ? uaToS(key) : undefined,
            counter,
        },
        messageKeys: newMessageKeys,
    }
}

export function oldRatchetInfoStringToUint8Array(ori: OldRatchetInfo<string>): OldRatchetInfo<Uint8Array> {
    return {
        ephemeralKey: toUA(ori.ephemeralKey),
        added: ori.added,
    }
}

export function oldRatchetInfoUint8ArrayToString(ori: OldRatchetInfo<Uint8Array>): OldRatchetInfo<string> {
    return {
        ephemeralKey: uaToS(ori.ephemeralKey),
        added: ori.added,
    }
}

export function ratchetStringToUint8Array(r: Ratchet<string>): Ratchet<Uint8Array> {
    return {
        rootKey: toUA(r.rootKey),
        ephemeralKeyPair: r.ephemeralKeyPair && keyPairStringToUint8Array(r.ephemeralKeyPair),
        lastRemoteEphemeralKey: toUA(r.lastRemoteEphemeralKey),
        previousCounter: r.previousCounter,
        added: r.added,
    }
}

export function ratchetUint8ArrayToString(r: Ratchet<Uint8Array>): Ratchet<string> {
    return {
        rootKey: uaToS(r.rootKey),
        ephemeralKeyPair: r.ephemeralKeyPair && keyPairUint8ArrayToString(r.ephemeralKeyPair),
        lastRemoteEphemeralKey: uaToS(r.lastRemoteEphemeralKey),
        previousCounter: r.previousCounter,
        added: r.added,
    }
}

export function indexInfoStringToUint8Array(ii: IndexInfo<string>): IndexInfo<Uint8Array> {
    const { closed, remoteIdentityKey, baseKey, baseKeyType } = ii
    return {
        closed,
        remoteIdentityKey: toUA(remoteIdentityKey),
        baseKey: baseKey ? toUA(baseKey) : undefined,
        baseKeyType,
    }
}

export function indexInfoUint8ArrayToString(ii: IndexInfo<Uint8Array>): IndexInfo<string> {
    const { closed, remoteIdentityKey, baseKey, baseKeyType } = ii
    return {
        closed,
        remoteIdentityKey: uaToS(remoteIdentityKey),
        baseKey: baseKey ? uaToS(baseKey) : undefined,
        baseKeyType,
    }
}

export function sessionTypeStringToUint8Array(sess: SessionType<string>): SessionType<Uint8Array> {
    const { indexInfo, registrationId, currentRatchet, pendingPreKey, oldRatchetList, chains } = sess
    const newChains: { [ephKeyString: string]: Chain<Uint8Array> } = {}
    for (const k of Object.keys(chains)) {
        newChains[k] = chainStringToUint8Array(chains[k])
    }
    return {
        indexInfo: indexInfoStringToUint8Array(indexInfo),
        registrationId,
        currentRatchet: ratchetStringToUint8Array(currentRatchet),
        pendingPreKey: pendingPreKey ? pendingPreKeyStringToUint8Array(pendingPreKey) : undefined,
        oldRatchetList: oldRatchetList.map(oldRatchetInfoStringToUint8Array),
        chains: newChains,
    }
}

export function sessionTypeUint8ArrayToString(sess: SessionType<Uint8Array>): SessionType<string> {
    const { indexInfo, registrationId, currentRatchet, pendingPreKey, oldRatchetList, chains } = sess
    const newChains: { [ephKeyString: string]: Chain<string> } = {}
    for (const k of Object.keys(chains)) {
        newChains[k] = chainUint8ArrayToString(chains[k])
    }
    return {
        indexInfo: indexInfoUint8ArrayToString(indexInfo),
        registrationId,
        currentRatchet: ratchetUint8ArrayToString(currentRatchet),
        pendingPreKey: pendingPreKey ? pendingPreKeyUint8ArrayToString(pendingPreKey) : undefined,
        oldRatchetList: oldRatchetList.map(oldRatchetInfoUint8ArrayToString),
        chains: newChains,
    }
}

/*

var Internal = Internal || {};

Internal.BaseKeyType = {
  OURS: 1,
  THEIRS: 2
};
Internal.ChainType = {
  SENDING: 1,
  RECEIVING: 2
};



    var migrations = [
      {
        version: 'v1',
        migrate: function migrateV1(data) {
          var sessions = data.sessions;
          var key;
          if (data.registrationId) {
              for (key in sessions) {
                  if (!sessions[key].registrationId) {
                      sessions[key].registrationId = data.registrationId;
                  }
              }
          } else {
              for (key in sessions) {
                  if (sessions[key].indexInfo.closed === -1) {
                     // console.log('V1 session storage migration error: registrationId',
                      //    data.registrationId, 'for open session version',
                      //    data.version);
                  }
              }
          }
        }
      }
    ];

    function migrate(data) {
      var run = (data.version === undefined);
      for (var i=0; i < migrations.length; ++i) {
        if (run) {
          migrations[i].migrate(data);
        } else if (migrations[i].version === data.version) {
          run = true;
        }
      }
      if (!run) {
        throw new Error("Error migrating SessionRecord");
      }
    }

 ,

        ,
}();*/
