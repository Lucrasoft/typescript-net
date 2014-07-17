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
    var InvalidOperationException = (function (_super) {
        __extends(InvalidOperationException, _super);
        function InvalidOperationException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        InvalidOperationException.prototype.getType = function () {
            return InvalidOperationException._type;
        };
        InvalidOperationException._type = System.Type.registerClass(InvalidOperationException, "System.InvalidOperationException", []);
        return InvalidOperationException;
    })(System.Exception);
    System.InvalidOperationException = InvalidOperationException;
})(System || (System = {}));
//# sourceMappingURL=InvalidOperationException.js.map
