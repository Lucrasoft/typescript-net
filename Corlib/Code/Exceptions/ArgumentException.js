/// <reference path="Exception.ts" />
/// <reference path="../Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var ArgumentException = (function (_super) {
        __extends(ArgumentException, _super);
        function ArgumentException(message, innerException, paramName) {
            _super.call(this, message, innerException);
            this.paramName = paramName;
        }
        ArgumentException.prototype.toString = function () {
            var s = _super.prototype.toString.call(this);
            s += "Paramater : " + this.paramName;
            return s;
        };

        //IObject
        ArgumentException.prototype.getType = function () {
            return ArgumentException._type;
        };
        ArgumentException._type = System.Type.registerClass(ArgumentException, "System.ArgumentException", []);
        return ArgumentException;
    })(System.Exception);
    System.ArgumentException = ArgumentException;
})(System || (System = {}));
//# sourceMappingURL=ArgumentException.js.map
