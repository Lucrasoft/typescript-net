var System;
(function (System) {
    //Helper class for the javascript TypedArray's
    var TypedArray = (function () {
        function TypedArray() {
        }
        TypedArray.isTypedArray = function (array) {
            if ((array instanceof Uint8Array) || (array instanceof Uint16Array) || (array instanceof Uint32Array) || (array instanceof Int8Array) || (array instanceof Int16Array) || (array instanceof Int32Array) || (array instanceof Float32Array) || (array instanceof Float64Array)) {
                return true;
            }
            return false;
        };

        TypedArray.elementByteSize = function (array) {
            if ((array instanceof Uint8Array) || (array instanceof Int8Array)) {
                return 1;
            }
            if ((array instanceof Uint16Array) || (array instanceof Int16Array)) {
                return 2;
            }
            if ((array instanceof Uint32Array) || (array instanceof Int32Array) || (array instanceof Float32Array)) {
                return 4;
            }
            if (array instanceof Float64Array) {
                return 8;
            }

            //throw exception ?! or return 0 ?
            return -1;
        };

        TypedArray.length = function (array) {
            if (!TypedArray.isTypedArray(array))
                throw new System.ArgumentException("array should be a TypedArray");

            var bytes = array.buffer;

            return bytes.byteLength / TypedArray.elementByteSize(array);
        };
        return TypedArray;
    })();
    System.TypedArray = TypedArray;
})(System || (System = {}));
//# sourceMappingURL=TypedArray.js.map
