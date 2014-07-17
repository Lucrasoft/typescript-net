var System;
(function (System) {
    (function (Globalization) {
        //TODO : register enum to type system
        (function (TimeSpanStyles) {
            TimeSpanStyles[TimeSpanStyles["None"] = 0] = "None";
            TimeSpanStyles[TimeSpanStyles["AssumeNegative"] = 1] = "AssumeNegative";
        })(Globalization.TimeSpanStyles || (Globalization.TimeSpanStyles = {}));
        var TimeSpanStyles = Globalization.TimeSpanStyles;

        System.Type.registerEnum(TimeSpanStyles, "System.Globalization.TimeSpanStyles");
    })(System.Globalization || (System.Globalization = {}));
    var Globalization = System.Globalization;
})(System || (System = {}));
//# sourceMappingURL=TimeSpanStyles.js.map
