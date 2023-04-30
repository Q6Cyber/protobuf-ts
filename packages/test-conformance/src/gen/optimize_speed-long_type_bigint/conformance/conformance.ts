// @generated by protobuf-ts 2.9.0 with parameter long_type_bigint,optimize_speed,generate_dependencies
// @generated from protobuf file "conformance/conformance.proto" (package "conformance", syntax proto3)
// tslint:disable
//
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * The conformance runner will request a list of failures as the first request.
 * This will be known by message_type == "conformance.FailureSet", a conformance
 * test should return a serialized FailureSet in protobuf_payload.
 *
 * @generated from protobuf message conformance.FailureSet
 */
export interface FailureSet {
    /**
     * @generated from protobuf field: repeated string failure = 1;
     */
    failure: string[];
}
/**
 * Represents a single test case's input.  The testee should:
 *
 *   1. parse this proto (which should always succeed)
 *   2. parse the protobuf or JSON payload in "payload" (which may fail)
 *   3. if the parse succeeded, serialize the message in the requested format.
 *
 * @generated from protobuf message conformance.ConformanceRequest
 */
export interface ConformanceRequest {
    /**
     * @generated from protobuf oneof: payload
     */
    payload: {
        oneofKind: "protobufPayload";
        /**
         * @generated from protobuf field: bytes protobuf_payload = 1;
         */
        protobufPayload: Uint8Array;
    } | {
        oneofKind: "jsonPayload";
        /**
         * @generated from protobuf field: string json_payload = 2;
         */
        jsonPayload: string;
    } | {
        oneofKind: "jspbPayload";
        /**
         * Google internal only.  Opensource testees just skip it.
         *
         * @generated from protobuf field: string jspb_payload = 7;
         */
        jspbPayload: string;
    } | {
        oneofKind: "textPayload";
        /**
         * @generated from protobuf field: string text_payload = 8;
         */
        textPayload: string;
    } | {
        oneofKind: undefined;
    };
    /**
     * Which format should the testee serialize its message to?
     *
     * @generated from protobuf field: conformance.WireFormat requested_output_format = 3;
     */
    requestedOutputFormat: WireFormat;
    /**
     * The full name for the test message to use; for the moment, either:
     * protobuf_test_messages.proto3.TestAllTypesProto3 or
     * protobuf_test_messages.proto2.TestAllTypesProto2.
     *
     * @generated from protobuf field: string message_type = 4;
     */
    messageType: string;
    /**
     * Each test is given a specific test category. Some category may need
     * specific support in testee programs. Refer to the definition of TestCategory
     * for more information.
     *
     * @generated from protobuf field: conformance.TestCategory test_category = 5;
     */
    testCategory: TestCategory;
    /**
     * Specify details for how to encode jspb.
     *
     * @generated from protobuf field: conformance.JspbEncodingConfig jspb_encoding_options = 6;
     */
    jspbEncodingOptions?: JspbEncodingConfig;
    /**
     * This can be used in json and text format. If true, testee should print
     * unknown fields instead of ignore. This feature is optional.
     *
     * @generated from protobuf field: bool print_unknown_fields = 9;
     */
    printUnknownFields: boolean;
}
/**
 * Represents a single test case's output.
 *
 * @generated from protobuf message conformance.ConformanceResponse
 */
