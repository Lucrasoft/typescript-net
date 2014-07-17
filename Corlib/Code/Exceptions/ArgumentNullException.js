/// <reference path="ArgumentException.ts" />
/// <reference path="../Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var ArgumentNullException = (function (_super) {
        __extends(ArgumentNullException, _super);
        function ArgumentNullException(message, innerException, paramName) {
            _super.call(this, message, innerException, paramName);
        }
        //IObject
        ArgumentNullException.prototype.getType = function () {
            return ArgumentNullException._type;
        };
        ArgumentNullException._type = System.Type.registerClass(ArgumentNullException, "System.ArgumentNullException", []);
        return ArgumentNullException;
    })(System.ArgumentException);
    System.ArgumentNullException = ArgumentNullException;
})(System || (System = {}));
//# sourceMappingURL=ArgumentNullException.js.map
