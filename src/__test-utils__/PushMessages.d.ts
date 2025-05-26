import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace textsecure_test. */
export namespace textsecure_test {

    /** Properties of an IncomingPushMessageSignal. */
    interface IIncomingPushMessageSignal {

        /** IncomingPushMessageSignal type */
        type?: (textsecure_test.IncomingPushMessageSignal.Type|null);

        /** IncomingPushMessageSignal source */
        source?: (string|null);

        /** IncomingPushMessageSignal sourceDevice */
        sourceDevice?: (number|null);

        /** IncomingPushMessageSignal relay */
        relay?: (string|null);

        /** IncomingPushMessageSignal timestamp */
        timestamp?: (number|Long|null);

        /** IncomingPushMessageSignal message */
        message?: (Uint8Array|null);
    }

    /** Represents an IncomingPushMessageSignal. */
    class IncomingPushMessageSignal implements IIncomingPushMessageSignal {

        /**
         * Constructs a new IncomingPushMessageSignal.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure_test.IIncomingPushMessageSignal);

        /** IncomingPushMessageSignal type. */
        public type?: (textsecure_test.IncomingPushMessageSignal.Type|null);

        /** IncomingPushMessageSignal source. */
        public source?: (string|null);

        /** IncomingPushMessageSignal sourceDevice. */
        public sourceDevice?: (number|null);

        /** IncomingPushMessageSignal relay. */
        public relay?: (string|null);

        /** IncomingPushMessageSignal timestamp. */
        public timestamp?: (number|Long|null);

        /** IncomingPushMessageSignal message. */
        public message?: (Uint8Array|null);

        /**
         * Creates a new IncomingPushMessageSignal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IncomingPushMessageSignal instance
         */
        public static create(properties?: textsecure_test.IIncomingPushMessageSignal): textsecure_test.IncomingPushMessageSignal;

        /**
         * Encodes the specified IncomingPushMessageSignal message. Does not implicitly {@link textsecure_test.IncomingPushMessageSignal.verify|verify} messages.
         * @param message IncomingPushMessageSignal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure_test.IIncomingPushMessageSignal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IncomingPushMessageSignal message, length delimited. Does not implicitly {@link textsecure_test.IncomingPushMessageSignal.verify|verify} messages.
         * @param message IncomingPushMessageSignal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure_test.IIncomingPushMessageSignal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IncomingPushMessageSignal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IncomingPushMessageSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure_test.IncomingPushMessageSignal;

        /**
         * Decodes an IncomingPushMessageSignal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IncomingPushMessageSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure_test.IncomingPushMessageSignal;

        /**
         * Verifies an IncomingPushMessageSignal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IncomingPushMessageSignal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IncomingPushMessageSignal
         */
        public static fromObject(object: { [k: string]: any }): textsecure_test.IncomingPushMessageSignal;

        /**
         * Creates a plain object from an IncomingPushMessageSignal message. Also converts values to other types if specified.
         * @param message IncomingPushMessageSignal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure_test.IncomingPushMessageSignal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IncomingPushMessageSignal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IncomingPushMessageSignal
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace IncomingPushMessageSignal {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            CIPHERTEXT = 1,
            KEY_EXCHANGE = 2,
            PREKEY_BUNDLE = 3,
            PLAINTEXT = 4,
            RECEIPT = 5,
            PREKEY_BUNDLE_DEVICE_CONTROL = 6,
            DEVICE_CONTROL = 7
        }
    }

    /** Properties of a PushMessageContent. */
    interface IPushMessageContent {

        /** PushMessageContent body */
        body?: (string|null);

        /** PushMessageContent attachments */
        attachments?: (textsecure_test.PushMessageContent.IAttachmentPointer[]|null);

        /** PushMessageContent group */
        group?: (textsecure_test.PushMessageContent.IGroupContext|null);

        /** PushMessageContent flags */
        flags?: (number|null);
    }

    /** Represents a PushMessageContent. */
    class PushMessageContent implements IPushMessageContent {

        /**
         * Constructs a new PushMessageContent.
         * @param [properties] Properties to set
         */
        constructor(properties?: textsecure_test.IPushMessageContent);

        /** PushMessageContent body. */
        public body?: (string|null);

        /** PushMessageContent attachments. */
        public attachments: textsecure_test.PushMessageContent.IAttachmentPointer[];

        /** PushMessageContent group. */
        public group?: (textsecure_test.PushMessageContent.IGroupContext|null);

        /** PushMessageContent flags. */
        public flags?: (number|null);

        /**
         * Creates a new PushMessageContent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushMessageContent instance
         */
        public static create(properties?: textsecure_test.IPushMessageContent): textsecure_test.PushMessageContent;

        /**
         * Encodes the specified PushMessageContent message. Does not implicitly {@link textsecure_test.PushMessageContent.verify|verify} messages.
         * @param message PushMessageContent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: textsecure_test.IPushMessageContent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushMessageContent message, length delimited. Does not implicitly {@link textsecure_test.PushMessageContent.verify|verify} messages.
         * @param message PushMessageContent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: textsecure_test.IPushMessageContent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushMessageContent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushMessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure_test.PushMessageContent;

        /**
         * Decodes a PushMessageContent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushMessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure_test.PushMessageContent;

        /**
         * Verifies a PushMessageContent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushMessageContent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushMessageContent
         */
        public static fromObject(object: { [k: string]: any }): textsecure_test.PushMessageContent;

