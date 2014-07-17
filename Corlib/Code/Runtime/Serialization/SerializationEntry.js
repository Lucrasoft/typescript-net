/// <reference path="../../Type.ts" />
var System;
(function (System) {
    (function (Runtime) {
        (function (Serialization) {
            //IObject necessary?
            var SerializationEntry = (function () {
                function SerializationEntry(name, type, value) {
                    this.name = name;
                    this.objectType = type;
                    this.value = value;
                }
                Object.defineProperty(SerializationEntry.prototype, "Name", {
                    // Properties
                    get: function () {
                        return this.name;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(SerializationEntry.prototype, "ObjectType", {
                    get: function () {
                        return this.objectType;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(SerializationEntry.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SerializationEntry;
            })();
            Serialization.SerializationEntry = SerializationEntry;
        })(Runtime.Serialization || (Runtime.Serialization = {}));
        var Serialization = Runtime.Serialization;
    })(System.Runtime || (System.Runtime = {}));
    var Runtime = System.Runtime;
})(System || (System = {}));
//# sourceMappingURL=SerializationEntry.js.map
