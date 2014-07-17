var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var UnauthorizedAccessException = (function (_super) {
        __extends(UnauthorizedAccessException, _super);
        function UnauthorizedAccessException(message, innerException) {
            if (typeof message === "undefined") { message = "Access to the requested resource is not authorized."; }
            _super.call(this, message, innerException);
            this.HResult = 0x80131500;
        }
        //IObject
        UnauthorizedAccessException.prototype.getType = function () {
            return UnauthorizedAccessException._type;
        };
        UnauthorizedAccessException._type = System.Type.registerClass(UnauthorizedAccessException, "System.UnauthorizedAccessException", []);
        return UnauthorizedAccessException;
    })(System.SystemException);
    System.UnauthorizedAccessException = UnauthorizedAccessException;
})(System || (System = {}));
//# sourceMappingURL=UnauthorizedAccessException.js.map
