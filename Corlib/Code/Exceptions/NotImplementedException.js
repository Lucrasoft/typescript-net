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
    var NotImplementedException = (function (_super) {
        __extends(NotImplementedException, _super);
        function NotImplementedException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        NotImplementedException.prototype.getType = function () {
            return NotImplementedException._type;
        };
        NotImplementedException._type = System.Type.registerClass(NotImplementedException, "System.NotImplementedException", []);
        return NotImplementedException;
    })(System.Exception);
    System.NotImplementedException = NotImplementedException;
})(System || (System = {}));
//# sourceMappingURL=NotImplementedException.js.map
