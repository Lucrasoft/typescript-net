/// <reference path="../../Exceptions/Exception.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var KeyNotFoundException = (function (_super) {
                __extends(KeyNotFoundException, _super);
                function KeyNotFoundException() {
                    _super.call(this);
                }
                //IObject
                KeyNotFoundException.prototype.getType = function () {
                    return KeyNotFoundException._type;
                };
                KeyNotFoundException._type = System.Type.registerClass(KeyNotFoundException, "System.Collection.Generic.KeyNotFoundException", []);
                return KeyNotFoundException;
            })(System.Exception);
            Generic.KeyNotFoundException = KeyNotFoundException;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
//# sourceMappingURL=KeyNotFoundException.js.map
