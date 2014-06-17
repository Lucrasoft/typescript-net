/// <reference path="BitConverter.ts" />  
/// <reference path="Interfaces/ICloneable.ts"/>
/// <reference path="IObject.ts"/>
/// <reference path="Type.ts"/>
/// <reference path="String.ts"/>
/// <reference path="Exceptions/FormatException.ts"/>
/// <reference path="Statements.ts"/>
/// <reference path="Text/StringBuilder.ts"/>
/// <reference path="Exceptions/NotImplementedException.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="OutArgument.ts"/>

module System {

    export class Guid implements ICloneable, IObject {
        public static _type: Type = Type.registerClass(Guid, "System.Guid", ["System.ICloneable"]);


        private _a: number; //_timeLow;                 int
        private _b: number; //_timeMid;                 short
        private _c: number; //_timeHighAndVersion;      short
        private _d: number; //_clockSeqHiAndReserved;   byte
        private _e: number; //_clockSeqLow;             byte
        private _f: number; //_node0;                   byte
        private _g: number; //_node1;                   byte
        private _h: number; //_node2;                   byte
        private _i: number; //_node3;                   byte
        private _j: number; //_node4;                   byte
        private _k: number; //_node5;                   byte



        constructor();
        constructor(byteArray: Uint8Array);
        constructor(guidString: string);
        constructor(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number);

