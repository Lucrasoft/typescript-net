/// <reference path="Decoder.ts" />
var System;
(function (System) {
    (function (Text) {
        var Encoding = (function () {
            function Encoding() {
            }
            Encoding.prototype.GetDecoder = function () {
                throw new System.NotImplementedException();
            };

            Encoding.prototype.getMaxByteCount = function () {
                var params = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    params[_i] = arguments[_i + 0];
                }
                throw new System.NotImplementedException();
            };

            Encoding.prototype.getChars = function () {
                var params = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    params[_i] = arguments[_i + 0];
                }
                throw new System.NotImplementedException();
            };
            return Encoding;
        })();
        Text.Encoding = Encoding;
    })(System.Text || (System.Text = {}));
    var Text = System.Text;
})(System || (System = {}));
//# sourceMappingURL=Encoding.js.map
