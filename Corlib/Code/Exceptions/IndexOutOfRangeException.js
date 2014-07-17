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
    var IndexOutOfRangeException = (function (_super) {
        __extends(IndexOutOfRangeException, _super);
        function IndexOutOfRangeException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        IndexOutOfRangeException.prototype.getType = function () {
            return IndexOutOfRangeException._type;
        };
        IndexOutOfRangeException._type = System.Type.registerClass(IndexOutOfRangeException, "System.IndexOutOfRangeException", []);
        return IndexOutOfRangeException;
    })(System.Exception);
    System.IndexOutOfRangeException = IndexOutOfRangeException;
})(System || (System = {}));
//# sourceMappingURL=IndexOutOfRangeException.js.map
