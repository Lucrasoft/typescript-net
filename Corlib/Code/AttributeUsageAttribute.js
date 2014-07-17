/// <reference path="Type.ts" />
/// <reference path="Attribute.ts" />
/// <reference path="AttributeTargets.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var AttributeUsageAttribute = (function (_super) {
        __extends(AttributeUsageAttribute, _super);
        function AttributeUsageAttribute(validOn) {
            _super.call(this);
            this.Inherited = true;
            this.valid_on = validOn;
        }
        Object.defineProperty(AttributeUsageAttribute.prototype, "validOn", {
            get: function () {
                return this.valid_on;
            },
            enumerable: true,
            configurable: true
        });

        //IObject
        AttributeUsageAttribute.prototype.getType = function () {
            return AttributeUsageAttribute._type;
        };
        AttributeUsageAttribute._type = System.Type.registerClass(System.Attribute, "System.Attribute", []);
        return AttributeUsageAttribute;
    })(System.Attribute);
    System.AttributeUsageAttribute = AttributeUsageAttribute;
})(System || (System = {}));
//# sourceMappingURL=AttributeUsageAttribute.js.map
