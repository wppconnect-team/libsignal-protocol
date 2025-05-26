import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace textsecure. */
export namespace textsecure {

    /** Properties of a SignalMessage. */
    interface ISignalMessage {

        /** SignalMessage ratchetKey */
        ratchetKey?: (Uint8Array|null);

        /** SignalMessage counter */
        counter?: (number|null);

        /** SignalMessage previousCounter */
        previousCounter?: (number|null);

        /** SignalMessage ciphertext */
        ciphertext?: (Uint8Array|null);
    }

    /** Represents a SignalMessage. */
    class SignalMessage implements ISignalMessage {

        /**
         * Constructs a new SignalMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.ISignalMessage);

        /** SignalMessage ratchetKey. */
        public ratchetKey?: (Uint8Array|null);

        /** SignalMessage counter. */
        public counter?: (number|null);

        /** SignalMessage previousCounter. */
        public previousCounter?: (number|null);

        /** SignalMessage ciphertext. */
        public ciphertext?: (Uint8Array|null);

        /**
         * Creates a new SignalMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignalMessage instance
         */
        public static create(properties?: textsecure.ISignalMessage): textsecure.SignalMessage;

        /**
         * Encodes the specified SignalMessage message. Does not implicitly {@link textsecure.SignalMessage.verify|verify} messages.
         * @param message SignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.ISignalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignalMessage message, length delimited. Does not implicitly {@link textsecure.SignalMessage.verify|verify} messages.
         * @param message SignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.ISignalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignalMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SignalMessage;

        /**
         * Decodes a SignalMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SignalMessage;

        /**
         * Verifies a SignalMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignalMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignalMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.SignalMessage;

        /**
         * Creates a plain object from a SignalMessage message. Also converts values to other types if specified.
         * @param message SignalMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.SignalMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignalMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignalMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PreKeySignalMessage. */
    interface IPreKeySignalMessage {

        /** PreKeySignalMessage registrationId */
        registrationId?: (number|null);

        /** PreKeySignalMessage preKeyId */
        preKeyId?: (number|null);

        /** PreKeySignalMessage signedPreKeyId */
        signedPreKeyId?: (number|null);

        /** PreKeySignalMessage baseKey */
        baseKey?: (Uint8Array|null);

        /** PreKeySignalMessage identityKey */
        identityKey?: (Uint8Array|null);

        /** PreKeySignalMessage message */
        message?: (Uint8Array|null);
    }

    /** Represents a PreKeySignalMessage. */
    class PreKeySignalMessage implements IPreKeySignalMessage {

        /**
         * Constructs a new PreKeySignalMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IPreKeySignalMessage);

        /** PreKeySignalMessage registrationId. */
        public registrationId?: (number|null);

        /** PreKeySignalMessage preKeyId. */
        public preKeyId?: (number|null);

        /** PreKeySignalMessage signedPreKeyId. */
        public signedPreKeyId?: (number|null);

        /** PreKeySignalMessage baseKey. */
        public baseKey?: (Uint8Array|null);

        /** PreKeySignalMessage identityKey. */
        public identityKey?: (Uint8Array|null);

        /** PreKeySignalMessage message. */
        public message?: (Uint8Array|null);

        /**
         * Creates a new PreKeySignalMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreKeySignalMessage instance
         */
        public static create(properties?: textsecure.IPreKeySignalMessage): textsecure.PreKeySignalMessage;

        /**
         * Encodes the specified PreKeySignalMessage message. Does not implicitly {@link textsecure.PreKeySignalMessage.verify|verify} messages.
         * @param message PreKeySignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IPreKeySignalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreKeySignalMessage message, length delimited. Does not implicitly {@link textsecure.PreKeySignalMessage.verify|verify} messages.
         * @param message PreKeySignalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IPreKeySignalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreKeySignalMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.PreKeySignalMessage;

        /**
         * Decodes a PreKeySignalMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.PreKeySignalMessage;

        /**
         * Verifies a PreKeySignalMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreKeySignalMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreKeySignalMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.PreKeySignalMessage;

        /**
         * Creates a plain object from a PreKeySignalMessage message. Also converts values to other types if specified.
         * @param message PreKeySignalMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.PreKeySignalMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreKeySignalMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PreKeySignalMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyExchangeMessage. */
    interface IKeyExchangeMessage {

        /** KeyExchangeMessage id */
        id?: (number|null);

        /** KeyExchangeMessage baseKey */
        baseKey?: (Uint8Array|null);

        /** KeyExchangeMessage ratchetKey */
        ratchetKey?: (Uint8Array|null);

        /** KeyExchangeMessage identityKey */
        identityKey?: (Uint8Array|null);

