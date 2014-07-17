/// <reference path="../Type.ts" />
/// <reference path="../Exceptions/NotImplementedException.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var Attribute = (function (_super) {
        __extends(Attribute, _super);
        function Attribute() {
            _super.call(this);
        }
        //Static methods
        Attribute.getCustomAttribute = function (element, attributeType) {
            throw new System.NotImplementedException();
        };

        Attribute.isDefined = function (element, attributeType, inherit) {
            throw new System.NotImplementedException();
        };

        Attribute.getCustomAttributes = function () {
            throw new System.NotImplementedException();
        };

        //IObject
        Attribute.prototype.getType = function () {
            return Attribute.type;
        };
        Attribute.type = System.Type.registerClass(Attribute, "System.Attribute", []);
        return Attribute;
    })(System.Object);
    System.Attribute = Attribute;
})(System || (System = {}));
//# sourceMappingURL=Attribute.js.map
