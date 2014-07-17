///<reference path="Attribute.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var CLSCompliantAttribute = (function (_super) {
        __extends(CLSCompliantAttribute, _super);
        function CLSCompliantAttribute(isCompliant) {
            this.is_compliant = isCompliant;
        }
        Object.defineProperty(CLSCompliantAttribute.prototype, "isCompliant", {
            get: function () {
                return this.is_compliant;
            },
            enumerable: true,
            configurable: true
        });
        CLSCompliantAttribute._type = System.Type.registerClass(CLSCompliantAttribute, "System.CLSCompliantAttribute");
        return CLSCompliantAttribute;
    })(System.Attribute);
    System.CLSCompliantAttribute = CLSCompliantAttribute;
})(System || (System = {}));
//# sourceMappingURL=CLSCompliantAttribute.js.map
