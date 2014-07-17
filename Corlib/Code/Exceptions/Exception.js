/// <reference path="../Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var Exception = (function (_super) {
        __extends(Exception, _super);
        function Exception(message, innerException) {
            _super.call(this);
            this.message = "";
            this.HResult = 0;

            this.err = new Error(message);
            if (message) {
                this.message = message;
            }
        }
        Object.defineProperty(Exception.prototype, "name", {
            get: function () {
                return this.getType().name;
            },
            enumerable: true,
            configurable: true
        });

        //IObject
        Exception.prototype.getType = function () {
            return Exception._type;
        };
        Exception._type = System.Type.registerClass(Exception, "System.Exception", []);
        return Exception;
    })(System.Object);
    System.Exception = Exception;
})(System || (System = {}));
//# sourceMappingURL=Exception.js.map
