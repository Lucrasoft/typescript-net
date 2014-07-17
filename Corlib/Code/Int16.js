/// <reference path="Interfaces/IFormattable.ts" />
/// <reference path="Interfaces/IComparable.ts"/>
/// <reference path="Interfaces/IEquatable.ts"/>
/// <reference path="Globalization/NumberStyles.ts" />
/// <reference path="Type.ts"/>
/// <reference path="IntBase.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    //TODO : IConvertible
    var Int16 = (function (_super) {
        __extends(Int16, _super);
        function Int16(value) {
            _super.call(this, value);
        }
        //IObject
        Int16.prototype.getType = function () {
            return Int16._type;
        };
        Int16._type = System.Type.registerClass(System.Int32, "System.Int16", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        Int16.MaxValue = 32767;
        Int16.MinValue = -32768;
        return Int16;
    })(System.IntBase);
    System.Int16 = Int16;
})(System || (System = {}));
//# sourceMappingURL=Int16.js.map
