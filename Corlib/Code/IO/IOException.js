/// <reference path="../Exceptions/SystemException.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    (function (IO) {
        var IOException = (function (_super) {
            __extends(IOException, _super);
            function IOException(message, innerException) {
                _super.call(this, message, innerException);
            }
            //IObject
            IOException.prototype.getType = function () {
                return IOException._type;
            };
            IOException._type = System.Type.registerClass(IOException, "System.IOException", []);
            return IOException;
        })(System.SystemException);
        IO.IOException = IOException;
    })(System.IO || (System.IO = {}));
    var IO = System.IO;
})(System || (System = {}));
//# sourceMappingURL=IOException.js.map
