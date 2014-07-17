///<reference path="Exception.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var InsufficientMemoryException = (function (_super) {
        __extends(InsufficientMemoryException, _super);
        function InsufficientMemoryException(message, innerException) {
            if (typeof message === "undefined") { message = "Insufficient memory"; }
            _super.call(this, message, innerException);
        }
        InsufficientMemoryException._type = System.Type.registerClass(InsufficientMemoryException, "System.OutOfMemoryException");
        return InsufficientMemoryException;
    })(OutOfMemoryException);
    System.InsufficientMemoryException = InsufficientMemoryException;
})(System || (System = {}));
//# sourceMappingURL=InsufficientMemoryException.js.map
