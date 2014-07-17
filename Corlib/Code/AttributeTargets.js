var System;
(function (System) {
    (function (AttributeTargets) {
        AttributeTargets[AttributeTargets["Assembly"] = 0x00000001] = "Assembly";
        AttributeTargets[AttributeTargets["Module"] = 0x00000002] = "Module";
        AttributeTargets[AttributeTargets["Class"] = 0x00000004] = "Class";
        AttributeTargets[AttributeTargets["Struct"] = 0x00000008] = "Struct";
        AttributeTargets[AttributeTargets["Enum"] = 0x00000010] = "Enum";
        AttributeTargets[AttributeTargets["Constructor"] = 0x00000020] = "Constructor";
        AttributeTargets[AttributeTargets["Method"] = 0x00000040] = "Method";
        AttributeTargets[AttributeTargets["Property"] = 0x00000080] = "Property";
        AttributeTargets[AttributeTargets["Field"] = 0x00000100] = "Field";
        AttributeTargets[AttributeTargets["Event"] = 0x00000200] = "Event";
        AttributeTargets[AttributeTargets["Interface"] = 0x00000400] = "Interface";
        AttributeTargets[AttributeTargets["Parameter"] = 0x00000800] = "Parameter";
        AttributeTargets[AttributeTargets["Delegate"] = 0x00001000] = "Delegate";
        AttributeTargets[AttributeTargets["ReturnValue"] = 0x00002000] = "ReturnValue";
        AttributeTargets[AttributeTargets["GenericParameter"] = 0x00004000] = "GenericParameter";
        AttributeTargets[AttributeTargets["All"] = AttributeTargets.Assembly | AttributeTargets.Module | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Constructor | AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Event | AttributeTargets.Interface | AttributeTargets.Parameter | AttributeTargets.Delegate | AttributeTargets.ReturnValue | AttributeTargets.GenericParameter] = "All";
    })(System.AttributeTargets || (System.AttributeTargets = {}));
    var AttributeTargets = System.AttributeTargets;

    System.Type.registerEnum(AttributeTargets, "System.AttributeTargets");
})(System || (System = {}));
//# sourceMappingURL=AttributeTargets.js.map
