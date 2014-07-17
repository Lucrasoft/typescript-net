/// <reference path="Exception.ts" />
/// <reference path="../Type.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var SystemException = (function (_super) {
        __extends(SystemException, _super);
        function SystemException(message, innerException) {
            _super.call(this, message, innerException);
            this.HResult = 0x80131501;
        }
        SystemException.prototype.getType = function () {
            return SystemException._type;
        };
        SystemException._type = System.Type.registerClass(SystemException, "System.SystemException", []);
        return SystemException;
    })(System.Exception);
    System.SystemException = SystemException;
})(System || (System = {}));
//# sourceMappingURL=SystemException.js.map
