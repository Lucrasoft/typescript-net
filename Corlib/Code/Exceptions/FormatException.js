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
    var FormatException = (function (_super) {
        __extends(FormatException, _super);
        function FormatException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        FormatException.prototype.getType = function () {
            return FormatException._type;
        };
        FormatException._type = System.Type.registerClass(FormatException, "System.FormatException", []);
        return FormatException;
    })(System.Exception);
    System.FormatException = FormatException;
})(System || (System = {}));
//# sourceMappingURL=FormatException.js.map
