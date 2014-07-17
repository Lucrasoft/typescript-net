var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var ObjectDisposedException = (function (_super) {
        __extends(ObjectDisposedException, _super);
        function ObjectDisposedException(message, innerException, object) {
            _super.call(this, message, innerException);
        }
        //IObject
        ObjectDisposedException.prototype.getType = function () {
            return ObjectDisposedException._type;
        };
        ObjectDisposedException._type = System.Type.registerClass(ObjectDisposedException, "System.ObjectDisposedException", []);
        return ObjectDisposedException;
    })(System.InvalidOperationException);
    System.ObjectDisposedException = ObjectDisposedException;
})(System || (System = {}));
//# sourceMappingURL=ObjectDisposedException.js.map
