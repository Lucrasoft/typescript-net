/// <reference path="IObject.ts" />
/// <reference path="Type.ts" />
/// <reference path="Interfaces/IConvertible.ts" />
/// <reference path="Interfaces/IComparable.ts" />
/// <reference path="Interfaces/IEquatable.ts" />
/// <reference path="Globalization/UnicodeCategory.ts" />

module System {


    //* docu : http://www.unicode.org/Public/UNIDATA
    //* docu: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


    export class Char implements IConvertible, IComparable<Char>, IEquatable<Char>{
        private static _type: Type = System.Type.RegisterClass(Char, "System.Char", ["System.IConvertible", "System.IComparable", "System.IEquatable"]);



        public static MaxValue: number = 0xffff;
        public static MinValue: number = 0x0000;

        //the Unicode value of the char // Int16 
        public value: number;


        constructor(c: number);
        constructor(c: string);
        constructor(c: string, index: number);

        constructor(c: any, index: number= 0) {
            var cc = Char.__checkAndConvertArgument(c, index);
            this.value = cc;
        }


        public Equals(obj: any): boolean {
            if (!(Statements.Is(obj, Char._type)))
                return false;

            return (<Char>obj).value == this.value;
        }


        public CompareTo(other: Char): number {
            if (this.value == other.value)
                return 0;

            if (this.value > other.value)
                return 1;
            else
                return -1;
        }

        public static ConvertFromUtf32(utf32: number): string {
            if (utf32 < 0 || utf32 > 0x10FFFF)
                throw new ArgumentOutOfRangeException("The argument must be from 0 to 0x10FFFF.", null, "utf32");
            if (0xD800 <= utf32 && utf32 <= 0xDFFF)
                throw new ArgumentOutOfRangeException("The argument must not be in surrogate pair range.", null, "utf32");


            if (utf32 < 0x10000)
                return JSString.fromCharCode(utf32);

            utf32 -= 0x10000;
            return JSString.fromCharCode((utf32 >> 10) + 0xD800, (utf32 % 0x0400 + 0xDC00));
        }

        private static __checkAndConvertArgument(arg: any, index: number): number {
            var typestr = System.Type.GetTypeName(arg);
            if (typestr === "string") {
                var s: string = <string>arg;
                if (s.length == 0) throw new ArgumentOutOfRangeException("The argument cannot be an empty string.");
                if (index < 0 || index >= s.length)
                    throw new ArgumentOutOfRangeException("The value of index is less than zero, or greater than or equal to the length of s.");
                return s.charCodeAt(index);
            }
            if (typestr === "number") {
                return arg;
            }
            if (typestr === "System.Char") {
                return (<System.Char>arg).value;
            }
            throw new ArgumentException("Argument not of expected type");
        }


        public static ConvertToUtf32(highSurrogate: string, lowSurrogate: string): number;
        public static ConvertToUtf32(highSurrogate: number, lowSurrogate: number): number;
        public static ConvertToUtf32(highSurrogate: Char, lowSurrogate: Char): number;

        public static ConvertToUtf32(highSurrogate: any, lowSurrogate: any): number {
            highSurrogate = Char.__checkAndConvertArgument(highSurrogate, 0);

            if (highSurrogate < 0xD800 || 0xDBFF < highSurrogate)
                throw new ArgumentOutOfRangeException("highSurrogate");
            if (lowSurrogate < 0xDC00 || 0xDFFF < lowSurrogate)
                throw new ArgumentOutOfRangeException("lowSurrogate");

            return 0x10000 + ((highSurrogate - 0xD800) << 10) + (lowSurrogate - 0xDC00);
        }

        public static ConvertToUtf32FromString(s: string, index: number): number {
            Char.__internalCheckParameters(s, index);

            if (!Char.IsSurrogate(s[index]))
                return s.charCodeAt(index);
            if (!Char.IsHighSurrogate(s[index])
                || index == s.length - 1
                || !Char.IsLowSurrogate(s[index + 1]))
                throw new ArgumentException(String.Format("The string contains invalid surrogate pair character at {0}", index));
            return Char.ConvertToUtf32(s[index], s[index + 1]);
        }



        public static IsSurrogatePair(highSurrogate: Char, lowSurrogate: Char): boolean;
        public static IsSurrogatePair(highSurrogate: string, lowSurrogate: string): boolean;
        public static IsSurrogatePair(highSurrogate: number, lowSurrogate: number): boolean;

        public static IsSurrogatePair(highSurrogate: any, lowSurrogate: any): boolean {
            var hs = Char.__checkAndConvertArgument(highSurrogate, 0);
            var ls = Char.__checkAndConvertArgument(lowSurrogate, 0);

            return 0xD800 <= hs && hs <= 0xDBFF && 0xDC00 <= ls && ls <= 0xDFFF;
        }

        public static IsSurrogatePairString(s: string, index: number): boolean {
            Char.__internalCheckParameters(s, index);
            return index + 1 < s.length && Char.IsSurrogatePair(s[index], s[index + 1]);
        }

