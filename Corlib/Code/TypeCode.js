var System;
(function (System) {
    (function (TypeCode) {
        TypeCode[TypeCode["Empty"] = 0] = "Empty";
        TypeCode[TypeCode["Object"] = 1] = "Object";
        TypeCode[TypeCode["DBNull"] = 2] = "DBNull";
        TypeCode[TypeCode["Boolean"] = 3] = "Boolean";
        TypeCode[TypeCode["Char"] = 4] = "Char";
        TypeCode[TypeCode["SByte"] = 5] = "SByte";
        TypeCode[TypeCode["Byte"] = 6] = "Byte";
        TypeCode[TypeCode["Int16"] = 7] = "Int16";
        TypeCode[TypeCode["UInt16"] = 8] = "UInt16";
        TypeCode[TypeCode["Int32"] = 9] = "Int32";
        TypeCode[TypeCode["UInt32"] = 10] = "UInt32";
        TypeCode[TypeCode["Int64"] = 11] = "Int64";
        TypeCode[TypeCode["UInt64"] = 12] = "UInt64";
        TypeCode[TypeCode["Single"] = 13] = "Single";
        TypeCode[TypeCode["Double"] = 14] = "Double";
        TypeCode[TypeCode["Decimal"] = 15] = "Decimal";
        TypeCode[TypeCode["DateTime"] = 16] = "DateTime";
        TypeCode[TypeCode["String"] = 18] = "String";
    })(System.TypeCode || (System.TypeCode = {}));
    var TypeCode = System.TypeCode;

    System.Type.registerEnum(TypeCode, "System.TypeCode");
})(System || (System = {}));
//# sourceMappingURL=TypeCode.js.map