        /**
         * Creates a plain object from a PushMessageContent message. Also converts values to other types if specified.
         * @param message PushMessageContent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: textsecure_test.PushMessageContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushMessageContent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PushMessageContent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PushMessageContent {

        /** Properties of an AttachmentPointer. */
        interface IAttachmentPointer {

            /** AttachmentPointer id */
            id?: (number|Long|null);

            /** AttachmentPointer contentType */
            contentType?: (string|null);

            /** AttachmentPointer key */
            key?: (Uint8Array|null);
        }

        /** Represents an AttachmentPointer. */
        class AttachmentPointer implements IAttachmentPointer {

            /**
             * Constructs a new AttachmentPointer.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure_test.PushMessageContent.IAttachmentPointer);

            /** AttachmentPointer id. */
            public id?: (number|Long|null);

            /** AttachmentPointer contentType. */
            public contentType?: (string|null);

            /** AttachmentPointer key. */
            public key?: (Uint8Array|null);

            /**
             * Creates a new AttachmentPointer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AttachmentPointer instance
             */
            public static create(properties?: textsecure_test.PushMessageContent.IAttachmentPointer): textsecure_test.PushMessageContent.AttachmentPointer;

            /**
             * Encodes the specified AttachmentPointer message. Does not implicitly {@link textsecure_test.PushMessageContent.AttachmentPointer.verify|verify} messages.
             * @param message AttachmentPointer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure_test.PushMessageContent.IAttachmentPointer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AttachmentPointer message, length delimited. Does not implicitly {@link textsecure_test.PushMessageContent.AttachmentPointer.verify|verify} messages.
             * @param message AttachmentPointer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure_test.PushMessageContent.IAttachmentPointer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AttachmentPointer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AttachmentPointer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure_test.PushMessageContent.AttachmentPointer;

            /**
             * Decodes an AttachmentPointer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AttachmentPointer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure_test.PushMessageContent.AttachmentPointer;

            /**
             * Verifies an AttachmentPointer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AttachmentPointer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AttachmentPointer
             */
            public static fromObject(object: { [k: string]: any }): textsecure_test.PushMessageContent.AttachmentPointer;

            /**
             * Creates a plain object from an AttachmentPointer message. Also converts values to other types if specified.
             * @param message AttachmentPointer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure_test.PushMessageContent.AttachmentPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AttachmentPointer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AttachmentPointer
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GroupContext. */
        interface IGroupContext {

            /** GroupContext id */
            id?: (Uint8Array|null);

            /** GroupContext type */
            type?: (textsecure_test.PushMessageContent.GroupContext.Type|null);

            /** GroupContext name */
            name?: (string|null);

            /** GroupContext members */
            members?: (string[]|null);

            /** GroupContext avatar */
            avatar?: (textsecure_test.PushMessageContent.IAttachmentPointer|null);
        }

        /** Represents a GroupContext. */
        class GroupContext implements IGroupContext {

            /**
             * Constructs a new GroupContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: textsecure_test.PushMessageContent.IGroupContext);

            /** GroupContext id. */
            public id?: (Uint8Array|null);

            /** GroupContext type. */
            public type?: (textsecure_test.PushMessageContent.GroupContext.Type|null);

            /** GroupContext name. */
            public name?: (string|null);

            /** GroupContext members. */
            public members: string[];

            /** GroupContext avatar. */
            public avatar?: (textsecure_test.PushMessageContent.IAttachmentPointer|null);

            /**
             * Creates a new GroupContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupContext instance
             */
            public static create(properties?: textsecure_test.PushMessageContent.IGroupContext): textsecure_test.PushMessageContent.GroupContext;

            /**
             * Encodes the specified GroupContext message. Does not implicitly {@link textsecure_test.PushMessageContent.GroupContext.verify|verify} messages.
             * @param message GroupContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: textsecure_test.PushMessageContent.IGroupContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupContext message, length delimited. Does not implicitly {@link textsecure_test.PushMessageContent.GroupContext.verify|verify} messages.
             * @param message GroupContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: textsecure_test.PushMessageContent.IGroupContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GroupContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): textsecure_test.PushMessageContent.GroupContext;

            /**
             * Decodes a GroupContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GroupContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): textsecure_test.PushMessageContent.GroupContext;

            /**
             * Verifies a GroupContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupContext
             */
            public static fromObject(object: { [k: string]: any }): textsecure_test.PushMessageContent.GroupContext;

            /**
             * Creates a plain object from a GroupContext message. Also converts values to other types if specified.
             * @param message GroupContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: textsecure_test.PushMessageContent.GroupContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GroupContext
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GroupContext {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                UPDATE = 1,
                DELIVER = 2,
                QUIT = 3
            }
        }

        /** Flags enum. */
        enum Flags {
            END_SESSION = 1
        }
    }
}
