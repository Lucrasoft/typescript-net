var System;
(function (System) {
    (function (Globalization) {
        //TODO: register enum to Type system
        (function (NumberStyles) {
            NumberStyles[NumberStyles["None"] = 0x00000000] = "None";
            NumberStyles[NumberStyles["AllowLeadingWhite"] = 0x00000001] = "AllowLeadingWhite";
            NumberStyles[NumberStyles["AllowTrailingWhite"] = 0x00000002] = "AllowTrailingWhite";
            NumberStyles[NumberStyles["AllowLeadingSign"] = 0x00000004] = "AllowLeadingSign";
            NumberStyles[NumberStyles["AllowTrailingSign"] = 0x00000008] = "AllowTrailingSign";
            NumberStyles[NumberStyles["AllowParentheses"] = 0x00000010] = "AllowParentheses";
            NumberStyles[NumberStyles["AllowDecimalPoint"] = 0x00000020] = "AllowDecimalPoint";
            NumberStyles[NumberStyles["AllowThousands"] = 0x00000040] = "AllowThousands";
            NumberStyles[NumberStyles["AllowExponent"] = 0x00000080] = "AllowExponent";
            NumberStyles[NumberStyles["AllowCurrencySymbol"] = 0x00000100] = "AllowCurrencySymbol";
            NumberStyles[NumberStyles["AllowHexSpecifier"] = 0x00000200] = "AllowHexSpecifier";

            NumberStyles[NumberStyles["Integer"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign)] = "Integer";
            NumberStyles[NumberStyles["HexNumber"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowHexSpecifier)] = "HexNumber";
            NumberStyles[NumberStyles["Number"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands)] = "Number";
            NumberStyles[NumberStyles["Float"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowDecimalPoint | NumberStyles.AllowExponent)] = "Float";
            NumberStyles[NumberStyles["Currency"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowParentheses | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands | NumberStyles.AllowCurrencySymbol)] = "Currency";
            NumberStyles[NumberStyles["Any"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowParentheses | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands | NumberStyles.AllowExponent | NumberStyles.AllowCurrencySymbol)] = "Any";
        })(Globalization.NumberStyles || (Globalization.NumberStyles = {}));
        var NumberStyles = Globalization.NumberStyles;

        System.Type.registerEnum(NumberStyles, "System.Globalization.NumberStyles");
    })(System.Globalization || (System.Globalization = {}));
    var Globalization = System.Globalization;
})(System || (System = {}));
//# sourceMappingURL=NumberStyles.js.map
