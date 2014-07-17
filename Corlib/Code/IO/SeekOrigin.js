var System;
(function (System) {
    (function (IO) {
        (function (SeekOrigin) {
            SeekOrigin[SeekOrigin["Begin"] = 0] = "Begin";
            SeekOrigin[SeekOrigin["Current"] = 1] = "Current";
            SeekOrigin[SeekOrigin["End"] = 2] = "End";
        })(IO.SeekOrigin || (IO.SeekOrigin = {}));
        var SeekOrigin = IO.SeekOrigin;

        System.Type.registerEnum(SeekOrigin, "System.IO.SeekOrigin");
    })(System.IO || (System.IO = {}));
    var IO = System.IO;
})(System || (System = {}));
//# sourceMappingURL=SeekOrigin.js.map
