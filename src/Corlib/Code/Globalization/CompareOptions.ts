module System.Globalization {

    export enum CompareOptions {
        None = 0,
        IgnoreCase = 1,
        IgnoreNonSpace = 2,
        IgnoreSymbols = 4,
        IgnoreKanaType = 8,
        IgnoreWidth = 16,

        StringSort = 0x20000000,
        Ordinal = 0x40000000,
        OrdinalIgnoreCase = 0x10000000

    }

    System.Type.registerEnum(CompareOptions, "System.Globalization.CompareOptions");
}