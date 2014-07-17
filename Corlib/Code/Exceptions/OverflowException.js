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
    var OverflowException = (function (_super) {
        __extends(OverflowException, _super);
        function OverflowException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        OverflowException.prototype.getType = function () {
            return OverflowException._type;
        };
        OverflowException._type = System.Type.registerClass(System.FormatException, "System.OverflowException", []);
        return OverflowException;
    })(System.Exception);
    System.OverflowException = OverflowException;
})(System || (System = {}));
//# sourceMappingURL=OverflowException.js.map
