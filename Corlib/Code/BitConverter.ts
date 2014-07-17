/// <reference path="Text/StringBuilder.ts" />
/// <reference path="Exceptions/Exception.ts"/>
/// <reference path="Char.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="Exceptions/ArgumentOutOfRangeException.ts"/>


module System {


    //* Information about LittleEndian detection
    //* http://stackoverflow.com/questions/7869752/javascript-typed-arrays-and-endianness
    //* 



    //REMARK : only LittleEndian code is implemented !

    export class BitConverter {


        static IsLittleEndian: boolean = BitConverter.AmILittleEndian();


        private static AmILittleEndian(): boolean {

            var a = new ArrayBuffer(4);

            var b = new Uint8Array(a);
            var c = new Uint32Array(a);
            b[0] = 0xa1;
            b[1] = 0xb2;
            b[2] = 0xc3;
            b[3] = 0xd4;
            if (c[0] == 0xd4c3b2a1) return true;
            if (c[0] == 0xa1b2c3d4) return false;

            throw new Exception("This should not be possible.");
        }


        static getBytes(value: any): Uint8Array {

            //TODO :
            //Detect type of value and select appropriate private static method.

            throw new NotImplementedException();
        }

        private static GetBytes_Boolean(value: boolean): Uint8Array {
            var res = new Uint8Array(1);
            res[0] = (value == true) ? 1 : 0;
            return res;
        }

        static getBytes_String(value: string): Uint8Array {
            if (value = null) return null;

            //TODO : Test the surrogate cases !
            var res = new Uint8Array(value.length * 2);
            for (var i: number = 0; i < value.length; i++) {
                //code is 16 bit.
                var charcode = value.charCodeAt(i);
                res[i * 2 + 0] = charcode & 0x0F;
                res[i * 2 + 1] = charcode >> 8;

            }
            return res;
        }


        static getBytes_Int16(value: number): Uint8Array {
            if (value == null)
                throw new ArgumentNullException("value");

            var res = new Uint8Array(2);
            res[0] = value & 0xFF;
            value = value >> 8;
            res[1] = value & 0xFF;
            return res;
        }

        static getBytes_Int32(value: number): Uint8Array {
            if (value == null)
                throw new ArgumentNullException("value");

            var res = new Uint8Array(4);
            res[0] = value & 0xFF; value = value >> 8;
            res[1] = value & 0xFF; value = value >> 8;
            res[2] = value & 0xFF; value = value >> 8;
            res[3] = value & 0xFF;
            return res;

        }




        static toBoolean(value: Uint8Array, startIndex: number): boolean {
            BitConverter.__internalCheckParam(value, startIndex, 1);

            if (value[startIndex] != 0)
                return true;

            return false;
        }


        static toChar(value: Uint8Array, startIndex: number): Char {
            BitConverter.__internalCheckParam(value, startIndex, 1);

            return new System.Char(value[startIndex]);

        }

        static toSingle(value: Uint8Array, startIndex): number {
            //use a DataView 
            throw new NotImplementedException();
        }

        static toDouble(value: Uint8Array, startIndex): number {
            //use a DataView
            throw new NotImplementedException();
        }



        static toInt16(value: Uint8Array, startIndex: number): System.Int16 {
            BitConverter.__internalCheckParam(value, startIndex, 2);

            var res = value[startIndex + 0];
            res += (value[startIndex + 1] << 8);

            return new System.Int16(res);
        }

        static toInt32(value: Uint8Array, startIndex: number): System.Int32 {
            BitConverter.__internalCheckParam(value, startIndex, 4);

            var res = value[startIndex + 0];
            res += (value[startIndex + 1] << 8);
            res += (value[startIndex + 2] << 16);
            res += (value[startIndex + 3] << 24);

            return new System.Int32(res);
        }



        static toString(value: Uint8Array, startIndex: number, length: number): string {
            BitConverter.__internalCheckParam(value, startIndex, length);

            if (length == 0) return "";

            var builder: System.Text.StringBuilder = new System.Text.StringBuilder();
            var end: number = startIndex + length;

            for (var i: number = startIndex; i < end; i++) {

                if (i > startIndex) { builder.append('-') };

                var high = ((value[i] >> 4) & 0x0f);
                var low = (value[i] & 0x0f);

                builder.append(high.toString(16));
                builder.append(low.toString(16));
            }

            return builder.toString();
        }


        private static __internalCheckParam(value: Uint8Array, startIndex: number, length: number) {
            if (value == null)
                throw new ArgumentNullException("value");

            if (length < 0)
                throw new ArgumentOutOfRangeException("Value must be positive.", null, "length");

            if (startIndex < 0 || (startIndex > value.length - length))
                throw new ArgumentOutOfRangeException("Index was"
                    + " out of range. Must be non-negative and less than the"
                    + " size of the collection.", null, "startIndex");

        }
    }

}