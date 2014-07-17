///<reference path="SystemException.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var TimeoutException = (function (_super) {
        __extends(TimeoutException, _super);
        function TimeoutException(message, innerException) {
            if (typeof message === "undefined") { message = "The operation has timed -out."; }
            _super.call(this, message, innerException);
            this.Result = 0x80131505;
            HResult = Result;
        }
        TimeoutException._type = System.Type.registerClass(TimeoutException, "System.TimeoutException");
        return TimeoutException;
    })(System.SystemException);
    System.TimeoutException = TimeoutException;
})(System || (System = {}));
//# sourceMappingURL=TimeoutException.js.map