        /** KeyExchangeMessage baseKeySignature */
        baseKeySignature?: (Uint8Array|null);
    }

    /** Represents a KeyExchangeMessage. */
    class KeyExchangeMessage implements IKeyExchangeMessage {

        /**
         * Constructs a new KeyExchangeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IKeyExchangeMessage);

        /** KeyExchangeMessage id. */
        public id?: (number|null);

        /** KeyExchangeMessage baseKey. */
        public baseKey?: (Uint8Array|null);

        /** KeyExchangeMessage ratchetKey. */
        public ratchetKey?: (Uint8Array|null);

        /** KeyExchangeMessage identityKey. */
        public identityKey?: (Uint8Array|null);

        /** KeyExchangeMessage baseKeySignature. */
        public baseKeySignature?: (Uint8Array|null);

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyExchangeMessage instance
         */
        public static create(properties?: textsecure.IKeyExchangeMessage): textsecure.KeyExchangeMessage;

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @param message KeyExchangeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IKeyExchangeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @param message KeyExchangeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IKeyExchangeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.KeyExchangeMessage;

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.KeyExchangeMessage;

        /**
         * Verifies a KeyExchangeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyExchangeMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.KeyExchangeMessage;

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @param message KeyExchangeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.KeyExchangeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyExchangeMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyMessage. */
    interface ISenderKeyMessage {

        /** SenderKeyMessage id */
        id?: (number|null);

        /** SenderKeyMessage iteration */
        iteration?: (number|null);

        /** SenderKeyMessage ciphertext */
        ciphertext?: (Uint8Array|null);
    }

    /** Represents a SenderKeyMessage. */
    class SenderKeyMessage implements ISenderKeyMessage {

        /**
         * Constructs a new SenderKeyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.ISenderKeyMessage);

        /** SenderKeyMessage id. */
        public id?: (number|null);

        /** SenderKeyMessage iteration. */
        public iteration?: (number|null);

        /** SenderKeyMessage ciphertext. */
        public ciphertext?: (Uint8Array|null);

        /**
         * Creates a new SenderKeyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyMessage instance
         */
        public static create(properties?: textsecure.ISenderKeyMessage): textsecure.SenderKeyMessage;

        /**
         * Encodes the specified SenderKeyMessage message. Does not implicitly {@link textsecure.SenderKeyMessage.verify|verify} messages.
         * @param message SenderKeyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.ISenderKeyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link textsecure.SenderKeyMessage.verify|verify} messages.
         * @param message SenderKeyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.ISenderKeyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SenderKeyMessage;

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SenderKeyMessage;

        /**
         * Verifies a SenderKeyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.SenderKeyMessage;

        /**
         * Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
         * @param message SenderKeyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.SenderKeyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyDistributionMessage. */
    interface ISenderKeyDistributionMessage {

        /** SenderKeyDistributionMessage id */
        id?: (number|null);

        /** SenderKeyDistributionMessage iteration */
        iteration?: (number|null);

        /** SenderKeyDistributionMessage chainKey */
        chainKey?: (Uint8Array|null);

        /** SenderKeyDistributionMessage signingKey */
        signingKey?: (Uint8Array|null);
    }

    /** Represents a SenderKeyDistributionMessage. */
    class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.ISenderKeyDistributionMessage);

        /** SenderKeyDistributionMessage id. */
        public id?: (number|null);

        /** SenderKeyDistributionMessage iteration. */
        public iteration?: (number|null);

        /** SenderKeyDistributionMessage chainKey. */
        public chainKey?: (Uint8Array|null);

        /** SenderKeyDistributionMessage signingKey. */
        public signingKey?: (Uint8Array|null);

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyDistributionMessage instance
         */
        public static create(properties?: textsecure.ISenderKeyDistributionMessage): textsecure.SenderKeyDistributionMessage;

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link textsecure.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link textsecure.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SenderKeyDistributionMessage;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SenderKeyDistributionMessage;

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyDistributionMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.SenderKeyDistributionMessage;

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @param message SenderKeyDistributionMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.SenderKeyDistributionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyDistributionMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeviceConsistencyCodeMessage. */
    interface IDeviceConsistencyCodeMessage {

        /** DeviceConsistencyCodeMessage generation */
        generation?: (number|null);

        /** DeviceConsistencyCodeMessage signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a DeviceConsistencyCodeMessage. */
    class DeviceConsistencyCodeMessage implements IDeviceConsistencyCodeMessage {

        /**
         * Constructs a new DeviceConsistencyCodeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IDeviceConsistencyCodeMessage);

        /** DeviceConsistencyCodeMessage generation. */
        public generation?: (number|null);

        /** DeviceConsistencyCodeMessage signature. */
        public signature?: (Uint8Array|null);

