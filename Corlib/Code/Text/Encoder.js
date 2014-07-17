var System;
(function (System) {
    (function (Text) {
        var Encoder = (function () {
            function Encoder() {
            }
            Encoder.prototype.getMaxByteCount = function () {
                var params = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    params[_i] = arguments[_i + 0];
                }
                throw new System.NotImplementedException();
            };
            return Encoder;
        })();
        Text.Encoder = Encoder;
    })(System.Text || (System.Text = {}));
    var Text = System.Text;
})(System || (System = {}));
//# sourceMappingURL=Encoder.js.map
