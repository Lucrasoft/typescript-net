/// <reference path="Type.ts" />
/// <reference path="String.ts"/>
/// <reference path="Interfaces/IConvertible.ts" />
/// <reference path="Interfaces/IComparable.ts" />
/// <reference path="Interfaces/IEquatable.ts" />
/// <reference path="Globalization/UnicodeCategory.ts" />
/// <reference path="Exceptions/ArgumentOutOfRangeException.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="Exceptions/ArgumentException.ts"/>
/// <reference path="Exceptions/InvalidCastException.ts"/>
/// <reference path="Exceptions/FormatException.ts"/>
/// <reference path="OutArgument.ts"/>
/// <reference path="Globalization/UnicodeCategory.ts"/>
/// <reference path="Globalization/CultureInfo.ts"/>
/// <reference path="Interfaces/IFormatProvider.ts"/>
/// <reference path="TypeCode.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    //* docu : http://www.unicode.org/Public/UNIDATA
    //* docu: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
    var Char = (function (_super) {
        __extends(Char, _super);
        function Char(c, index) {
            if (typeof index === "undefined") { index = 0; }
            _super.call(this);
            var cc = Char.__checkAndConvertArgument(c, index);
            this.value = cc;
        }
        Char.prototype.equals = function (obj) {
            if (!(System.Statements.is(obj, Char._type)))
                return false;

            return obj.value == this.value;
        };

        Char.prototype.compareTo = function (other) {
            if (this.value == other.value)
                return 0;

            if (this.value > other.value)
                return 1;
            else
                return -1;
        };

        Char.convertFromUtf32 = function (utf32) {
            if (utf32 < 0 || utf32 > 0x10FFFF)
                throw new System.ArgumentOutOfRangeException("The argument must be from 0 to 0x10FFFF.", null, "utf32");
            if (0xD800 <= utf32 && utf32 <= 0xDFFF)
                throw new System.ArgumentOutOfRangeException("The argument must not be in surrogate pair range.", null, "utf32");

            if (utf32 < 0x10000)
                return JSString.fromCharCode(utf32);

            utf32 -= 0x10000;
            return JSString.fromCharCode((utf32 >> 10) + 0xD800, (utf32 % 0x0400 + 0xDC00));
        };

        Char.__checkAndConvertArgument = function (arg, index) {
            var typestr = System.Type.getTypeName(arg);
            if (typestr === "string") {
                var s = arg;
                if (s.length == 0)
                    throw new System.ArgumentOutOfRangeException("The argument cannot be an empty string.");
                if (index < 0 || index >= s.length)
                    throw new System.ArgumentOutOfRangeException("The value of index is less than zero, or greater than or equal to the length of s.");
                return s.charCodeAt(index);
            }
            if (typestr === "number") {
                return arg;
            }
            if (typestr === "System.Char") {
                return arg.value;
            }
            throw new System.ArgumentException("Argument not of expected type");
        };

        Char.convertToUtf32 = function (highSurrogate, lowSurrogate) {
            highSurrogate = Char.__checkAndConvertArgument(highSurrogate, 0);

            if (highSurrogate < 0xD800 || 0xDBFF < highSurrogate)
                throw new System.ArgumentOutOfRangeException("highSurrogate");
            if (lowSurrogate < 0xDC00 || 0xDFFF < lowSurrogate)
                throw new System.ArgumentOutOfRangeException("lowSurrogate");

            return 0x10000 + ((highSurrogate - 0xD800) << 10) + (lowSurrogate - 0xDC00);
        };

        Char.convertToUtf32FromString = function (s, index) {
            Char.__internalCheckParameters(s, index);

            if (!Char.isSurrogate(s[index]))
                return s.charCodeAt(index);
            if (!Char.isHighSurrogate(s[index]) || index == s.length - 1 || !Char.isLowSurrogate(s[index + 1]))
                throw new System.ArgumentException(System.String.format("The string contains invalid surrogate pair character at {0}", index));
            return Char.convertToUtf32(s[index], s[index + 1]);
        };

        Char.isSurrogatePair = function (highSurrogate, lowSurrogate) {
            var hs = Char.__checkAndConvertArgument(highSurrogate, 0);
            var ls = Char.__checkAndConvertArgument(lowSurrogate, 0);

            return 0xD800 <= hs && hs <= 0xDBFF && 0xDC00 <= ls && ls <= 0xDFFF;
        };

        Char.isSurrogatePairString = function (s, index) {
            Char.__internalCheckParameters(s, index);
            return index + 1 < s.length && Char.isSurrogatePair(s[index], s[index + 1]);
        };

        Char.prototype.getHashCode = function () {
            return this.value;
        };

        Char.getNumericValue = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return parseInt(JSString.fromCharCode(cc));
        };

        Char.getUnicodeCategory = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            throw new System.NotImplementedException();
            return 0;
            // return (category_data[cc]);
        };

        Char.isControl = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return (Char.getUnicodeCategory(cc) == 14 /* Control */);
        };

        Char.isDigit = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return (Char.getUnicodeCategory(cc) == 8 /* DecimalDigitNumber */);
        };

        Char.isHighSurrogate = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return cc >= 0xD800 && cc <= 0xDBFF;
        };

        Char.isLetter = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return cat <= 4 /* OtherLetter */;
        };

        Char.isLetterOrDigit = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);

            return (cat <= (4 /* OtherLetter */) || cat == (8 /* DecimalDigitNumber */));
        };

        Char.isLower = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat == 1 /* LowercaseLetter */);
        };

        Char.isLowSurrogate = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return cc >= 0xDC00 && cc <= 0xDFFF;
        };

        Char.isNumber = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (8 /* DecimalDigitNumber */) && cat <= (10 /* OtherNumber */));
        };

        Char.isPunctuation = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (18 /* ConnectorPunctuation */) && cat <= (24 /* OtherPunctuation */));
        };

        Char.isSeparator = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (11 /* SpaceSeparator */) && cat <= (13 /* ParagraphSeparator */));
        };

        Char.isSurrogate = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat == 16 /* Surrogate */);
        };

        Char.isSymbol = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (25 /* MathSymbol */) && cat <= (28 /* OtherSymbol */));
        };

        Char.isUpper = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat == 0 /* UppercaseLetter */);
        };

        Char.isWhiteSpace = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            if (cc < 0x1680)
                return cc == 0x20 || cc >= 0x09 && cc <= 0x0d || cc == 0x85 || cc == 0xA0;

            var cat = Char.getUnicodeCategory(c, index);
            return cat > 10 /* OtherNumber */ && cat <= 13 /* ParagraphSeparator */;
        };

        Char.__internalCheckParameters = function (s, index) {
            if (s == null)
                throw new System.ArgumentNullException("s");

            if (index < 0 || index >= s.length)
                throw new System.ArgumentOutOfRangeException("The value of index is less than zero, or greater than or equal to the length of s.");
        };

        Char.tryParse = function (s, result) {
            if (s == null || s.length != 1) {
                result.value = new Char(0);
                return false;
            }

            result.value = new Char(s);
            return true;
        };

        Char.parse = function (s) {
            if (s == null)
                throw new System.ArgumentNullException("s");

            if (s.length != 1)
                throw new System.FormatException("s contains more than one character.");

            return new Char(s[0]);
        };

        Char.toLower = function (c, culture) {
            //TODO : culture is ignored.
            //use JS string lower
            var cstr = JSString.fromCharCode(c.value).toLocaleLowerCase();
            return new Char(cstr);
        };

        Char.toLowerInvariant = function (c) {
            //use JS string lower
            var cc = Char.__checkAndConvertArgument(c, 0);

            var cstr = JSString.fromCharCode(cc).toLowerCase();
            return new Char(cstr);
        };

        Char.toUpper = function (c, culture) {
            //TODO : culture is ignored.
            //use JS string lower
            var cstr = JSString.fromCharCode(c.value).toLocaleUpperCase();
            return new Char(cstr);
        };

        Char.toUpperInvariant = function (c) {
            var cc = Char.__checkAndConvertArgument(c, 0);
            var cstr = JSString.fromCharCode(cc).toUpperCase();
            return new Char(cstr);
        };

        Char.prototype.toString = function (provider) {
            //provider is ignored?
            return JSString.fromCharCode(this.value);
        };

        Char.toString = function (c) {
            return JSString.fromCharCode(c.value);
        };

        // =========== IConvertible Methods =========== //
        Char.prototype.getTypeCode = function () {
            return 4 /* Char */;
        };

        Char.prototype.toNumber = function (provider) {
            return this.value;
        };

        Char.prototype.toBoolean = function (provider) {
            throw new System.InvalidCastException();
        };
        Char._type = System.Type.registerClass(Char, "System.Char", ["System.IConvertible", "System.IComparable", "System.IEquatable"]);

        Char.MaxValue = 0xffff;
        Char.MinValue = 0x0000;
        return Char;
    })(System.Object);
    System.Char = Char;
})(System || (System = {}));
//# sourceMappingURL=Char.js.map