        constructor(...args) {
            //dispatch to correct 'constructor' overload
            if (args) {

                //constructor(g: string);
                if (typeof args[0] == "string") {
                    var g: string = <string>args[0];
                    Guid.CheckNull(g);
                    g = g.trim();
                    var parser = new GuidParser(g);
                    var outguid = new System.OutArgument<Guid>();
                    if (!parser.parse(outguid)) throw Guid.CreateFormatException(g);
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
                    var b = <Uint8Array><any>args;
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



        static newGuid(): Guid {
            var b = new Uint8Array(16);

            for (var i: number = 0; i < 16; i++) {
                b[i] = Math.floor(Math.random() * 256);
            }

            var res: Guid = new Guid(b);
            // Mask in Variant 1-0 in Bit[7..6]
            res._d = ((res._d & 0x3f) | 0x80);
            // Mask in Version 4 (random based Guid) in Bits[15..13]
            res._c = ((res._c & 0x0fff) | 0x4000);
            return res;
        }




        private static CreateFormatException(s: string): FormatException {
            return new FormatException(System.String.format("Invalid Guid format: {0}", s));
        }


        static construct_numbers(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): Guid {
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
        }

        static empty: Guid = Guid.construct_numbers(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);


        equals(o: any): boolean {
            if (Statements.is(o, Guid._type))
                return this.compareTo(<Guid>o) == 0;

            return false;
        }

        //public Equals(g: Guid): boolean {
        //    return this.CompareTo(g) == 0;
        //}

        private static __internalCompare(x: number, y: number): number {
            return (x < y) ? -1 : 1;
        }

        compareTo(value: Guid): number {
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
        }


       getHashCode(): number {
            var res: number;
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
        }

        private static ToHex(b: number): string // b  [ int ]
        {
            return b.toString(16);
        }



        toByteArray(): Uint8Array {
            var res = new Uint8Array(16);

            var tmp: Uint8Array;
            var d: number = 0;
            var s: number;

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
        }

        private static appendInt(builder: System.Text.StringBuilder, value: number): void {
            builder.append(Guid.ToHex((value >> 28) & 0xf));
            builder.append(Guid.ToHex((value >> 24) & 0xf));
            builder.append(Guid.ToHex((value >> 20) & 0xf));
            builder.append(Guid.ToHex((value >> 16) & 0xf));
            builder.append(Guid.ToHex((value >> 12) & 0xf));
            builder.append(Guid.ToHex((value >> 8) & 0xf));
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        }

        private static appendShort(builder: System.Text.StringBuilder, value: number): void {
            builder.append(Guid.ToHex((value >> 12) & 0xf));
            builder.append(Guid.ToHex((value >> 8) & 0xf));
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        }

        private static appendByte(builder: System.Text.StringBuilder, value: number): void {
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        }

        toString2(): string {
            return this.toString(GuidFormat.D);
        }

        toString3(format: string= "D"): string {
            return this.toString(Guid.parseFormat(format));
        }

        toString(): string;
        toString(format: GuidFormat): string;
        toString(format: string): string;

        toString(format?: any): string {

            if (format) {
                if (typeof format === "string") {
                    format = Guid.parseFormat(format);
                }
            } else {
                format = GuidFormat.D;
            }

            var length: number;
            switch (format) {
                case GuidFormat.B:
                case GuidFormat.P:
                    length = 38;
                    break;
                case GuidFormat.D:
                    length = 36;
                    break;
                case GuidFormat.N:
                    length = 32;
                    break;
                case GuidFormat.X:
                    length = 68;
                    break;
                default:
                    throw new NotImplementedException(format.toString());
            }

            var res = new System.Text.StringBuilder();
            var has_hyphen: boolean = GuidParser.hasHyphen(format);

            if (format == GuidFormat.P) {
                res.append('(');
            } else if (format == GuidFormat.B) {
                res.append('{');
            } else if (format == GuidFormat.X) {
                res.append('{').append('0').append('x');
            }

            Guid.appendInt(res, this._a);
            if (has_hyphen) {
                res.append('-');
            } else if (format == GuidFormat.X) {
                res.append(',').append('0').append('x');
            }

            Guid.appendShort(res, this._b);
            if (has_hyphen) {
                res.append('-');
            } else if (format == GuidFormat.X) {
                res.append(',').append('0').append('x');
            }

            Guid.appendShort(res, this._c);
            if (has_hyphen) {
                res.append('-');
            }

            if (format == GuidFormat.X) {
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
                res.append('}').append('}');;
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

                if (format == GuidFormat.P) {
                    res.append(')');
                } else if (format == GuidFormat.B) {
                    res.append('}');
                }
            }

            return res.ToString();
        }


        static op_Equality(a: Guid, b: Guid): boolean {
            return a.equals(b);
        }

        static op_Inequality(a: Guid, b: Guid): boolean {
            return !(a.equals(b));
        }


        static parse(input: string): Guid {
            if (input == null)
                throw new ArgumentNullException("input");

            var outguid = new System.OutArgument<Guid>(null);


            if (!Guid.tryParse(input, outguid))
                throw Guid.CreateFormatException(input);

            return outguid.value;
        }

        static parseExact(input: string, format: string): Guid {
            if (input == null)
                throw new ArgumentNullException("input");
            if (format == null)
                throw new ArgumentNullException("format");

            var outguid = new System.OutArgument<Guid>(null);
            if (!Guid.tryParseExact(input, format, outguid))
                throw Guid.CreateFormatException(input);

            return outguid.value;
        }

        static tryParse(input: string, result: OutArgument<Guid>): boolean {
            if (input == null) {
                result.value = Guid.empty;
                return false;
            }
            var parser = new GuidParser(input);
            return parser.parse(result);
        }

        static tryParseExact(input: string, format: string, result: OutArgument<Guid>): boolean {
            if (input == null || format == null) {
                result.value = Guid.empty;
                return false;
            }

            var parser = new GuidParser(input);

            return parser.parse(result, Guid.parseFormat(format));

        }


        static parseFormat(format: string): GuidFormat {
            if (String.IsNullOrEmpty(format))
                return GuidFormat.D;

            switch (format[0]) {
                case 'N':
                case 'n':
                    return GuidFormat.N;
                case 'D':
                case 'd':
                    return GuidFormat.D;
                case 'B':
                case 'b':
                    return GuidFormat.B;
                case 'P':
                case 'p':
                    return GuidFormat.P;
                case 'X':
                case 'x':
                    return GuidFormat.X;
            }

            throw new FormatException(
                "Format String can be only one of \"D\", \"d\", \"N\", \"n\", \"P\", \"p\", \"B\", \"b\", \"X\" or \"x\""
                );
        }

        //helpers
        private static CheckNull(o: any): void {
            if (o == null) {
                throw new ArgumentNullException("Value cannot be null.");
            }
        }

        private static CheckLength(o: Uint8Array, l: number): void {
            if (o.length != l) {
                throw new ArgumentException(String.format("Array should be exactly {0} bytes long.", l));
            }
        }

        private static CheckArray(o: Uint8Array, l: number): void {
            this.CheckNull(o);
            this.CheckLength(o, l);
        }


        //ICloneable
        clone(): Guid {
            return new Guid(this._a, this._b, this._c, this._d, this._e, this._f, this._g, this._h, this._i, this._j, this._k);
        }


        //IObject
        getType(): Type { return Guid._type; }



    }


    export enum GuidFormat {
        N, // 00000000000000000000000000000000
        D, // 00000000-0000-0000-0000-000000000000
        B, // {00000000-0000-0000-0000-000000000000}
        P, // (00000000-0000-0000-0000-000000000000)
        X, // {0x00000000,0x0000,0x0000,{0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00}}
    }


    //intern
    class GuidParser {

        private _src: string;
        private _length: number;
        private _cur: number;

        constructor(src: string) {
            this._src = src;
            this.reset();
        }

        reset(): void {
            this._cur = 0;
            this._length = this._src.length;
        }

        private get Eof(): boolean {
            return this._cur >= this._length;
        }


        static hasHyphen(format: GuidFormat): boolean {
            switch (format) {
                case GuidFormat.D:
                case GuidFormat.B:
                case GuidFormat.P:
                    return true;
                default:
                    return false;
            }
        }



        parse(outguid: OutArgument<Guid>, format?: GuidFormat): boolean {

            if (format) {
                if (format == GuidFormat.X) return this.TryParseX(outguid);
                return this.TryParseNDBP(format, outguid);
            }
            //
            if (this.TryParseNDBP(GuidFormat.N, outguid)) return true;

            this.reset();
            if (this.TryParseNDBP(GuidFormat.D, outguid)) return true;

            this.reset();
            if (this.TryParseNDBP(GuidFormat.B, outguid)) return true;

            this.reset();
            if (this.TryParseNDBP(GuidFormat.P, outguid)) return true;

            this.reset();
            return this.TryParseX(outguid);
        }

        private TryParseNDBP(format: GuidFormat, outguid: OutArgument<Guid>): boolean {
            var a = new System.OutArgument<number>(0);
            var b = new System.OutArgument<number>(0);
            var c = new System.OutArgument<number>(0);



            if (format == GuidFormat.B && !this.ParseChar('{'))
                return false;

            if (format == GuidFormat.P && !this.ParseChar('('))
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
            for (var i: number = 0; i < d.length; i++) {
                var dd = new System.OutArgument<number>(0);
                if (!this.ParseHex(2, true, dd))
                    return false;

                if (i == 1 && has_hyphen && !this.ParseChar('-'))
                    return false;

                d[i] = (dd.value & 0xFF);
            }

            if (format == GuidFormat.B && !this.ParseChar('}'))
                return false;

            if (format == GuidFormat.P && !this.ParseChar(')'))
                return false;

            if (!this.Eof)
                return false;


            outguid.value = new Guid(a.value, b.value, c.value, d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
            return true;
        }

        private TryParseX(outguid: OutArgument<Guid>): boolean {

            var a = new System.OutArgument<number>(0);
            var b = new System.OutArgument<number>(0);
            var c = new System.OutArgument<number>(0);

            var guid = new Guid();

            if (!(this.ParseChar('{')
                && this.ParseHexPrefix()
                && this.ParseHex(8, false, a)
                && this.ParseChar(',')
                && this.ParseHexPrefix()
                && this.ParseHex(4, false, b)
                && this.ParseChar(',')
                && this.ParseHexPrefix()
                && this.ParseHex(4, false, c)
                && this.ParseChar(',')
                && this.ParseChar('{'))) {

                return false;
            }

            var d = new Uint8Array(8);
            for (var i: number = 0; i < d.length; ++i) {
                var dd = new System.OutArgument<number>(0);

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
        }

        private ParseHexPrefix(): boolean {
            if (!this.ParseChar('0'))
                return false;

            return this.ParseChar('x');
        }

        private ParseChar(c: string): boolean {
            //TODO : cannot index string by []


            if (!this.Eof && this._src[this._cur] == c) {
                this._cur++;
                return true;
            }

            return false;
        }

        private ParseHex(length: number, strict: boolean, res: OutArgument<number>): boolean {
            res.value = 0;
            for (var i: number = 0; i < length; i++) {
                if (this.Eof) return !(strict && (i + 1 != length));

                //var c: Char = Char.ToLowerInvariant(this._src[this._cur]);

                var nr = parseInt(this._src[this._cur], 16);
                if (isNaN(nr)) {
                    if (!strict) return true;
                    return !(strict && (i + 1 != length));
                } else {
                    res.value = res.value * 16 + nr;
                    this._cur++;
                }



            }

            return true;
        }

    }

}