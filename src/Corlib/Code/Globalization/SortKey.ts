/// <reference path="../Object.ts"/>
/// <reference path="../Exceptions/ArgumentNullException.ts"/>
//todo

module System.Globalization {

    export class SortKey {
        private str: string;
        private options: CompareOptions;
        private key: Uint8Array;
        private lcid: number;

        static _type: Type = System.Type.registerClass(SortKey, "System.Globalization.SortKey", []);

        //SortKey() { }

        private SortKey(lcid: number, source: string, options: CompareOptions) {
            this.lcid = lcid;
            this.str = source;
            this.options = options;
        }

        get keyData(): Uint8Array {
            return this.key;
        }

        get originalString(): string {
            return this.str;
        }

        compare(sortkey1: SortKey, sortkey2: SortKey): number {
            if (sortkey1 == null) {
                throw new ArgumentNullException("sortkey1");
            }
            if (sortkey2 == null) {
                throw new ArgumentNullException("sortkey2");
            }

            var keydata1 = new Uint8Array(sortkey1.key);
            var keydata2 = new Uint8Array(sortkey2.key);


            if (keydata1.length == 0) {
                if (keydata2.length == 0) {
                    return 0;
                }
                return -1;
            }

            var min_len: number = (keydata1.length < keydata2.length) ? keydata1.length : keydata2.length;

            for (var i = 0; i < min_len; i++) {

                if (keydata1[i] > keydata2[i]) {
                    return 1;
                } else if (keydata1[i] < keydata2[i]) {
                    return -1;
                }
            }

            if (keydata1.length < keydata2.length) {
                return -1;
            } else if (keydata1.length > keydata2.length) {
                return 1;
            } else {
                return 0;
            }
        }

        equals(value: Object): boolean {
            var other = <SortKey><any>value; 
            if (other != null) {
                if((this.lcid == other.lcid) &&
                    (this.options == other.options) &&
                    (this.compare(this, other) == 0)) {
                    return true;
                }
            }
            return false;
        }

        //getHashCode(): number {
        //    return this.str.getHashCode();
        //}

        toString(): string {
            return ("SortKey - " + this.lcid + ", " + this.options + ", " + this.str);
        }
    }
} 