        /**
         * Creates a new DeviceConsistencyCodeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceConsistencyCodeMessage instance
         */
        public static create(properties?: textsecure.IDeviceConsistencyCodeMessage): textsecure.DeviceConsistencyCodeMessage;

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message. Does not implicitly {@link textsecure.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @param message DeviceConsistencyCodeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IDeviceConsistencyCodeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message, length delimited. Does not implicitly {@link textsecure.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @param message DeviceConsistencyCodeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IDeviceConsistencyCodeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.DeviceConsistencyCodeMessage;

        /**
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.DeviceConsistencyCodeMessage;

        /**
         * Verifies a DeviceConsistencyCodeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceConsistencyCodeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceConsistencyCodeMessage
         */
        public static fromObject(object: { [k: string]: any }): textsecure.DeviceConsistencyCodeMessage;

        /**
         * Creates a plain object from a DeviceConsistencyCodeMessage message. Also converts values to other types if specified.
         * @param message DeviceConsistencyCodeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.DeviceConsistencyCodeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceConsistencyCodeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceConsistencyCodeMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SessionStructure. */
    interface ISessionStructure {

        /** SessionStructure sessionVersion */
        sessionVersion?: (number|null);

        /** SessionStructure localIdentityPublic */
        localIdentityPublic?: (Uint8Array|null);

        /** SessionStructure remoteIdentityPublic */
        remoteIdentityPublic?: (Uint8Array|null);

        /** SessionStructure rootKey */
        rootKey?: (Uint8Array|null);

        /** SessionStructure previousCounter */
        previousCounter?: (number|null);

        /** SessionStructure senderChain */
        senderChain?: (textsecure.SessionStructure.IChain|null);

        /** SessionStructure receiverChains */
        receiverChains?: (textsecure.SessionStructure.IChain[]|null);

        /** SessionStructure pendingKeyExchange */
        pendingKeyExchange?: (textsecure.SessionStructure.IPendingKeyExchange|null);

        /** SessionStructure pendingPreKey */
        pendingPreKey?: (textsecure.SessionStructure.IPendingPreKey|null);

        /** SessionStructure remoteRegistrationId */
        remoteRegistrationId?: (number|null);

        /** SessionStructure localRegistrationId */
        localRegistrationId?: (number|null);

        /** SessionStructure needsRefresh */
        needsRefresh?: (boolean|null);

        /** SessionStructure aliceBaseKey */
        aliceBaseKey?: (Uint8Array|null);
    }

    /** Represents a SessionStructure. */
    class SessionStructure implements ISessionStructure {

        /**
         * Constructs a new SessionStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.ISessionStructure);

        /** SessionStructure sessionVersion. */
        public sessionVersion?: (number|null);

        /** SessionStructure localIdentityPublic. */
        public localIdentityPublic?: (Uint8Array|null);

        /** SessionStructure remoteIdentityPublic. */
        public remoteIdentityPublic?: (Uint8Array|null);

        /** SessionStructure rootKey. */
        public rootKey?: (Uint8Array|null);

        /** SessionStructure previousCounter. */
        public previousCounter?: (number|null);

        /** SessionStructure senderChain. */
        public senderChain?: (textsecure.SessionStructure.IChain|null);

        /** SessionStructure receiverChains. */
        public receiverChains: textsecure.SessionStructure.IChain[];

        /** SessionStructure pendingKeyExchange. */
        public pendingKeyExchange?: (textsecure.SessionStructure.IPendingKeyExchange|null);

        /** SessionStructure pendingPreKey. */
        public pendingPreKey?: (textsecure.SessionStructure.IPendingPreKey|null);

        /** SessionStructure remoteRegistrationId. */
        public remoteRegistrationId?: (number|null);

        /** SessionStructure localRegistrationId. */
        public localRegistrationId?: (number|null);

        /** SessionStructure needsRefresh. */
        public needsRefresh?: (boolean|null);

        /** SessionStructure aliceBaseKey. */
        public aliceBaseKey?: (Uint8Array|null);

        /**
         * Creates a new SessionStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionStructure instance
         */
        public static create(properties?: textsecure.ISessionStructure): textsecure.SessionStructure;

        /**
         * Encodes the specified SessionStructure message. Does not implicitly {@link textsecure.SessionStructure.verify|verify} messages.
         * @param message SessionStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.ISessionStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionStructure message, length delimited. Does not implicitly {@link textsecure.SessionStructure.verify|verify} messages.
         * @param message SessionStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.ISessionStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SessionStructure;

        /**
         * Decodes a SessionStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SessionStructure;

        /**
         * Verifies a SessionStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionStructure
         */
        public static fromObject(object: { [k: string]: any }): textsecure.SessionStructure;

        /**
         * Creates a plain object from a SessionStructure message. Also converts values to other types if specified.
         * @param message SessionStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.SessionStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SessionStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SessionStructure {

        /** Properties of a Chain. */
        interface IChain {

            /** Chain senderRatchetKey */
            senderRatchetKey?: (Uint8Array|null);

            /** Chain senderRatchetKeyPrivate */
            senderRatchetKeyPrivate?: (Uint8Array|null);

            /** Chain chainKey */
            chainKey?: (textsecure.SessionStructure.Chain.IChainKey|null);

            /** Chain messageKeys */
            messageKeys?: (textsecure.SessionStructure.Chain.IMessageKey[]|null);
        }

        /** Represents a Chain. */
        class Chain implements IChain {

            /**
             * Constructs a new Chain.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure.SessionStructure.IChain);

            /** Chain senderRatchetKey. */
            public senderRatchetKey?: (Uint8Array|null);

            /** Chain senderRatchetKeyPrivate. */
            public senderRatchetKeyPrivate?: (Uint8Array|null);

            /** Chain chainKey. */
            public chainKey?: (textsecure.SessionStructure.Chain.IChainKey|null);

            /** Chain messageKeys. */
            public messageKeys: textsecure.SessionStructure.Chain.IMessageKey[];

            /**
             * Creates a new Chain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Chain instance
             */
            public static create(properties?: textsecure.SessionStructure.IChain): textsecure.SessionStructure.Chain;

            /**
             * Encodes the specified Chain message. Does not implicitly {@link textsecure.SessionStructure.Chain.verify|verify} messages.
             * @param message Chain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure.SessionStructure.IChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Chain message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.verify|verify} messages.
             * @param message Chain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure.SessionStructure.IChain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Chain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SessionStructure.Chain;

            /**
             * Decodes a Chain message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SessionStructure.Chain;

            /**
             * Verifies a Chain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Chain message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Chain
             */
            public static fromObject(object: { [k: string]: any }): textsecure.SessionStructure.Chain;

            /**
             * Creates a plain object from a Chain message. Also converts values to other types if specified.
             * @param message Chain
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure.SessionStructure.Chain, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Chain to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Chain
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Chain {

            /** Properties of a ChainKey. */
            interface IChainKey {

                /** ChainKey index */
                index?: (number|null);

                /** ChainKey key */
                key?: (Uint8Array|null);
            }

            /** Represents a ChainKey. */
            class ChainKey implements IChainKey {

                /**
                 * Constructs a new ChainKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: textsecure.SessionStructure.Chain.IChainKey);

                /** ChainKey index. */
                public index?: (number|null);

                /** ChainKey key. */
                public key?: (Uint8Array|null);

                /**
                 * Creates a new ChainKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChainKey instance
                 */
                public static create(properties?: textsecure.SessionStructure.Chain.IChainKey): textsecure.SessionStructure.Chain.ChainKey;

                /**
                 * Encodes the specified ChainKey message. Does not implicitly {@link textsecure.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @param message ChainKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: textsecure.SessionStructure.Chain.IChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChainKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @param message ChainKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: textsecure.SessionStructure.Chain.IChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChainKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SessionStructure.Chain.ChainKey;

                /**
                 * Decodes a ChainKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SessionStructure.Chain.ChainKey;

                /**
                 * Verifies a ChainKey message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChainKey message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChainKey
                 */
                public static fromObject(object: { [k: string]: any }): textsecure.SessionStructure.Chain.ChainKey;

                /**
                 * Creates a plain object from a ChainKey message. Also converts values to other types if specified.
                 * @param message ChainKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: textsecure.SessionStructure.Chain.ChainKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChainKey to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ChainKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageKey. */
            interface IMessageKey {

                /** MessageKey index */
                index?: (number|null);

                /** MessageKey cipherKey */
                cipherKey?: (Uint8Array|null);

                /** MessageKey macKey */
                macKey?: (Uint8Array|null);

                /** MessageKey iv */
                iv?: (Uint8Array|null);
            }

            /** Represents a MessageKey. */
            class MessageKey implements IMessageKey {

                /**
                 * Constructs a new MessageKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: textsecure.SessionStructure.Chain.IMessageKey);

                /** MessageKey index. */
                public index?: (number|null);

                /** MessageKey cipherKey. */
                public cipherKey?: (Uint8Array|null);

                /** MessageKey macKey. */
                public macKey?: (Uint8Array|null);

                /** MessageKey iv. */
                public iv?: (Uint8Array|null);

                /**
                 * Creates a new MessageKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageKey instance
                 */
                public static create(properties?: textsecure.SessionStructure.Chain.IMessageKey): textsecure.SessionStructure.Chain.MessageKey;

                /**
                 * Encodes the specified MessageKey message. Does not implicitly {@link textsecure.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @param message MessageKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: textsecure.SessionStructure.Chain.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @param message MessageKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: textsecure.SessionStructure.Chain.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SessionStructure.Chain.MessageKey;

                /**
                 * Decodes a MessageKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SessionStructure.Chain.MessageKey;

                /**
                 * Verifies a MessageKey message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageKey
                 */
                public static fromObject(object: { [k: string]: any }): textsecure.SessionStructure.Chain.MessageKey;

                /**
                 * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
                 * @param message MessageKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: textsecure.SessionStructure.Chain.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageKey to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a PendingKeyExchange. */
        interface IPendingKeyExchange {

            /** PendingKeyExchange sequence */
            sequence?: (number|null);

            /** PendingKeyExchange localBaseKey */
            localBaseKey?: (Uint8Array|null);

            /** PendingKeyExchange localBaseKeyPrivate */
            localBaseKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKey */
            localRatchetKey?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKeyPrivate */
            localRatchetKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKey */
            localIdentityKey?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKeyPrivate */
            localIdentityKeyPrivate?: (Uint8Array|null);
        }

        /** Represents a PendingKeyExchange. */
        class PendingKeyExchange implements IPendingKeyExchange {

            /**
             * Constructs a new PendingKeyExchange.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure.SessionStructure.IPendingKeyExchange);

            /** PendingKeyExchange sequence. */
            public sequence?: (number|null);

            /** PendingKeyExchange localBaseKey. */
            public localBaseKey?: (Uint8Array|null);

            /** PendingKeyExchange localBaseKeyPrivate. */
            public localBaseKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKey. */
            public localRatchetKey?: (Uint8Array|null);

            /** PendingKeyExchange localRatchetKeyPrivate. */
            public localRatchetKeyPrivate?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKey. */
            public localIdentityKey?: (Uint8Array|null);

            /** PendingKeyExchange localIdentityKeyPrivate. */
            public localIdentityKeyPrivate?: (Uint8Array|null);

            /**
             * Creates a new PendingKeyExchange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingKeyExchange instance
             */
            public static create(properties?: textsecure.SessionStructure.IPendingKeyExchange): textsecure.SessionStructure.PendingKeyExchange;

            /**
             * Encodes the specified PendingKeyExchange message. Does not implicitly {@link textsecure.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @param message PendingKeyExchange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure.SessionStructure.IPendingKeyExchange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingKeyExchange message, length delimited. Does not implicitly {@link textsecure.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @param message PendingKeyExchange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure.SessionStructure.IPendingKeyExchange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SessionStructure.PendingKeyExchange;

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SessionStructure.PendingKeyExchange;

            /**
             * Verifies a PendingKeyExchange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingKeyExchange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingKeyExchange
             */
            public static fromObject(object: { [k: string]: any }): textsecure.SessionStructure.PendingKeyExchange;

            /**
             * Creates a plain object from a PendingKeyExchange message. Also converts values to other types if specified.
             * @param message PendingKeyExchange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure.SessionStructure.PendingKeyExchange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingKeyExchange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PendingKeyExchange
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PendingPreKey. */
        interface IPendingPreKey {

            /** PendingPreKey preKeyId */
            preKeyId?: (number|null);

            /** PendingPreKey signedPreKeyId */
            signedPreKeyId?: (number|null);

            /** PendingPreKey baseKey */
            baseKey?: (Uint8Array|null);
        }

        /** Represents a PendingPreKey. */
        class PendingPreKey implements IPendingPreKey {

            /**
             * Constructs a new PendingPreKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure.SessionStructure.IPendingPreKey);

            /** PendingPreKey preKeyId. */
            public preKeyId?: (number|null);

            /** PendingPreKey signedPreKeyId. */
            public signedPreKeyId?: (number|null);

            /** PendingPreKey baseKey. */
            public baseKey?: (Uint8Array|null);

            /**
             * Creates a new PendingPreKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingPreKey instance
             */
            public static create(properties?: textsecure.SessionStructure.IPendingPreKey): textsecure.SessionStructure.PendingPreKey;

            /**
             * Encodes the specified PendingPreKey message. Does not implicitly {@link textsecure.SessionStructure.PendingPreKey.verify|verify} messages.
             * @param message PendingPreKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure.SessionStructure.IPendingPreKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingPreKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.PendingPreKey.verify|verify} messages.
             * @param message PendingPreKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure.SessionStructure.IPendingPreKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SessionStructure.PendingPreKey;

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SessionStructure.PendingPreKey;

            /**
             * Verifies a PendingPreKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingPreKey
             */
            public static fromObject(object: { [k: string]: any }): textsecure.SessionStructure.PendingPreKey;

            /**
             * Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.
             * @param message PendingPreKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure.SessionStructure.PendingPreKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingPreKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PendingPreKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a RecordStructure. */
    interface IRecordStructure {

        /** RecordStructure currentSession */
        currentSession?: (textsecure.ISessionStructure|null);

        /** RecordStructure previousSessions */
        previousSessions?: (textsecure.ISessionStructure[]|null);
    }

    /** Represents a RecordStructure. */
    class RecordStructure implements IRecordStructure {

        /**
         * Constructs a new RecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IRecordStructure);

        /** RecordStructure currentSession. */
        public currentSession?: (textsecure.ISessionStructure|null);

        /** RecordStructure previousSessions. */
        public previousSessions: textsecure.ISessionStructure[];

        /**
         * Creates a new RecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordStructure instance
         */
        public static create(properties?: textsecure.IRecordStructure): textsecure.RecordStructure;

        /**
         * Encodes the specified RecordStructure message. Does not implicitly {@link textsecure.RecordStructure.verify|verify} messages.
         * @param message RecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordStructure message, length delimited. Does not implicitly {@link textsecure.RecordStructure.verify|verify} messages.
         * @param message RecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.RecordStructure;

        /**
         * Decodes a RecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.RecordStructure;

        /**
         * Verifies a RecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordStructure
         */
        public static fromObject(object: { [k: string]: any }): textsecure.RecordStructure;

        /**
         * Creates a plain object from a RecordStructure message. Also converts values to other types if specified.
         * @param message RecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.RecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PreKeyRecordStructure. */
    interface IPreKeyRecordStructure {

        /** PreKeyRecordStructure id */
        id?: (number|null);

        /** PreKeyRecordStructure publicKey */
        publicKey?: (Uint8Array|null);

        /** PreKeyRecordStructure privateKey */
        privateKey?: (Uint8Array|null);
    }

    /** Represents a PreKeyRecordStructure. */
    class PreKeyRecordStructure implements IPreKeyRecordStructure {

        /**
         * Constructs a new PreKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IPreKeyRecordStructure);

        /** PreKeyRecordStructure id. */
        public id?: (number|null);

        /** PreKeyRecordStructure publicKey. */
        public publicKey?: (Uint8Array|null);

        /** PreKeyRecordStructure privateKey. */
        public privateKey?: (Uint8Array|null);

        /**
         * Creates a new PreKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreKeyRecordStructure instance
         */
        public static create(properties?: textsecure.IPreKeyRecordStructure): textsecure.PreKeyRecordStructure;

        /**
         * Encodes the specified PreKeyRecordStructure message. Does not implicitly {@link textsecure.PreKeyRecordStructure.verify|verify} messages.
         * @param message PreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IPreKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.PreKeyRecordStructure.verify|verify} messages.
         * @param message PreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IPreKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.PreKeyRecordStructure;

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.PreKeyRecordStructure;

        /**
         * Verifies a PreKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreKeyRecordStructure
         */
        public static fromObject(object: { [k: string]: any }): textsecure.PreKeyRecordStructure;

        /**
         * Creates a plain object from a PreKeyRecordStructure message. Also converts values to other types if specified.
         * @param message PreKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.PreKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PreKeyRecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignedPreKeyRecordStructure. */
    interface ISignedPreKeyRecordStructure {

        /** SignedPreKeyRecordStructure id */
        id?: (number|null);

        /** SignedPreKeyRecordStructure publicKey */
        publicKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure privateKey */
        privateKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure signature */
        signature?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a SignedPreKeyRecordStructure. */
    class SignedPreKeyRecordStructure implements ISignedPreKeyRecordStructure {

        /**
         * Constructs a new SignedPreKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.ISignedPreKeyRecordStructure);

        /** SignedPreKeyRecordStructure id. */
        public id?: (number|null);

        /** SignedPreKeyRecordStructure publicKey. */
        public publicKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure privateKey. */
        public privateKey?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure signature. */
        public signature?: (Uint8Array|null);

        /** SignedPreKeyRecordStructure timestamp. */
        public timestamp?: (number|Long|null);

        /**
         * Creates a new SignedPreKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedPreKeyRecordStructure instance
         */
        public static create(properties?: textsecure.ISignedPreKeyRecordStructure): textsecure.SignedPreKeyRecordStructure;

        /**
         * Encodes the specified SignedPreKeyRecordStructure message. Does not implicitly {@link textsecure.SignedPreKeyRecordStructure.verify|verify} messages.
         * @param message SignedPreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.ISignedPreKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedPreKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.SignedPreKeyRecordStructure.verify|verify} messages.
         * @param message SignedPreKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.ISignedPreKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SignedPreKeyRecordStructure;

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SignedPreKeyRecordStructure;

        /**
         * Verifies a SignedPreKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedPreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedPreKeyRecordStructure
         */
        public static fromObject(object: { [k: string]: any }): textsecure.SignedPreKeyRecordStructure;

        /**
         * Creates a plain object from a SignedPreKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SignedPreKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.SignedPreKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedPreKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignedPreKeyRecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IdentityKeyPairStructure. */
    interface IIdentityKeyPairStructure {

        /** IdentityKeyPairStructure publicKey */
        publicKey?: (Uint8Array|null);

        /** IdentityKeyPairStructure privateKey */
        privateKey?: (Uint8Array|null);
    }

    /** Represents an IdentityKeyPairStructure. */
    class IdentityKeyPairStructure implements IIdentityKeyPairStructure {

        /**
         * Constructs a new IdentityKeyPairStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.IIdentityKeyPairStructure);

        /** IdentityKeyPairStructure publicKey. */
        public publicKey?: (Uint8Array|null);

        /** IdentityKeyPairStructure privateKey. */
        public privateKey?: (Uint8Array|null);

        /**
         * Creates a new IdentityKeyPairStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdentityKeyPairStructure instance
         */
        public static create(properties?: textsecure.IIdentityKeyPairStructure): textsecure.IdentityKeyPairStructure;

        /**
         * Encodes the specified IdentityKeyPairStructure message. Does not implicitly {@link textsecure.IdentityKeyPairStructure.verify|verify} messages.
         * @param message IdentityKeyPairStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.IIdentityKeyPairStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdentityKeyPairStructure message, length delimited. Does not implicitly {@link textsecure.IdentityKeyPairStructure.verify|verify} messages.
         * @param message IdentityKeyPairStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.IIdentityKeyPairStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.IdentityKeyPairStructure;

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.IdentityKeyPairStructure;

        /**
         * Verifies an IdentityKeyPairStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdentityKeyPairStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdentityKeyPairStructure
         */
        public static fromObject(object: { [k: string]: any }): textsecure.IdentityKeyPairStructure;

        /**
         * Creates a plain object from an IdentityKeyPairStructure message. Also converts values to other types if specified.
         * @param message IdentityKeyPairStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.IdentityKeyPairStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdentityKeyPairStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IdentityKeyPairStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyStateStructure. */
    interface ISenderKeyStateStructure {

        /** SenderKeyStateStructure senderKeyId */
        senderKeyId?: (number|null);

        /** SenderKeyStateStructure senderChainKey */
        senderChainKey?: (textsecure.SenderKeyStateStructure.ISenderChainKey|null);

        /** SenderKeyStateStructure senderSigningKey */
        senderSigningKey?: (textsecure.SenderKeyStateStructure.ISenderSigningKey|null);

        /** SenderKeyStateStructure senderMessageKeys */
        senderMessageKeys?: (textsecure.SenderKeyStateStructure.ISenderMessageKey[]|null);
    }

    /** Represents a SenderKeyStateStructure. */
    class SenderKeyStateStructure implements ISenderKeyStateStructure {

        /**
         * Constructs a new SenderKeyStateStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.ISenderKeyStateStructure);

        /** SenderKeyStateStructure senderKeyId. */
        public senderKeyId?: (number|null);

        /** SenderKeyStateStructure senderChainKey. */
        public senderChainKey?: (textsecure.SenderKeyStateStructure.ISenderChainKey|null);

        /** SenderKeyStateStructure senderSigningKey. */
        public senderSigningKey?: (textsecure.SenderKeyStateStructure.ISenderSigningKey|null);

        /** SenderKeyStateStructure senderMessageKeys. */
        public senderMessageKeys: textsecure.SenderKeyStateStructure.ISenderMessageKey[];

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyStateStructure instance
         */
        public static create(properties?: textsecure.ISenderKeyStateStructure): textsecure.SenderKeyStateStructure;

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link textsecure.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.ISenderKeyStateStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.ISenderKeyStateStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SenderKeyStateStructure;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SenderKeyStateStructure;

        /**
         * Verifies a SenderKeyStateStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyStateStructure
         */
        public static fromObject(object: { [k: string]: any }): textsecure.SenderKeyStateStructure;

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @param message SenderKeyStateStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.SenderKeyStateStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyStateStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SenderKeyStateStructure {

        /** Properties of a SenderChainKey. */
        interface ISenderChainKey {

            /** SenderChainKey iteration */
            iteration?: (number|null);

            /** SenderChainKey seed */
            seed?: (Uint8Array|null);
        }

        /** Represents a SenderChainKey. */
        class SenderChainKey implements ISenderChainKey {

            /**
             * Constructs a new SenderChainKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure.SenderKeyStateStructure.ISenderChainKey);

            /** SenderChainKey iteration. */
            public iteration?: (number|null);

            /** SenderChainKey seed. */
            public seed?: (Uint8Array|null);

            /**
             * Creates a new SenderChainKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderChainKey instance
             */
            public static create(properties?: textsecure.SenderKeyStateStructure.ISenderChainKey): textsecure.SenderKeyStateStructure.SenderChainKey;

            /**
             * Encodes the specified SenderChainKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @param message SenderChainKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure.SenderKeyStateStructure.ISenderChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @param message SenderChainKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure.SenderKeyStateStructure.ISenderChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SenderKeyStateStructure.SenderChainKey;

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SenderKeyStateStructure.SenderChainKey;

            /**
             * Verifies a SenderChainKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderChainKey
             */
            public static fromObject(object: { [k: string]: any }): textsecure.SenderKeyStateStructure.SenderChainKey;

            /**
             * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
             * @param message SenderChainKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure.SenderKeyStateStructure.SenderChainKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderChainKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SenderChainKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SenderMessageKey. */
        interface ISenderMessageKey {

            /** SenderMessageKey iteration */
            iteration?: (number|null);

            /** SenderMessageKey seed */
            seed?: (Uint8Array|null);
        }

        /** Represents a SenderMessageKey. */
        class SenderMessageKey implements ISenderMessageKey {

            /**
             * Constructs a new SenderMessageKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure.SenderKeyStateStructure.ISenderMessageKey);

            /** SenderMessageKey iteration. */
            public iteration?: (number|null);

            /** SenderMessageKey seed. */
            public seed?: (Uint8Array|null);

            /**
             * Creates a new SenderMessageKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderMessageKey instance
             */
            public static create(properties?: textsecure.SenderKeyStateStructure.ISenderMessageKey): textsecure.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Encodes the specified SenderMessageKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @param message SenderMessageKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure.SenderKeyStateStructure.ISenderMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @param message SenderMessageKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure.SenderKeyStateStructure.ISenderMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Verifies a SenderMessageKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderMessageKey
             */
            public static fromObject(object: { [k: string]: any }): textsecure.SenderKeyStateStructure.SenderMessageKey;

            /**
             * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
             * @param message SenderMessageKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure.SenderKeyStateStructure.SenderMessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderMessageKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SenderMessageKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SenderSigningKey. */
        interface ISenderSigningKey {

            /** SenderSigningKey public */
            "public"?: (Uint8Array|null);

            /** SenderSigningKey private */
            "private"?: (Uint8Array|null);
        }

        /** Represents a SenderSigningKey. */
        class SenderSigningKey implements ISenderSigningKey {

            /**
             * Constructs a new SenderSigningKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure.SenderKeyStateStructure.ISenderSigningKey);

            /** SenderSigningKey public. */
            public public?: (Uint8Array|null);

            /** SenderSigningKey private. */
            public private?: (Uint8Array|null);

            /**
             * Creates a new SenderSigningKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SenderSigningKey instance
             */
            public static create(properties?: textsecure.SenderKeyStateStructure.ISenderSigningKey): textsecure.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Encodes the specified SenderSigningKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @param message SenderSigningKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure.SenderKeyStateStructure.ISenderSigningKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @param message SenderSigningKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure.SenderKeyStateStructure.ISenderSigningKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Verifies a SenderSigningKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SenderSigningKey
             */
            public static fromObject(object: { [k: string]: any }): textsecure.SenderKeyStateStructure.SenderSigningKey;

            /**
             * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
             * @param message SenderSigningKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure.SenderKeyStateStructure.SenderSigningKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SenderSigningKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SenderSigningKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SenderKeyRecordStructure. */
    interface ISenderKeyRecordStructure {

        /** SenderKeyRecordStructure senderKeyStates */
        senderKeyStates?: (textsecure.ISenderKeyStateStructure[]|null);
    }

    /** Represents a SenderKeyRecordStructure. */
    class SenderKeyRecordStructure implements ISenderKeyRecordStructure {

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure.ISenderKeyRecordStructure);

        /** SenderKeyRecordStructure senderKeyStates. */
        public senderKeyStates: textsecure.ISenderKeyStateStructure[];

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyRecordStructure instance
         */
        public static create(properties?: textsecure.ISenderKeyRecordStructure): textsecure.SenderKeyRecordStructure;

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link textsecure.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure.ISenderKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure.ISenderKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure.SenderKeyRecordStructure;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure.SenderKeyRecordStructure;

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyRecordStructure
         */
        public static fromObject(object: { [k: string]: any }): textsecure.SenderKeyRecordStructure;

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SenderKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure.SenderKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyRecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
