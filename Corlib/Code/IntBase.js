/// <reference path="Type.ts" />
/// <reference path="Statements.ts" />
/// <reference path="OutArgument.ts" />
/// <reference path="Interfaces/IFormattable.ts" />
/// <reference path="Interfaces/IEquatable.ts" />
/// <reference path="Interfaces/IComparable.ts" />
/// <reference path="Exceptions/ArgumentException.ts" />
/// <reference path="Exceptions/ArgumentNullException.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
/// <reference path="Globalization/NumberStyles.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    //TODO : IConvertible
    var IntBase = (function (_super) {
        __extends(IntBase, _super);
        function IntBase(value) {
            _super.call(this);
            this.value = value;
        }
        Object.defineProperty(IntBase.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });

        IntBase.prototype.compareTo = function (value) {
            if (value == null)
                return 1;

            if (!(System.Statements.is(value, System.IntBase._type)))
                throw new System.ArgumentException("Value is not a System.IntXX");

            var xv = value.value;
            if (this.value == xv)
                return 0;
            if (this.value > xv)
                return 1;
            else
                return -1;
        };

        IntBase.prototype.equals = function (obj) {
            if (!System.Statements.is(obj, System.IntBase._type))
                return false;

            return obj.value == this.value;
        };

        IntBase.prototype.getHashCode = function () {
            return this.value;
        };

        IntBase.parse = function (s, style, provider) {
            if (typeof style === "undefined") { style = null; }
            if (typeof provider === "undefined") { provider = null; }
            if (style != null)
                throw new System.NotImplementedException();
            if (provider != null)
                throw new System.NotImplementedException();

            //without the styles and provider, simply use the built in JS parser.
            return parseInt(s);
        };

        IntBase.tryParse = function (s, result, style, provider) {
            if (typeof style === "undefined") { style = null; }
            if (typeof provider === "undefined") { provider = null; }
            try  {
                result.value = IntBase.parse(s, style, provider);
                return true;
            } catch (e) {
            }
            return false;
        };

        IntBase.prototype.ToString = function (format, provider) {
            if (typeof format === "undefined") { format = ""; }
            if (typeof provider === "undefined") { provider = null; }
            throw new System.NotImplementedException();
            //return NumberFormatter.NumberToString(format, m_value, provider);
        };

        IntBase.prototype.toType = function (targetType, provider) {
            if (targetType == null)
                throw new System.ArgumentNullException("targetType");
        };

        //IObject
        IntBase.prototype.getType = function () {
            return IntBase._type;
        };
        IntBase._type = System.Type.registerClass(IntBase, "System.IntBase", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);
        return IntBase;
    })(System.Object);
    System.IntBase = IntBase;
})(System || (System = {}));
//# sourceMappingURL=IntBase.js.map