        public GetHashCode(): number {
            return this.value;
        }

        public static GetNumericValue(c: number): number;
        public static GetNumericValue(c: string): number;
        public static GetNumericValue(c: string, index: number): number;
        public static GetNumericValue(c: Char): number;

        public static GetNumericValue(c: any, index: number= 0): number {

            var cc = Char.__checkAndConvertArgument(c, index);
            return parseInt(JSString.fromCharCode(cc))

            
        }


        public static GetUnicodeCategory(c: Char): System.Globalization.UnicodeCategory;
        public static GetUnicodeCategory(c: string): System.Globalization.UnicodeCategory;
        public static GetUnicodeCategory(c: string, index: number): System.Globalization.UnicodeCategory;
        public static GetUnicodeCategory(c: number): System.Globalization.UnicodeCategory;

        public static GetUnicodeCategory(c: any, index: number= 0): System.Globalization.UnicodeCategory {
            var cc = Char.__checkAndConvertArgument(c, index);
            throw new NotImplementedException();
            return 0;
            
            // return (category_data[cc]);
        }


        public static IsControl(c: Char): boolean;
        public static IsControl(c: string): boolean;
        public static IsControl(c: string, index: number): boolean;
        public static IsControl(c: number): boolean;

        public static IsControl(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            return (Char.GetUnicodeCategory(cc) == System.Globalization.UnicodeCategory.Control);
        }


        public static IsDigit(c: Char): boolean;
        public static IsDigit(c: string): boolean;
        public static IsDigit(c: string, index: number): boolean;
        public static IsDigit(c: number): boolean;

        public static IsDigit(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            return (Char.GetUnicodeCategory(cc) == System.Globalization.UnicodeCategory.DecimalDigitNumber);
        }


        public static IsHighSurrogate(c: Char): boolean;
        public static IsHighSurrogate(c: string): boolean;
        public static IsHighSurrogate(c: string, index: number): boolean;
        public static IsHighSurrogate(c: number): boolean;

        public static IsHighSurrogate(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            return cc >= 0xD800 && cc <= 0xDBFF;
        }


        public static IsLetter(c: Char): boolean;
        public static IsLetter(c: string): boolean;
        public static IsLetter(c: string, index: number): boolean;
        public static IsLetter(c: number): boolean;

        public static IsLetter(c: any, index: number= 0): boolean {

            var cat = Char.GetUnicodeCategory(c, index);
            return cat <= System.Globalization.UnicodeCategory.OtherLetter;
        }

        public static IsLetterOrDigit(c: Char): boolean;
        public static IsLetterOrDigit(c: string): boolean;
        public static IsLetterOrDigit(c: string, index: number): boolean;
        public static IsLetterOrDigit(c: number): boolean;

        public static IsLetterOrDigit(c: any, index: number= 0): boolean {
            var cat = Char.GetUnicodeCategory(c, index);

            return (cat <= (System.Globalization.UnicodeCategory.OtherLetter) ||
                cat == (System.Globalization.UnicodeCategory.DecimalDigitNumber));

        }

        public static IsLower(c: Char): boolean;
        public static IsLower(c: string): boolean;
        public static IsLower(c: string, index: number): boolean;
        public static IsLower(c: number): boolean;

        public static IsLower(c: any, index: number= 0): boolean {
            var cat = Char.GetUnicodeCategory(c, index);
            return (cat == System.Globalization.UnicodeCategory.LowercaseLetter);
        }



        public static IsLowSurrogate(c: Char): boolean;
        public static IsLowSurrogate(c: string): boolean;
        public static IsLowSurrogate(c: string, index: number): boolean;
        public static IsLowSurrogate(c: number): boolean;

        public static IsLowSurrogate(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            return cc >= 0xDC00 && cc <= 0xDFFF;
        }


        public static IsNumber(c: Char): boolean;
        public static IsNumber(c: string): boolean;
        public static IsNumber(c: string, index: number): boolean;
        public static IsNumber(c: number): boolean;

        public static IsNumber(c: any, index: number= 0): boolean {
            var cat = Char.GetUnicodeCategory(c, index);
            return (cat >= (System.Globalization.UnicodeCategory.DecimalDigitNumber) &&
                cat <= (System.Globalization.UnicodeCategory.OtherNumber));

        }



        public static IsPunctuation(c: Char): boolean;
        public static IsPunctuation(c: string): boolean;
        public static IsPunctuation(c: string, index: number): boolean;
        public static IsPunctuation(c: number): boolean;

        public static IsPunctuation(c: any, index: number= 0): boolean {

            var cat = Char.GetUnicodeCategory(c, index);
            return (cat >= (System.Globalization.UnicodeCategory.ConnectorPunctuation) &&
                cat <= (System.Globalization.UnicodeCategory.OtherPunctuation));
        }



        public static IsSeparator(c: Char): boolean;
        public static IsSeparator(c: string): boolean;
        public static IsSeparator(c: string, index: number): boolean;
        public static IsSeparator(c: number): boolean;

