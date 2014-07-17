/// <reference path="IntBase.ts" />
/// <reference path="Interfaces/IFormattable.ts" />
/// <reference path="Globalization/NumberStyles.ts" />
/// <reference path="Interfaces/IComparable.ts"/>
/// <reference path="Interfaces/IEquatable.ts"/>
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
    var Int32 = (function (_super) {
        __extends(Int32, _super);
        function Int32(value) {
            _super.call(this, value);
        }
        //IObject
        Int32.prototype.getType = function () {
            return Int32._type;
        };
        Int32._type = System.Type.registerClass(Int32, "System.Int32", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        Int32.MaxValue = 0x7fffffff;
        Int32.MinValue = -2147483648;
        return Int32;
    })(System.IntBase);
    System.Int32 = Int32;
})(System || (System = {}));
//# sourceMappingURL=Int32.js.map
