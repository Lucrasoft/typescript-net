/// <reference path="Interfaces/IFormattable.ts" />
/// <reference path="Interfaces/IComparable.ts"/>
/// <reference path="Interfaces/IEquatable.ts"/>
/// <reference path="Globalization/NumberStyles.ts" />
/// <reference path="Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    //TODO : IConvertible
    var Int64 = (function (_super) {
        __extends(Int64, _super);
        function Int64(value) {
            _super.call(this, value);
        }
        //IObject
        Int64.prototype.getType = function () {
            return Int64._type;
        };
        Int64._type = System.Type.registerClass(Int64, "System.Int64", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        Int64.MaxValue = 0x7fffffffffffffff;
        Int64.MinValue = -9223372036854775808;
        return Int64;
    })(System.IntBase);
    System.Int64 = Int64;
})(System || (System = {}));
//# sourceMappingURL=Int64.js.map
