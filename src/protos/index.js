/*eslint-disable*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.textsecure = (function() {

    /**
     * Namespace textsecure.
     * @exports textsecure
     * @namespace
     */
    var textsecure = {};

    textsecure.SignalMessage = (function() {

        /**
         * Properties of a SignalMessage.
         * @memberof textsecure
         * @interface ISignalMessage
         * @property {Uint8Array|null} [ratchetKey] SignalMessage ratchetKey
         * @property {number|null} [counter] SignalMessage counter
         * @property {number|null} [previousCounter] SignalMessage previousCounter
         * @property {Uint8Array|null} [ciphertext] SignalMessage ciphertext
         */

        /**
         * Constructs a new SignalMessage.
         * @memberof textsecure
         * @classdesc Represents a SignalMessage.
         * @implements ISignalMessage
         * @constructor
         * @param {textsecure.ISignalMessage=} [properties] Properties to set
         */
        function SignalMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignalMessage ratchetKey.
         * @member {Uint8Array|null|undefined} ratchetKey
         * @memberof textsecure.SignalMessage
         * @instance
         */
        SignalMessage.prototype.ratchetKey = null;

        /**
         * SignalMessage counter.
         * @member {number|null|undefined} counter
         * @memberof textsecure.SignalMessage
         * @instance
         */
        SignalMessage.prototype.counter = null;

        /**
         * SignalMessage previousCounter.
         * @member {number|null|undefined} previousCounter
         * @memberof textsecure.SignalMessage
         * @instance
         */
        SignalMessage.prototype.previousCounter = null;

        /**
         * SignalMessage ciphertext.
         * @member {Uint8Array|null|undefined} ciphertext
         * @memberof textsecure.SignalMessage
         * @instance
         */
        SignalMessage.prototype.ciphertext = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_ratchetKey", {
            get: $util.oneOfGetter($oneOfFields = ["ratchetKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_counter", {
            get: $util.oneOfGetter($oneOfFields = ["counter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_previousCounter", {
            get: $util.oneOfGetter($oneOfFields = ["previousCounter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_ciphertext", {
            get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SignalMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.SignalMessage
         * @static
         * @param {textsecure.ISignalMessage=} [properties] Properties to set
         * @returns {textsecure.SignalMessage} SignalMessage instance
         */
        SignalMessage.create = function create(properties) {
            return new SignalMessage(properties);
        };

        /**
         * Encodes the specified SignalMessage message. Does not implicitly {@link textsecure.SignalMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SignalMessage
         * @static
         * @param {textsecure.ISignalMessage} message SignalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignalMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ratchetKey != null && Object.hasOwnProperty.call(message, "ratchetKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ratchetKey);
            if (message.counter != null && Object.hasOwnProperty.call(message, "counter"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.counter);
            if (message.previousCounter != null && Object.hasOwnProperty.call(message, "previousCounter"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.previousCounter);
            if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified SignalMessage message, length delimited. Does not implicitly {@link textsecure.SignalMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SignalMessage
         * @static
         * @param {textsecure.ISignalMessage} message SignalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignalMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignalMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SignalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SignalMessage} SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignalMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SignalMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ratchetKey = reader.bytes();
                        break;
                    }
                case 2: {
                        message.counter = reader.uint32();
                        break;
                    }
                case 3: {
                        message.previousCounter = reader.uint32();
                        break;
                    }
                case 4: {
                        message.ciphertext = reader.bytes();
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
         * Decodes a SignalMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SignalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SignalMessage} SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignalMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignalMessage message.
         * @function verify
         * @memberof textsecure.SignalMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignalMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.ratchetKey != null && message.hasOwnProperty("ratchetKey")) {
                properties._ratchetKey = 1;
                if (!(message.ratchetKey && typeof message.ratchetKey.length === "number" || $util.isString(message.ratchetKey)))
                    return "ratchetKey: buffer expected";
            }
            if (message.counter != null && message.hasOwnProperty("counter")) {
                properties._counter = 1;
                if (!$util.isInteger(message.counter))
                    return "counter: integer expected";
            }
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter")) {
                properties._previousCounter = 1;
                if (!$util.isInteger(message.previousCounter))
                    return "previousCounter: integer expected";
            }
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
                properties._ciphertext = 1;
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SignalMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SignalMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SignalMessage} SignalMessage
         */
        SignalMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SignalMessage)
                return object;
            var message = new $root.textsecure.SignalMessage();
            if (object.ratchetKey != null)
                if (typeof object.ratchetKey === "string")
                    $util.base64.decode(object.ratchetKey, message.ratchetKey = $util.newBuffer($util.base64.length(object.ratchetKey)), 0);
                else if (object.ratchetKey.length >= 0)
                    message.ratchetKey = object.ratchetKey;
            if (object.counter != null)
                message.counter = object.counter >>> 0;
            if (object.previousCounter != null)
                message.previousCounter = object.previousCounter >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length >= 0)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a SignalMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SignalMessage
         * @static
         * @param {textsecure.SignalMessage} message SignalMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignalMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.ratchetKey != null && message.hasOwnProperty("ratchetKey")) {
                object.ratchetKey = options.bytes === String ? $util.base64.encode(message.ratchetKey, 0, message.ratchetKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ratchetKey) : message.ratchetKey;
                if (options.oneofs)
                    object._ratchetKey = "ratchetKey";
            }
            if (message.counter != null && message.hasOwnProperty("counter")) {
                object.counter = message.counter;
                if (options.oneofs)
                    object._counter = "counter";
            }
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter")) {
                object.previousCounter = message.previousCounter;
                if (options.oneofs)
                    object._previousCounter = "previousCounter";
            }
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
                object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
                if (options.oneofs)
                    object._ciphertext = "ciphertext";
            }
            return object;
        };

        /**
         * Converts this SignalMessage to JSON.
         * @function toJSON
         * @memberof textsecure.SignalMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignalMessage
         * @function getTypeUrl
         * @memberof textsecure.SignalMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignalMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.SignalMessage";
        };

        return SignalMessage;
    })();

    textsecure.PreKeySignalMessage = (function() {

        /**
         * Properties of a PreKeySignalMessage.
         * @memberof textsecure
         * @interface IPreKeySignalMessage
         * @property {number|null} [registrationId] PreKeySignalMessage registrationId
         * @property {number|null} [preKeyId] PreKeySignalMessage preKeyId
         * @property {number|null} [signedPreKeyId] PreKeySignalMessage signedPreKeyId
         * @property {Uint8Array|null} [baseKey] PreKeySignalMessage baseKey
         * @property {Uint8Array|null} [identityKey] PreKeySignalMessage identityKey
         * @property {Uint8Array|null} [message] PreKeySignalMessage message
         */

        /**
         * Constructs a new PreKeySignalMessage.
         * @memberof textsecure
         * @classdesc Represents a PreKeySignalMessage.
         * @implements IPreKeySignalMessage
         * @constructor
         * @param {textsecure.IPreKeySignalMessage=} [properties] Properties to set
         */
        function PreKeySignalMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreKeySignalMessage registrationId.
         * @member {number|null|undefined} registrationId
         * @memberof textsecure.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.registrationId = null;

        /**
         * PreKeySignalMessage preKeyId.
         * @member {number|null|undefined} preKeyId
         * @memberof textsecure.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.preKeyId = null;

        /**
         * PreKeySignalMessage signedPreKeyId.
         * @member {number|null|undefined} signedPreKeyId
         * @memberof textsecure.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.signedPreKeyId = null;

        /**
         * PreKeySignalMessage baseKey.
         * @member {Uint8Array|null|undefined} baseKey
         * @memberof textsecure.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.baseKey = null;

        /**
         * PreKeySignalMessage identityKey.
         * @member {Uint8Array|null|undefined} identityKey
         * @memberof textsecure.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.identityKey = null;

        /**
         * PreKeySignalMessage message.
         * @member {Uint8Array|null|undefined} message
         * @memberof textsecure.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.message = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_registrationId", {
            get: $util.oneOfGetter($oneOfFields = ["registrationId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_preKeyId", {
            get: $util.oneOfGetter($oneOfFields = ["preKeyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_signedPreKeyId", {
            get: $util.oneOfGetter($oneOfFields = ["signedPreKeyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_baseKey", {
            get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_identityKey", {
            get: $util.oneOfGetter($oneOfFields = ["identityKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_message", {
            get: $util.oneOfGetter($oneOfFields = ["message"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PreKeySignalMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {textsecure.IPreKeySignalMessage=} [properties] Properties to set
         * @returns {textsecure.PreKeySignalMessage} PreKeySignalMessage instance
         */
        PreKeySignalMessage.create = function create(properties) {
            return new PreKeySignalMessage(properties);
        };

        /**
         * Encodes the specified PreKeySignalMessage message. Does not implicitly {@link textsecure.PreKeySignalMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {textsecure.IPreKeySignalMessage} message PreKeySignalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeySignalMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preKeyId != null && Object.hasOwnProperty.call(message, "preKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.preKeyId);
            if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.identityKey);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.message);
            if (message.registrationId != null && Object.hasOwnProperty.call(message, "registrationId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.registrationId);
            if (message.signedPreKeyId != null && Object.hasOwnProperty.call(message, "signedPreKeyId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.signedPreKeyId);
            return writer;
        };

        /**
         * Encodes the specified PreKeySignalMessage message, length delimited. Does not implicitly {@link textsecure.PreKeySignalMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {textsecure.IPreKeySignalMessage} message PreKeySignalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeySignalMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreKeySignalMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.PreKeySignalMessage} PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeySignalMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.PreKeySignalMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 5: {
                        message.registrationId = reader.uint32();
                        break;
                    }
                case 1: {
                        message.preKeyId = reader.uint32();
                        break;
                    }
                case 6: {
                        message.signedPreKeyId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.baseKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.identityKey = reader.bytes();
                        break;
                    }
                case 4: {
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
         * Decodes a PreKeySignalMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.PreKeySignalMessage} PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeySignalMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreKeySignalMessage message.
         * @function verify
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreKeySignalMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.registrationId != null && message.hasOwnProperty("registrationId")) {
                properties._registrationId = 1;
                if (!$util.isInteger(message.registrationId))
                    return "registrationId: integer expected";
            }
            if (message.preKeyId != null && message.hasOwnProperty("preKeyId")) {
                properties._preKeyId = 1;
                if (!$util.isInteger(message.preKeyId))
                    return "preKeyId: integer expected";
            }
            if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId")) {
                properties._signedPreKeyId = 1;
                if (!$util.isInteger(message.signedPreKeyId))
                    return "signedPreKeyId: integer expected";
            }
            if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                properties._baseKey = 1;
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            }
            if (message.identityKey != null && message.hasOwnProperty("identityKey")) {
                properties._identityKey = 1;
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                properties._message = 1;
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            }
            return null;
        };

        /**
         * Creates a PreKeySignalMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.PreKeySignalMessage} PreKeySignalMessage
         */
        PreKeySignalMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.PreKeySignalMessage)
                return object;
            var message = new $root.textsecure.PreKeySignalMessage();
            if (object.registrationId != null)
                message.registrationId = object.registrationId >>> 0;
            if (object.preKeyId != null)
                message.preKeyId = object.preKeyId >>> 0;
            if (object.signedPreKeyId != null)
                message.signedPreKeyId = object.signedPreKeyId >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length >= 0)
                    message.baseKey = object.baseKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length >= 0)
                    message.identityKey = object.identityKey;
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length >= 0)
                    message.message = object.message;
            return message;
        };

        /**
         * Creates a plain object from a PreKeySignalMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {textsecure.PreKeySignalMessage} message PreKeySignalMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreKeySignalMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.preKeyId != null && message.hasOwnProperty("preKeyId")) {
                object.preKeyId = message.preKeyId;
                if (options.oneofs)
                    object._preKeyId = "preKeyId";
            }
            if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
                if (options.oneofs)
                    object._baseKey = "baseKey";
            }
            if (message.identityKey != null && message.hasOwnProperty("identityKey")) {
                object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
                if (options.oneofs)
                    object._identityKey = "identityKey";
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
                if (options.oneofs)
                    object._message = "message";
            }
            if (message.registrationId != null && message.hasOwnProperty("registrationId")) {
                object.registrationId = message.registrationId;
                if (options.oneofs)
                    object._registrationId = "registrationId";
            }
            if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId")) {
                object.signedPreKeyId = message.signedPreKeyId;
                if (options.oneofs)
                    object._signedPreKeyId = "signedPreKeyId";
            }
            return object;
        };

        /**
         * Converts this PreKeySignalMessage to JSON.
         * @function toJSON
         * @memberof textsecure.PreKeySignalMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreKeySignalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PreKeySignalMessage
         * @function getTypeUrl
         * @memberof textsecure.PreKeySignalMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PreKeySignalMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.PreKeySignalMessage";
        };

        return PreKeySignalMessage;
    })();

    textsecure.KeyExchangeMessage = (function() {

        /**
         * Properties of a KeyExchangeMessage.
         * @memberof textsecure
         * @interface IKeyExchangeMessage
         * @property {number|null} [id] KeyExchangeMessage id
         * @property {Uint8Array|null} [baseKey] KeyExchangeMessage baseKey
         * @property {Uint8Array|null} [ratchetKey] KeyExchangeMessage ratchetKey
         * @property {Uint8Array|null} [identityKey] KeyExchangeMessage identityKey
         * @property {Uint8Array|null} [baseKeySignature] KeyExchangeMessage baseKeySignature
         */

        /**
         * Constructs a new KeyExchangeMessage.
         * @memberof textsecure
         * @classdesc Represents a KeyExchangeMessage.
         * @implements IKeyExchangeMessage
         * @constructor
         * @param {textsecure.IKeyExchangeMessage=} [properties] Properties to set
         */
        function KeyExchangeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyExchangeMessage id.
         * @member {number|null|undefined} id
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.id = null;

        /**
         * KeyExchangeMessage baseKey.
         * @member {Uint8Array|null|undefined} baseKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKey = null;

        /**
         * KeyExchangeMessage ratchetKey.
         * @member {Uint8Array|null|undefined} ratchetKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.ratchetKey = null;

        /**
         * KeyExchangeMessage identityKey.
         * @member {Uint8Array|null|undefined} identityKey
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.identityKey = null;

        /**
         * KeyExchangeMessage baseKeySignature.
         * @member {Uint8Array|null|undefined} baseKeySignature
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKeySignature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_baseKey", {
            get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_ratchetKey", {
            get: $util.oneOfGetter($oneOfFields = ["ratchetKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_identityKey", {
            get: $util.oneOfGetter($oneOfFields = ["identityKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_baseKeySignature", {
            get: $util.oneOfGetter($oneOfFields = ["baseKeySignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage=} [properties] Properties to set
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage instance
         */
        KeyExchangeMessage.create = function create(properties) {
            return new KeyExchangeMessage(properties);
        };

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.ratchetKey != null && Object.hasOwnProperty.call(message, "ratchetKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ratchetKey);
            if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.identityKey);
            if (message.baseKeySignature != null && Object.hasOwnProperty.call(message, "baseKeySignature"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.baseKeySignature);
            return writer;
        };

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link textsecure.KeyExchangeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.IKeyExchangeMessage} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.KeyExchangeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.baseKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.ratchetKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.identityKey = reader.bytes();
                        break;
                    }
                case 5: {
                        message.baseKeySignature = reader.bytes();
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
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyExchangeMessage message.
         * @function verify
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyExchangeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                properties._baseKey = 1;
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            }
            if (message.ratchetKey != null && message.hasOwnProperty("ratchetKey")) {
                properties._ratchetKey = 1;
                if (!(message.ratchetKey && typeof message.ratchetKey.length === "number" || $util.isString(message.ratchetKey)))
                    return "ratchetKey: buffer expected";
            }
            if (message.identityKey != null && message.hasOwnProperty("identityKey")) {
                properties._identityKey = 1;
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            }
            if (message.baseKeySignature != null && message.hasOwnProperty("baseKeySignature")) {
                properties._baseKeySignature = 1;
                if (!(message.baseKeySignature && typeof message.baseKeySignature.length === "number" || $util.isString(message.baseKeySignature)))
                    return "baseKeySignature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.KeyExchangeMessage} KeyExchangeMessage
         */
        KeyExchangeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.KeyExchangeMessage)
                return object;
            var message = new $root.textsecure.KeyExchangeMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length >= 0)
                    message.baseKey = object.baseKey;
            if (object.ratchetKey != null)
                if (typeof object.ratchetKey === "string")
                    $util.base64.decode(object.ratchetKey, message.ratchetKey = $util.newBuffer($util.base64.length(object.ratchetKey)), 0);
                else if (object.ratchetKey.length >= 0)
                    message.ratchetKey = object.ratchetKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length >= 0)
                    message.identityKey = object.identityKey;
            if (object.baseKeySignature != null)
                if (typeof object.baseKeySignature === "string")
                    $util.base64.decode(object.baseKeySignature, message.baseKeySignature = $util.newBuffer($util.base64.length(object.baseKeySignature)), 0);
                else if (object.baseKeySignature.length >= 0)
                    message.baseKeySignature = object.baseKeySignature;
            return message;
        };

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {textsecure.KeyExchangeMessage} message KeyExchangeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyExchangeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
                if (options.oneofs)
                    object._baseKey = "baseKey";
            }
            if (message.ratchetKey != null && message.hasOwnProperty("ratchetKey")) {
                object.ratchetKey = options.bytes === String ? $util.base64.encode(message.ratchetKey, 0, message.ratchetKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ratchetKey) : message.ratchetKey;
                if (options.oneofs)
                    object._ratchetKey = "ratchetKey";
            }
            if (message.identityKey != null && message.hasOwnProperty("identityKey")) {
                object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
                if (options.oneofs)
                    object._identityKey = "identityKey";
            }
            if (message.baseKeySignature != null && message.hasOwnProperty("baseKeySignature")) {
                object.baseKeySignature = options.bytes === String ? $util.base64.encode(message.baseKeySignature, 0, message.baseKeySignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKeySignature) : message.baseKeySignature;
                if (options.oneofs)
                    object._baseKeySignature = "baseKeySignature";
            }
            return object;
        };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @function toJSON
         * @memberof textsecure.KeyExchangeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyExchangeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KeyExchangeMessage
         * @function getTypeUrl
         * @memberof textsecure.KeyExchangeMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KeyExchangeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.KeyExchangeMessage";
        };

        return KeyExchangeMessage;
    })();

    textsecure.SenderKeyMessage = (function() {

        /**
         * Properties of a SenderKeyMessage.
         * @memberof textsecure
         * @interface ISenderKeyMessage
         * @property {number|null} [id] SenderKeyMessage id
         * @property {number|null} [iteration] SenderKeyMessage iteration
         * @property {Uint8Array|null} [ciphertext] SenderKeyMessage ciphertext
         */

        /**
         * Constructs a new SenderKeyMessage.
         * @memberof textsecure
         * @classdesc Represents a SenderKeyMessage.
         * @implements ISenderKeyMessage
         * @constructor
         * @param {textsecure.ISenderKeyMessage=} [properties] Properties to set
         */
        function SenderKeyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyMessage id.
         * @member {number|null|undefined} id
         * @memberof textsecure.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.id = null;

        /**
         * SenderKeyMessage iteration.
         * @member {number|null|undefined} iteration
         * @memberof textsecure.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.iteration = null;

        /**
         * SenderKeyMessage ciphertext.
         * @member {Uint8Array|null|undefined} ciphertext
         * @memberof textsecure.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.ciphertext = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_iteration", {
            get: $util.oneOfGetter($oneOfFields = ["iteration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_ciphertext", {
            get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SenderKeyMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {textsecure.ISenderKeyMessage=} [properties] Properties to set
         * @returns {textsecure.SenderKeyMessage} SenderKeyMessage instance
         */
        SenderKeyMessage.create = function create(properties) {
            return new SenderKeyMessage(properties);
        };

        /**
         * Encodes the specified SenderKeyMessage message. Does not implicitly {@link textsecure.SenderKeyMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {textsecure.ISenderKeyMessage} message SenderKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iteration);
            if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link textsecure.SenderKeyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {textsecure.ISenderKeyMessage} message SenderKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SenderKeyMessage} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.iteration = reader.uint32();
                        break;
                    }
                case 3: {
                        message.ciphertext = reader.bytes();
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
         * Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SenderKeyMessage} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyMessage message.
         * @function verify
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.iteration != null && message.hasOwnProperty("iteration")) {
                properties._iteration = 1;
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            }
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
                properties._ciphertext = 1;
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SenderKeyMessage} SenderKeyMessage
         */
        SenderKeyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SenderKeyMessage)
                return object;
            var message = new $root.textsecure.SenderKeyMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length >= 0)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {textsecure.SenderKeyMessage} message SenderKeyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.iteration != null && message.hasOwnProperty("iteration")) {
                object.iteration = message.iteration;
                if (options.oneofs)
                    object._iteration = "iteration";
            }
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
                object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
                if (options.oneofs)
                    object._ciphertext = "ciphertext";
            }
            return object;
        };

        /**
         * Converts this SenderKeyMessage to JSON.
         * @function toJSON
         * @memberof textsecure.SenderKeyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SenderKeyMessage
         * @function getTypeUrl
         * @memberof textsecure.SenderKeyMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SenderKeyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.SenderKeyMessage";
        };

        return SenderKeyMessage;
    })();

    textsecure.SenderKeyDistributionMessage = (function() {

        /**
         * Properties of a SenderKeyDistributionMessage.
         * @memberof textsecure
         * @interface ISenderKeyDistributionMessage
         * @property {number|null} [id] SenderKeyDistributionMessage id
         * @property {number|null} [iteration] SenderKeyDistributionMessage iteration
         * @property {Uint8Array|null} [chainKey] SenderKeyDistributionMessage chainKey
         * @property {Uint8Array|null} [signingKey] SenderKeyDistributionMessage signingKey
         */

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @memberof textsecure
         * @classdesc Represents a SenderKeyDistributionMessage.
         * @implements ISenderKeyDistributionMessage
         * @constructor
         * @param {textsecure.ISenderKeyDistributionMessage=} [properties] Properties to set
         */
        function SenderKeyDistributionMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyDistributionMessage id.
         * @member {number|null|undefined} id
         * @memberof textsecure.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.id = null;

        /**
         * SenderKeyDistributionMessage iteration.
         * @member {number|null|undefined} iteration
         * @memberof textsecure.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.iteration = null;

        /**
         * SenderKeyDistributionMessage chainKey.
         * @member {Uint8Array|null|undefined} chainKey
         * @memberof textsecure.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.chainKey = null;

        /**
         * SenderKeyDistributionMessage signingKey.
         * @member {Uint8Array|null|undefined} signingKey
         * @memberof textsecure.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.signingKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_iteration", {
            get: $util.oneOfGetter($oneOfFields = ["iteration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_chainKey", {
            get: $util.oneOfGetter($oneOfFields = ["chainKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_signingKey", {
            get: $util.oneOfGetter($oneOfFields = ["signingKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {textsecure.ISenderKeyDistributionMessage=} [properties] Properties to set
         * @returns {textsecure.SenderKeyDistributionMessage} SenderKeyDistributionMessage instance
         */
        SenderKeyDistributionMessage.create = function create(properties) {
            return new SenderKeyDistributionMessage(properties);
        };

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link textsecure.SenderKeyDistributionMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {textsecure.ISenderKeyDistributionMessage} message SenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyDistributionMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iteration);
            if (message.chainKey != null && Object.hasOwnProperty.call(message, "chainKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.chainKey);
            if (message.signingKey != null && Object.hasOwnProperty.call(message, "signingKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signingKey);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link textsecure.SenderKeyDistributionMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {textsecure.ISenderKeyDistributionMessage} message SenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyDistributionMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyDistributionMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyDistributionMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.iteration = reader.uint32();
                        break;
                    }
                case 3: {
                        message.chainKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.signingKey = reader.bytes();
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
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyDistributionMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @function verify
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyDistributionMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.iteration != null && message.hasOwnProperty("iteration")) {
                properties._iteration = 1;
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            }
            if (message.chainKey != null && message.hasOwnProperty("chainKey")) {
                properties._chainKey = 1;
                if (!(message.chainKey && typeof message.chainKey.length === "number" || $util.isString(message.chainKey)))
                    return "chainKey: buffer expected";
            }
            if (message.signingKey != null && message.hasOwnProperty("signingKey")) {
                properties._signingKey = 1;
                if (!(message.signingKey && typeof message.signingKey.length === "number" || $util.isString(message.signingKey)))
                    return "signingKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         */
        SenderKeyDistributionMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SenderKeyDistributionMessage)
                return object;
            var message = new $root.textsecure.SenderKeyDistributionMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.chainKey != null)
                if (typeof object.chainKey === "string")
                    $util.base64.decode(object.chainKey, message.chainKey = $util.newBuffer($util.base64.length(object.chainKey)), 0);
                else if (object.chainKey.length >= 0)
                    message.chainKey = object.chainKey;
            if (object.signingKey != null)
                if (typeof object.signingKey === "string")
                    $util.base64.decode(object.signingKey, message.signingKey = $util.newBuffer($util.base64.length(object.signingKey)), 0);
                else if (object.signingKey.length >= 0)
                    message.signingKey = object.signingKey;
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {textsecure.SenderKeyDistributionMessage} message SenderKeyDistributionMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyDistributionMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.iteration != null && message.hasOwnProperty("iteration")) {
                object.iteration = message.iteration;
                if (options.oneofs)
                    object._iteration = "iteration";
            }
            if (message.chainKey != null && message.hasOwnProperty("chainKey")) {
                object.chainKey = options.bytes === String ? $util.base64.encode(message.chainKey, 0, message.chainKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.chainKey) : message.chainKey;
                if (options.oneofs)
                    object._chainKey = "chainKey";
            }
            if (message.signingKey != null && message.hasOwnProperty("signingKey")) {
                object.signingKey = options.bytes === String ? $util.base64.encode(message.signingKey, 0, message.signingKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.signingKey) : message.signingKey;
                if (options.oneofs)
                    object._signingKey = "signingKey";
            }
            return object;
        };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @function toJSON
         * @memberof textsecure.SenderKeyDistributionMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyDistributionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SenderKeyDistributionMessage
         * @function getTypeUrl
         * @memberof textsecure.SenderKeyDistributionMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SenderKeyDistributionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.SenderKeyDistributionMessage";
        };

        return SenderKeyDistributionMessage;
    })();

    textsecure.DeviceConsistencyCodeMessage = (function() {

        /**
         * Properties of a DeviceConsistencyCodeMessage.
         * @memberof textsecure
         * @interface IDeviceConsistencyCodeMessage
         * @property {number|null} [generation] DeviceConsistencyCodeMessage generation
         * @property {Uint8Array|null} [signature] DeviceConsistencyCodeMessage signature
         */

        /**
         * Constructs a new DeviceConsistencyCodeMessage.
         * @memberof textsecure
         * @classdesc Represents a DeviceConsistencyCodeMessage.
         * @implements IDeviceConsistencyCodeMessage
         * @constructor
         * @param {textsecure.IDeviceConsistencyCodeMessage=} [properties] Properties to set
         */
        function DeviceConsistencyCodeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceConsistencyCodeMessage generation.
         * @member {number|null|undefined} generation
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @instance
         */
        DeviceConsistencyCodeMessage.prototype.generation = null;

        /**
         * DeviceConsistencyCodeMessage signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @instance
         */
        DeviceConsistencyCodeMessage.prototype.signature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceConsistencyCodeMessage.prototype, "_generation", {
            get: $util.oneOfGetter($oneOfFields = ["generation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceConsistencyCodeMessage.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DeviceConsistencyCodeMessage instance using the specified properties.
         * @function create
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {textsecure.IDeviceConsistencyCodeMessage=} [properties] Properties to set
         * @returns {textsecure.DeviceConsistencyCodeMessage} DeviceConsistencyCodeMessage instance
         */
        DeviceConsistencyCodeMessage.create = function create(properties) {
            return new DeviceConsistencyCodeMessage(properties);
        };

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message. Does not implicitly {@link textsecure.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @function encode
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {textsecure.IDeviceConsistencyCodeMessage} message DeviceConsistencyCodeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConsistencyCodeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.generation != null && Object.hasOwnProperty.call(message, "generation"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.generation);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message, length delimited. Does not implicitly {@link textsecure.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {textsecure.IDeviceConsistencyCodeMessage} message DeviceConsistencyCodeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConsistencyCodeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.DeviceConsistencyCodeMessage} DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConsistencyCodeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.DeviceConsistencyCodeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.generation = reader.uint32();
                        break;
                    }
                case 2: {
                        message.signature = reader.bytes();
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
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.DeviceConsistencyCodeMessage} DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConsistencyCodeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceConsistencyCodeMessage message.
         * @function verify
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceConsistencyCodeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.generation != null && message.hasOwnProperty("generation")) {
                properties._generation = 1;
                if (!$util.isInteger(message.generation))
                    return "generation: integer expected";
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                properties._signature = 1;
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a DeviceConsistencyCodeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.DeviceConsistencyCodeMessage} DeviceConsistencyCodeMessage
         */
        DeviceConsistencyCodeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.DeviceConsistencyCodeMessage)
                return object;
            var message = new $root.textsecure.DeviceConsistencyCodeMessage();
            if (object.generation != null)
                message.generation = object.generation >>> 0;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a DeviceConsistencyCodeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {textsecure.DeviceConsistencyCodeMessage} message DeviceConsistencyCodeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceConsistencyCodeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.generation != null && message.hasOwnProperty("generation")) {
                object.generation = message.generation;
                if (options.oneofs)
                    object._generation = "generation";
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                if (options.oneofs)
                    object._signature = "signature";
            }
            return object;
        };

        /**
         * Converts this DeviceConsistencyCodeMessage to JSON.
         * @function toJSON
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceConsistencyCodeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceConsistencyCodeMessage
         * @function getTypeUrl
         * @memberof textsecure.DeviceConsistencyCodeMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceConsistencyCodeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.DeviceConsistencyCodeMessage";
        };

        return DeviceConsistencyCodeMessage;
    })();

    textsecure.SessionStructure = (function() {

        /**
         * Properties of a SessionStructure.
         * @memberof textsecure
         * @interface ISessionStructure
         * @property {number|null} [sessionVersion] SessionStructure sessionVersion
         * @property {Uint8Array|null} [localIdentityPublic] SessionStructure localIdentityPublic
         * @property {Uint8Array|null} [remoteIdentityPublic] SessionStructure remoteIdentityPublic
         * @property {Uint8Array|null} [rootKey] SessionStructure rootKey
         * @property {number|null} [previousCounter] SessionStructure previousCounter
         * @property {textsecure.SessionStructure.IChain|null} [senderChain] SessionStructure senderChain
         * @property {Array.<textsecure.SessionStructure.IChain>|null} [receiverChains] SessionStructure receiverChains
         * @property {textsecure.SessionStructure.IPendingKeyExchange|null} [pendingKeyExchange] SessionStructure pendingKeyExchange
         * @property {textsecure.SessionStructure.IPendingPreKey|null} [pendingPreKey] SessionStructure pendingPreKey
         * @property {number|null} [remoteRegistrationId] SessionStructure remoteRegistrationId
         * @property {number|null} [localRegistrationId] SessionStructure localRegistrationId
         * @property {boolean|null} [needsRefresh] SessionStructure needsRefresh
         * @property {Uint8Array|null} [aliceBaseKey] SessionStructure aliceBaseKey
         */

        /**
         * Constructs a new SessionStructure.
         * @memberof textsecure
         * @classdesc Represents a SessionStructure.
         * @implements ISessionStructure
         * @constructor
         * @param {textsecure.ISessionStructure=} [properties] Properties to set
         */
        function SessionStructure(properties) {
            this.receiverChains = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionStructure sessionVersion.
         * @member {number|null|undefined} sessionVersion
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.sessionVersion = null;

        /**
         * SessionStructure localIdentityPublic.
         * @member {Uint8Array|null|undefined} localIdentityPublic
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.localIdentityPublic = null;

        /**
         * SessionStructure remoteIdentityPublic.
         * @member {Uint8Array|null|undefined} remoteIdentityPublic
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.remoteIdentityPublic = null;

        /**
         * SessionStructure rootKey.
         * @member {Uint8Array|null|undefined} rootKey
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.rootKey = null;

        /**
         * SessionStructure previousCounter.
         * @member {number|null|undefined} previousCounter
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.previousCounter = null;

        /**
         * SessionStructure senderChain.
         * @member {textsecure.SessionStructure.IChain|null|undefined} senderChain
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.senderChain = null;

        /**
         * SessionStructure receiverChains.
         * @member {Array.<textsecure.SessionStructure.IChain>} receiverChains
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.receiverChains = $util.emptyArray;

        /**
         * SessionStructure pendingKeyExchange.
         * @member {textsecure.SessionStructure.IPendingKeyExchange|null|undefined} pendingKeyExchange
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.pendingKeyExchange = null;

        /**
         * SessionStructure pendingPreKey.
         * @member {textsecure.SessionStructure.IPendingPreKey|null|undefined} pendingPreKey
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.pendingPreKey = null;

        /**
         * SessionStructure remoteRegistrationId.
         * @member {number|null|undefined} remoteRegistrationId
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.remoteRegistrationId = null;

        /**
         * SessionStructure localRegistrationId.
         * @member {number|null|undefined} localRegistrationId
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.localRegistrationId = null;

        /**
         * SessionStructure needsRefresh.
         * @member {boolean|null|undefined} needsRefresh
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.needsRefresh = null;

        /**
         * SessionStructure aliceBaseKey.
         * @member {Uint8Array|null|undefined} aliceBaseKey
         * @memberof textsecure.SessionStructure
         * @instance
         */
        SessionStructure.prototype.aliceBaseKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_sessionVersion", {
            get: $util.oneOfGetter($oneOfFields = ["sessionVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_localIdentityPublic", {
            get: $util.oneOfGetter($oneOfFields = ["localIdentityPublic"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_remoteIdentityPublic", {
            get: $util.oneOfGetter($oneOfFields = ["remoteIdentityPublic"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_rootKey", {
            get: $util.oneOfGetter($oneOfFields = ["rootKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_previousCounter", {
            get: $util.oneOfGetter($oneOfFields = ["previousCounter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_senderChain", {
            get: $util.oneOfGetter($oneOfFields = ["senderChain"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_pendingKeyExchange", {
            get: $util.oneOfGetter($oneOfFields = ["pendingKeyExchange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_pendingPreKey", {
            get: $util.oneOfGetter($oneOfFields = ["pendingPreKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_remoteRegistrationId", {
            get: $util.oneOfGetter($oneOfFields = ["remoteRegistrationId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_localRegistrationId", {
            get: $util.oneOfGetter($oneOfFields = ["localRegistrationId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_needsRefresh", {
            get: $util.oneOfGetter($oneOfFields = ["needsRefresh"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_aliceBaseKey", {
            get: $util.oneOfGetter($oneOfFields = ["aliceBaseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SessionStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.SessionStructure
         * @static
         * @param {textsecure.ISessionStructure=} [properties] Properties to set
         * @returns {textsecure.SessionStructure} SessionStructure instance
         */
        SessionStructure.create = function create(properties) {
            return new SessionStructure(properties);
        };

        /**
         * Encodes the specified SessionStructure message. Does not implicitly {@link textsecure.SessionStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SessionStructure
         * @static
         * @param {textsecure.ISessionStructure} message SessionStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionVersion != null && Object.hasOwnProperty.call(message, "sessionVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sessionVersion);
            if (message.localIdentityPublic != null && Object.hasOwnProperty.call(message, "localIdentityPublic"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.localIdentityPublic);
            if (message.remoteIdentityPublic != null && Object.hasOwnProperty.call(message, "remoteIdentityPublic"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.remoteIdentityPublic);
            if (message.rootKey != null && Object.hasOwnProperty.call(message, "rootKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.rootKey);
            if (message.previousCounter != null && Object.hasOwnProperty.call(message, "previousCounter"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.previousCounter);
            if (message.senderChain != null && Object.hasOwnProperty.call(message, "senderChain"))
                $root.textsecure.SessionStructure.Chain.encode(message.senderChain, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.receiverChains != null && message.receiverChains.length)
                for (var i = 0; i < message.receiverChains.length; ++i)
                    $root.textsecure.SessionStructure.Chain.encode(message.receiverChains[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.pendingKeyExchange != null && Object.hasOwnProperty.call(message, "pendingKeyExchange"))
                $root.textsecure.SessionStructure.PendingKeyExchange.encode(message.pendingKeyExchange, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.pendingPreKey != null && Object.hasOwnProperty.call(message, "pendingPreKey"))
                $root.textsecure.SessionStructure.PendingPreKey.encode(message.pendingPreKey, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.remoteRegistrationId != null && Object.hasOwnProperty.call(message, "remoteRegistrationId"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.remoteRegistrationId);
            if (message.localRegistrationId != null && Object.hasOwnProperty.call(message, "localRegistrationId"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.localRegistrationId);
            if (message.needsRefresh != null && Object.hasOwnProperty.call(message, "needsRefresh"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.needsRefresh);
            if (message.aliceBaseKey != null && Object.hasOwnProperty.call(message, "aliceBaseKey"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.aliceBaseKey);
            return writer;
        };

        /**
         * Encodes the specified SessionStructure message, length delimited. Does not implicitly {@link textsecure.SessionStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SessionStructure
         * @static
         * @param {textsecure.ISessionStructure} message SessionStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SessionStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SessionStructure} SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sessionVersion = reader.uint32();
                        break;
                    }
                case 2: {
                        message.localIdentityPublic = reader.bytes();
                        break;
                    }
                case 3: {
                        message.remoteIdentityPublic = reader.bytes();
                        break;
                    }
                case 4: {
                        message.rootKey = reader.bytes();
                        break;
                    }
                case 5: {
                        message.previousCounter = reader.uint32();
                        break;
                    }
                case 6: {
                        message.senderChain = $root.textsecure.SessionStructure.Chain.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        if (!(message.receiverChains && message.receiverChains.length))
                            message.receiverChains = [];
                        message.receiverChains.push($root.textsecure.SessionStructure.Chain.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.pendingKeyExchange = $root.textsecure.SessionStructure.PendingKeyExchange.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.pendingPreKey = $root.textsecure.SessionStructure.PendingPreKey.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.remoteRegistrationId = reader.uint32();
                        break;
                    }
                case 11: {
                        message.localRegistrationId = reader.uint32();
                        break;
                    }
                case 12: {
                        message.needsRefresh = reader.bool();
                        break;
                    }
                case 13: {
                        message.aliceBaseKey = reader.bytes();
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
         * Decodes a SessionStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SessionStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SessionStructure} SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionStructure message.
         * @function verify
         * @memberof textsecure.SessionStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.sessionVersion != null && message.hasOwnProperty("sessionVersion")) {
                properties._sessionVersion = 1;
                if (!$util.isInteger(message.sessionVersion))
                    return "sessionVersion: integer expected";
            }
            if (message.localIdentityPublic != null && message.hasOwnProperty("localIdentityPublic")) {
                properties._localIdentityPublic = 1;
                if (!(message.localIdentityPublic && typeof message.localIdentityPublic.length === "number" || $util.isString(message.localIdentityPublic)))
                    return "localIdentityPublic: buffer expected";
            }
            if (message.remoteIdentityPublic != null && message.hasOwnProperty("remoteIdentityPublic")) {
                properties._remoteIdentityPublic = 1;
                if (!(message.remoteIdentityPublic && typeof message.remoteIdentityPublic.length === "number" || $util.isString(message.remoteIdentityPublic)))
                    return "remoteIdentityPublic: buffer expected";
            }
            if (message.rootKey != null && message.hasOwnProperty("rootKey")) {
                properties._rootKey = 1;
                if (!(message.rootKey && typeof message.rootKey.length === "number" || $util.isString(message.rootKey)))
                    return "rootKey: buffer expected";
            }
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter")) {
                properties._previousCounter = 1;
                if (!$util.isInteger(message.previousCounter))
                    return "previousCounter: integer expected";
            }
            if (message.senderChain != null && message.hasOwnProperty("senderChain")) {
                properties._senderChain = 1;
                {
                    var error = $root.textsecure.SessionStructure.Chain.verify(message.senderChain);
                    if (error)
                        return "senderChain." + error;
                }
            }
            if (message.receiverChains != null && message.hasOwnProperty("receiverChains")) {
                if (!Array.isArray(message.receiverChains))
                    return "receiverChains: array expected";
                for (var i = 0; i < message.receiverChains.length; ++i) {
                    var error = $root.textsecure.SessionStructure.Chain.verify(message.receiverChains[i]);
                    if (error)
                        return "receiverChains." + error;
                }
            }
            if (message.pendingKeyExchange != null && message.hasOwnProperty("pendingKeyExchange")) {
                properties._pendingKeyExchange = 1;
                {
                    var error = $root.textsecure.SessionStructure.PendingKeyExchange.verify(message.pendingKeyExchange);
                    if (error)
                        return "pendingKeyExchange." + error;
                }
            }
            if (message.pendingPreKey != null && message.hasOwnProperty("pendingPreKey")) {
                properties._pendingPreKey = 1;
                {
                    var error = $root.textsecure.SessionStructure.PendingPreKey.verify(message.pendingPreKey);
                    if (error)
                        return "pendingPreKey." + error;
                }
            }
            if (message.remoteRegistrationId != null && message.hasOwnProperty("remoteRegistrationId")) {
                properties._remoteRegistrationId = 1;
                if (!$util.isInteger(message.remoteRegistrationId))
                    return "remoteRegistrationId: integer expected";
            }
            if (message.localRegistrationId != null && message.hasOwnProperty("localRegistrationId")) {
                properties._localRegistrationId = 1;
                if (!$util.isInteger(message.localRegistrationId))
                    return "localRegistrationId: integer expected";
            }
            if (message.needsRefresh != null && message.hasOwnProperty("needsRefresh")) {
                properties._needsRefresh = 1;
                if (typeof message.needsRefresh !== "boolean")
                    return "needsRefresh: boolean expected";
            }
            if (message.aliceBaseKey != null && message.hasOwnProperty("aliceBaseKey")) {
                properties._aliceBaseKey = 1;
                if (!(message.aliceBaseKey && typeof message.aliceBaseKey.length === "number" || $util.isString(message.aliceBaseKey)))
                    return "aliceBaseKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SessionStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SessionStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SessionStructure} SessionStructure
         */
        SessionStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SessionStructure)
                return object;
            var message = new $root.textsecure.SessionStructure();
            if (object.sessionVersion != null)
                message.sessionVersion = object.sessionVersion >>> 0;
            if (object.localIdentityPublic != null)
                if (typeof object.localIdentityPublic === "string")
                    $util.base64.decode(object.localIdentityPublic, message.localIdentityPublic = $util.newBuffer($util.base64.length(object.localIdentityPublic)), 0);
                else if (object.localIdentityPublic.length >= 0)
                    message.localIdentityPublic = object.localIdentityPublic;
            if (object.remoteIdentityPublic != null)
                if (typeof object.remoteIdentityPublic === "string")
                    $util.base64.decode(object.remoteIdentityPublic, message.remoteIdentityPublic = $util.newBuffer($util.base64.length(object.remoteIdentityPublic)), 0);
                else if (object.remoteIdentityPublic.length >= 0)
                    message.remoteIdentityPublic = object.remoteIdentityPublic;
            if (object.rootKey != null)
                if (typeof object.rootKey === "string")
                    $util.base64.decode(object.rootKey, message.rootKey = $util.newBuffer($util.base64.length(object.rootKey)), 0);
                else if (object.rootKey.length >= 0)
                    message.rootKey = object.rootKey;
            if (object.previousCounter != null)
                message.previousCounter = object.previousCounter >>> 0;
            if (object.senderChain != null) {
                if (typeof object.senderChain !== "object")
                    throw TypeError(".textsecure.SessionStructure.senderChain: object expected");
                message.senderChain = $root.textsecure.SessionStructure.Chain.fromObject(object.senderChain);
            }
            if (object.receiverChains) {
                if (!Array.isArray(object.receiverChains))
                    throw TypeError(".textsecure.SessionStructure.receiverChains: array expected");
                message.receiverChains = [];
                for (var i = 0; i < object.receiverChains.length; ++i) {
                    if (typeof object.receiverChains[i] !== "object")
                        throw TypeError(".textsecure.SessionStructure.receiverChains: object expected");
                    message.receiverChains[i] = $root.textsecure.SessionStructure.Chain.fromObject(object.receiverChains[i]);
                }
            }
            if (object.pendingKeyExchange != null) {
                if (typeof object.pendingKeyExchange !== "object")
                    throw TypeError(".textsecure.SessionStructure.pendingKeyExchange: object expected");
                message.pendingKeyExchange = $root.textsecure.SessionStructure.PendingKeyExchange.fromObject(object.pendingKeyExchange);
            }
            if (object.pendingPreKey != null) {
                if (typeof object.pendingPreKey !== "object")
                    throw TypeError(".textsecure.SessionStructure.pendingPreKey: object expected");
                message.pendingPreKey = $root.textsecure.SessionStructure.PendingPreKey.fromObject(object.pendingPreKey);
            }
            if (object.remoteRegistrationId != null)
                message.remoteRegistrationId = object.remoteRegistrationId >>> 0;
            if (object.localRegistrationId != null)
                message.localRegistrationId = object.localRegistrationId >>> 0;
            if (object.needsRefresh != null)
                message.needsRefresh = Boolean(object.needsRefresh);
            if (object.aliceBaseKey != null)
                if (typeof object.aliceBaseKey === "string")
                    $util.base64.decode(object.aliceBaseKey, message.aliceBaseKey = $util.newBuffer($util.base64.length(object.aliceBaseKey)), 0);
                else if (object.aliceBaseKey.length >= 0)
                    message.aliceBaseKey = object.aliceBaseKey;
            return message;
        };

        /**
         * Creates a plain object from a SessionStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SessionStructure
         * @static
         * @param {textsecure.SessionStructure} message SessionStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.receiverChains = [];
            if (message.sessionVersion != null && message.hasOwnProperty("sessionVersion")) {
                object.sessionVersion = message.sessionVersion;
                if (options.oneofs)
                    object._sessionVersion = "sessionVersion";
            }
            if (message.localIdentityPublic != null && message.hasOwnProperty("localIdentityPublic")) {
                object.localIdentityPublic = options.bytes === String ? $util.base64.encode(message.localIdentityPublic, 0, message.localIdentityPublic.length) : options.bytes === Array ? Array.prototype.slice.call(message.localIdentityPublic) : message.localIdentityPublic;
                if (options.oneofs)
                    object._localIdentityPublic = "localIdentityPublic";
            }
            if (message.remoteIdentityPublic != null && message.hasOwnProperty("remoteIdentityPublic")) {
                object.remoteIdentityPublic = options.bytes === String ? $util.base64.encode(message.remoteIdentityPublic, 0, message.remoteIdentityPublic.length) : options.bytes === Array ? Array.prototype.slice.call(message.remoteIdentityPublic) : message.remoteIdentityPublic;
                if (options.oneofs)
                    object._remoteIdentityPublic = "remoteIdentityPublic";
            }
            if (message.rootKey != null && message.hasOwnProperty("rootKey")) {
                object.rootKey = options.bytes === String ? $util.base64.encode(message.rootKey, 0, message.rootKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.rootKey) : message.rootKey;
                if (options.oneofs)
                    object._rootKey = "rootKey";
            }
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter")) {
                object.previousCounter = message.previousCounter;
                if (options.oneofs)
                    object._previousCounter = "previousCounter";
            }
            if (message.senderChain != null && message.hasOwnProperty("senderChain")) {
                object.senderChain = $root.textsecure.SessionStructure.Chain.toObject(message.senderChain, options);
                if (options.oneofs)
                    object._senderChain = "senderChain";
            }
            if (message.receiverChains && message.receiverChains.length) {
                object.receiverChains = [];
                for (var j = 0; j < message.receiverChains.length; ++j)
                    object.receiverChains[j] = $root.textsecure.SessionStructure.Chain.toObject(message.receiverChains[j], options);
            }
            if (message.pendingKeyExchange != null && message.hasOwnProperty("pendingKeyExchange")) {
                object.pendingKeyExchange = $root.textsecure.SessionStructure.PendingKeyExchange.toObject(message.pendingKeyExchange, options);
                if (options.oneofs)
                    object._pendingKeyExchange = "pendingKeyExchange";
            }
            if (message.pendingPreKey != null && message.hasOwnProperty("pendingPreKey")) {
                object.pendingPreKey = $root.textsecure.SessionStructure.PendingPreKey.toObject(message.pendingPreKey, options);
                if (options.oneofs)
                    object._pendingPreKey = "pendingPreKey";
            }
            if (message.remoteRegistrationId != null && message.hasOwnProperty("remoteRegistrationId")) {
                object.remoteRegistrationId = message.remoteRegistrationId;
                if (options.oneofs)
                    object._remoteRegistrationId = "remoteRegistrationId";
            }
            if (message.localRegistrationId != null && message.hasOwnProperty("localRegistrationId")) {
                object.localRegistrationId = message.localRegistrationId;
                if (options.oneofs)
                    object._localRegistrationId = "localRegistrationId";
            }
            if (message.needsRefresh != null && message.hasOwnProperty("needsRefresh")) {
                object.needsRefresh = message.needsRefresh;
                if (options.oneofs)
                    object._needsRefresh = "needsRefresh";
            }
            if (message.aliceBaseKey != null && message.hasOwnProperty("aliceBaseKey")) {
                object.aliceBaseKey = options.bytes === String ? $util.base64.encode(message.aliceBaseKey, 0, message.aliceBaseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.aliceBaseKey) : message.aliceBaseKey;
                if (options.oneofs)
                    object._aliceBaseKey = "aliceBaseKey";
            }
            return object;
        };

        /**
         * Converts this SessionStructure to JSON.
         * @function toJSON
         * @memberof textsecure.SessionStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionStructure
         * @function getTypeUrl
         * @memberof textsecure.SessionStructure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.SessionStructure";
        };

        SessionStructure.Chain = (function() {

            /**
             * Properties of a Chain.
             * @memberof textsecure.SessionStructure
             * @interface IChain
             * @property {Uint8Array|null} [senderRatchetKey] Chain senderRatchetKey
             * @property {Uint8Array|null} [senderRatchetKeyPrivate] Chain senderRatchetKeyPrivate
             * @property {textsecure.SessionStructure.Chain.IChainKey|null} [chainKey] Chain chainKey
             * @property {Array.<textsecure.SessionStructure.Chain.IMessageKey>|null} [messageKeys] Chain messageKeys
             */

            /**
             * Constructs a new Chain.
             * @memberof textsecure.SessionStructure
             * @classdesc Represents a Chain.
             * @implements IChain
             * @constructor
             * @param {textsecure.SessionStructure.IChain=} [properties] Properties to set
             */
            function Chain(properties) {
                this.messageKeys = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Chain senderRatchetKey.
             * @member {Uint8Array|null|undefined} senderRatchetKey
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.senderRatchetKey = null;

            /**
             * Chain senderRatchetKeyPrivate.
             * @member {Uint8Array|null|undefined} senderRatchetKeyPrivate
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.senderRatchetKeyPrivate = null;

            /**
             * Chain chainKey.
             * @member {textsecure.SessionStructure.Chain.IChainKey|null|undefined} chainKey
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.chainKey = null;

            /**
             * Chain messageKeys.
             * @member {Array.<textsecure.SessionStructure.Chain.IMessageKey>} messageKeys
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.messageKeys = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Chain.prototype, "_senderRatchetKey", {
                get: $util.oneOfGetter($oneOfFields = ["senderRatchetKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Chain.prototype, "_senderRatchetKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["senderRatchetKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Chain.prototype, "_chainKey", {
                get: $util.oneOfGetter($oneOfFields = ["chainKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Chain instance using the specified properties.
             * @function create
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {textsecure.SessionStructure.IChain=} [properties] Properties to set
             * @returns {textsecure.SessionStructure.Chain} Chain instance
             */
            Chain.create = function create(properties) {
                return new Chain(properties);
            };

            /**
             * Encodes the specified Chain message. Does not implicitly {@link textsecure.SessionStructure.Chain.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {textsecure.SessionStructure.IChain} message Chain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chain.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.senderRatchetKey != null && Object.hasOwnProperty.call(message, "senderRatchetKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.senderRatchetKey);
                if (message.senderRatchetKeyPrivate != null && Object.hasOwnProperty.call(message, "senderRatchetKeyPrivate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderRatchetKeyPrivate);
                if (message.chainKey != null && Object.hasOwnProperty.call(message, "chainKey"))
                    $root.textsecure.SessionStructure.Chain.ChainKey.encode(message.chainKey, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.messageKeys != null && message.messageKeys.length)
                    for (var i = 0; i < message.messageKeys.length; ++i)
                        $root.textsecure.SessionStructure.Chain.MessageKey.encode(message.messageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Chain message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {textsecure.SessionStructure.IChain} message Chain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chain.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Chain message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SessionStructure.Chain} Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chain.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.Chain();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.senderRatchetKey = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.senderRatchetKeyPrivate = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.chainKey = $root.textsecure.SessionStructure.Chain.ChainKey.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            if (!(message.messageKeys && message.messageKeys.length))
                                message.messageKeys = [];
                            message.messageKeys.push($root.textsecure.SessionStructure.Chain.MessageKey.decode(reader, reader.uint32()));
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
             * Decodes a Chain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SessionStructure.Chain} Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chain.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Chain message.
             * @function verify
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Chain.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.senderRatchetKey != null && message.hasOwnProperty("senderRatchetKey")) {
                    properties._senderRatchetKey = 1;
                    if (!(message.senderRatchetKey && typeof message.senderRatchetKey.length === "number" || $util.isString(message.senderRatchetKey)))
                        return "senderRatchetKey: buffer expected";
                }
                if (message.senderRatchetKeyPrivate != null && message.hasOwnProperty("senderRatchetKeyPrivate")) {
                    properties._senderRatchetKeyPrivate = 1;
                    if (!(message.senderRatchetKeyPrivate && typeof message.senderRatchetKeyPrivate.length === "number" || $util.isString(message.senderRatchetKeyPrivate)))
                        return "senderRatchetKeyPrivate: buffer expected";
                }
                if (message.chainKey != null && message.hasOwnProperty("chainKey")) {
                    properties._chainKey = 1;
                    {
                        var error = $root.textsecure.SessionStructure.Chain.ChainKey.verify(message.chainKey);
                        if (error)
                            return "chainKey." + error;
                    }
                }
                if (message.messageKeys != null && message.hasOwnProperty("messageKeys")) {
                    if (!Array.isArray(message.messageKeys))
                        return "messageKeys: array expected";
                    for (var i = 0; i < message.messageKeys.length; ++i) {
                        var error = $root.textsecure.SessionStructure.Chain.MessageKey.verify(message.messageKeys[i]);
                        if (error)
                            return "messageKeys." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Chain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SessionStructure.Chain} Chain
             */
            Chain.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SessionStructure.Chain)
                    return object;
                var message = new $root.textsecure.SessionStructure.Chain();
                if (object.senderRatchetKey != null)
                    if (typeof object.senderRatchetKey === "string")
                        $util.base64.decode(object.senderRatchetKey, message.senderRatchetKey = $util.newBuffer($util.base64.length(object.senderRatchetKey)), 0);
                    else if (object.senderRatchetKey.length >= 0)
                        message.senderRatchetKey = object.senderRatchetKey;
                if (object.senderRatchetKeyPrivate != null)
                    if (typeof object.senderRatchetKeyPrivate === "string")
                        $util.base64.decode(object.senderRatchetKeyPrivate, message.senderRatchetKeyPrivate = $util.newBuffer($util.base64.length(object.senderRatchetKeyPrivate)), 0);
                    else if (object.senderRatchetKeyPrivate.length >= 0)
                        message.senderRatchetKeyPrivate = object.senderRatchetKeyPrivate;
                if (object.chainKey != null) {
                    if (typeof object.chainKey !== "object")
                        throw TypeError(".textsecure.SessionStructure.Chain.chainKey: object expected");
                    message.chainKey = $root.textsecure.SessionStructure.Chain.ChainKey.fromObject(object.chainKey);
                }
                if (object.messageKeys) {
                    if (!Array.isArray(object.messageKeys))
                        throw TypeError(".textsecure.SessionStructure.Chain.messageKeys: array expected");
                    message.messageKeys = [];
                    for (var i = 0; i < object.messageKeys.length; ++i) {
                        if (typeof object.messageKeys[i] !== "object")
                            throw TypeError(".textsecure.SessionStructure.Chain.messageKeys: object expected");
                        message.messageKeys[i] = $root.textsecure.SessionStructure.Chain.MessageKey.fromObject(object.messageKeys[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Chain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {textsecure.SessionStructure.Chain} message Chain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Chain.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.messageKeys = [];
                if (message.senderRatchetKey != null && message.hasOwnProperty("senderRatchetKey")) {
                    object.senderRatchetKey = options.bytes === String ? $util.base64.encode(message.senderRatchetKey, 0, message.senderRatchetKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderRatchetKey) : message.senderRatchetKey;
                    if (options.oneofs)
                        object._senderRatchetKey = "senderRatchetKey";
                }
                if (message.senderRatchetKeyPrivate != null && message.hasOwnProperty("senderRatchetKeyPrivate")) {
                    object.senderRatchetKeyPrivate = options.bytes === String ? $util.base64.encode(message.senderRatchetKeyPrivate, 0, message.senderRatchetKeyPrivate.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderRatchetKeyPrivate) : message.senderRatchetKeyPrivate;
                    if (options.oneofs)
                        object._senderRatchetKeyPrivate = "senderRatchetKeyPrivate";
                }
                if (message.chainKey != null && message.hasOwnProperty("chainKey")) {
                    object.chainKey = $root.textsecure.SessionStructure.Chain.ChainKey.toObject(message.chainKey, options);
                    if (options.oneofs)
                        object._chainKey = "chainKey";
                }
                if (message.messageKeys && message.messageKeys.length) {
                    object.messageKeys = [];
                    for (var j = 0; j < message.messageKeys.length; ++j)
                        object.messageKeys[j] = $root.textsecure.SessionStructure.Chain.MessageKey.toObject(message.messageKeys[j], options);
                }
                return object;
            };

            /**
             * Converts this Chain to JSON.
             * @function toJSON
             * @memberof textsecure.SessionStructure.Chain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Chain.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Chain
             * @function getTypeUrl
             * @memberof textsecure.SessionStructure.Chain
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Chain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/textsecure.SessionStructure.Chain";
            };

            Chain.ChainKey = (function() {

                /**
                 * Properties of a ChainKey.
                 * @memberof textsecure.SessionStructure.Chain
                 * @interface IChainKey
                 * @property {number|null} [index] ChainKey index
                 * @property {Uint8Array|null} [key] ChainKey key
                 */

                /**
                 * Constructs a new ChainKey.
                 * @memberof textsecure.SessionStructure.Chain
                 * @classdesc Represents a ChainKey.
                 * @implements IChainKey
                 * @constructor
                 * @param {textsecure.SessionStructure.Chain.IChainKey=} [properties] Properties to set
                 */
                function ChainKey(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ChainKey index.
                 * @member {number|null|undefined} index
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @instance
                 */
                ChainKey.prototype.index = null;

                /**
                 * ChainKey key.
                 * @member {Uint8Array|null|undefined} key
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @instance
                 */
                ChainKey.prototype.key = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ChainKey.prototype, "_index", {
                    get: $util.oneOfGetter($oneOfFields = ["index"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ChainKey.prototype, "_key", {
                    get: $util.oneOfGetter($oneOfFields = ["key"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ChainKey instance using the specified properties.
                 * @function create
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IChainKey=} [properties] Properties to set
                 * @returns {textsecure.SessionStructure.Chain.ChainKey} ChainKey instance
                 */
                ChainKey.create = function create(properties) {
                    return new ChainKey(properties);
                };

                /**
                 * Encodes the specified ChainKey message. Does not implicitly {@link textsecure.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @function encode
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IChainKey} message ChainKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChainKey.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
                    return writer;
                };

                /**
                 * Encodes the specified ChainKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IChainKey} message ChainKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChainKey.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ChainKey message from the specified reader or buffer.
                 * @function decode
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {textsecure.SessionStructure.Chain.ChainKey} ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChainKey.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.Chain.ChainKey();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.index = reader.uint32();
                                break;
                            }
                        case 2: {
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
                 * Decodes a ChainKey message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {textsecure.SessionStructure.Chain.ChainKey} ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChainKey.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ChainKey message.
                 * @function verify
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ChainKey.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.index != null && message.hasOwnProperty("index")) {
                        properties._index = 1;
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    }
                    if (message.key != null && message.hasOwnProperty("key")) {
                        properties._key = 1;
                        if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                            return "key: buffer expected";
                    }
                    return null;
                };

                /**
                 * Creates a ChainKey message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {textsecure.SessionStructure.Chain.ChainKey} ChainKey
                 */
                ChainKey.fromObject = function fromObject(object) {
                    if (object instanceof $root.textsecure.SessionStructure.Chain.ChainKey)
                        return object;
                    var message = new $root.textsecure.SessionStructure.Chain.ChainKey();
                    if (object.index != null)
                        message.index = object.index >>> 0;
                    if (object.key != null)
                        if (typeof object.key === "string")
                            $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                        else if (object.key.length >= 0)
                            message.key = object.key;
                    return message;
                };

                /**
                 * Creates a plain object from a ChainKey message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.ChainKey} message ChainKey
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ChainKey.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.index != null && message.hasOwnProperty("index")) {
                        object.index = message.index;
                        if (options.oneofs)
                            object._index = "index";
                    }
                    if (message.key != null && message.hasOwnProperty("key")) {
                        object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                        if (options.oneofs)
                            object._key = "key";
                    }
                    return object;
                };

                /**
                 * Converts this ChainKey to JSON.
                 * @function toJSON
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ChainKey.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ChainKey
                 * @function getTypeUrl
                 * @memberof textsecure.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ChainKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/textsecure.SessionStructure.Chain.ChainKey";
                };

                return ChainKey;
            })();

            Chain.MessageKey = (function() {

                /**
                 * Properties of a MessageKey.
                 * @memberof textsecure.SessionStructure.Chain
                 * @interface IMessageKey
                 * @property {number|null} [index] MessageKey index
                 * @property {Uint8Array|null} [cipherKey] MessageKey cipherKey
                 * @property {Uint8Array|null} [macKey] MessageKey macKey
                 * @property {Uint8Array|null} [iv] MessageKey iv
                 */

                /**
                 * Constructs a new MessageKey.
                 * @memberof textsecure.SessionStructure.Chain
                 * @classdesc Represents a MessageKey.
                 * @implements IMessageKey
                 * @constructor
                 * @param {textsecure.SessionStructure.Chain.IMessageKey=} [properties] Properties to set
                 */
                function MessageKey(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageKey index.
                 * @member {number|null|undefined} index
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.index = null;

                /**
                 * MessageKey cipherKey.
                 * @member {Uint8Array|null|undefined} cipherKey
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.cipherKey = null;

                /**
                 * MessageKey macKey.
                 * @member {Uint8Array|null|undefined} macKey
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.macKey = null;

                /**
                 * MessageKey iv.
                 * @member {Uint8Array|null|undefined} iv
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.iv = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(MessageKey.prototype, "_index", {
                    get: $util.oneOfGetter($oneOfFields = ["index"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(MessageKey.prototype, "_cipherKey", {
                    get: $util.oneOfGetter($oneOfFields = ["cipherKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(MessageKey.prototype, "_macKey", {
                    get: $util.oneOfGetter($oneOfFields = ["macKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(MessageKey.prototype, "_iv", {
                    get: $util.oneOfGetter($oneOfFields = ["iv"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new MessageKey instance using the specified properties.
                 * @function create
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IMessageKey=} [properties] Properties to set
                 * @returns {textsecure.SessionStructure.Chain.MessageKey} MessageKey instance
                 */
                MessageKey.create = function create(properties) {
                    return new MessageKey(properties);
                };

                /**
                 * Encodes the specified MessageKey message. Does not implicitly {@link textsecure.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @function encode
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IMessageKey} message MessageKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageKey.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                    if (message.cipherKey != null && Object.hasOwnProperty.call(message, "cipherKey"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cipherKey);
                    if (message.macKey != null && Object.hasOwnProperty.call(message, "macKey"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.macKey);
                    if (message.iv != null && Object.hasOwnProperty.call(message, "iv"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.iv);
                    return writer;
                };

                /**
                 * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.IMessageKey} message MessageKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageKey.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageKey message from the specified reader or buffer.
                 * @function decode
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {textsecure.SessionStructure.Chain.MessageKey} MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageKey.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.Chain.MessageKey();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.index = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.cipherKey = reader.bytes();
                                break;
                            }
                        case 3: {
                                message.macKey = reader.bytes();
                                break;
                            }
                        case 4: {
                                message.iv = reader.bytes();
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
                 * Decodes a MessageKey message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {textsecure.SessionStructure.Chain.MessageKey} MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageKey.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageKey message.
                 * @function verify
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageKey.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.index != null && message.hasOwnProperty("index")) {
                        properties._index = 1;
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    }
                    if (message.cipherKey != null && message.hasOwnProperty("cipherKey")) {
                        properties._cipherKey = 1;
                        if (!(message.cipherKey && typeof message.cipherKey.length === "number" || $util.isString(message.cipherKey)))
                            return "cipherKey: buffer expected";
                    }
                    if (message.macKey != null && message.hasOwnProperty("macKey")) {
                        properties._macKey = 1;
                        if (!(message.macKey && typeof message.macKey.length === "number" || $util.isString(message.macKey)))
                            return "macKey: buffer expected";
                    }
                    if (message.iv != null && message.hasOwnProperty("iv")) {
                        properties._iv = 1;
                        if (!(message.iv && typeof message.iv.length === "number" || $util.isString(message.iv)))
                            return "iv: buffer expected";
                    }
                    return null;
                };

                /**
                 * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {textsecure.SessionStructure.Chain.MessageKey} MessageKey
                 */
                MessageKey.fromObject = function fromObject(object) {
                    if (object instanceof $root.textsecure.SessionStructure.Chain.MessageKey)
                        return object;
                    var message = new $root.textsecure.SessionStructure.Chain.MessageKey();
                    if (object.index != null)
                        message.index = object.index >>> 0;
                    if (object.cipherKey != null)
                        if (typeof object.cipherKey === "string")
                            $util.base64.decode(object.cipherKey, message.cipherKey = $util.newBuffer($util.base64.length(object.cipherKey)), 0);
                        else if (object.cipherKey.length >= 0)
                            message.cipherKey = object.cipherKey;
                    if (object.macKey != null)
                        if (typeof object.macKey === "string")
                            $util.base64.decode(object.macKey, message.macKey = $util.newBuffer($util.base64.length(object.macKey)), 0);
                        else if (object.macKey.length >= 0)
                            message.macKey = object.macKey;
                    if (object.iv != null)
                        if (typeof object.iv === "string")
                            $util.base64.decode(object.iv, message.iv = $util.newBuffer($util.base64.length(object.iv)), 0);
                        else if (object.iv.length >= 0)
                            message.iv = object.iv;
                    return message;
                };

                /**
                 * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {textsecure.SessionStructure.Chain.MessageKey} message MessageKey
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageKey.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.index != null && message.hasOwnProperty("index")) {
                        object.index = message.index;
                        if (options.oneofs)
                            object._index = "index";
                    }
                    if (message.cipherKey != null && message.hasOwnProperty("cipherKey")) {
                        object.cipherKey = options.bytes === String ? $util.base64.encode(message.cipherKey, 0, message.cipherKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.cipherKey) : message.cipherKey;
                        if (options.oneofs)
                            object._cipherKey = "cipherKey";
                    }
                    if (message.macKey != null && message.hasOwnProperty("macKey")) {
                        object.macKey = options.bytes === String ? $util.base64.encode(message.macKey, 0, message.macKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.macKey) : message.macKey;
                        if (options.oneofs)
                            object._macKey = "macKey";
                    }
                    if (message.iv != null && message.hasOwnProperty("iv")) {
                        object.iv = options.bytes === String ? $util.base64.encode(message.iv, 0, message.iv.length) : options.bytes === Array ? Array.prototype.slice.call(message.iv) : message.iv;
                        if (options.oneofs)
                            object._iv = "iv";
                    }
                    return object;
                };

                /**
                 * Converts this MessageKey to JSON.
                 * @function toJSON
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageKey.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MessageKey
                 * @function getTypeUrl
                 * @memberof textsecure.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/textsecure.SessionStructure.Chain.MessageKey";
                };

                return MessageKey;
            })();

            return Chain;
        })();

        SessionStructure.PendingKeyExchange = (function() {

            /**
             * Properties of a PendingKeyExchange.
             * @memberof textsecure.SessionStructure
             * @interface IPendingKeyExchange
             * @property {number|null} [sequence] PendingKeyExchange sequence
             * @property {Uint8Array|null} [localBaseKey] PendingKeyExchange localBaseKey
             * @property {Uint8Array|null} [localBaseKeyPrivate] PendingKeyExchange localBaseKeyPrivate
             * @property {Uint8Array|null} [localRatchetKey] PendingKeyExchange localRatchetKey
             * @property {Uint8Array|null} [localRatchetKeyPrivate] PendingKeyExchange localRatchetKeyPrivate
             * @property {Uint8Array|null} [localIdentityKey] PendingKeyExchange localIdentityKey
             * @property {Uint8Array|null} [localIdentityKeyPrivate] PendingKeyExchange localIdentityKeyPrivate
             */

            /**
             * Constructs a new PendingKeyExchange.
             * @memberof textsecure.SessionStructure
             * @classdesc Represents a PendingKeyExchange.
             * @implements IPendingKeyExchange
             * @constructor
             * @param {textsecure.SessionStructure.IPendingKeyExchange=} [properties] Properties to set
             */
            function PendingKeyExchange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PendingKeyExchange sequence.
             * @member {number|null|undefined} sequence
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.sequence = null;

            /**
             * PendingKeyExchange localBaseKey.
             * @member {Uint8Array|null|undefined} localBaseKey
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localBaseKey = null;

            /**
             * PendingKeyExchange localBaseKeyPrivate.
             * @member {Uint8Array|null|undefined} localBaseKeyPrivate
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localBaseKeyPrivate = null;

            /**
             * PendingKeyExchange localRatchetKey.
             * @member {Uint8Array|null|undefined} localRatchetKey
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localRatchetKey = null;

            /**
             * PendingKeyExchange localRatchetKeyPrivate.
             * @member {Uint8Array|null|undefined} localRatchetKeyPrivate
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localRatchetKeyPrivate = null;

            /**
             * PendingKeyExchange localIdentityKey.
             * @member {Uint8Array|null|undefined} localIdentityKey
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localIdentityKey = null;

            /**
             * PendingKeyExchange localIdentityKeyPrivate.
             * @member {Uint8Array|null|undefined} localIdentityKeyPrivate
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localIdentityKeyPrivate = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_sequence", {
                get: $util.oneOfGetter($oneOfFields = ["sequence"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localBaseKey", {
                get: $util.oneOfGetter($oneOfFields = ["localBaseKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localBaseKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localBaseKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localRatchetKey", {
                get: $util.oneOfGetter($oneOfFields = ["localRatchetKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localRatchetKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localRatchetKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localIdentityKey", {
                get: $util.oneOfGetter($oneOfFields = ["localIdentityKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localIdentityKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localIdentityKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PendingKeyExchange instance using the specified properties.
             * @function create
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {textsecure.SessionStructure.IPendingKeyExchange=} [properties] Properties to set
             * @returns {textsecure.SessionStructure.PendingKeyExchange} PendingKeyExchange instance
             */
            PendingKeyExchange.create = function create(properties) {
                return new PendingKeyExchange(properties);
            };

            /**
             * Encodes the specified PendingKeyExchange message. Does not implicitly {@link textsecure.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {textsecure.SessionStructure.IPendingKeyExchange} message PendingKeyExchange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingKeyExchange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sequence);
                if (message.localBaseKey != null && Object.hasOwnProperty.call(message, "localBaseKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.localBaseKey);
                if (message.localBaseKeyPrivate != null && Object.hasOwnProperty.call(message, "localBaseKeyPrivate"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.localBaseKeyPrivate);
                if (message.localRatchetKey != null && Object.hasOwnProperty.call(message, "localRatchetKey"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.localRatchetKey);
                if (message.localRatchetKeyPrivate != null && Object.hasOwnProperty.call(message, "localRatchetKeyPrivate"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.localRatchetKeyPrivate);
                if (message.localIdentityKey != null && Object.hasOwnProperty.call(message, "localIdentityKey"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.localIdentityKey);
                if (message.localIdentityKeyPrivate != null && Object.hasOwnProperty.call(message, "localIdentityKeyPrivate"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.localIdentityKeyPrivate);
                return writer;
            };

            /**
             * Encodes the specified PendingKeyExchange message, length delimited. Does not implicitly {@link textsecure.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {textsecure.SessionStructure.IPendingKeyExchange} message PendingKeyExchange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingKeyExchange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SessionStructure.PendingKeyExchange} PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingKeyExchange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.PendingKeyExchange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.sequence = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.localBaseKey = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.localBaseKeyPrivate = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.localRatchetKey = reader.bytes();
                            break;
                        }
                    case 5: {
                            message.localRatchetKeyPrivate = reader.bytes();
                            break;
                        }
                    case 7: {
                            message.localIdentityKey = reader.bytes();
                            break;
                        }
                    case 8: {
                            message.localIdentityKeyPrivate = reader.bytes();
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
             * Decodes a PendingKeyExchange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SessionStructure.PendingKeyExchange} PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingKeyExchange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PendingKeyExchange message.
             * @function verify
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingKeyExchange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.sequence != null && message.hasOwnProperty("sequence")) {
                    properties._sequence = 1;
                    if (!$util.isInteger(message.sequence))
                        return "sequence: integer expected";
                }
                if (message.localBaseKey != null && message.hasOwnProperty("localBaseKey")) {
                    properties._localBaseKey = 1;
                    if (!(message.localBaseKey && typeof message.localBaseKey.length === "number" || $util.isString(message.localBaseKey)))
                        return "localBaseKey: buffer expected";
                }
                if (message.localBaseKeyPrivate != null && message.hasOwnProperty("localBaseKeyPrivate")) {
                    properties._localBaseKeyPrivate = 1;
                    if (!(message.localBaseKeyPrivate && typeof message.localBaseKeyPrivate.length === "number" || $util.isString(message.localBaseKeyPrivate)))
                        return "localBaseKeyPrivate: buffer expected";
                }
                if (message.localRatchetKey != null && message.hasOwnProperty("localRatchetKey")) {
                    properties._localRatchetKey = 1;
                    if (!(message.localRatchetKey && typeof message.localRatchetKey.length === "number" || $util.isString(message.localRatchetKey)))
                        return "localRatchetKey: buffer expected";
                }
                if (message.localRatchetKeyPrivate != null && message.hasOwnProperty("localRatchetKeyPrivate")) {
                    properties._localRatchetKeyPrivate = 1;
                    if (!(message.localRatchetKeyPrivate && typeof message.localRatchetKeyPrivate.length === "number" || $util.isString(message.localRatchetKeyPrivate)))
                        return "localRatchetKeyPrivate: buffer expected";
                }
                if (message.localIdentityKey != null && message.hasOwnProperty("localIdentityKey")) {
                    properties._localIdentityKey = 1;
                    if (!(message.localIdentityKey && typeof message.localIdentityKey.length === "number" || $util.isString(message.localIdentityKey)))
                        return "localIdentityKey: buffer expected";
                }
                if (message.localIdentityKeyPrivate != null && message.hasOwnProperty("localIdentityKeyPrivate")) {
                    properties._localIdentityKeyPrivate = 1;
                    if (!(message.localIdentityKeyPrivate && typeof message.localIdentityKeyPrivate.length === "number" || $util.isString(message.localIdentityKeyPrivate)))
                        return "localIdentityKeyPrivate: buffer expected";
                }
                return null;
            };

            /**
             * Creates a PendingKeyExchange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SessionStructure.PendingKeyExchange} PendingKeyExchange
             */
            PendingKeyExchange.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SessionStructure.PendingKeyExchange)
                    return object;
                var message = new $root.textsecure.SessionStructure.PendingKeyExchange();
                if (object.sequence != null)
                    message.sequence = object.sequence >>> 0;
                if (object.localBaseKey != null)
                    if (typeof object.localBaseKey === "string")
                        $util.base64.decode(object.localBaseKey, message.localBaseKey = $util.newBuffer($util.base64.length(object.localBaseKey)), 0);
                    else if (object.localBaseKey.length >= 0)
                        message.localBaseKey = object.localBaseKey;
                if (object.localBaseKeyPrivate != null)
                    if (typeof object.localBaseKeyPrivate === "string")
                        $util.base64.decode(object.localBaseKeyPrivate, message.localBaseKeyPrivate = $util.newBuffer($util.base64.length(object.localBaseKeyPrivate)), 0);
                    else if (object.localBaseKeyPrivate.length >= 0)
                        message.localBaseKeyPrivate = object.localBaseKeyPrivate;
                if (object.localRatchetKey != null)
                    if (typeof object.localRatchetKey === "string")
                        $util.base64.decode(object.localRatchetKey, message.localRatchetKey = $util.newBuffer($util.base64.length(object.localRatchetKey)), 0);
                    else if (object.localRatchetKey.length >= 0)
                        message.localRatchetKey = object.localRatchetKey;
                if (object.localRatchetKeyPrivate != null)
                    if (typeof object.localRatchetKeyPrivate === "string")
                        $util.base64.decode(object.localRatchetKeyPrivate, message.localRatchetKeyPrivate = $util.newBuffer($util.base64.length(object.localRatchetKeyPrivate)), 0);
                    else if (object.localRatchetKeyPrivate.length >= 0)
                        message.localRatchetKeyPrivate = object.localRatchetKeyPrivate;
                if (object.localIdentityKey != null)
                    if (typeof object.localIdentityKey === "string")
                        $util.base64.decode(object.localIdentityKey, message.localIdentityKey = $util.newBuffer($util.base64.length(object.localIdentityKey)), 0);
                    else if (object.localIdentityKey.length >= 0)
                        message.localIdentityKey = object.localIdentityKey;
                if (object.localIdentityKeyPrivate != null)
                    if (typeof object.localIdentityKeyPrivate === "string")
                        $util.base64.decode(object.localIdentityKeyPrivate, message.localIdentityKeyPrivate = $util.newBuffer($util.base64.length(object.localIdentityKeyPrivate)), 0);
                    else if (object.localIdentityKeyPrivate.length >= 0)
                        message.localIdentityKeyPrivate = object.localIdentityKeyPrivate;
                return message;
            };

            /**
             * Creates a plain object from a PendingKeyExchange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {textsecure.SessionStructure.PendingKeyExchange} message PendingKeyExchange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingKeyExchange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.sequence != null && message.hasOwnProperty("sequence")) {
                    object.sequence = message.sequence;
                    if (options.oneofs)
                        object._sequence = "sequence";
                }
                if (message.localBaseKey != null && message.hasOwnProperty("localBaseKey")) {
                    object.localBaseKey = options.bytes === String ? $util.base64.encode(message.localBaseKey, 0, message.localBaseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.localBaseKey) : message.localBaseKey;
                    if (options.oneofs)
                        object._localBaseKey = "localBaseKey";
                }
                if (message.localBaseKeyPrivate != null && message.hasOwnProperty("localBaseKeyPrivate")) {
                    object.localBaseKeyPrivate = options.bytes === String ? $util.base64.encode(message.localBaseKeyPrivate, 0, message.localBaseKeyPrivate.length) : options.bytes === Array ? Array.prototype.slice.call(message.localBaseKeyPrivate) : message.localBaseKeyPrivate;
                    if (options.oneofs)
                        object._localBaseKeyPrivate = "localBaseKeyPrivate";
                }
                if (message.localRatchetKey != null && message.hasOwnProperty("localRatchetKey")) {
                    object.localRatchetKey = options.bytes === String ? $util.base64.encode(message.localRatchetKey, 0, message.localRatchetKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.localRatchetKey) : message.localRatchetKey;
                    if (options.oneofs)
                        object._localRatchetKey = "localRatchetKey";
                }
                if (message.localRatchetKeyPrivate != null && message.hasOwnProperty("localRatchetKeyPrivate")) {
                    object.localRatchetKeyPrivate = options.bytes === String ? $util.base64.encode(message.localRatchetKeyPrivate, 0, message.localRatchetKeyPrivate.length) : options.bytes === Array ? Array.prototype.slice.call(message.localRatchetKeyPrivate) : message.localRatchetKeyPrivate;
                    if (options.oneofs)
                        object._localRatchetKeyPrivate = "localRatchetKeyPrivate";
                }
                if (message.localIdentityKey != null && message.hasOwnProperty("localIdentityKey")) {
                    object.localIdentityKey = options.bytes === String ? $util.base64.encode(message.localIdentityKey, 0, message.localIdentityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.localIdentityKey) : message.localIdentityKey;
                    if (options.oneofs)
                        object._localIdentityKey = "localIdentityKey";
                }
                if (message.localIdentityKeyPrivate != null && message.hasOwnProperty("localIdentityKeyPrivate")) {
                    object.localIdentityKeyPrivate = options.bytes === String ? $util.base64.encode(message.localIdentityKeyPrivate, 0, message.localIdentityKeyPrivate.length) : options.bytes === Array ? Array.prototype.slice.call(message.localIdentityKeyPrivate) : message.localIdentityKeyPrivate;
                    if (options.oneofs)
                        object._localIdentityKeyPrivate = "localIdentityKeyPrivate";
                }
                return object;
            };

            /**
             * Converts this PendingKeyExchange to JSON.
             * @function toJSON
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingKeyExchange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PendingKeyExchange
             * @function getTypeUrl
             * @memberof textsecure.SessionStructure.PendingKeyExchange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PendingKeyExchange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/textsecure.SessionStructure.PendingKeyExchange";
            };

            return PendingKeyExchange;
        })();

        SessionStructure.PendingPreKey = (function() {

            /**
             * Properties of a PendingPreKey.
             * @memberof textsecure.SessionStructure
             * @interface IPendingPreKey
             * @property {number|null} [preKeyId] PendingPreKey preKeyId
             * @property {number|null} [signedPreKeyId] PendingPreKey signedPreKeyId
             * @property {Uint8Array|null} [baseKey] PendingPreKey baseKey
             */

            /**
             * Constructs a new PendingPreKey.
             * @memberof textsecure.SessionStructure
             * @classdesc Represents a PendingPreKey.
             * @implements IPendingPreKey
             * @constructor
             * @param {textsecure.SessionStructure.IPendingPreKey=} [properties] Properties to set
             */
            function PendingPreKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PendingPreKey preKeyId.
             * @member {number|null|undefined} preKeyId
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.preKeyId = null;

            /**
             * PendingPreKey signedPreKeyId.
             * @member {number|null|undefined} signedPreKeyId
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.signedPreKeyId = null;

            /**
             * PendingPreKey baseKey.
             * @member {Uint8Array|null|undefined} baseKey
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.baseKey = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingPreKey.prototype, "_preKeyId", {
                get: $util.oneOfGetter($oneOfFields = ["preKeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingPreKey.prototype, "_signedPreKeyId", {
                get: $util.oneOfGetter($oneOfFields = ["signedPreKeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingPreKey.prototype, "_baseKey", {
                get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PendingPreKey instance using the specified properties.
             * @function create
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {textsecure.SessionStructure.IPendingPreKey=} [properties] Properties to set
             * @returns {textsecure.SessionStructure.PendingPreKey} PendingPreKey instance
             */
            PendingPreKey.create = function create(properties) {
                return new PendingPreKey(properties);
            };

            /**
             * Encodes the specified PendingPreKey message. Does not implicitly {@link textsecure.SessionStructure.PendingPreKey.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {textsecure.SessionStructure.IPendingPreKey} message PendingPreKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingPreKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.preKeyId != null && Object.hasOwnProperty.call(message, "preKeyId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.preKeyId);
                if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
                if (message.signedPreKeyId != null && Object.hasOwnProperty.call(message, "signedPreKeyId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.signedPreKeyId);
                return writer;
            };

            /**
             * Encodes the specified PendingPreKey message, length delimited. Does not implicitly {@link textsecure.SessionStructure.PendingPreKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {textsecure.SessionStructure.IPendingPreKey} message PendingPreKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingPreKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SessionStructure.PendingPreKey} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingPreKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SessionStructure.PendingPreKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.preKeyId = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.signedPreKeyId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.baseKey = reader.bytes();
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
             * Decodes a PendingPreKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SessionStructure.PendingPreKey} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingPreKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PendingPreKey message.
             * @function verify
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingPreKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.preKeyId != null && message.hasOwnProperty("preKeyId")) {
                    properties._preKeyId = 1;
                    if (!$util.isInteger(message.preKeyId))
                        return "preKeyId: integer expected";
                }
                if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId")) {
                    properties._signedPreKeyId = 1;
                    if (!$util.isInteger(message.signedPreKeyId))
                        return "signedPreKeyId: integer expected";
                }
                if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                    properties._baseKey = 1;
                    if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                        return "baseKey: buffer expected";
                }
                return null;
            };

            /**
             * Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SessionStructure.PendingPreKey} PendingPreKey
             */
            PendingPreKey.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SessionStructure.PendingPreKey)
                    return object;
                var message = new $root.textsecure.SessionStructure.PendingPreKey();
                if (object.preKeyId != null)
                    message.preKeyId = object.preKeyId >>> 0;
                if (object.signedPreKeyId != null)
                    message.signedPreKeyId = object.signedPreKeyId | 0;
                if (object.baseKey != null)
                    if (typeof object.baseKey === "string")
                        $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                    else if (object.baseKey.length >= 0)
                        message.baseKey = object.baseKey;
                return message;
            };

            /**
             * Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {textsecure.SessionStructure.PendingPreKey} message PendingPreKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingPreKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.preKeyId != null && message.hasOwnProperty("preKeyId")) {
                    object.preKeyId = message.preKeyId;
                    if (options.oneofs)
                        object._preKeyId = "preKeyId";
                }
                if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                    object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
                    if (options.oneofs)
                        object._baseKey = "baseKey";
                }
                if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId")) {
                    object.signedPreKeyId = message.signedPreKeyId;
                    if (options.oneofs)
                        object._signedPreKeyId = "signedPreKeyId";
                }
                return object;
            };

            /**
             * Converts this PendingPreKey to JSON.
             * @function toJSON
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingPreKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PendingPreKey
             * @function getTypeUrl
             * @memberof textsecure.SessionStructure.PendingPreKey
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PendingPreKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/textsecure.SessionStructure.PendingPreKey";
            };

            return PendingPreKey;
        })();

        return SessionStructure;
    })();

    textsecure.RecordStructure = (function() {

        /**
         * Properties of a RecordStructure.
         * @memberof textsecure
         * @interface IRecordStructure
         * @property {textsecure.ISessionStructure|null} [currentSession] RecordStructure currentSession
         * @property {Array.<textsecure.ISessionStructure>|null} [previousSessions] RecordStructure previousSessions
         */

        /**
         * Constructs a new RecordStructure.
         * @memberof textsecure
         * @classdesc Represents a RecordStructure.
         * @implements IRecordStructure
         * @constructor
         * @param {textsecure.IRecordStructure=} [properties] Properties to set
         */
        function RecordStructure(properties) {
            this.previousSessions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordStructure currentSession.
         * @member {textsecure.ISessionStructure|null|undefined} currentSession
         * @memberof textsecure.RecordStructure
         * @instance
         */
        RecordStructure.prototype.currentSession = null;

        /**
         * RecordStructure previousSessions.
         * @member {Array.<textsecure.ISessionStructure>} previousSessions
         * @memberof textsecure.RecordStructure
         * @instance
         */
        RecordStructure.prototype.previousSessions = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RecordStructure.prototype, "_currentSession", {
            get: $util.oneOfGetter($oneOfFields = ["currentSession"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RecordStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.RecordStructure
         * @static
         * @param {textsecure.IRecordStructure=} [properties] Properties to set
         * @returns {textsecure.RecordStructure} RecordStructure instance
         */
        RecordStructure.create = function create(properties) {
            return new RecordStructure(properties);
        };

        /**
         * Encodes the specified RecordStructure message. Does not implicitly {@link textsecure.RecordStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.RecordStructure
         * @static
         * @param {textsecure.IRecordStructure} message RecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentSession != null && Object.hasOwnProperty.call(message, "currentSession"))
                $root.textsecure.SessionStructure.encode(message.currentSession, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.previousSessions != null && message.previousSessions.length)
                for (var i = 0; i < message.previousSessions.length; ++i)
                    $root.textsecure.SessionStructure.encode(message.previousSessions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RecordStructure message, length delimited. Does not implicitly {@link textsecure.RecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.RecordStructure
         * @static
         * @param {textsecure.IRecordStructure} message RecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.RecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.RecordStructure} RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.RecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.currentSession = $root.textsecure.SessionStructure.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.previousSessions && message.previousSessions.length))
                            message.previousSessions = [];
                        message.previousSessions.push($root.textsecure.SessionStructure.decode(reader, reader.uint32()));
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
         * Decodes a RecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.RecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.RecordStructure} RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecordStructure message.
         * @function verify
         * @memberof textsecure.RecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.currentSession != null && message.hasOwnProperty("currentSession")) {
                properties._currentSession = 1;
                {
                    var error = $root.textsecure.SessionStructure.verify(message.currentSession);
                    if (error)
                        return "currentSession." + error;
                }
            }
            if (message.previousSessions != null && message.hasOwnProperty("previousSessions")) {
                if (!Array.isArray(message.previousSessions))
                    return "previousSessions: array expected";
                for (var i = 0; i < message.previousSessions.length; ++i) {
                    var error = $root.textsecure.SessionStructure.verify(message.previousSessions[i]);
                    if (error)
                        return "previousSessions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.RecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.RecordStructure} RecordStructure
         */
        RecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.RecordStructure)
                return object;
            var message = new $root.textsecure.RecordStructure();
            if (object.currentSession != null) {
                if (typeof object.currentSession !== "object")
                    throw TypeError(".textsecure.RecordStructure.currentSession: object expected");
                message.currentSession = $root.textsecure.SessionStructure.fromObject(object.currentSession);
            }
            if (object.previousSessions) {
                if (!Array.isArray(object.previousSessions))
                    throw TypeError(".textsecure.RecordStructure.previousSessions: array expected");
                message.previousSessions = [];
                for (var i = 0; i < object.previousSessions.length; ++i) {
                    if (typeof object.previousSessions[i] !== "object")
                        throw TypeError(".textsecure.RecordStructure.previousSessions: object expected");
                    message.previousSessions[i] = $root.textsecure.SessionStructure.fromObject(object.previousSessions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.RecordStructure
         * @static
         * @param {textsecure.RecordStructure} message RecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.previousSessions = [];
            if (message.currentSession != null && message.hasOwnProperty("currentSession")) {
                object.currentSession = $root.textsecure.SessionStructure.toObject(message.currentSession, options);
                if (options.oneofs)
                    object._currentSession = "currentSession";
            }
            if (message.previousSessions && message.previousSessions.length) {
                object.previousSessions = [];
                for (var j = 0; j < message.previousSessions.length; ++j)
                    object.previousSessions[j] = $root.textsecure.SessionStructure.toObject(message.previousSessions[j], options);
            }
            return object;
        };

        /**
         * Converts this RecordStructure to JSON.
         * @function toJSON
         * @memberof textsecure.RecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RecordStructure
         * @function getTypeUrl
         * @memberof textsecure.RecordStructure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RecordStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.RecordStructure";
        };

        return RecordStructure;
    })();

    textsecure.PreKeyRecordStructure = (function() {

        /**
         * Properties of a PreKeyRecordStructure.
         * @memberof textsecure
         * @interface IPreKeyRecordStructure
         * @property {number|null} [id] PreKeyRecordStructure id
         * @property {Uint8Array|null} [publicKey] PreKeyRecordStructure publicKey
         * @property {Uint8Array|null} [privateKey] PreKeyRecordStructure privateKey
         */

        /**
         * Constructs a new PreKeyRecordStructure.
         * @memberof textsecure
         * @classdesc Represents a PreKeyRecordStructure.
         * @implements IPreKeyRecordStructure
         * @constructor
         * @param {textsecure.IPreKeyRecordStructure=} [properties] Properties to set
         */
        function PreKeyRecordStructure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreKeyRecordStructure id.
         * @member {number|null|undefined} id
         * @memberof textsecure.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.id = null;

        /**
         * PreKeyRecordStructure publicKey.
         * @member {Uint8Array|null|undefined} publicKey
         * @memberof textsecure.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.publicKey = null;

        /**
         * PreKeyRecordStructure privateKey.
         * @member {Uint8Array|null|undefined} privateKey
         * @memberof textsecure.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.privateKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeyRecordStructure.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeyRecordStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeyRecordStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PreKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {textsecure.IPreKeyRecordStructure=} [properties] Properties to set
         * @returns {textsecure.PreKeyRecordStructure} PreKeyRecordStructure instance
         */
        PreKeyRecordStructure.create = function create(properties) {
            return new PreKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified PreKeyRecordStructure message. Does not implicitly {@link textsecure.PreKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {textsecure.IPreKeyRecordStructure} message PreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyRecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.privateKey);
            return writer;
        };

        /**
         * Encodes the specified PreKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.PreKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {textsecure.IPreKeyRecordStructure} message PreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyRecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.PreKeyRecordStructure} PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyRecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.PreKeyRecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.publicKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.privateKey = reader.bytes();
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
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.PreKeyRecordStructure} PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyRecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreKeyRecordStructure message.
         * @function verify
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreKeyRecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                properties._publicKey = 1;
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            }
            if (message.privateKey != null && message.hasOwnProperty("privateKey")) {
                properties._privateKey = 1;
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates a PreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.PreKeyRecordStructure} PreKeyRecordStructure
         */
        PreKeyRecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.PreKeyRecordStructure)
                return object;
            var message = new $root.textsecure.PreKeyRecordStructure();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length >= 0)
                    message.privateKey = object.privateKey;
            return message;
        };

        /**
         * Creates a plain object from a PreKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {textsecure.PreKeyRecordStructure} message PreKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreKeyRecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
                if (options.oneofs)
                    object._publicKey = "publicKey";
            }
            if (message.privateKey != null && message.hasOwnProperty("privateKey")) {
                object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
                if (options.oneofs)
                    object._privateKey = "privateKey";
            }
            return object;
        };

        /**
         * Converts this PreKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof textsecure.PreKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PreKeyRecordStructure
         * @function getTypeUrl
         * @memberof textsecure.PreKeyRecordStructure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PreKeyRecordStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.PreKeyRecordStructure";
        };

        return PreKeyRecordStructure;
    })();

    textsecure.SignedPreKeyRecordStructure = (function() {

        /**
         * Properties of a SignedPreKeyRecordStructure.
         * @memberof textsecure
         * @interface ISignedPreKeyRecordStructure
         * @property {number|null} [id] SignedPreKeyRecordStructure id
         * @property {Uint8Array|null} [publicKey] SignedPreKeyRecordStructure publicKey
         * @property {Uint8Array|null} [privateKey] SignedPreKeyRecordStructure privateKey
         * @property {Uint8Array|null} [signature] SignedPreKeyRecordStructure signature
         * @property {number|Long|null} [timestamp] SignedPreKeyRecordStructure timestamp
         */

        /**
         * Constructs a new SignedPreKeyRecordStructure.
         * @memberof textsecure
         * @classdesc Represents a SignedPreKeyRecordStructure.
         * @implements ISignedPreKeyRecordStructure
         * @constructor
         * @param {textsecure.ISignedPreKeyRecordStructure=} [properties] Properties to set
         */
        function SignedPreKeyRecordStructure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignedPreKeyRecordStructure id.
         * @member {number|null|undefined} id
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.id = null;

        /**
         * SignedPreKeyRecordStructure publicKey.
         * @member {Uint8Array|null|undefined} publicKey
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.publicKey = null;

        /**
         * SignedPreKeyRecordStructure privateKey.
         * @member {Uint8Array|null|undefined} privateKey
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.privateKey = null;

        /**
         * SignedPreKeyRecordStructure signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.signature = null;

        /**
         * SignedPreKeyRecordStructure timestamp.
         * @member {number|Long|null|undefined} timestamp
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.timestamp = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SignedPreKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {textsecure.ISignedPreKeyRecordStructure=} [properties] Properties to set
         * @returns {textsecure.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure instance
         */
        SignedPreKeyRecordStructure.create = function create(properties) {
            return new SignedPreKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified SignedPreKeyRecordStructure message. Does not implicitly {@link textsecure.SignedPreKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {textsecure.ISignedPreKeyRecordStructure} message SignedPreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedPreKeyRecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.privateKey);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified SignedPreKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.SignedPreKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {textsecure.ISignedPreKeyRecordStructure} message SignedPreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedPreKeyRecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedPreKeyRecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SignedPreKeyRecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.publicKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.privateKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.signature = reader.bytes();
                        break;
                    }
                case 5: {
                        message.timestamp = reader.fixed64();
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
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedPreKeyRecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignedPreKeyRecordStructure message.
         * @function verify
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignedPreKeyRecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                properties._publicKey = 1;
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            }
            if (message.privateKey != null && message.hasOwnProperty("privateKey")) {
                properties._privateKey = 1;
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                properties._signature = 1;
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                properties._timestamp = 1;
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a SignedPreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure
         */
        SignedPreKeyRecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SignedPreKeyRecordStructure)
                return object;
            var message = new $root.textsecure.SignedPreKeyRecordStructure();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length >= 0)
                    message.privateKey = object.privateKey;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SignedPreKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {textsecure.SignedPreKeyRecordStructure} message SignedPreKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignedPreKeyRecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
                if (options.oneofs)
                    object._publicKey = "publicKey";
            }
            if (message.privateKey != null && message.hasOwnProperty("privateKey")) {
                object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
                if (options.oneofs)
                    object._privateKey = "privateKey";
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                if (options.oneofs)
                    object._signature = "signature";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                if (options.oneofs)
                    object._timestamp = "timestamp";
            }
            return object;
        };

        /**
         * Converts this SignedPreKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignedPreKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignedPreKeyRecordStructure
         * @function getTypeUrl
         * @memberof textsecure.SignedPreKeyRecordStructure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignedPreKeyRecordStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.SignedPreKeyRecordStructure";
        };

        return SignedPreKeyRecordStructure;
    })();

    textsecure.IdentityKeyPairStructure = (function() {

        /**
         * Properties of an IdentityKeyPairStructure.
         * @memberof textsecure
         * @interface IIdentityKeyPairStructure
         * @property {Uint8Array|null} [publicKey] IdentityKeyPairStructure publicKey
         * @property {Uint8Array|null} [privateKey] IdentityKeyPairStructure privateKey
         */

        /**
         * Constructs a new IdentityKeyPairStructure.
         * @memberof textsecure
         * @classdesc Represents an IdentityKeyPairStructure.
         * @implements IIdentityKeyPairStructure
         * @constructor
         * @param {textsecure.IIdentityKeyPairStructure=} [properties] Properties to set
         */
        function IdentityKeyPairStructure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdentityKeyPairStructure publicKey.
         * @member {Uint8Array|null|undefined} publicKey
         * @memberof textsecure.IdentityKeyPairStructure
         * @instance
         */
        IdentityKeyPairStructure.prototype.publicKey = null;

        /**
         * IdentityKeyPairStructure privateKey.
         * @member {Uint8Array|null|undefined} privateKey
         * @memberof textsecure.IdentityKeyPairStructure
         * @instance
         */
        IdentityKeyPairStructure.prototype.privateKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IdentityKeyPairStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IdentityKeyPairStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new IdentityKeyPairStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {textsecure.IIdentityKeyPairStructure=} [properties] Properties to set
         * @returns {textsecure.IdentityKeyPairStructure} IdentityKeyPairStructure instance
         */
        IdentityKeyPairStructure.create = function create(properties) {
            return new IdentityKeyPairStructure(properties);
        };

        /**
         * Encodes the specified IdentityKeyPairStructure message. Does not implicitly {@link textsecure.IdentityKeyPairStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {textsecure.IIdentityKeyPairStructure} message IdentityKeyPairStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdentityKeyPairStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
            if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.privateKey);
            return writer;
        };

        /**
         * Encodes the specified IdentityKeyPairStructure message, length delimited. Does not implicitly {@link textsecure.IdentityKeyPairStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {textsecure.IIdentityKeyPairStructure} message IdentityKeyPairStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdentityKeyPairStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.IdentityKeyPairStructure} IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdentityKeyPairStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.IdentityKeyPairStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.publicKey = reader.bytes();
                        break;
                    }
                case 2: {
                        message.privateKey = reader.bytes();
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
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.IdentityKeyPairStructure} IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdentityKeyPairStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdentityKeyPairStructure message.
         * @function verify
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdentityKeyPairStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                properties._publicKey = 1;
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            }
            if (message.privateKey != null && message.hasOwnProperty("privateKey")) {
                properties._privateKey = 1;
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates an IdentityKeyPairStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.IdentityKeyPairStructure} IdentityKeyPairStructure
         */
        IdentityKeyPairStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.IdentityKeyPairStructure)
                return object;
            var message = new $root.textsecure.IdentityKeyPairStructure();
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length >= 0)
                    message.privateKey = object.privateKey;
            return message;
        };

        /**
         * Creates a plain object from an IdentityKeyPairStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {textsecure.IdentityKeyPairStructure} message IdentityKeyPairStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdentityKeyPairStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.publicKey != null && message.hasOwnProperty("publicKey")) {
                object.publicKey = options.bytes === String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicKey) : message.publicKey;
                if (options.oneofs)
                    object._publicKey = "publicKey";
            }
            if (message.privateKey != null && message.hasOwnProperty("privateKey")) {
                object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
                if (options.oneofs)
                    object._privateKey = "privateKey";
            }
            return object;
        };

        /**
         * Converts this IdentityKeyPairStructure to JSON.
         * @function toJSON
         * @memberof textsecure.IdentityKeyPairStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdentityKeyPairStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IdentityKeyPairStructure
         * @function getTypeUrl
         * @memberof textsecure.IdentityKeyPairStructure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IdentityKeyPairStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.IdentityKeyPairStructure";
        };

        return IdentityKeyPairStructure;
    })();

    textsecure.SenderKeyStateStructure = (function() {

        /**
         * Properties of a SenderKeyStateStructure.
         * @memberof textsecure
         * @interface ISenderKeyStateStructure
         * @property {number|null} [senderKeyId] SenderKeyStateStructure senderKeyId
         * @property {textsecure.SenderKeyStateStructure.ISenderChainKey|null} [senderChainKey] SenderKeyStateStructure senderChainKey
         * @property {textsecure.SenderKeyStateStructure.ISenderSigningKey|null} [senderSigningKey] SenderKeyStateStructure senderSigningKey
         * @property {Array.<textsecure.SenderKeyStateStructure.ISenderMessageKey>|null} [senderMessageKeys] SenderKeyStateStructure senderMessageKeys
         */

        /**
         * Constructs a new SenderKeyStateStructure.
         * @memberof textsecure
         * @classdesc Represents a SenderKeyStateStructure.
         * @implements ISenderKeyStateStructure
         * @constructor
         * @param {textsecure.ISenderKeyStateStructure=} [properties] Properties to set
         */
        function SenderKeyStateStructure(properties) {
            this.senderMessageKeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyStateStructure senderKeyId.
         * @member {number|null|undefined} senderKeyId
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderKeyId = null;

        /**
         * SenderKeyStateStructure senderChainKey.
         * @member {textsecure.SenderKeyStateStructure.ISenderChainKey|null|undefined} senderChainKey
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderChainKey = null;

        /**
         * SenderKeyStateStructure senderSigningKey.
         * @member {textsecure.SenderKeyStateStructure.ISenderSigningKey|null|undefined} senderSigningKey
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderSigningKey = null;

        /**
         * SenderKeyStateStructure senderMessageKeys.
         * @member {Array.<textsecure.SenderKeyStateStructure.ISenderMessageKey>} senderMessageKeys
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyStateStructure.prototype, "_senderKeyId", {
            get: $util.oneOfGetter($oneOfFields = ["senderKeyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyStateStructure.prototype, "_senderChainKey", {
            get: $util.oneOfGetter($oneOfFields = ["senderChainKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyStateStructure.prototype, "_senderSigningKey", {
            get: $util.oneOfGetter($oneOfFields = ["senderSigningKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {textsecure.ISenderKeyStateStructure=} [properties] Properties to set
         * @returns {textsecure.SenderKeyStateStructure} SenderKeyStateStructure instance
         */
        SenderKeyStateStructure.create = function create(properties) {
            return new SenderKeyStateStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link textsecure.SenderKeyStateStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {textsecure.ISenderKeyStateStructure} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderKeyId != null && Object.hasOwnProperty.call(message, "senderKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.senderKeyId);
            if (message.senderChainKey != null && Object.hasOwnProperty.call(message, "senderChainKey"))
                $root.textsecure.SenderKeyStateStructure.SenderChainKey.encode(message.senderChainKey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.senderSigningKey != null && Object.hasOwnProperty.call(message, "senderSigningKey"))
                $root.textsecure.SenderKeyStateStructure.SenderSigningKey.encode(message.senderSigningKey, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.senderMessageKeys != null && message.senderMessageKeys.length)
                for (var i = 0; i < message.senderMessageKeys.length; ++i)
                    $root.textsecure.SenderKeyStateStructure.SenderMessageKey.encode(message.senderMessageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {textsecure.ISenderKeyStateStructure} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SenderKeyStateStructure} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyStateStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.senderKeyId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.senderChainKey = $root.textsecure.SenderKeyStateStructure.SenderChainKey.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.senderSigningKey = $root.textsecure.SenderKeyStateStructure.SenderSigningKey.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.senderMessageKeys && message.senderMessageKeys.length))
                            message.senderMessageKeys = [];
                        message.senderMessageKeys.push($root.textsecure.SenderKeyStateStructure.SenderMessageKey.decode(reader, reader.uint32()));
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
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SenderKeyStateStructure} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyStateStructure message.
         * @function verify
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyStateStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.senderKeyId != null && message.hasOwnProperty("senderKeyId")) {
                properties._senderKeyId = 1;
                if (!$util.isInteger(message.senderKeyId))
                    return "senderKeyId: integer expected";
            }
            if (message.senderChainKey != null && message.hasOwnProperty("senderChainKey")) {
                properties._senderChainKey = 1;
                {
                    var error = $root.textsecure.SenderKeyStateStructure.SenderChainKey.verify(message.senderChainKey);
                    if (error)
                        return "senderChainKey." + error;
                }
            }
            if (message.senderSigningKey != null && message.hasOwnProperty("senderSigningKey")) {
                properties._senderSigningKey = 1;
                {
                    var error = $root.textsecure.SenderKeyStateStructure.SenderSigningKey.verify(message.senderSigningKey);
                    if (error)
                        return "senderSigningKey." + error;
                }
            }
            if (message.senderMessageKeys != null && message.hasOwnProperty("senderMessageKeys")) {
                if (!Array.isArray(message.senderMessageKeys))
                    return "senderMessageKeys: array expected";
                for (var i = 0; i < message.senderMessageKeys.length; ++i) {
                    var error = $root.textsecure.SenderKeyStateStructure.SenderMessageKey.verify(message.senderMessageKeys[i]);
                    if (error)
                        return "senderMessageKeys." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SenderKeyStateStructure} SenderKeyStateStructure
         */
        SenderKeyStateStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SenderKeyStateStructure)
                return object;
            var message = new $root.textsecure.SenderKeyStateStructure();
            if (object.senderKeyId != null)
                message.senderKeyId = object.senderKeyId >>> 0;
            if (object.senderChainKey != null) {
                if (typeof object.senderChainKey !== "object")
                    throw TypeError(".textsecure.SenderKeyStateStructure.senderChainKey: object expected");
                message.senderChainKey = $root.textsecure.SenderKeyStateStructure.SenderChainKey.fromObject(object.senderChainKey);
            }
            if (object.senderSigningKey != null) {
                if (typeof object.senderSigningKey !== "object")
                    throw TypeError(".textsecure.SenderKeyStateStructure.senderSigningKey: object expected");
                message.senderSigningKey = $root.textsecure.SenderKeyStateStructure.SenderSigningKey.fromObject(object.senderSigningKey);
            }
            if (object.senderMessageKeys) {
                if (!Array.isArray(object.senderMessageKeys))
                    throw TypeError(".textsecure.SenderKeyStateStructure.senderMessageKeys: array expected");
                message.senderMessageKeys = [];
                for (var i = 0; i < object.senderMessageKeys.length; ++i) {
                    if (typeof object.senderMessageKeys[i] !== "object")
                        throw TypeError(".textsecure.SenderKeyStateStructure.senderMessageKeys: object expected");
                    message.senderMessageKeys[i] = $root.textsecure.SenderKeyStateStructure.SenderMessageKey.fromObject(object.senderMessageKeys[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {textsecure.SenderKeyStateStructure} message SenderKeyStateStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyStateStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.senderMessageKeys = [];
            if (message.senderKeyId != null && message.hasOwnProperty("senderKeyId")) {
                object.senderKeyId = message.senderKeyId;
                if (options.oneofs)
                    object._senderKeyId = "senderKeyId";
            }
            if (message.senderChainKey != null && message.hasOwnProperty("senderChainKey")) {
                object.senderChainKey = $root.textsecure.SenderKeyStateStructure.SenderChainKey.toObject(message.senderChainKey, options);
                if (options.oneofs)
                    object._senderChainKey = "senderChainKey";
            }
            if (message.senderSigningKey != null && message.hasOwnProperty("senderSigningKey")) {
                object.senderSigningKey = $root.textsecure.SenderKeyStateStructure.SenderSigningKey.toObject(message.senderSigningKey, options);
                if (options.oneofs)
                    object._senderSigningKey = "senderSigningKey";
            }
            if (message.senderMessageKeys && message.senderMessageKeys.length) {
                object.senderMessageKeys = [];
                for (var j = 0; j < message.senderMessageKeys.length; ++j)
                    object.senderMessageKeys[j] = $root.textsecure.SenderKeyStateStructure.SenderMessageKey.toObject(message.senderMessageKeys[j], options);
            }
            return object;
        };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @function toJSON
         * @memberof textsecure.SenderKeyStateStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyStateStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SenderKeyStateStructure
         * @function getTypeUrl
         * @memberof textsecure.SenderKeyStateStructure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SenderKeyStateStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.SenderKeyStateStructure";
        };

        SenderKeyStateStructure.SenderChainKey = (function() {

            /**
             * Properties of a SenderChainKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @interface ISenderChainKey
             * @property {number|null} [iteration] SenderChainKey iteration
             * @property {Uint8Array|null} [seed] SenderChainKey seed
             */

            /**
             * Constructs a new SenderChainKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @classdesc Represents a SenderChainKey.
             * @implements ISenderChainKey
             * @constructor
             * @param {textsecure.SenderKeyStateStructure.ISenderChainKey=} [properties] Properties to set
             */
            function SenderChainKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SenderChainKey iteration.
             * @member {number|null|undefined} iteration
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @instance
             */
            SenderChainKey.prototype.iteration = null;

            /**
             * SenderChainKey seed.
             * @member {Uint8Array|null|undefined} seed
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @instance
             */
            SenderChainKey.prototype.seed = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderChainKey.prototype, "_iteration", {
                get: $util.oneOfGetter($oneOfFields = ["iteration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderChainKey.prototype, "_seed", {
                get: $util.oneOfGetter($oneOfFields = ["seed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SenderChainKey instance using the specified properties.
             * @function create
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderChainKey=} [properties] Properties to set
             * @returns {textsecure.SenderKeyStateStructure.SenderChainKey} SenderChainKey instance
             */
            SenderChainKey.create = function create(properties) {
                return new SenderChainKey(properties);
            };

            /**
             * Encodes the specified SenderChainKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderChainKey} message SenderChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChainKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
                if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                return writer;
            };

            /**
             * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderChainKey} message SenderChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChainKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SenderKeyStateStructure.SenderChainKey} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChainKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyStateStructure.SenderChainKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.iteration = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.seed = reader.bytes();
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
             * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SenderKeyStateStructure.SenderChainKey} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChainKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderChainKey message.
             * @function verify
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderChainKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.iteration != null && message.hasOwnProperty("iteration")) {
                    properties._iteration = 1;
                    if (!$util.isInteger(message.iteration))
                        return "iteration: integer expected";
                }
                if (message.seed != null && message.hasOwnProperty("seed")) {
                    properties._seed = 1;
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                }
                return null;
            };

            /**
             * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SenderKeyStateStructure.SenderChainKey} SenderChainKey
             */
            SenderChainKey.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SenderKeyStateStructure.SenderChainKey)
                    return object;
                var message = new $root.textsecure.SenderKeyStateStructure.SenderChainKey();
                if (object.iteration != null)
                    message.iteration = object.iteration >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length >= 0)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.SenderChainKey} message SenderChainKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderChainKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.iteration != null && message.hasOwnProperty("iteration")) {
                    object.iteration = message.iteration;
                    if (options.oneofs)
                        object._iteration = "iteration";
                }
                if (message.seed != null && message.hasOwnProperty("seed")) {
                    object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
                    if (options.oneofs)
                        object._seed = "seed";
                }
                return object;
            };

            /**
             * Converts this SenderChainKey to JSON.
             * @function toJSON
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderChainKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SenderChainKey
             * @function getTypeUrl
             * @memberof textsecure.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SenderChainKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/textsecure.SenderKeyStateStructure.SenderChainKey";
            };

            return SenderChainKey;
        })();

        SenderKeyStateStructure.SenderMessageKey = (function() {

            /**
             * Properties of a SenderMessageKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @interface ISenderMessageKey
             * @property {number|null} [iteration] SenderMessageKey iteration
             * @property {Uint8Array|null} [seed] SenderMessageKey seed
             */

            /**
             * Constructs a new SenderMessageKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @classdesc Represents a SenderMessageKey.
             * @implements ISenderMessageKey
             * @constructor
             * @param {textsecure.SenderKeyStateStructure.ISenderMessageKey=} [properties] Properties to set
             */
            function SenderMessageKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SenderMessageKey iteration.
             * @member {number|null|undefined} iteration
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @instance
             */
            SenderMessageKey.prototype.iteration = null;

            /**
             * SenderMessageKey seed.
             * @member {Uint8Array|null|undefined} seed
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @instance
             */
            SenderMessageKey.prototype.seed = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderMessageKey.prototype, "_iteration", {
                get: $util.oneOfGetter($oneOfFields = ["iteration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderMessageKey.prototype, "_seed", {
                get: $util.oneOfGetter($oneOfFields = ["seed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SenderMessageKey instance using the specified properties.
             * @function create
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderMessageKey=} [properties] Properties to set
             * @returns {textsecure.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey instance
             */
            SenderMessageKey.create = function create(properties) {
                return new SenderMessageKey(properties);
            };

            /**
             * Encodes the specified SenderMessageKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderMessageKey} message SenderMessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderMessageKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
                if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                return writer;
            };

            /**
             * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderMessageKey} message SenderMessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderMessageKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderMessageKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyStateStructure.SenderMessageKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.iteration = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.seed = reader.bytes();
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
             * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderMessageKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderMessageKey message.
             * @function verify
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderMessageKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.iteration != null && message.hasOwnProperty("iteration")) {
                    properties._iteration = 1;
                    if (!$util.isInteger(message.iteration))
                        return "iteration: integer expected";
                }
                if (message.seed != null && message.hasOwnProperty("seed")) {
                    properties._seed = 1;
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                }
                return null;
            };

            /**
             * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey
             */
            SenderMessageKey.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SenderKeyStateStructure.SenderMessageKey)
                    return object;
                var message = new $root.textsecure.SenderKeyStateStructure.SenderMessageKey();
                if (object.iteration != null)
                    message.iteration = object.iteration >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length >= 0)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.SenderMessageKey} message SenderMessageKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderMessageKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.iteration != null && message.hasOwnProperty("iteration")) {
                    object.iteration = message.iteration;
                    if (options.oneofs)
                        object._iteration = "iteration";
                }
                if (message.seed != null && message.hasOwnProperty("seed")) {
                    object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
                    if (options.oneofs)
                        object._seed = "seed";
                }
                return object;
            };

            /**
             * Converts this SenderMessageKey to JSON.
             * @function toJSON
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderMessageKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SenderMessageKey
             * @function getTypeUrl
             * @memberof textsecure.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SenderMessageKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/textsecure.SenderKeyStateStructure.SenderMessageKey";
            };

            return SenderMessageKey;
        })();

        SenderKeyStateStructure.SenderSigningKey = (function() {

            /**
             * Properties of a SenderSigningKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @interface ISenderSigningKey
             * @property {Uint8Array|null} ["public"] SenderSigningKey public
             * @property {Uint8Array|null} ["private"] SenderSigningKey private
             */

            /**
             * Constructs a new SenderSigningKey.
             * @memberof textsecure.SenderKeyStateStructure
             * @classdesc Represents a SenderSigningKey.
             * @implements ISenderSigningKey
             * @constructor
             * @param {textsecure.SenderKeyStateStructure.ISenderSigningKey=} [properties] Properties to set
             */
            function SenderSigningKey(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SenderSigningKey public.
             * @member {Uint8Array|null|undefined} public
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @instance
             */
            SenderSigningKey.prototype["public"] = null;

            /**
             * SenderSigningKey private.
             * @member {Uint8Array|null|undefined} private
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @instance
             */
            SenderSigningKey.prototype["private"] = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderSigningKey.prototype, "_public", {
                get: $util.oneOfGetter($oneOfFields = ["public"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderSigningKey.prototype, "_private", {
                get: $util.oneOfGetter($oneOfFields = ["private"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SenderSigningKey instance using the specified properties.
             * @function create
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderSigningKey=} [properties] Properties to set
             * @returns {textsecure.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey instance
             */
            SenderSigningKey.create = function create(properties) {
                return new SenderSigningKey(properties);
            };

            /**
             * Encodes the specified SenderSigningKey message. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @function encode
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderSigningKey} message SenderSigningKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderSigningKey.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["public"] != null && Object.hasOwnProperty.call(message, "public"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message["public"]);
                if (message["private"] != null && Object.hasOwnProperty.call(message, "private"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["private"]);
                return writer;
            };

            /**
             * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link textsecure.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.ISenderSigningKey} message SenderSigningKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderSigningKey.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer.
             * @function decode
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {textsecure.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderSigningKey.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyStateStructure.SenderSigningKey();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message["public"] = reader.bytes();
                            break;
                        }
                    case 2: {
                            message["private"] = reader.bytes();
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
             * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {textsecure.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderSigningKey.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderSigningKey message.
             * @function verify
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderSigningKey.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message["public"] != null && message.hasOwnProperty("public")) {
                    properties._public = 1;
                    if (!(message["public"] && typeof message["public"].length === "number" || $util.isString(message["public"])))
                        return "public: buffer expected";
                }
                if (message["private"] != null && message.hasOwnProperty("private")) {
                    properties._private = 1;
                    if (!(message["private"] && typeof message["private"].length === "number" || $util.isString(message["private"])))
                        return "private: buffer expected";
                }
                return null;
            };

            /**
             * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {textsecure.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey
             */
            SenderSigningKey.fromObject = function fromObject(object) {
                if (object instanceof $root.textsecure.SenderKeyStateStructure.SenderSigningKey)
                    return object;
                var message = new $root.textsecure.SenderKeyStateStructure.SenderSigningKey();
                if (object["public"] != null)
                    if (typeof object["public"] === "string")
                        $util.base64.decode(object["public"], message["public"] = $util.newBuffer($util.base64.length(object["public"])), 0);
                    else if (object["public"].length >= 0)
                        message["public"] = object["public"];
                if (object["private"] != null)
                    if (typeof object["private"] === "string")
                        $util.base64.decode(object["private"], message["private"] = $util.newBuffer($util.base64.length(object["private"])), 0);
                    else if (object["private"].length >= 0)
                        message["private"] = object["private"];
                return message;
            };

            /**
             * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {textsecure.SenderKeyStateStructure.SenderSigningKey} message SenderSigningKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderSigningKey.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message["public"] != null && message.hasOwnProperty("public")) {
                    object["public"] = options.bytes === String ? $util.base64.encode(message["public"], 0, message["public"].length) : options.bytes === Array ? Array.prototype.slice.call(message["public"]) : message["public"];
                    if (options.oneofs)
                        object._public = "public";
                }
                if (message["private"] != null && message.hasOwnProperty("private")) {
                    object["private"] = options.bytes === String ? $util.base64.encode(message["private"], 0, message["private"].length) : options.bytes === Array ? Array.prototype.slice.call(message["private"]) : message["private"];
                    if (options.oneofs)
                        object._private = "private";
                }
                return object;
            };

            /**
             * Converts this SenderSigningKey to JSON.
             * @function toJSON
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderSigningKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SenderSigningKey
             * @function getTypeUrl
             * @memberof textsecure.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SenderSigningKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/textsecure.SenderKeyStateStructure.SenderSigningKey";
            };

            return SenderSigningKey;
        })();

        return SenderKeyStateStructure;
    })();

    textsecure.SenderKeyRecordStructure = (function() {

        /**
         * Properties of a SenderKeyRecordStructure.
         * @memberof textsecure
         * @interface ISenderKeyRecordStructure
         * @property {Array.<textsecure.ISenderKeyStateStructure>|null} [senderKeyStates] SenderKeyRecordStructure senderKeyStates
         */

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @memberof textsecure
         * @classdesc Represents a SenderKeyRecordStructure.
         * @implements ISenderKeyRecordStructure
         * @constructor
         * @param {textsecure.ISenderKeyRecordStructure=} [properties] Properties to set
         */
        function SenderKeyRecordStructure(properties) {
            this.senderKeyStates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyRecordStructure senderKeyStates.
         * @member {Array.<textsecure.ISenderKeyStateStructure>} senderKeyStates
         * @memberof textsecure.SenderKeyRecordStructure
         * @instance
         */
        SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {textsecure.ISenderKeyRecordStructure=} [properties] Properties to set
         * @returns {textsecure.SenderKeyRecordStructure} SenderKeyRecordStructure instance
         */
        SenderKeyRecordStructure.create = function create(properties) {
            return new SenderKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link textsecure.SenderKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {textsecure.ISenderKeyRecordStructure} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderKeyStates != null && message.senderKeyStates.length)
                for (var i = 0; i < message.senderKeyStates.length; ++i)
                    $root.textsecure.SenderKeyStateStructure.encode(message.senderKeyStates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link textsecure.SenderKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {textsecure.ISenderKeyRecordStructure} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {textsecure.SenderKeyRecordStructure} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.textsecure.SenderKeyRecordStructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.senderKeyStates && message.senderKeyStates.length))
                            message.senderKeyStates = [];
                        message.senderKeyStates.push($root.textsecure.SenderKeyStateStructure.decode(reader, reader.uint32()));
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
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {textsecure.SenderKeyRecordStructure} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @function verify
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyRecordStructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderKeyStates != null && message.hasOwnProperty("senderKeyStates")) {
                if (!Array.isArray(message.senderKeyStates))
                    return "senderKeyStates: array expected";
                for (var i = 0; i < message.senderKeyStates.length; ++i) {
                    var error = $root.textsecure.SenderKeyStateStructure.verify(message.senderKeyStates[i]);
                    if (error)
                        return "senderKeyStates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {textsecure.SenderKeyRecordStructure} SenderKeyRecordStructure
         */
        SenderKeyRecordStructure.fromObject = function fromObject(object) {
            if (object instanceof $root.textsecure.SenderKeyRecordStructure)
                return object;
            var message = new $root.textsecure.SenderKeyRecordStructure();
            if (object.senderKeyStates) {
                if (!Array.isArray(object.senderKeyStates))
                    throw TypeError(".textsecure.SenderKeyRecordStructure.senderKeyStates: array expected");
                message.senderKeyStates = [];
                for (var i = 0; i < object.senderKeyStates.length; ++i) {
                    if (typeof object.senderKeyStates[i] !== "object")
                        throw TypeError(".textsecure.SenderKeyRecordStructure.senderKeyStates: object expected");
                    message.senderKeyStates[i] = $root.textsecure.SenderKeyStateStructure.fromObject(object.senderKeyStates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {textsecure.SenderKeyRecordStructure} message SenderKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyRecordStructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.senderKeyStates = [];
            if (message.senderKeyStates && message.senderKeyStates.length) {
                object.senderKeyStates = [];
                for (var j = 0; j < message.senderKeyStates.length; ++j)
                    object.senderKeyStates[j] = $root.textsecure.SenderKeyStateStructure.toObject(message.senderKeyStates[j], options);
            }
            return object;
        };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof textsecure.SenderKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SenderKeyRecordStructure
         * @function getTypeUrl
         * @memberof textsecure.SenderKeyRecordStructure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SenderKeyRecordStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/textsecure.SenderKeyRecordStructure";
        };

        return SenderKeyRecordStructure;
    })();

    return textsecure;
})();

module.exports = $root;
