// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "browse.request.proto" (syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "browse.request.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Browse$Type extends MessageType {
    constructor() {
        super("Browse", [
            { no: 1, name: "context", kind: "message", T: () => Context },
            { no: 2, name: "browseId", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Browse
 */
export const Browse = new Browse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Context$Type extends MessageType {
    constructor() {
        super("Context", [
            { no: 1, name: "client", kind: "message", T: () => Client },
            { no: 9, name: "adSignalsInfo", kind: "message", T: () => AdSignalsInfo }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Context
 */
export const Context = new Context$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Client$Type extends MessageType {
    constructor() {
        super("Client", [
            { no: 1, name: "hl", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "gl", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "deviceMake", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "deviceModel", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 16, name: "clientName", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 17, name: "clientVersion", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 18, name: "osName", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 19, name: "osVersion", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 80, name: "timeZone", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Client
 */
export const Client = new Client$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdSignalsInfo$Type extends MessageType {
    constructor() {
        super("AdSignalsInfo", [
            { no: 1, name: "params", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message AdSignalsInfo
 */
export const AdSignalsInfo = new AdSignalsInfo$Type();
