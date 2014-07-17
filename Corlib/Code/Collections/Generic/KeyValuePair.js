var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            //TODO : [Serializable]
            var KeyValuePair = (function () {
                function KeyValuePair(key, value) {
                    this.key = key;
                    this.value = value;
                }
                Object.defineProperty(KeyValuePair.prototype, "Key", {
                    get: function () {
                        return this.key;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(KeyValuePair.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });

                KeyValuePair.prototype.toString = function () {
                    return "[" + (this.key != null ? this.key.toString() : "") + ", " + (this.value != null ? this.value.toString() : "") + "]";
                };
                return KeyValuePair;
            })();
            Generic.KeyValuePair = KeyValuePair;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
//# sourceMappingURL=KeyValuePair.js.map