        public static IsSeparator(c: any, index: number= 0): boolean {

            var cat = Char.GetUnicodeCategory(c, index);
            return (cat >= (System.Globalization.UnicodeCategory.SpaceSeparator) &&
                cat <= (System.Globalization.UnicodeCategory.ParagraphSeparator));

        }




        public static IsSurrogate(c: Char): boolean;
        public static IsSurrogate(c: string): boolean;
        public static IsSurrogate(c: string, index: number): boolean;
        public static IsSurrogate(c: number): boolean;

        public static IsSurrogate(c: any, index: number= 0): boolean {
            var cat = Char.GetUnicodeCategory(c, index);
            return (cat == System.Globalization.UnicodeCategory.Surrogate);

        }


        public static IsSymbol(c: Char): boolean;
        public static IsSymbol(c: string): boolean;
        public static IsSymbol(c: string, index: number): boolean;
        public static IsSymbol(c: number): boolean;


        public static IsSymbol(c: any, index: number= 0): boolean {
            var cat = Char.GetUnicodeCategory(c, index);
            return (cat >= (System.Globalization.UnicodeCategory.MathSymbol) &&
                cat <= (System.Globalization.UnicodeCategory.OtherSymbol));

        }



        public static IsUpper(c: Char): boolean;
        public static IsUpper(c: string): boolean;
        public static IsUpper(c: string, index: number): boolean;
        public static IsUpper(c: number): boolean;

        public static IsUpper(c: any, index: number= 0): boolean {

            var cat = Char.GetUnicodeCategory(c, index);
            return (cat == System.Globalization.UnicodeCategory.UppercaseLetter);

        }


        public static IsWhiteSpace(c: Char): boolean;
        public static IsWhiteSpace(c: string): boolean;
        public static IsWhiteSpace(c: string, index: number): boolean;
        public static IsWhiteSpace(c: number): boolean;

        public static IsWhiteSpace(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            if (cc < 0x1680)
                return cc == 0x20 || cc >= 0x09 && cc <= 0x0d || cc == 0x85 || cc == 0xA0;


            var cat = Char.GetUnicodeCategory(c, index);
            return cat > System.Globalization.UnicodeCategory.OtherNumber && cat <= System.Globalization.UnicodeCategory.ParagraphSeparator;

        }



        private static __internalCheckParameters(s: string, index: number): void {
            if (s == null) throw new ArgumentNullException("s");

            if (index < 0 || index >= s.length)
                throw new ArgumentOutOfRangeException("The value of index is less than zero, or greater than or equal to the length of s.");
        }

        public static TryParse(s: string, result: System.OutArgument<Char>): boolean {
            if (s == null || s.length != 1) {
                result.value = new Char(0);
                return false;
            }

            result.value = new Char(s);
            return true;
        }

        public static Parse(s: string): Char {
            if (s == null)
                throw new ArgumentNullException("s");

            if (s.length != 1)
                throw new FormatException("s contains more than one character.");

            return new Char(s[0]);
        }

        public static ToLower(c: Char, culture?: System.Globalization.CultureInfo): Char {
            //TODO : culture is ignored. 
            //use JS string lower 
            var cstr = JSString.fromCharCode(c.value).toLocaleLowerCase();
            return new Char(cstr);
        }

        public static ToLowerInvariant(c: Char): Char;
        public static ToLowerInvariant(c: string): Char;
        public static ToLowerInvariant(c: number): Char;
        public static ToLowerInvariant(c: any): Char {
            //use JS string lower 
            var cc = Char.__checkAndConvertArgument(c, 0);
            
            

            var cstr = JSString.fromCharCode(cc).toLowerCase();
            return new Char(cstr);
        }


        public static ToUpper(c: Char, culture?: System.Globalization.CultureInfo ): Char {
            //TODO : culture is ignored. 
            //use JS string lower 
            var cstr = JSString.fromCharCode(c.value).toLocaleUpperCase();
            return new Char(cstr);
        }

        public static ToUpperInvariant(c: Char): Char;
        public static ToUpperInvariant(c: string): Char;
        public static ToUpperInvariant(c: number): Char;
        public static ToUpperInvariant(c: any): Char {
            var cc = Char.__checkAndConvertArgument(c, 0);
            var cstr = JSString.fromCharCode(cc).toUpperCase();
            return new Char(cstr);
        }

     
	
        public ToString(provider?: IFormatProvider): string {
            //provider is ignored?
            return JSString.fromCharCode(this.value);
        }

		public static ToString(c : Char) :string
        {

            return JSString.fromCharCode(c.value);
		}

	

		// =========== IConvertible Methods =========== //

		public  GetTypeCode() : TypeCode {
        return TypeCode.Char;
    }

        ToNumber(provider: IFormatProvider): number {
            return this.value;
        }
      
        ToBoolean(provider: IFormatProvider): boolean {
            throw new InvalidCastException();
        }

	

    }

}