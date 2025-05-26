/*eslint-disable*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.textsecure_test = (function() {

    /**
     * Namespace textsecure_test.
     * @exports textsecure_test
     * @namespace
     */
    var textsecure_test = {};

    textsecure_test.IncomingPushMessageSignal = (function() {

        /**
         * Properties of an IncomingPushMessageSignal.
         * @memberof textsecure_test
         * @interface IIncomingPushMessageSignal
         * @property {textsecure_test.IncomingPushMessageSignal.Type|null} [type] IncomingPushMessageSignal type
         * @property {string|null} [source] IncomingPushMessageSignal source
         * @property {number|null} [sourceDevice] IncomingPushMessageSignal sourceDevice
         * @property {string|null} [relay] IncomingPushMessageSignal relay
         * @property {number|Long|null} [timestamp] IncomingPushMessageSignal timestamp
         * @property {Uint8Array|null} [message] IncomingPushMessageSignal message
         */

        /**
         * Constructs a new IncomingPushMessageSignal.
         * @memberof textsecure_test
         * @classdesc Represents an IncomingPushMessageSignal.
         * @implements IIncomingPushMessageSignal
         * @constructor
         * @param {textsecure_test.IIncomingPushMessageSignal=} [properties] Properties to set
         */
        function IncomingPushMessageSignal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IncomingPushMessageSignal type.
         * @member {textsecure_test.IncomingPushMessageSignal.Type|null|undefined} type
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.type = null;

        /**
         * IncomingPushMessageSignal source.
         * @member {string|null|undefined} source
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.source = null;

        /**
         * IncomingPushMessageSignal sourceDevice.
         * @member {number|null|undefined} sourceDevice
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.sourceDevice = null;

        /**
         * IncomingPushMessageSignal relay.
         * @member {string|null|undefined} relay
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.relay = null;

        /**
         * IncomingPushMessageSignal timestamp.
         * @member {number|Long|null|undefined} timestamp
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.timestamp = null;

        /**
         * IncomingPushMessageSignal message.
         * @member {Uint8Array|null|undefined} message
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @instance
         */
        IncomingPushMessageSignal.prototype.message = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IncomingPushMessageSignal.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IncomingPushMessageSignal.prototype, "_source", {
            get: $util.oneOfGetter($oneOfFields = ["source"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IncomingPushMessageSignal.prototype, "_sourceDevice", {
            get: $util.oneOfGetter($oneOfFields = ["sourceDevice"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IncomingPushMessageSignal.prototype, "_relay", {
            get: $util.oneOfGetter($oneOfFields = ["relay"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IncomingPushMessageSignal.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IncomingPushMessageSignal.prototype, "_message", {
            get: $util.oneOfGetter($oneOfFields = ["message"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new IncomingPushMessageSignal instance using the specified properties.
         * @function create
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {textsecure_test.IIncomingPushMessageSignal=} [properties] Properties to set
         * @returns {textsecure_test.IncomingPushMessageSignal} IncomingPushMessageSignal instance
         */
        IncomingPushMessageSignal.create = function create(properties) {
            return new IncomingPushMessageSignal(properties);
        };

        /**
         * Encodes the specified IncomingPushMessageSignal message. Does not implicitly {@link textsecure_test.IncomingPushMessageSignal.verify|verify} messages.
         * @function encode
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {textsecure_test.IIncomingPushMessageSignal} message IncomingPushMessageSignal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IncomingPushMessageSignal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.source);
            if (message.relay != null && Object.hasOwnProperty.call(message, "relay"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.relay);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.timestamp);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.message);
            if (message.sourceDevice != null && Object.hasOwnProperty.call(message, "sourceDevice"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.sourceDevice);
            return writer;
        };

        /**
         * Encodes the specified IncomingPushMessageSignal message, length delimited. Does not implicitly {@link textsecure_test.IncomingPushMessageSignal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {textsecure_test.IIncomingPushMessageSignal} message IncomingPushMessageSignal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IncomingPushMessageSignal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IncomingPushMessageSignal message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure_test.IncomingPushMessageSignal} IncomingPushMessageSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IncomingPushMessageSignal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure_test.IncomingPushMessageSignal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.source = reader.string();
                        break;
                    }
                case 7: {
                        message.sourceDevice = reader.uint32();
                        break;
                    }
                case 3: {
                        message.relay = reader.string();
                        break;
                    }
                case 5: {
                        message.timestamp = reader.uint64();
                        break;
                    }
                case 6: {
                        message.message = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IncomingPushMessageSignal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure_test.IncomingPushMessageSignal} IncomingPushMessageSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IncomingPushMessageSignal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IncomingPushMessageSignal message.
         * @function verify
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IncomingPushMessageSignal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type")) {
                properties._type = 1;
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                properties._source = 1;
                if (!$util.isString(message.source))
                    return "source: string expected";
            }
            if (message.sourceDevice != null && message.hasOwnProperty("sourceDevice")) {
                properties._sourceDevice = 1;
                if (!$util.isInteger(message.sourceDevice))
                    return "sourceDevice: integer expected";
            }
            if (message.relay != null && message.hasOwnProperty("relay")) {
                properties._relay = 1;
                if (!$util.isString(message.relay))
                    return "relay: string expected";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                properties._timestamp = 1;
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                properties._message = 1;
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            }
            return null;
        };

        /**
         * Creates an IncomingPushMessageSignal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure_test.IncomingPushMessageSignal} IncomingPushMessageSignal
         */
        IncomingPushMessageSignal.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure_test.IncomingPushMessageSignal)
                return object;
            var message = new $root.textsecure_test.IncomingPushMessageSignal();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "CIPHERTEXT":
            case 1:
                message.type = 1;
                break;
            case "KEY_EXCHANGE":
            case 2:
                message.type = 2;
                break;
            case "PREKEY_BUNDLE":
            case 3:
                message.type = 3;
                break;
            case "PLAINTEXT":
            case 4:
                message.type = 4;
                break;
            case "RECEIPT":
            case 5:
                message.type = 5;
                break;
            case "PREKEY_BUNDLE_DEVICE_CONTROL":
            case 6:
                message.type = 6;
                break;
            case "DEVICE_CONTROL":
            case 7:
                message.type = 7;
                break;
            }
            if (object.source != null)
                message.source = String(object.source);
            if (object.sourceDevice != null)
                message.sourceDevice = object.sourceDevice >>> 0;
            if (object.relay != null)
                message.relay = String(object.relay);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length >= 0)
                    message.message = object.message;
            return message;
        };

        /**
         * Creates a plain object from an IncomingPushMessageSignal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {textsecure_test.IncomingPushMessageSignal} message IncomingPushMessageSignal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IncomingPushMessageSignal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.type != null && message.hasOwnProperty("type")) {
                object.type = options.enums === String ? $root.textsecure_test.IncomingPushMessageSignal.Type[message.type] === undefined ? message.type : $root.textsecure_test.IncomingPushMessageSignal.Type[message.type] : message.type;
                if (options.oneofs)
                    object._type = "type";
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                object.source = message.source;
                if (options.oneofs)
                    object._source = "source";
            }
            if (message.relay != null && message.hasOwnProperty("relay")) {
                object.relay = message.relay;
                if (options.oneofs)
                    object._relay = "relay";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (options.oneofs)
                    object._timestamp = "timestamp";
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
                if (options.oneofs)
                    object._message = "message";
            }
            if (message.sourceDevice != null && message.hasOwnProperty("sourceDevice")) {
                object.sourceDevice = message.sourceDevice;
                if (options.oneofs)
                    object._sourceDevice = "sourceDevice";
            }
            return object;
        };

        /**
         * Converts this IncomingPushMessageSignal to JSON.
         * @function toJSON
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IncomingPushMessageSignal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IncomingPushMessageSignal
         * @function getTypeUrl
         * @memberof textsecure_test.IncomingPushMessageSignal
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IncomingPushMessageSignal.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure_test.IncomingPushMessageSignal";
        };

        /**
         * Type enum.
         * @name textsecure_test.IncomingPushMessageSignal.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CIPHERTEXT=1 CIPHERTEXT value
         * @property {number} KEY_EXCHANGE=2 KEY_EXCHANGE value
         * @property {number} PREKEY_BUNDLE=3 PREKEY_BUNDLE value
         * @property {number} PLAINTEXT=4 PLAINTEXT value
         * @property {number} RECEIPT=5 RECEIPT value
         * @property {number} PREKEY_BUNDLE_DEVICE_CONTROL=6 PREKEY_BUNDLE_DEVICE_CONTROL value
         * @property {number} DEVICE_CONTROL=7 DEVICE_CONTROL value
         */
        IncomingPushMessageSignal.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CIPHERTEXT"] = 1;
            values[valuesById[2] = "KEY_EXCHANGE"] = 2;
            values[valuesById[3] = "PREKEY_BUNDLE"] = 3;
            values[valuesById[4] = "PLAINTEXT"] = 4;
            values[valuesById[5] = "RECEIPT"] = 5;
            values[valuesById[6] = "PREKEY_BUNDLE_DEVICE_CONTROL"] = 6;
            values[valuesById[7] = "DEVICE_CONTROL"] = 7;
            return values;
        })();

        return IncomingPushMessageSignal;
    })();

    textsecure_test.PushMessageContent = (function() {

        /**
         * Properties of a PushMessageContent.
         * @memberof textsecure_test
         * @interface IPushMessageContent
         * @property {string|null} [body] PushMessageContent body
         * @property {Array.<textsecure_test.PushMessageContent.IAttachmentPointer>|null} [attachments] PushMessageContent attachments
         * @property {textsecure_test.PushMessageContent.IGroupContext|null} [group] PushMessageContent group
         * @property {number|null} [flags] PushMessageContent flags
         */

        /**
         * Constructs a new PushMessageContent.
         * @memberof textsecure_test
         * @classdesc Represents a PushMessageContent.
         * @implements IPushMessageContent
         * @constructor
         * @param {textsecure_test.IPushMessageContent=} [properties] Properties to set
         */
        function PushMessageContent(properties) {
            this.attachments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushMessageContent body.
         * @member {string|null|undefined} body
         * @memberof textsecure_test.PushMessageContent
         * @instance
         */
        PushMessageContent.prototype.body = null;

        /**
         * PushMessageContent attachments.
         * @member {Array.<textsecure_test.PushMessageContent.IAttachmentPointer>} attachments
         * @memberof textsecure_test.PushMessageContent
         * @instance
         */
        PushMessageContent.prototype.attachments = $util.emptyArray;

        /**
         * PushMessageContent group.
         * @member {textsecure_test.PushMessageContent.IGroupContext|null|undefined} group
         * @memberof textsecure_test.PushMessageContent
         * @instance
         */
        PushMessageContent.prototype.group = null;

        /**
         * PushMessageContent flags.
         * @member {number|null|undefined} flags
         * @memberof textsecure_test.PushMessageContent
         * @instance
         */
        PushMessageContent.prototype.flags = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PushMessageContent.prototype, "_body", {
            get: $util.oneOfGetter($oneOfFields = ["body"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PushMessageContent.prototype, "_group", {
            get: $util.oneOfGetter($oneOfFields = ["group"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PushMessageContent.prototype, "_flags", {
            get: $util.oneOfGetter($oneOfFields = ["flags"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PushMessageContent instance using the specified properties.
         * @function create
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {textsecure_test.IPushMessageContent=} [properties] Properties to set
         * @returns {textsecure_test.PushMessageContent} PushMessageContent instance
         */
        PushMessageContent.create = function create(properties) {
            return new PushMessageContent(properties);
        };

        /**
         * Encodes the specified PushMessageContent message. Does not implicitly {@link textsecure_test.PushMessageContent.verify|verify} messages.
         * @function encode
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {textsecure_test.IPushMessageContent} message PushMessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushMessageContent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.body);
            if (message.attachments != null && message.attachments.length)
                for (var i = 0; i < message.attachments.length; ++i)
                    $root.textsecure_test.PushMessageContent.AttachmentPointer.encode(message.attachments[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                $root.textsecure_test.PushMessageContent.GroupContext.encode(message.group, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.flags);
            return writer;
        };

        /**
         * Encodes the specified PushMessageContent message, length delimited. Does not implicitly {@link textsecure_test.PushMessageContent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {textsecure_test.IPushMessageContent} message PushMessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushMessageContent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushMessageContent message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure_test.PushMessageContent} PushMessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushMessageContent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure_test.PushMessageContent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.body = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.attachments && message.attachments.length))
                            message.attachments = [];
                        message.attachments.push($root.textsecure_test.PushMessageContent.AttachmentPointer.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.group = $root.textsecure_test.PushMessageContent.GroupContext.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.flags = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushMessageContent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure_test.PushMessageContent} PushMessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushMessageContent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushMessageContent message.
         * @function verify
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushMessageContent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.body != null && message.hasOwnProperty("body")) {
                properties._body = 1;
                if (!$util.isString(message.body))
                    return "body: string expected";
            }
            if (message.attachments != null && message.hasOwnProperty("attachments")) {
                if (!Array.isArray(message.attachments))
                    return "attachments: array expected";
                for (var i = 0; i < message.attachments.length; ++i) {
                    var error = $root.textsecure_test.PushMessageContent.AttachmentPointer.verify(message.attachments[i]);
                    if (error)
                        return "attachments." + error;
                }
            }
            if (message.group != null && message.hasOwnProperty("group")) {
                properties._group = 1;
                {
                    var error = $root.textsecure_test.PushMessageContent.GroupContext.verify(message.group);
                    if (error)
                        return "group." + error;
                }
            }
            if (message.flags != null && message.hasOwnProperty("flags")) {
                properties._flags = 1;
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            }
            return null;
        };

        /**
         * Creates a PushMessageContent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure_test.PushMessageContent} PushMessageContent
         */
        PushMessageContent.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure_test.PushMessageContent)
                return object;
            var message = new $root.textsecure_test.PushMessageContent();
            if (object.body != null)
                message.body = String(object.body);
            if (object.attachments) {
                if (!Array.isArray(object.attachments))
                    throw TypeError(".textsecure_test.PushMessageContent.attachments: array expected");
                message.attachments = [];
                for (var i = 0; i < object.attachments.length; ++i) {
                    if (typeof object.attachments[i] !== "object")
                        throw TypeError(".textsecure_test.PushMessageContent.attachments: object expected");
                    message.attachments[i] = $root.textsecure_test.PushMessageContent.AttachmentPointer.fromObject(object.attachments[i]);
                }
            }
            if (object.group != null) {
                if (typeof object.group !== "object")
                    throw TypeError(".textsecure_test.PushMessageContent.group: object expected");
                message.group = $root.textsecure_test.PushMessageContent.GroupContext.fromObject(object.group);
            }
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PushMessageContent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {textsecure_test.PushMessageContent} message PushMessageContent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushMessageContent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.attachments = [];
            if (message.body != null && message.hasOwnProperty("body")) {
                object.body = message.body;
                if (options.oneofs)
                    object._body = "body";
            }
            if (message.attachments && message.attachments.length) {
                object.attachments = [];
                for (var j = 0; j < message.attachments.length; ++j)
                    object.attachments[j] = $root.textsecure_test.PushMessageContent.AttachmentPointer.toObject(message.attachments[j], options);
            }
            if (message.group != null && message.hasOwnProperty("group")) {
                object.group = $root.textsecure_test.PushMessageContent.GroupContext.toObject(message.group, options);
                if (options.oneofs)
                    object._group = "group";
            }
            if (message.flags != null && message.hasOwnProperty("flags")) {
                object.flags = message.flags;
                if (options.oneofs)
                    object._flags = "flags";
            }
            return object;
        };

        /**
         * Converts this PushMessageContent to JSON.
         * @function toJSON
         * @memberof textsecure_test.PushMessageContent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushMessageContent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushMessageContent
         * @function getTypeUrl
         * @memberof textsecure_test.PushMessageContent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushMessageContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure_test.PushMessageContent";
        };

        PushMessageContent.AttachmentPointer = (function() {

            /**
             * Properties of an AttachmentPointer.
             * @memberof textsecure_test.PushMessageContent
             * @interface IAttachmentPointer
             * @property {number|Long|null} [id] AttachmentPointer id
             * @property {string|null} [contentType] AttachmentPointer contentType
             * @property {Uint8Array|null} [key] AttachmentPointer key
             */

            /**
             * Constructs a new AttachmentPointer.
             * @memberof textsecure_test.PushMessageContent
             * @classdesc Represents an AttachmentPointer.
             * @implements IAttachmentPointer
             * @constructor
             * @param {textsecure_test.PushMessageContent.IAttachmentPointer=} [properties] Properties to set
             */
            function AttachmentPointer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AttachmentPointer id.
             * @member {number|Long|null|undefined} id
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @instance
             */
            AttachmentPointer.prototype.id = null;

            /**
             * AttachmentPointer contentType.
             * @member {string|null|undefined} contentType
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @instance
             */
            AttachmentPointer.prototype.contentType = null;

            /**
             * AttachmentPointer key.
             * @member {Uint8Array|null|undefined} key
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @instance
             */
            AttachmentPointer.prototype.key = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AttachmentPointer.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AttachmentPointer.prototype, "_contentType", {
                get: $util.oneOfGetter($oneOfFields = ["contentType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AttachmentPointer.prototype, "_key", {
                get: $util.oneOfGetter($oneOfFields = ["key"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AttachmentPointer instance using the specified properties.
             * @function create
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {textsecure_test.PushMessageContent.IAttachmentPointer=} [properties] Properties to set
             * @returns {textsecure_test.PushMessageContent.AttachmentPointer} AttachmentPointer instance
             */
            AttachmentPointer.create = function create(properties) {
                return new AttachmentPointer(properties);
            };

            /**
             * Encodes the specified AttachmentPointer message. Does not implicitly {@link textsecure_test.PushMessageContent.AttachmentPointer.verify|verify} messages.
             * @function encode
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {textsecure_test.PushMessageContent.IAttachmentPointer} message AttachmentPointer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttachmentPointer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.id);
                if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.contentType);
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified AttachmentPointer message, length delimited. Does not implicitly {@link textsecure_test.PushMessageContent.AttachmentPointer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {textsecure_test.PushMessageContent.IAttachmentPointer} message AttachmentPointer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttachmentPointer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AttachmentPointer message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure_test.PushMessageContent.AttachmentPointer} AttachmentPointer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttachmentPointer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure_test.PushMessageContent.AttachmentPointer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.fixed64();
                            break;
                        }
                    case 2: {
                            message.contentType = reader.string();
                            break;
                        }
                    case 3: {
                            message.key = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AttachmentPointer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure_test.PushMessageContent.AttachmentPointer} AttachmentPointer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttachmentPointer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AttachmentPointer message.
             * @function verify
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AttachmentPointer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.id != null && message.hasOwnProperty("id")) {
                    properties._id = 1;
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                }
                if (message.contentType != null && message.hasOwnProperty("contentType")) {
                    properties._contentType = 1;
                    if (!$util.isString(message.contentType))
                        return "contentType: string expected";
                }
                if (message.key != null && message.hasOwnProperty("key")) {
                    properties._key = 1;
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                }
                return null;
            };

            /**
             * Creates an AttachmentPointer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure_test.PushMessageContent.AttachmentPointer} AttachmentPointer
             */
            AttachmentPointer.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure_test.PushMessageContent.AttachmentPointer)
                    return object;
                var message = new $root.textsecure_test.PushMessageContent.AttachmentPointer();
                if (object.id != null)
                    if ($util.Long)
                        (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.contentType != null)
                    message.contentType = String(object.contentType);
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length >= 0)
                        message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from an AttachmentPointer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {textsecure_test.PushMessageContent.AttachmentPointer} message AttachmentPointer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AttachmentPointer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.id != null && message.hasOwnProperty("id")) {
                    if (typeof message.id === "number")
                        object.id = options.longs === String ? String(message.id) : message.id;
                    else
                        object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (options.oneofs)
                        object._id = "id";
                }
                if (message.contentType != null && message.hasOwnProperty("contentType")) {
                    object.contentType = message.contentType;
                    if (options.oneofs)
                        object._contentType = "contentType";
                }
                if (message.key != null && message.hasOwnProperty("key")) {
                    object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                    if (options.oneofs)
                        object._key = "key";
                }
                return object;
            };

            /**
             * Converts this AttachmentPointer to JSON.
             * @function toJSON
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AttachmentPointer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AttachmentPointer
             * @function getTypeUrl
             * @memberof textsecure_test.PushMessageContent.AttachmentPointer
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AttachmentPointer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/textsecure_test.PushMessageContent.AttachmentPointer";
            };

            return AttachmentPointer;
        })();

        PushMessageContent.GroupContext = (function() {

            /**
             * Properties of a GroupContext.
             * @memberof textsecure_test.PushMessageContent
             * @interface IGroupContext
             * @property {Uint8Array|null} [id] GroupContext id
             * @property {textsecure_test.PushMessageContent.GroupContext.Type|null} [type] GroupContext type
             * @property {string|null} [name] GroupContext name
             * @property {Array.<string>|null} [members] GroupContext members
             * @property {textsecure_test.PushMessageContent.IAttachmentPointer|null} [avatar] GroupContext avatar
             */

            /**
             * Constructs a new GroupContext.
             * @memberof textsecure_test.PushMessageContent
             * @classdesc Represents a GroupContext.
             * @implements IGroupContext
             * @constructor
             * @param {textsecure_test.PushMessageContent.IGroupContext=} [properties] Properties to set
             */
            function GroupContext(properties) {
                this.members = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GroupContext id.
             * @member {Uint8Array|null|undefined} id
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.id = null;

            /**
             * GroupContext type.
             * @member {textsecure_test.PushMessageContent.GroupContext.Type|null|undefined} type
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.type = null;

            /**
             * GroupContext name.
             * @member {string|null|undefined} name
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.name = null;

            /**
             * GroupContext members.
             * @member {Array.<string>} members
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.members = $util.emptyArray;

            /**
             * GroupContext avatar.
             * @member {textsecure_test.PushMessageContent.IAttachmentPointer|null|undefined} avatar
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @instance
             */
            GroupContext.prototype.avatar = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(GroupContext.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(GroupContext.prototype, "_type", {
                get: $util.oneOfGetter($oneOfFields = ["type"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(GroupContext.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(GroupContext.prototype, "_avatar", {
                get: $util.oneOfGetter($oneOfFields = ["avatar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new GroupContext instance using the specified properties.
             * @function create
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {textsecure_test.PushMessageContent.IGroupContext=} [properties] Properties to set
             * @returns {textsecure_test.PushMessageContent.GroupContext} GroupContext instance
             */
            GroupContext.create = function create(properties) {
                return new GroupContext(properties);
            };

            /**
             * Encodes the specified GroupContext message. Does not implicitly {@link textsecure_test.PushMessageContent.GroupContext.verify|verify} messages.
             * @function encode
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {textsecure_test.PushMessageContent.IGroupContext} message GroupContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.members != null && message.members.length)
                    for (var i = 0; i < message.members.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.members[i]);
                if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                    $root.textsecure_test.PushMessageContent.AttachmentPointer.encode(message.avatar, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GroupContext message, length delimited. Does not implicitly {@link textsecure_test.PushMessageContent.GroupContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {textsecure_test.PushMessageContent.IGroupContext} message GroupContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GroupContext message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure_test.PushMessageContent.GroupContext} GroupContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure_test.PushMessageContent.GroupContext();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.type = reader.int32();
                            break;
                        }
                    case 3: {
                            message.name = reader.string();
                            break;
                        }
                    case 4: {
                            if (!(message.members && message.members.length))
                                message.members = [];
                            message.members.push(reader.string());
                            break;
                        }
                    case 5: {
                            message.avatar = $root.textsecure_test.PushMessageContent.AttachmentPointer.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GroupContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure_test.PushMessageContent.GroupContext} GroupContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GroupContext message.
             * @function verify
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.id != null && message.hasOwnProperty("id")) {
                    properties._id = 1;
                    if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                        return "id: buffer expected";
                }
                if (message.type != null && message.hasOwnProperty("type")) {
                    properties._type = 1;
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                if (message.name != null && message.hasOwnProperty("name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                if (message.members != null && message.hasOwnProperty("members")) {
                    if (!Array.isArray(message.members))
                        return "members: array expected";
                    for (var i = 0; i < message.members.length; ++i)
                        if (!$util.isString(message.members[i]))
                            return "members: string[] expected";
                }
                if (message.avatar != null && message.hasOwnProperty("avatar")) {
                    properties._avatar = 1;
                    {
                        var error = $root.textsecure_test.PushMessageContent.AttachmentPointer.verify(message.avatar);
                        if (error)
                            return "avatar." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GroupContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure_test.PushMessageContent.GroupContext} GroupContext
             */
            GroupContext.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure_test.PushMessageContent.GroupContext)
                    return object;
                var message = new $root.textsecure_test.PushMessageContent.GroupContext();
                if (object.id != null)
                    if (typeof object.id === "string")
                        $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                    else if (object.id.length >= 0)
                        message.id = object.id;
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "UPDATE":
                case 1:
                    message.type = 1;
                    break;
                case "DELIVER":
                case 2:
                    message.type = 2;
                    break;
                case "QUIT":
                case 3:
                    message.type = 3;
                    break;
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.members) {
                    if (!Array.isArray(object.members))
                        throw TypeError(".textsecure_test.PushMessageContent.GroupContext.members: array expected");
                    message.members = [];
                    for (var i = 0; i < object.members.length; ++i)
                        message.members[i] = String(object.members[i]);
                }
                if (object.avatar != null) {
                    if (typeof object.avatar !== "object")
                        throw TypeError(".textsecure_test.PushMessageContent.GroupContext.avatar: object expected");
                    message.avatar = $root.textsecure_test.PushMessageContent.AttachmentPointer.fromObject(object.avatar);
                }
                return message;
            };

            /**
             * Creates a plain object from a GroupContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {textsecure_test.PushMessageContent.GroupContext} message GroupContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.members = [];
                if (message.id != null && message.hasOwnProperty("id")) {
                    object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
                    if (options.oneofs)
                        object._id = "id";
                }
                if (message.type != null && message.hasOwnProperty("type")) {
                    object.type = options.enums === String ? $root.textsecure_test.PushMessageContent.GroupContext.Type[message.type] === undefined ? message.type : $root.textsecure_test.PushMessageContent.GroupContext.Type[message.type] : message.type;
                    if (options.oneofs)
                        object._type = "type";
                }
                if (message.name != null && message.hasOwnProperty("name")) {
                    object.name = message.name;
                    if (options.oneofs)
                        object._name = "name";
                }
                if (message.members && message.members.length) {
                    object.members = [];
                    for (var j = 0; j < message.members.length; ++j)
                        object.members[j] = message.members[j];
                }
                if (message.avatar != null && message.hasOwnProperty("avatar")) {
                    object.avatar = $root.textsecure_test.PushMessageContent.AttachmentPointer.toObject(message.avatar, options);
                    if (options.oneofs)
                        object._avatar = "avatar";
                }
                return object;
            };

            /**
             * Converts this GroupContext to JSON.
             * @function toJSON
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GroupContext
             * @function getTypeUrl
             * @memberof textsecure_test.PushMessageContent.GroupContext
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GroupContext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/textsecure_test.PushMessageContent.GroupContext";
            };

            /**
             * Type enum.
             * @name textsecure_test.PushMessageContent.GroupContext.Type
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} UPDATE=1 UPDATE value
             * @property {number} DELIVER=2 DELIVER value
             * @property {number} QUIT=3 QUIT value
             */
            GroupContext.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "UPDATE"] = 1;
                values[valuesById[2] = "DELIVER"] = 2;
                values[valuesById[3] = "QUIT"] = 3;
                return values;
            })();

            return GroupContext;
        })();

        /**
         * Flags enum.
         * @name textsecure_test.PushMessageContent.Flags
         * @enum {number}
         * @property {number} END_SESSION=1 END_SESSION value
         */
        PushMessageContent.Flags = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "END_SESSION"] = 1;
            return values;
        })();

        return PushMessageContent;
    })();

    return textsecure_test;
})();

module.exports = $root;
