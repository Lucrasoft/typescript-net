var System;
(function (System) {
    (function (IO) {
        (function (FileOptions) {
            FileOptions[FileOptions["None"] = 0] = "None";
            FileOptions[FileOptions["Encrypted"] = 0x4000] = "Encrypted";
            FileOptions[FileOptions["DeleteOnClose"] = 0x4000000] = "DeleteOnClose";
            FileOptions[FileOptions["SequentialScan"] = 0x8000000] = "SequentialScan";
            FileOptions[FileOptions["RandomAccess"] = 0x10000000] = "RandomAccess";
            FileOptions[FileOptions["Asynchronous"] = 0x40000000] = "Asynchronous";
            FileOptions[FileOptions["WriteThrough"] = -2147483648] = "WriteThrough";
        })(IO.FileOptions || (IO.FileOptions = {}));
        var FileOptions = IO.FileOptions;
    })(System.IO || (System.IO = {}));
    var IO = System.IO;
})(System || (System = {}));
//# sourceMappingURL=FileOptions.js.map
