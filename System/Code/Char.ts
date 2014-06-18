/// <reference path="IObject.ts" />
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

module System {


    //* docu : http://www.unicode.org/Public/UNIDATA
    //* docu: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


    export class Char implements IConvertible, IComparable<Char>, IEquatable<Char>{
        private static _type: Type = System.Type.registerClass(Char, "System.Char", ["System.IConvertible", "System.IComparable", "System.IEquatable"]);



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


        equals(obj: any): boolean {
            if (!(Statements.is(obj, Char._type)))
                return false;

            return (<Char>obj).value == this.value;
        }


        compareTo(other: Char): number {
            if (this.value == other.value)
                return 0;

            if (this.value > other.value)
                return 1;
            else
                return -1;
        }

        static convertFromUtf32(utf32: number): string {
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
            var typestr = System.Type.getTypeName(arg);
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


        static convertToUtf32(highSurrogate: string, lowSurrogate: string): number;
        static convertToUtf32(highSurrogate: number, lowSurrogate: number): number;
        static convertToUtf32(highSurrogate: Char, lowSurrogate: Char): number;

        static convertToUtf32(highSurrogate: any, lowSurrogate: any): number {
            highSurrogate = Char.__checkAndConvertArgument(highSurrogate, 0);

            if (highSurrogate < 0xD800 || 0xDBFF < highSurrogate)
                throw new ArgumentOutOfRangeException("highSurrogate");
            if (lowSurrogate < 0xDC00 || 0xDFFF < lowSurrogate)
                throw new ArgumentOutOfRangeException("lowSurrogate");

            return 0x10000 + ((highSurrogate - 0xD800) << 10) + (lowSurrogate - 0xDC00);
        }

       static convertToUtf32FromString(s: string, index: number): number {
            Char.__internalCheckParameters(s, index);

            if (!Char.isSurrogate(s[index]))
                return s.charCodeAt(index);
            if (!Char.isHighSurrogate(s[index])
                || index == s.length - 1
                || !Char.isLowSurrogate(s[index + 1]))
                throw new ArgumentException(String.format("The string contains invalid surrogate pair character at {0}", index));
            return Char.convertToUtf32(s[index], s[index + 1]);
        }



        static isSurrogatePair(highSurrogate: Char, lowSurrogate: Char): boolean;
        static isSurrogatePair(highSurrogate: string, lowSurrogate: string): boolean;
        static isSurrogatePair(highSurrogate: number, lowSurrogate: number): boolean;

        static isSurrogatePair(highSurrogate: any, lowSurrogate: any): boolean {
            var hs = Char.__checkAndConvertArgument(highSurrogate, 0);
            var ls = Char.__checkAndConvertArgument(lowSurrogate, 0);

            return 0xD800 <= hs && hs <= 0xDBFF && 0xDC00 <= ls && ls <= 0xDFFF;
        }

        static isSurrogatePairString(s: string, index: number): boolean {
            Char.__internalCheckParameters(s, index);
            return index + 1 < s.length && Char.isSurrogatePair(s[index], s[index + 1]);
        }

        getHashCode(): number {
            return this.value;
        }

        static getNumericValue(c: number): number;
        static getNumericValue(c: string): number;
        static getNumericValue(c: string, index: number): number;
        static getNumericValue(c: Char): number;

        static getNumericValue(c: any, index: number= 0): number {
            var cc = Char.__checkAndConvertArgument(c, index);
            return parseInt(JSString.fromCharCode(cc));
        }


        static getUnicodeCategory(c: Char): System.Globalization.UnicodeCategory;
        static getUnicodeCategory(c: string): System.Globalization.UnicodeCategory;
        static getUnicodeCategory(c: string, index: number): System.Globalization.UnicodeCategory;
        static getUnicodeCategory(c: number): System.Globalization.UnicodeCategory;

        static getUnicodeCategory(c: any, index: number= 0): System.Globalization.UnicodeCategory {
            var cc = Char.__checkAndConvertArgument(c, index);
            throw new NotImplementedException();
            return 0;
            
            // return (category_data[cc]);
        }


        static isControl(c: Char): boolean;
        static isControl(c: string): boolean;
        static isControl(c: string, index: number): boolean;
        static isControl(c: number): boolean;

        static isControl(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            return (Char.getUnicodeCategory(cc) == System.Globalization.UnicodeCategory.Control);
        }


        static isDigit(c: Char): boolean;
        static isDigit(c: string): boolean;
        static isDigit(c: string, index: number): boolean;
        static isDigit(c: number): boolean;

        static isDigit(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            return (Char.getUnicodeCategory(cc) == System.Globalization.UnicodeCategory.DecimalDigitNumber);
        }


        static isHighSurrogate(c: Char): boolean;
        static isHighSurrogate(c: string): boolean;
        static isHighSurrogate(c: string, index: number): boolean;
        static isHighSurrogate(c: number): boolean;

        static isHighSurrogate(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            return cc >= 0xD800 && cc <= 0xDBFF;
        }

        
        static isLetter(c: Char): boolean;
        static isLetter(c: string): boolean;
        static isLetter(c: string, index: number): boolean;
        static isLetter(c: number): boolean;

        static isLetter(c: any, index: number= 0): boolean {

            var cat = Char.getUnicodeCategory(c, index);
            return cat <= System.Globalization.UnicodeCategory.OtherLetter;
        }
        
        static isLetterOrDigit(c: Char): boolean;
        static isLetterOrDigit(c: string): boolean;
        static isLetterOrDigit(c: string, index: number): boolean;
        static isLetterOrDigit(c: number): boolean;

        static isLetterOrDigit(c: any, index: number= 0): boolean {
            var cat = Char.getUnicodeCategory(c, index);

            return (cat <= (System.Globalization.UnicodeCategory.OtherLetter) ||
                cat == (System.Globalization.UnicodeCategory.DecimalDigitNumber));

        }
        
        static isLower(c: Char): boolean;
        static isLower(c: string): boolean;
        static isLower(c: string, index: number): boolean;
        static isLower(c: number): boolean;

        static isLower(c: any, index: number= 0): boolean {
            var cat = Char.getUnicodeCategory(c, index);
            return (cat == System.Globalization.UnicodeCategory.LowercaseLetter);
        }


        
        static isLowSurrogate(c: Char): boolean;
        static isLowSurrogate(c: string): boolean;
        static isLowSurrogate(c: string, index: number): boolean;
        static isLowSurrogate(c: number): boolean;

        static isLowSurrogate(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            return cc >= 0xDC00 && cc <= 0xDFFF;
        }


        static isNumber(c: Char): boolean;
        static isNumber(c: string): boolean;
        static isNumber(c: string, index: number): boolean;
        static isNumber(c: number): boolean;

        static isNumber(c: any, index: number= 0): boolean {
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (System.Globalization.UnicodeCategory.DecimalDigitNumber) &&
                cat <= (System.Globalization.UnicodeCategory.OtherNumber));

        }

        
        static isPunctuation(c: Char): boolean;
        static isPunctuation(c: string): boolean;
        static isPunctuation(c: string, index: number): boolean;
        static isPunctuation(c: number): boolean;

