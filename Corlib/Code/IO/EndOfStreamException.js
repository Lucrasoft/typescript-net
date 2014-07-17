var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    (function (IO) {
        var EndOfStreamException = (function (_super) {
            __extends(EndOfStreamException, _super);
            function EndOfStreamException(message, innerException) {
                if (typeof message === "undefined") { message = "Failed to read past end of stream."; }
                _super.call(this, message, innerException);
            }
            //IObject
            EndOfStreamException.prototype.getType = function () {
                return EndOfStreamException._type;
            };
            EndOfStreamException._type = System.Type.registerClass(EndOfStreamException, "System.IO.EndOfStreamException", []);
            return EndOfStreamException;
        })(IO.IOException);
        IO.EndOfStreamException = EndOfStreamException;
    })(System.IO || (System.IO = {}));
    var IO = System.IO;
})(System || (System = {}));
//# sourceMappingURL=EndOfStreamException.js.map