export interface ConformanceResponse {
    /**
     * @generated from protobuf oneof: result
     */
    result: {
        oneofKind: "parseError";
        /**
         * This string should be set to indicate parsing failed.  The string can
         * provide more information about the parse error if it is available.
         *
         * Setting this string does not necessarily mean the testee failed the
         * test.  Some of the test cases are intentionally invalid input.
         *
         * @generated from protobuf field: string parse_error = 1;
         */
        parseError: string;
    } | {
        oneofKind: "serializeError";
        /**
         * If the input was successfully parsed but errors occurred when
         * serializing it to the requested output format, set the error message in
         * this field.
         *
         * @generated from protobuf field: string serialize_error = 6;
         */
        serializeError: string;
    } | {
        oneofKind: "runtimeError";
        /**
         * This should be set if some other error occurred.  This will always
         * indicate that the test failed.  The string can provide more information
         * about the failure.
         *
         * @generated from protobuf field: string runtime_error = 2;
         */
        runtimeError: string;
    } | {
        oneofKind: "protobufPayload";
        /**
         * If the input was successfully parsed and the requested output was
         * protobuf, serialize it to protobuf and set it in this field.
         *
         * @generated from protobuf field: bytes protobuf_payload = 3;
         */
        protobufPayload: Uint8Array;
    } | {
        oneofKind: "jsonPayload";
        /**
         * If the input was successfully parsed and the requested output was JSON,
         * serialize to JSON and set it in this field.
         *
         * @generated from protobuf field: string json_payload = 4;
         */
        jsonPayload: string;
    } | {
        oneofKind: "skipped";
        /**
         * For when the testee skipped the test, likely because a certain feature
         * wasn't supported, like JSON input/output.
         *
         * @generated from protobuf field: string skipped = 5;
         */
        skipped: string;
    } | {
        oneofKind: "jspbPayload";
        /**
         * If the input was successfully parsed and the requested output was JSPB,
         * serialize to JSPB and set it in this field. JSPB is google internal only
         * format. Opensource testees can just skip it.
         *
         * @generated from protobuf field: string jspb_payload = 7;
         */
        jspbPayload: string;
    } | {
        oneofKind: "textPayload";
        /**
         * If the input was successfully parsed and the requested output was
         * TEXT_FORMAT, serialize to TEXT_FORMAT and set it in this field.
         *
         * @generated from protobuf field: string text_payload = 8;
         */
        textPayload: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Encoding options for jspb format.
 *
 * @generated from protobuf message conformance.JspbEncodingConfig
 */
export interface JspbEncodingConfig {
    /**
     * Encode the value field of Any as jspb array if true, otherwise binary.
     *
     * @generated from protobuf field: bool use_jspb_array_any_format = 1;
     */
    useJspbArrayAnyFormat: boolean;
}
// This defines the conformance testing protocol.  This protocol exists between
// the conformance test suite itself and the code being tested.  For each test,
// the suite will send a ConformanceRequest message and expect a
// ConformanceResponse message.
// 
// You can either run the tests in two different ways:
// 
//   1. in-process (using the interface in conformance_test.h).
// 
//   2. as a sub-process communicating over a pipe.  Information about how to
//      do this is in conformance_test_runner.cc.
// 
// Pros/cons of the two approaches:
// 
//   - running as a sub-process is much simpler for languages other than C/C++.
// 
//   - running as a sub-process may be more tricky in unusual environments like
//     iOS apps, where fork/stdin/stdout are not available.

/**
 * @generated from protobuf enum conformance.WireFormat
 */
export enum WireFormat {
    /**
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: PROTOBUF = 1;
     */
    PROTOBUF = 1,
    /**
     * @generated from protobuf enum value: JSON = 2;
     */
    JSON = 2,
    /**
     * Google internal only. Opensource testees just skip it.
     *
     * @generated from protobuf enum value: JSPB = 3;
     */
    JSPB = 3,
    /**
     * @generated from protobuf enum value: TEXT_FORMAT = 4;
     */
    TEXT_FORMAT = 4
}
/**
 * @generated from protobuf enum conformance.TestCategory
 */
export enum TestCategory {
    /**
     * @generated from protobuf enum value: UNSPECIFIED_TEST = 0;
     */
    UNSPECIFIED_TEST = 0,
    /**
     * Test binary wire format.
     *
     * @generated from protobuf enum value: BINARY_TEST = 1;
     */
    BINARY_TEST = 1,
    /**
     * Test json wire format.
     *
     * @generated from protobuf enum value: JSON_TEST = 2;
     */
    JSON_TEST = 2,
    /**
     * Similar to JSON_TEST. However, during parsing json, testee should ignore
     * unknown fields. This feature is optional. Each implementation can decide
     * whether to support it.  See
     * https://developers.google.com/protocol-buffers/docs/proto3#json_options
     * for more detail.
     *
     * @generated from protobuf enum value: JSON_IGNORE_UNKNOWN_PARSING_TEST = 3;
     */
    JSON_IGNORE_UNKNOWN_PARSING_TEST = 3,
    /**
     * Test jspb wire format. Google internal only. Opensource testees just skip it.
     *
     * @generated from protobuf enum value: JSPB_TEST = 4;
     */
    JSPB_TEST = 4,
    /**
     * Test text format. For cpp, java and python, testees can already deal with
     * this type. Testees of other languages can simply skip it.
     *
     * @generated from protobuf enum value: TEXT_FORMAT_TEST = 5;
     */
    TEXT_FORMAT_TEST = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class FailureSet$Type extends MessageType<FailureSet> {
    constructor() {
        super("conformance.FailureSet", [
            { no: 1, name: "failure", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<FailureSet>): FailureSet {
        const message = { failure: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FailureSet>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FailureSet): FailureSet {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string failure */ 1:
                    message.failure.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: FailureSet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string failure = 1; */
        for (let i = 0; i < message.failure.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.failure[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message conformance.FailureSet
 */
export const FailureSet = new FailureSet$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConformanceRequest$Type extends MessageType<ConformanceRequest> {
    constructor() {
        super("conformance.ConformanceRequest", [
            { no: 1, name: "protobuf_payload", kind: "scalar", oneof: "payload", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "json_payload", kind: "scalar", oneof: "payload", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "jspb_payload", kind: "scalar", oneof: "payload", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "text_payload", kind: "scalar", oneof: "payload", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "requested_output_format", kind: "enum", T: () => ["conformance.WireFormat", WireFormat] },
            { no: 4, name: "message_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "test_category", kind: "enum", T: () => ["conformance.TestCategory", TestCategory] },
            { no: 6, name: "jspb_encoding_options", kind: "message", T: () => JspbEncodingConfig },
            { no: 9, name: "print_unknown_fields", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<ConformanceRequest>): ConformanceRequest {
        const message = { payload: { oneofKind: undefined }, requestedOutputFormat: 0, messageType: "", testCategory: 0, printUnknownFields: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConformanceRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConformanceRequest): ConformanceRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes protobuf_payload */ 1:
                    message.payload = {
                        oneofKind: "protobufPayload",
                        protobufPayload: reader.bytes()
                    };
                    break;
                case /* string json_payload */ 2:
                    message.payload = {
                        oneofKind: "jsonPayload",
                        jsonPayload: reader.string()
                    };
                    break;
                case /* string jspb_payload */ 7:
                    message.payload = {
                        oneofKind: "jspbPayload",
                        jspbPayload: reader.string()
                    };
                    break;
                case /* string text_payload */ 8:
                    message.payload = {
                        oneofKind: "textPayload",
                        textPayload: reader.string()
                    };
                    break;
                case /* conformance.WireFormat requested_output_format */ 3:
                    message.requestedOutputFormat = reader.int32();
                    break;
                case /* string message_type */ 4:
                    message.messageType = reader.string();
                    break;
                case /* conformance.TestCategory test_category */ 5:
                    message.testCategory = reader.int32();
                    break;
                case /* conformance.JspbEncodingConfig jspb_encoding_options */ 6:
                    message.jspbEncodingOptions = JspbEncodingConfig.internalBinaryRead(reader, reader.uint32(), options, message.jspbEncodingOptions);
                    break;
                case /* bool print_unknown_fields */ 9:
                    message.printUnknownFields = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ConformanceRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes protobuf_payload = 1; */
        if (message.payload.oneofKind === "protobufPayload")
            writer.tag(1, WireType.LengthDelimited).bytes(message.payload.protobufPayload);
        /* string json_payload = 2; */
        if (message.payload.oneofKind === "jsonPayload")
            writer.tag(2, WireType.LengthDelimited).string(message.payload.jsonPayload);
        /* string jspb_payload = 7; */
        if (message.payload.oneofKind === "jspbPayload")
            writer.tag(7, WireType.LengthDelimited).string(message.payload.jspbPayload);
        /* string text_payload = 8; */
        if (message.payload.oneofKind === "textPayload")
            writer.tag(8, WireType.LengthDelimited).string(message.payload.textPayload);
        /* conformance.WireFormat requested_output_format = 3; */
        if (message.requestedOutputFormat !== 0)
            writer.tag(3, WireType.Varint).int32(message.requestedOutputFormat);
        /* string message_type = 4; */
        if (message.messageType !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.messageType);
        /* conformance.TestCategory test_category = 5; */
        if (message.testCategory !== 0)
            writer.tag(5, WireType.Varint).int32(message.testCategory);
        /* conformance.JspbEncodingConfig jspb_encoding_options = 6; */
        if (message.jspbEncodingOptions)
            JspbEncodingConfig.internalBinaryWrite(message.jspbEncodingOptions, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* bool print_unknown_fields = 9; */
        if (message.printUnknownFields !== false)
            writer.tag(9, WireType.Varint).bool(message.printUnknownFields);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message conformance.ConformanceRequest
 */
export const ConformanceRequest = new ConformanceRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConformanceResponse$Type extends MessageType<ConformanceResponse> {
    constructor() {
        super("conformance.ConformanceResponse", [
            { no: 1, name: "parse_error", kind: "scalar", oneof: "result", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "serialize_error", kind: "scalar", oneof: "result", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "runtime_error", kind: "scalar", oneof: "result", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "protobuf_payload", kind: "scalar", oneof: "result", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "json_payload", kind: "scalar", oneof: "result", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "skipped", kind: "scalar", oneof: "result", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "jspb_payload", kind: "scalar", oneof: "result", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "text_payload", kind: "scalar", oneof: "result", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ConformanceResponse>): ConformanceResponse {
        const message = { result: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ConformanceResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConformanceResponse): ConformanceResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string parse_error */ 1:
                    message.result = {
                        oneofKind: "parseError",
                        parseError: reader.string()
                    };
                    break;
                case /* string serialize_error */ 6:
                    message.result = {
                        oneofKind: "serializeError",
                        serializeError: reader.string()
                    };
                    break;
                case /* string runtime_error */ 2:
                    message.result = {
                        oneofKind: "runtimeError",
                        runtimeError: reader.string()
                    };
                    break;
                case /* bytes protobuf_payload */ 3:
                    message.result = {
                        oneofKind: "protobufPayload",
                        protobufPayload: reader.bytes()
                    };
                    break;
                case /* string json_payload */ 4:
                    message.result = {
                        oneofKind: "jsonPayload",
                        jsonPayload: reader.string()
                    };
                    break;
                case /* string skipped */ 5:
                    message.result = {
                        oneofKind: "skipped",
                        skipped: reader.string()
                    };
                    break;
                case /* string jspb_payload */ 7:
                    message.result = {
                        oneofKind: "jspbPayload",
                        jspbPayload: reader.string()
                    };
                    break;
                case /* string text_payload */ 8:
                    message.result = {
                        oneofKind: "textPayload",
                        textPayload: reader.string()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ConformanceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string parse_error = 1; */
        if (message.result.oneofKind === "parseError")
            writer.tag(1, WireType.LengthDelimited).string(message.result.parseError);
        /* string serialize_error = 6; */
        if (message.result.oneofKind === "serializeError")
            writer.tag(6, WireType.LengthDelimited).string(message.result.serializeError);
        /* string runtime_error = 2; */
        if (message.result.oneofKind === "runtimeError")
            writer.tag(2, WireType.LengthDelimited).string(message.result.runtimeError);
        /* bytes protobuf_payload = 3; */
        if (message.result.oneofKind === "protobufPayload")
            writer.tag(3, WireType.LengthDelimited).bytes(message.result.protobufPayload);
        /* string json_payload = 4; */
        if (message.result.oneofKind === "jsonPayload")
            writer.tag(4, WireType.LengthDelimited).string(message.result.jsonPayload);
        /* string skipped = 5; */
        if (message.result.oneofKind === "skipped")
            writer.tag(5, WireType.LengthDelimited).string(message.result.skipped);
        /* string jspb_payload = 7; */
        if (message.result.oneofKind === "jspbPayload")
            writer.tag(7, WireType.LengthDelimited).string(message.result.jspbPayload);
        /* string text_payload = 8; */
        if (message.result.oneofKind === "textPayload")
            writer.tag(8, WireType.LengthDelimited).string(message.result.textPayload);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message conformance.ConformanceResponse
 */
export const ConformanceResponse = new ConformanceResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JspbEncodingConfig$Type extends MessageType<JspbEncodingConfig> {
    constructor() {
        super("conformance.JspbEncodingConfig", [
            { no: 1, name: "use_jspb_array_any_format", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<JspbEncodingConfig>): JspbEncodingConfig {
        const message = { useJspbArrayAnyFormat: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JspbEncodingConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JspbEncodingConfig): JspbEncodingConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool use_jspb_array_any_format */ 1:
                    message.useJspbArrayAnyFormat = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JspbEncodingConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool use_jspb_array_any_format = 1; */
        if (message.useJspbArrayAnyFormat !== false)
            writer.tag(1, WireType.Varint).bool(message.useJspbArrayAnyFormat);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message conformance.JspbEncodingConfig
 */
export const JspbEncodingConfig = new JspbEncodingConfig$Type();
