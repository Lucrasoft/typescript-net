/// <reference path="ArgumentException.ts" />
/// <reference path="../Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var ArgumentOutOfRangeException = (function (_super) {
        __extends(ArgumentOutOfRangeException, _super);
        function ArgumentOutOfRangeException(message, innerException, paramName) {
            _super.call(this, message, innerException, paramName);
        }
        //IObject
        ArgumentOutOfRangeException.prototype.getType = function () {
            return ArgumentOutOfRangeException._type;
        };
        ArgumentOutOfRangeException._type = System.Type.registerClass(ArgumentOutOfRangeException, "System.ArgumentOutOfRangeException", []);
        return ArgumentOutOfRangeException;
    })(System.ArgumentException);
    System.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
})(System || (System = {}));
//# sourceMappingURL=ArgumentOutOfRangeException.js.map
