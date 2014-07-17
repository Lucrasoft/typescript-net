/// <reference path="Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    //just a start..
    var String = (function (_super) {
        __extends(String, _super);
        function String() {
            _super.call(this);
        }
        String.fromCharArray = function (input, startIndex, length) {
            var result = "";
            for (var i = startIndex; i < length; i++) {
                result += JSString.fromCharCode(input[i]);
            }

            return result;
        };

        Object.defineProperty(String, "empty", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });

        String.format = function (value) {
            var replacements = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                replacements[_i] = arguments[_i + 1];
            }
            var formatted = value;
            for (var i = 0; i < replacements.length; i++) {
                formatted = formatted.replace(RegExp("\\{" + i + "\\}", 'g'), replacements[i].toString());
            }
            return formatted;
        };

        String.isNullOrEmpty = function (value) {
            return (value == null) || (value.length == 0);
        };
        String._type = System.Type.registerClass(String, "System.String", []);
        return String;
    })(System.Object);
    System.String = String;
})(System || (System = {}));
//# sourceMappingURL=String.js.map