        static isPunctuation(c: any, index: number= 0): boolean {

            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (System.Globalization.UnicodeCategory.ConnectorPunctuation) &&
                cat <= (System.Globalization.UnicodeCategory.OtherPunctuation));
        }



        static isSeparator(c: Char): boolean;
        static isSeparator(c: string): boolean;
        static isSeparator(c: string, index: number): boolean;
        static isSeparator(c: number): boolean;

        static isSeparator(c: any, index: number= 0): boolean {

            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (System.Globalization.UnicodeCategory.SpaceSeparator) &&
                cat <= (System.Globalization.UnicodeCategory.ParagraphSeparator));

        }



        
        static isSurrogate(c: Char): boolean;
        static isSurrogate(c: string): boolean;
        static isSurrogate(c: string, index: number): boolean;
        static isSurrogate(c: number): boolean;

        static isSurrogate(c: any, index: number= 0): boolean {
            var cat = Char.getUnicodeCategory(c, index);
            return (cat == System.Globalization.UnicodeCategory.Surrogate);

        }

        
        static isSymbol(c: Char): boolean;
        static isSymbol(c: string): boolean;
        static isSymbol(c: string, index: number): boolean;
        static isSymbol(c: number): boolean;


        static isSymbol(c: any, index: number= 0): boolean {
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (System.Globalization.UnicodeCategory.MathSymbol) &&
                cat <= (System.Globalization.UnicodeCategory.OtherSymbol));

        }


        
        static isUpper(c: Char): boolean;
        static isUpper(c: string): boolean;
        static isUpper(c: string, index: number): boolean;
        static isUpper(c: number): boolean;

        static isUpper(c: any, index: number= 0): boolean {

            var cat = Char.getUnicodeCategory(c, index);
            return (cat == System.Globalization.UnicodeCategory.UppercaseLetter);

        }


        static isWhiteSpace(c: Char): boolean;
        static isWhiteSpace(c: string): boolean;
        static isWhiteSpace(c: string, index: number): boolean;
        static isWhiteSpace(c: number): boolean;

        static isWhiteSpace(c: any, index: number= 0): boolean {
            var cc = Char.__checkAndConvertArgument(c, index);
            if (cc < 0x1680)
                return cc == 0x20 || cc >= 0x09 && cc <= 0x0d || cc == 0x85 || cc == 0xA0;


            var cat = Char.getUnicodeCategory(c, index);
            return cat > System.Globalization.UnicodeCategory.OtherNumber && cat <= System.Globalization.UnicodeCategory.ParagraphSeparator;

        }



        private static __internalCheckParameters(s: string, index: number): void {
            if (s == null) throw new ArgumentNullException("s");

            if (index < 0 || index >= s.length)
                throw new ArgumentOutOfRangeException("The value of index is less than zero, or greater than or equal to the length of s.");
        }

        static tryParse(s: string, result: System.OutArgument<Char>): boolean {
            if (s == null || s.length != 1) {
                result.value = new Char(0);
                return false;
            }

            result.value = new Char(s);
            return true;
        }

        static parse(s: string): Char {
            if (s == null)
                throw new ArgumentNullException("s");

            if (s.length != 1)
                throw new FormatException("s contains more than one character.");

            return new Char(s[0]);
        }

        static toLower(c: Char, culture?: System.Globalization.CultureInfo): Char {
            //TODO : culture is ignored. 
            //use JS string lower 
            var cstr = JSString.fromCharCode(c.value).toLocaleLowerCase();
            return new Char(cstr);
        }
        
        static toLowerInvariant(c: Char): Char;
        static toLowerInvariant(c: string): Char;
        static toLowerInvariant(c: number): Char;
        static toLowerInvariant(c: any): Char {
            //use JS string lower 
            var cc = Char.__checkAndConvertArgument(c, 0);
            
            

            var cstr = JSString.fromCharCode(cc).toLowerCase();
            return new Char(cstr);
        }

        
        static toUpper(c: Char, culture?: System.Globalization.CultureInfo ): Char {
            //TODO : culture is ignored. 
            //use JS string lower 
            var cstr = JSString.fromCharCode(c.value).toLocaleUpperCase();
            return new Char(cstr);
        }
        
        static toUpperInvariant(c: Char): Char;
        static toUpperInvariant(c: string): Char;
        static toUpperInvariant(c: number): Char;
        static toUpperInvariant(c: any): Char {
            var cc = Char.__checkAndConvertArgument(c, 0);
            var cstr = JSString.fromCharCode(cc).toUpperCase();
            return new Char(cstr);
        }

     
	
        toString(provider?: IFormatProvider): string {
            //provider is ignored?
            return JSString.fromCharCode(this.value);
        }

		static toString(c : Char) :string
        {

            return JSString.fromCharCode(c.value);
		}

	

		// =========== IConvertible Methods =========== //

		getTypeCode() : TypeCode {
            return TypeCode.Char;
        }

        toNumber(provider: IFormatProvider): number {
            return this.value;
        }
      
        toBoolean(provider: IFormatProvider): boolean {
            throw new InvalidCastException();
        }

	

    }

}