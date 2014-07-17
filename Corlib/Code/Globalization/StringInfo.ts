/// <reference path="../String.ts"/>
/// <reference path="../Exceptions/ArgumentNullException.ts"/>
/// <reference path="../Exceptions/ArgumentOutOfRangeException.ts"/>
/// <reference path="../Char.ts"/>
/// <reference path="../Int32.ts"/>
/// <reference path="UnicodeCategory.ts"/>

module System.Globalization {

    export class StringInfo{

        // This is just a start... 

        constructor(value?: string) {
            if (String.isNullOrEmpty(value)) {
                value = "";
            }

            String = value;
        }

        private s: string;
        length: number;

        equals(value: Object): boolean {
            var other: StringInfo = <any>value;
            return other != null && this.s == other.s;
        }

        getHashCode(): number {
            return this.s.getHashCode();
        }

        get lengthInTextElements(): number {

            if (this.length < 0) {

                this.length = 0;
                for (var idx = 0; idx < this.s.length; this.length++) {

                    idx += this.getNextTextElementLength(this.s, idx);
                }
            }

            return this.length;
        }

        get string(): string{
            return this.s;
        }

        set string(value){
            if (value == null)
                throw new ArgumentNullException("value");

            this.length = -1;
            this.s = value;
        }

        substringByTextElements(startingTextElement: number, lengthInTextElements?: number) {
            if (lengthInTextElements == null) {

                if (startingTextElement < 0 || this.s.length == 0)
                    throw new ArgumentOutOfRangeException("startingTextElement");
                var idx: number = 0;
                for (var i = 0; i < startingTextElement; i++) {

                    if (idx >= this.s.length)
                        throw new ArgumentOutOfRangeException("startingTextElement");
                    idx += this.getNextTextElementLength(this.s, idx);
                }

                return this.s.substr(idx);
            } else {

                if (startingTextElement < 0 || this.s.length == 0) 
                    throw new ArgumentOutOfRangeException("startingTextElement");
                if (lengthInTextElements < 0)
                    throw new ArgumentOutOfRangeException("lengthInTextElements");
                var idx: number = 0;
                for (var i = 0; i < startingTextElement; i++) {

                    if (idx >= this.s.length)
                        throw new ArgumentOutOfRangeException("startingTextElement");

                    idx += this.getNextTextElementLength(this.s, idx);
                }
                var start: number = idx;
                for (var i = 0; i < lengthInTextElements; i++) {
                    if (idx >= this.length)
                        throw new ArgumentOutOfRangeException("lengthInTextElements");
                    idx += this.getNextTextElementLength(this.s, idx);
                }
                return this.s.substr(start, idx - start);
            }
        }

        static getNextTextElement(str: string, index?: number): string {

            if (index == null) {
                if (str == null || str.length == 0) {
                    throw new ArgumentNullException("string is null");
                }

                return (this.getNextTextElement(str, 0));
            }
            else {
                var len: number = this.getNextTextElementLength(str, index);
                if (len != 1) {
                    return str.substr(index, len);
                }
                else {
                    return str[index];
                }
            }
        }

        static getNextTextElementLength(str: string, index: number) : number {

            if (str == null) {
                throw new ArgumentNullException("string is null");
            }

            if (index >= str.length)
                return 0;
            if (index < 0)
                throw new ArgumentOutOfRangeException("Index is not valid");

            var ch: Char = new Char(str[index]);
            var cat = Char.getUnicodeCategory(ch);

            if (cat == UnicodeCategory.Surrogate) {
                if (ch.value >= 0xD800 && ch.value <= 0xDBFF) {

                    if ((index + 1) < str.length &&
                        str[index + 1].value >= 0xDC00 &&
                        str[index + 1].value <= 0xDFFF) {
                        return 2;
                    } else {

                        return 1;
                    }
                } else {
                    return 1;
                }
            } else {
                if (cat == UnicodeCategory.NonSpacingMark ||
                    cat == UnicodeCategory.SpacingCombiningMark ||
                    cat == UnicodeCategory.EnclosingMark) {
                    return 1;
                }

                var count: number = 1;

                while (index + count < str.length) {

                    cat = Char.getUnicodeCategory(str.charAt(index + count));
                    if(cat != UnicodeCategory.NonSpacingMark &&
                        cat != UnicodeCategory.SpacingCombiningMark &&
                        cat != UnicodeCategory.EnclosingMark) {
                        /* Finished the sequence */
                        break;
                    }
                    count++;
                }

                return count;
            }   
        }

        static getTextElementEnumerator(str: string): TextElementEnumerator {

            if (str == null || str.length == 0) {

                throw new ArgumentNullException("string is null");
            }

            return(new TextElementEnumerator(str, 0));
        }

        static parseCombiningCharacters(str: string): Int32Array {
            if (str == null) {

                throw new ArgumentNullException("string is null");
            }

            var indices: ArrayList = new ArrayList(str.length); // ArrayList isn't implemented yet.
            var tee: TextElementEnumerator = this.getTextElementEnumerator(str);

            tee.reset();
            while (tee.moveNext()) {
                indices.Add(tee.elementIndex);
            }

            return(<Int32Array>indices.toArray(typeof (Int32)));
        }
    }
} 