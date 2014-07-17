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
    var InvalidCastException = (function (_super) {
        __extends(InvalidCastException, _super);
        function InvalidCastException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        InvalidCastException.prototype.getType = function () {
            return InvalidCastException._type;
        };
        InvalidCastException._type = System.Type.registerClass(InvalidCastException, "System.InvalidCastException", []);
        return InvalidCastException;
    })(System.Exception);
    System.InvalidCastException = InvalidCastException;
})(System || (System = {}));
//# sourceMappingURL=InvalidCastException.js.map
