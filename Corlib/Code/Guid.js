/// <reference path="BitConverter.ts" />
/// <reference path="Interfaces/ICloneable.ts"/>
/// <reference path="Type.ts"/>
/// <reference path="String.ts"/>
/// <reference path="Exceptions/FormatException.ts"/>
/// <reference path="Statements.ts"/>
/// <reference path="Text/StringBuilder.ts"/>
/// <reference path="Exceptions/NotImplementedException.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="OutArgument.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var Guid = (function (_super) {
        __extends(Guid, _super);
        function Guid() {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            _super.call(this);

            //dispatch to correct 'constructor' overload
            if (args) {
                //constructor(g: string);
                if (typeof args[0] == "string") {
                    var g = args[0];
                    Guid.CheckNull(g);
                    g = g.trim();
                    var parser = new GuidParser(g);
                    var outguid = new System.OutArgument();
                    if (!parser.parse(outguid))
                        throw Guid.CreateFormatException(g);
                    this._a = outguid.value._a;
                    this._b = outguid.value._b;
                    this._c = outguid.value._c;
                    this._d = outguid.value._d;
                    this._e = outguid.value._e;
                    this._f = outguid.value._f;
                    this._g = outguid.value._g;
                    this._h = outguid.value._h;
                    this._i = outguid.value._i;
                    this._j = outguid.value._j;
                    this._k = outguid.value._k;
                }

                //constructor(a: number, b,.... etc
                if (typeof args[0] == "number") {
                    this._a = args[0];
                    this._b = args[1];
                    this._c = args[2];
                    this._d = args[3];
                    this._e = args[4];
                    this._f = args[5];
                    this._g = args[6];
                    this._h = args[7];
                    this._i = args[8];
                    this._j = args[9];
                    this._k = args[10];
                }

                //TODO check for object type.
                if (typeof args[0] == "Array") {
                    var b = args;
                    Guid.CheckArray(b, 16);
                    this._a = System.BitConverter.toInt32(b, 0).Value;
                    this._b = System.BitConverter.toInt16(b, 4).Value;
                    this._c = System.BitConverter.toInt16(b, 6).Value;
                    this._d = b[8];
                    this._e = b[9];
                    this._f = b[10];
                    this._g = b[11];
                    this._h = b[12];
                    this._i = b[13];
                    this._j = b[14];
                    this._k = b[15];
                }
            }
        }
        Guid.newGuid = function () {
            var b = new Uint8Array(16);

            for (var i = 0; i < 16; i++) {
                b[i] = Math.floor(Math.random() * 256);
            }

            var res = new Guid(b);

            // Mask in Variant 1-0 in Bit[7..6]
            res._d = ((res._d & 0x3f) | 0x80);

            // Mask in Version 4 (random based Guid) in Bits[15..13]
            res._c = ((res._c & 0x0fff) | 0x4000);
            return res;
        };

        Guid.CreateFormatException = function (s) {
            return new System.FormatException(System.String.format("Invalid Guid format: {0}", s));
        };

        Guid.construct_numbers = function (a, b, c, d, e, f, g, h, i, j, k) {
            var result = new Guid();
            result._a = a;
            result._b = b;
            result._c = c;
            result._d = d;
            result._e = e;
            result._f = f;
            result._g = g;
            result._h = h;
            result._i = i;
            result._j = j;
            result._k = k;
            return result;
        };

        Guid.prototype.equals = function (o) {
            if (System.Statements.is(o, Guid._type))
                return this.compareTo(o) == 0;

            return false;
        };

        //public Equals(g: Guid): boolean {
        //    return this.CompareTo(g) == 0;
        //}
        Guid.__internalCompare = function (x, y) {
            return (x < y) ? -1 : 1;
        };

        Guid.prototype.compareTo = function (value) {
            if (this._a != value._a) {
                return Guid.__internalCompare(this._a, value._a);
            }
            if (this._b != value._b) {
                return Guid.__internalCompare(this._b, value._b);
            }
            if (this._c != value._c) {
                return Guid.__internalCompare(this._c, value._c);
            }
            if (this._d != value._d) {
                return Guid.__internalCompare(this._d, value._d);
            }
            if (this._e != value._e) {
                return Guid.__internalCompare(this._e, value._e);
            }
            if (this._f != value._f) {
                return Guid.__internalCompare(this._f, value._f);
            }
            if (this._g != value._g) {
                return Guid.__internalCompare(this._g, value._g);
            }
            if (this._h != value._h) {
                return Guid.__internalCompare(this._h, value._h);
            }
            if (this._i != value._i) {
                return Guid.__internalCompare(this._i, value._i);
            }
            if (this._j != value._j) {
                return Guid.__internalCompare(this._j, value._j);
            }
            if (this._k != value._k) {
                return Guid.__internalCompare(this._k, value._k);
            }
            return 0;
        };

        Guid.prototype.getHashCode = function () {
            var res;
            res = this._a;
            res = res ^ (this._b << 16 | this._c);
            res = res ^ (this._d << 24);
            res = res ^ (this._e << 16);
            res = res ^ (this._f << 8);
            res = res ^ (this._g);
            res = res ^ (this._h << 24);
            res = res ^ (this._i << 16);
            res = res ^ (this._j << 8);
            res = res ^ (this._k);
            return res;
        };

        Guid.ToHex = function (b) {
            return b.toString(16);
        };

        Guid.prototype.toByteArray = function () {
            var res = new Uint8Array(16);

            var tmp;
            var d = 0;
            var s;

            tmp = System.BitConverter.getBytes_Int32(this._a);

            for (s = 0; s < 4; ++s) {
                res[d++] = tmp[s];
            }

            tmp = System.BitConverter.getBytes_Int16(this._b);
            for (s = 0; s < 2; ++s) {
                res[d++] = tmp[s];
            }

            tmp = System.BitConverter.getBytes_Int16(this._c);
            for (s = 0; s < 2; ++s) {
                res[d++] = tmp[s];
            }

            res[8] = this._d;
            res[9] = this._e;
            res[10] = this._f;
            res[11] = this._g;
            res[12] = this._h;
            res[13] = this._i;
            res[14] = this._j;
            res[15] = this._k;

            return res;
        };

        Guid.appendInt = function (builder, value) {
            builder.append(Guid.ToHex((value >> 28) & 0xf));
            builder.append(Guid.ToHex((value >> 24) & 0xf));
            builder.append(Guid.ToHex((value >> 20) & 0xf));
            builder.append(Guid.ToHex((value >> 16) & 0xf));
            builder.append(Guid.ToHex((value >> 12) & 0xf));
            builder.append(Guid.ToHex((value >> 8) & 0xf));
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        };

        Guid.appendShort = function (builder, value) {
            builder.append(Guid.ToHex((value >> 12) & 0xf));
            builder.append(Guid.ToHex((value >> 8) & 0xf));
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        };

        Guid.appendByte = function (builder, value) {
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        };

        Guid.prototype.toString2 = function () {
            return this.toString(1 /* D */);
        };

        Guid.prototype.toString3 = function (format) {
            if (typeof format === "undefined") { format = "D"; }
            return this.toString(Guid.parseFormat(format));
        };

        Guid.prototype.toString = function (format) {
            if (format) {
                if (typeof format === "string") {
                    format = Guid.parseFormat(format);
                }
            } else {
                format = 1 /* D */;
            }

            var length;
            switch (format) {
                case 2 /* B */:
                case 3 /* P */:
                    length = 38;
                    break;
                case 1 /* D */:
                    length = 36;
                    break;
                case 0 /* N */:
                    length = 32;
                    break;
                case 4 /* X */:
                    length = 68;
                    break;
                default:
                    throw new System.NotImplementedException(format.toString());
            }

            var res = new System.Text.StringBuilder();
            var has_hyphen = GuidParser.hasHyphen(format);

            if (format == 3 /* P */) {
                res.append('(');
            } else if (format == 2 /* B */) {
                res.append('{');
            } else if (format == 4 /* X */) {
                res.append('{').append('0').append('x');
            }

            Guid.appendInt(res, this._a);
            if (has_hyphen) {
                res.append('-');
            } else if (format == 4 /* X */) {
                res.append(',').append('0').append('x');
            }

            Guid.appendShort(res, this._b);
            if (has_hyphen) {
                res.append('-');
            } else if (format == 4 /* X */) {
                res.append(',').append('0').append('x');
            }

            Guid.appendShort(res, this._c);
            if (has_hyphen) {
                res.append('-');
            }

            if (format == 4 /* X */) {
                res.append(',').append('{').append('0').append('x');
                Guid.appendByte(res, this._d);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._e);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._f);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._g);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._h);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._i);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._j);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._k);
                res.append('}').append('}');
                ;
            } else {
                Guid.appendByte(res, this._d);
                Guid.appendByte(res, this._e);

                if (has_hyphen) {
                    res.append('-');
                }

                Guid.appendByte(res, this._f);
                Guid.appendByte(res, this._g);
                Guid.appendByte(res, this._h);
                Guid.appendByte(res, this._i);
                Guid.appendByte(res, this._j);
                Guid.appendByte(res, this._k);

                if (format == 3 /* P */) {
                    res.append(')');
                } else if (format == 2 /* B */) {
                    res.append('}');
                }
            }

            return res.toString();
        };

        Guid.op_Equality = function (a, b) {
            return a.equals(b);
        };

        Guid.op_Inequality = function (a, b) {
            return !(a.equals(b));
        };

        Guid.parse = function (input) {
            if (input == null)
                throw new System.ArgumentNullException("input");

            var outguid = new System.OutArgument(null);

            if (!Guid.tryParse(input, outguid))
                throw Guid.CreateFormatException(input);

            return outguid.value;
        };

        Guid.parseExact = function (input, format) {
            if (input == null)
                throw new System.ArgumentNullException("input");
            if (format == null)
                throw new System.ArgumentNullException("format");

            var outguid = new System.OutArgument(null);
            if (!Guid.tryParseExact(input, format, outguid))
                throw Guid.CreateFormatException(input);

            return outguid.value;
        };

        Guid.tryParse = function (input, result) {
            if (input == null) {
                result.value = Guid.empty;
                return false;
            }
            var parser = new GuidParser(input);
            return parser.parse(result);
        };

        Guid.tryParseExact = function (input, format, result) {
            if (input == null || format == null) {
                result.value = Guid.empty;
                return false;
            }

            var parser = new GuidParser(input);

            return parser.parse(result, Guid.parseFormat(format));
        };

        Guid.parseFormat = function (format) {
            if (System.String.isNullOrEmpty(format))
                return 1 /* D */;

            switch (format[0]) {
                case 'N':
                case 'n':
                    return 0 /* N */;
                case 'D':
                case 'd':
                    return 1 /* D */;
                case 'B':
                case 'b':
                    return 2 /* B */;
                case 'P':
                case 'p':
                    return 3 /* P */;
                case 'X':
                case 'x':
                    return 4 /* X */;
            }

            throw new System.FormatException("Format String can be only one of \"D\", \"d\", \"N\", \"n\", \"P\", \"p\", \"B\", \"b\", \"X\" or \"x\"");
        };

        //helpers
        Guid.CheckNull = function (o) {
            if (o == null) {
                throw new System.ArgumentNullException("Value cannot be null.");
            }
        };

        Guid.CheckLength = function (o, l) {
            if (o.length != l) {
                throw new System.ArgumentException(System.String.format("Array should be exactly {0} bytes long.", l));
            }
        };

        Guid.CheckArray = function (o, l) {
            this.CheckNull(o);
            this.CheckLength(o, l);
        };

        //ICloneable
        Guid.prototype.clone = function () {
            return new Guid(this._a, this._b, this._c, this._d, this._e, this._f, this._g, this._h, this._i, this._j, this._k);
        };

        //IObject
        Guid.prototype.getType = function () {
            return Guid._type;
        };
        Guid._type = System.Type.registerClass(Guid, "System.Guid", ["System.ICloneable"]);

        Guid.empty = Guid.construct_numbers(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return Guid;
    })(System.Object);
    System.Guid = Guid;

    (function (GuidFormat) {
        GuidFormat[GuidFormat["N"] = 0] = "N";
        GuidFormat[GuidFormat["D"] = 1] = "D";
        GuidFormat[GuidFormat["B"] = 2] = "B";
        GuidFormat[GuidFormat["P"] = 3] = "P";
        GuidFormat[GuidFormat["X"] = 4] = "X";
    })(System.GuidFormat || (System.GuidFormat = {}));
    var GuidFormat = System.GuidFormat;

    //intern
    var GuidParser = (function () {
        function GuidParser(src) {
            this._src = src;
            this.reset();
        }
        GuidParser.prototype.reset = function () {
            this._cur = 0;
            this._length = this._src.length;
        };

        Object.defineProperty(GuidParser.prototype, "Eof", {
            get: function () {
                return this._cur >= this._length;
            },
            enumerable: true,
            configurable: true
        });

        GuidParser.hasHyphen = function (format) {
            switch (format) {
                case 1 /* D */:
                case 2 /* B */:
                case 3 /* P */:
                    return true;
                default:
                    return false;
            }
        };

        GuidParser.prototype.parse = function (outguid, format) {
            if (format) {
                if (format == 4 /* X */)
                    return this.TryParseX(outguid);
                return this.TryParseNDBP(format, outguid);
            }

            //
            if (this.TryParseNDBP(0 /* N */, outguid))
                return true;

            this.reset();
            if (this.TryParseNDBP(1 /* D */, outguid))
                return true;

            this.reset();
            if (this.TryParseNDBP(2 /* B */, outguid))
                return true;

            this.reset();
            if (this.TryParseNDBP(3 /* P */, outguid))
                return true;

            this.reset();
            return this.TryParseX(outguid);
        };

        GuidParser.prototype.TryParseNDBP = function (format, outguid) {
            var a = new System.OutArgument(0);
            var b = new System.OutArgument(0);
            var c = new System.OutArgument(0);

            if (format == 2 /* B */ && !this.ParseChar('{'))
                return false;

            if (format == 3 /* P */ && !this.ParseChar('('))
                return false;

            if (!this.ParseHex(8, true, a))
                return false;

            var has_hyphen = GuidParser.hasHyphen(format);

            if (has_hyphen && !this.ParseChar('-'))
                return false;

            if (!this.ParseHex(4, true, b))
                return false;

            if (has_hyphen && !this.ParseChar('-'))
                return false;

            if (!this.ParseHex(4, true, c))
                return false;

            if (has_hyphen && !this.ParseChar('-'))
                return false;

            var d = new Uint8Array(8);
            for (var i = 0; i < d.length; i++) {
                var dd = new System.OutArgument(0);
                if (!this.ParseHex(2, true, dd))
                    return false;

                if (i == 1 && has_hyphen && !this.ParseChar('-'))
                    return false;

                d[i] = (dd.value & 0xFF);
            }

            if (format == 2 /* B */ && !this.ParseChar('}'))
                return false;

            if (format == 3 /* P */ && !this.ParseChar(')'))
                return false;

            if (!this.Eof)
                return false;

            outguid.value = new Guid(a.value, b.value, c.value, d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
            return true;
        };

        GuidParser.prototype.TryParseX = function (outguid) {
            var a = new System.OutArgument(0);
            var b = new System.OutArgument(0);
            var c = new System.OutArgument(0);

            var guid = new Guid();

            if (!(this.ParseChar('{') && this.ParseHexPrefix() && this.ParseHex(8, false, a) && this.ParseChar(',') && this.ParseHexPrefix() && this.ParseHex(4, false, b) && this.ParseChar(',') && this.ParseHexPrefix() && this.ParseHex(4, false, c) && this.ParseChar(',') && this.ParseChar('{'))) {
                return false;
            }

            var d = new Uint8Array(8);
            for (var i = 0; i < d.length; ++i) {
                var dd = new System.OutArgument(0);

                if (!(this.ParseHexPrefix() && this.ParseHex(2, false, dd)))
                    return false;

                d[i] = (dd.value & 0xFF);

                if (i != 7 && !this.ParseChar(','))
                    return false;
            }

            if (!(this.ParseChar('}') && this.ParseChar('}')))
                return false;

            if (!this.Eof)
                return false;

            outguid.value = new Guid(a.value, b.value, c.value, d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
            return true;
        };

        GuidParser.prototype.ParseHexPrefix = function () {
            if (!this.ParseChar('0'))
                return false;

            return this.ParseChar('x');
        };

        GuidParser.prototype.ParseChar = function (c) {
            //TODO : cannot index string by []
            if (!this.Eof && this._src[this._cur] == c) {
                this._cur++;
                return true;
            }

            return false;
        };

        GuidParser.prototype.ParseHex = function (length, strict, res) {
            res.value = 0;
            for (var i = 0; i < length; i++) {
                if (this.Eof)
                    return !(strict && (i + 1 != length));

                //var c: Char = Char.ToLowerInvariant(this._src[this._cur]);
                var nr = parseInt(this._src[this._cur], 16);
                if (isNaN(nr)) {
                    if (!strict)
                        return true;
                    return !(strict && (i + 1 != length));
                } else {
                    res.value = res.value * 16 + nr;
                    this._cur++;
                }
            }

            return true;
        };
        return GuidParser;
    })();
})(System || (System = {}));
//# sourceMappingURL=Guid.js.map
