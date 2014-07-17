var System;
(function (System) {
    (function (Text) {
        var Decoder = (function () {
            function Decoder() {
            }
            Decoder.prototype.getChars = function () {
                var params = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    params[_i] = arguments[_i + 0];
                }
                throw new System.NotImplementedException();
            };
            return Decoder;
        })();
        Text.Decoder = Decoder;
    })(System.Text || (System.Text = {}));
    var Text = System.Text;
})(System || (System = {}));
//# sourceMappingURL=Decoder.js.map
