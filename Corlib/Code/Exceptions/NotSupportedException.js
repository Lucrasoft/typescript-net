/// <reference path="SystemException.ts" />
/// <reference path="../Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var NotSupportedException = (function (_super) {
        __extends(NotSupportedException, _super);
        function NotSupportedException(message, innerException) {
            _super.call(this, message, innerException);
            this.HResult = 0x80131515;
        }
        NotSupportedException.prototype.getType = function () {
            return System.SystemException._type;
        };
        NotSupportedException._type = System.Type.registerClass(NotSupportedException, "System.NotSupportedException", []);
        return NotSupportedException;
    })(System.SystemException);
    System.NotSupportedException = NotSupportedException;
})(System || (System = {}));
//# sourceMappingURL=NotSupportedException.js.map
