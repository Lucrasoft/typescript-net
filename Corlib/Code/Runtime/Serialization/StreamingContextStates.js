var System;
(function (System) {
    (function (Runtime) {
        (function (Serialization) {
            (function (StreamingContextStates) {
                StreamingContextStates[StreamingContextStates["CrossProcess"] = 1] = "CrossProcess";
                StreamingContextStates[StreamingContextStates["CrossMachine"] = 2] = "CrossMachine";
                StreamingContextStates[StreamingContextStates["File"] = 4] = "File";
                StreamingContextStates[StreamingContextStates["Persistence"] = 8] = "Persistence";
                StreamingContextStates[StreamingContextStates["Remoting"] = 16] = "Remoting";
                StreamingContextStates[StreamingContextStates["Other"] = 32] = "Other";
                StreamingContextStates[StreamingContextStates["Clone"] = 64] = "Clone";
                StreamingContextStates[StreamingContextStates["CrossAppDomain"] = 128] = "CrossAppDomain";
                StreamingContextStates[StreamingContextStates["All"] = 255] = "All";
            })(Serialization.StreamingContextStates || (Serialization.StreamingContextStates = {}));
            var StreamingContextStates = Serialization.StreamingContextStates;

            System.Type.registerEnum(StreamingContextStates, "System.Runtime.Serialization.StreamingContextStates");
        })(Runtime.Serialization || (Runtime.Serialization = {}));
        var Serialization = Runtime.Serialization;
    })(System.Runtime || (System.Runtime = {}));
    var Runtime = System.Runtime;
})(System || (System = {}));
//# sourceMappingURL=StreamingContextStates.js.map
