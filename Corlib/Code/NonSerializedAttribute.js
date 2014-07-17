///<reference path="Attribute.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var NonSerializedAttribute = (function (_super) {
        __extends(NonSerializedAttribute, _super);
        function NonSerializedAttribute() {
        }
        NonSerializedAttribute._type = System.Type.registerClass(NonSerializedAttribute, "System.NonSerializedAttribute");
        return NonSerializedAttribute;
    })(System.Attribute);
    System.NonSerializedAttribute = NonSerializedAttribute;
})(System || (System = {}));
//# sourceMappingURL=NonSerializedAttribute.js.map
