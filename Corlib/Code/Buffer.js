var System;
(function (System) {
    var Buffer = (function () {
        function Buffer() {
        }
        Buffer.byteLength = function (array) {
            // note: the other methods in this class also use ByteLength to test for
            // null and non-primitive arguments as a side-effect.
            if (array == null)
                throw new System.ArgumentNullException("array");

            var length = array.byteLength;
            if (length < 0)
                throw new System.ArgumentException("Object must be an array of primitives.");

            return length;
        };

        Buffer.getByte = function (array, index) {
            if (index < 0 || index >= System.Buffer.byteLength(array))
                throw new System.ArgumentOutOfRangeException("Value must be non-negative and less than the size of the collection.", null, "index");

            var dv = new DataView(array, index, 1);
            return dv.getUint8(0);
        };

        Buffer.setByte = function (array, index, value) {
            if (index < 0 || index >= System.Buffer.byteLength(array))
                throw new System.ArgumentOutOfRangeException("Value must be non-negative and less than the size of the collection.", null, "index");

            var dv = new DataView(array, index, 1);
            dv.setUint8(0, value);
        };

        Buffer.blockCopyArray = function (src, srcOffset, dst, dstOffset, count) {
            for (var i = 0; i < count; i++) {
                dst[dstOffset + i] = src[srcOffset + i];
            }
        };

        Buffer.blockCopy = function (src, srcOffset, dst, dstOffset, count) {
            if (src == null)
                throw new System.ArgumentNullException("src");

            if (dst == null)
                throw new System.ArgumentNullException("dst");

            if (srcOffset < 0)
                throw new System.ArgumentOutOfRangeException("Non-negative number required.", null, "srcOffset");

            if (dstOffset < 0)
                throw new System.ArgumentOutOfRangeException("Non-negative number required.", null, "dstOffset");

            if (count < 0)
                throw new System.ArgumentOutOfRangeException("Non-negative number required.", null, "count");

            // We do the checks in unmanaged code for performance reasons
            if ((srcOffset > System.Buffer.byteLength(src) - count) || (dstOffset > System.Buffer.byteLength(dst) - count))
                throw new System.ArgumentException("Offset and length were out of bounds for the array or count is greater than " + "the number of elements from index to the end of the source collection.");

            //DO copying?
            var srcDataview = new DataView(src, srcOffset);
            var dstDataview = new DataView(dst, dstOffset);
            for (var i = 0; i < count; i++) {
                dstDataview.setUint8(i, srcDataview.getUint8(i));
            }
        };
        Buffer._type = System.Type.registerClass(Buffer, "System.Buffer", []);
        return Buffer;
    })();
    System.Buffer = Buffer;
})(System || (System = {}));
//# sourceMappingURL=Buffer.js.map
