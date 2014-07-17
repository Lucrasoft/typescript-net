//TODO : classify it
var System;
(function (System) {
    var Array = (function () {
        function Array() {
        }
        Array.clear = function (array, index, length) {
            if (array == null)
                throw new System.ArgumentNullException("array");

            if (length < 0)
                throw new System.IndexOutOfRangeException("length < 0");

            if (System.TypedArray.isTypedArray(array)) {
                System.Array.clearTypedArray(array, index, length);
                return;
            }
        };

        Array.clearTypedArray = function (array, index, length) {
        };
        return Array;
    })();
    System.Array = Array;
})(System || (System = {}));
//# sourceMappingURL=Array.js.map
