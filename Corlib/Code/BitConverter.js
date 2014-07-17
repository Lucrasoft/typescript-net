/// <reference path="Text/StringBuilder.ts" />
/// <reference path="Exceptions/Exception.ts"/>
/// <reference path="Char.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="Exceptions/ArgumentOutOfRangeException.ts"/>
var System;
(function (System) {
    //* Information about LittleEndian detection
    //* http://stackoverflow.com/questions/7869752/javascript-typed-arrays-and-endianness
    //*
    //REMARK : only LittleEndian code is implemented !
    var BitConverter = (function () {
        function BitConverter() {
        }
        BitConverter.AmILittleEndian = function () {
            var a = new ArrayBuffer(4);

            var b = new Uint8Array(a);
            var c = new Uint32Array(a);
            b[0] = 0xa1;
            b[1] = 0xb2;
            b[2] = 0xc3;
            b[3] = 0xd4;
            if (c[0] == 0xd4c3b2a1)
                return true;
            if (c[0] == 0xa1b2c3d4)
                return false;

            throw new System.Exception("This should not be possible.");
        };

        BitConverter.getBytes = function (value) {
            throw new System.NotImplementedException();
        };

        BitConverter.GetBytes_Boolean = function (value) {
            var res = new Uint8Array(1);
            res[0] = (value == true) ? 1 : 0;
            return res;
        };

        BitConverter.getBytes_String = function (value) {
            if (value = null)
                return null;

            //TODO : Test the surrogate cases !
            var res = new Uint8Array(value.length * 2);
            for (var i = 0; i < value.length; i++) {
                //code is 16 bit.
                var charcode = value.charCodeAt(i);
                res[i * 2 + 0] = charcode & 0x0F;
                res[i * 2 + 1] = charcode >> 8;
            }
            return res;
        };

        BitConverter.getBytes_Int16 = function (value) {
            if (value == null)
                throw new System.ArgumentNullException("value");

            var res = new Uint8Array(2);
            res[0] = value & 0xFF;
            value = value >> 8;
            res[1] = value & 0xFF;
            return res;
        };

        BitConverter.getBytes_Int32 = function (value) {
            if (value == null)
                throw new System.ArgumentNullException("value");

            var res = new Uint8Array(4);
            res[0] = value & 0xFF;
            value = value >> 8;
            res[1] = value & 0xFF;
            value = value >> 8;
            res[2] = value & 0xFF;
            value = value >> 8;
            res[3] = value & 0xFF;
            return res;
        };

        BitConverter.toBoolean = function (value, startIndex) {
            BitConverter.__internalCheckParam(value, startIndex, 1);

            if (value[startIndex] != 0)
                return true;

            return false;
        };

        BitConverter.toChar = function (value, startIndex) {
            BitConverter.__internalCheckParam(value, startIndex, 1);

            return new System.Char(value[startIndex]);
        };

        BitConverter.toSingle = function (value, startIndex) {
            throw new System.NotImplementedException();
        };

        BitConverter.toDouble = function (value, startIndex) {
            throw new System.NotImplementedException();
        };

        BitConverter.toInt16 = function (value, startIndex) {
            BitConverter.__internalCheckParam(value, startIndex, 2);

            var res = value[startIndex + 0];
            res += (value[startIndex + 1] << 8);

            return new System.Int16(res);
        };

        BitConverter.toInt32 = function (value, startIndex) {
            BitConverter.__internalCheckParam(value, startIndex, 4);

            var res = value[startIndex + 0];
            res += (value[startIndex + 1] << 8);
            res += (value[startIndex + 2] << 16);
            res += (value[startIndex + 3] << 24);

            return new System.Int32(res);
        };

        BitConverter.toString = function (value, startIndex, length) {
            BitConverter.__internalCheckParam(value, startIndex, length);

            if (length == 0)
                return "";

            var builder = new System.Text.StringBuilder();
            var end = startIndex + length;

            for (var i = startIndex; i < end; i++) {
                if (i > startIndex) {
                    builder.append('-');
                }
                ;

                var high = ((value[i] >> 4) & 0x0f);
                var low = (value[i] & 0x0f);

                builder.append(high.toString(16));
                builder.append(low.toString(16));
            }

            return builder.toString();
        };

        BitConverter.__internalCheckParam = function (value, startIndex, length) {
            if (value == null)
                throw new System.ArgumentNullException("value");

            if (length < 0)
                throw new System.ArgumentOutOfRangeException("Value must be positive.", null, "length");

            if (startIndex < 0 || (startIndex > value.length - length))
                throw new System.ArgumentOutOfRangeException("Index was" + " out of range. Must be non-negative and less than the" + " size of the collection.", null, "startIndex");
        };
        BitConverter.IsLittleEndian = BitConverter.AmILittleEndian();
        return BitConverter;
    })();
    System.BitConverter = BitConverter;
})(System || (System = {}));
//# sourceMappingURL=BitConverter.js.map
