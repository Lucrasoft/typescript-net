 

module System {

    export class Buffer {

        static _type = System.Type.registerClass(Buffer, "System.Buffer", []);


        public static byteLength(array: ArrayBuffer): number {


            // note: the other methods in this class also use ByteLength to test for
            // null and non-primitive arguments as a side-effect.

            if (array == null)
                throw new ArgumentNullException("array");

            var length: number = array.byteLength;
            if (length < 0)
                throw new ArgumentException("Object must be an array of primitives.");

            return length;
        }



        public static getByte(array: ArrayBuffer, index: number): number {
            if (index < 0 || index >= System.Buffer.byteLength(array))
                throw new ArgumentOutOfRangeException("Value must be non-negative and less than the size of the collection.", null, "index");

            var dv = new DataView(array, index, 1);
            return dv.getUint8(0);

        }

        public static setByte(array: ArrayBuffer, index: number, value: number) {
            if (index < 0 || index >= System.Buffer.byteLength(array))
                throw new ArgumentOutOfRangeException("Value must be non-negative and less than the size of the collection.", null, "index");


            var dv = new DataView(array, index, 1);
            dv.setUint8(0, value);

        }

        public static blockCopyArray<T>(src: T[], srcOffset: number, dst: T[], dstOffset: number, count: number) {

            //TODO  : argument validation !
            for (var i: number = 0; i < count; i++) {
                dst[dstOffset+i ] = src[srcOffset + i];
            }

        }

        public static blockCopy(src: ArrayBuffer, srcOffset: number, dst: ArrayBuffer, dstOffset: number, count: number) {
            if (src == null)
                throw new ArgumentNullException("src");

            if (dst == null)
                throw new ArgumentNullException("dst");

            if (srcOffset < 0)
                throw new ArgumentOutOfRangeException("Non-negative number required.", null, "srcOffset");

            if (dstOffset < 0)
                throw new ArgumentOutOfRangeException("Non-negative number required.", null, "dstOffset");

            if (count < 0)
                throw new ArgumentOutOfRangeException("Non-negative number required.", null, "count");

            // We do the checks in unmanaged code for performance reasons

            if ((srcOffset > System.Buffer.byteLength(src) - count) || (dstOffset > System.Buffer.byteLength(dst) - count))
                throw new ArgumentException("Offset and length were out of bounds for the array or count is greater than " +
                    "the number of elements from index to the end of the source collection.");

            //DO copying?
            var srcDataview = new DataView(src, srcOffset);
            var dstDataview = new DataView(dst, dstOffset);
            for (var i: number = 0; i < count; i++) {
                dstDataview.setUint8(i, srcDataview.getUint8(i));
            }

        }
    }

}
