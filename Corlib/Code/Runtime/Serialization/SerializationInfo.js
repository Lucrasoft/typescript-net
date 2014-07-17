/// <reference path="../../Type.ts" />
var System;
(function (System) {
    (function (Runtime) {
        (function (Serialization) {
            var SerializationInfo = (function () {
                function SerializationInfo() {
                    throw new System.NotImplementedException();
                }
                //place holder
                SerializationInfo.prototype.addValue = function (name, value) {
                    throw new System.NotImplementedException();
                };

                SerializationInfo.prototype.getString = function (name) {
                    throw new System.NotImplementedException();
                };
                return SerializationInfo;
            })();
            Serialization.SerializationInfo = SerializationInfo;
        })(Runtime.Serialization || (Runtime.Serialization = {}));
        var Serialization = Runtime.Serialization;
    })(System.Runtime || (System.Runtime = {}));
    var Runtime = System.Runtime;
})(System || (System = {}));
//# sourceMappingURL=SerializationInfo.js.map
