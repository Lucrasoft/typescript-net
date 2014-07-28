/// <reference path="Decoder.ts" />


module System.Text {

    export class Encoding {

        public static utf8encoding: Encoding;
        public static UTF8UnmarkedUnsafe: Encoding; 

        public GetDecoder(): Decoder {
            throw new NotImplementedException();
        }

        public getMaxByteCount(...params): number {
            throw new NotImplementedException();
        }

        public getChars(...params): number {
            throw new NotImplementedException();
        }


    }

}