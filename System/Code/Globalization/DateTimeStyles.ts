module System.Globalization {

    export enum DateTimeStyles {
        None                 = 0x00000000,
        AllowLeadingWhite    = 0x00000001,
        AllowTrailingWhite   = 0x00000002,
        AllowInnerWhite      = 0x00000004,
        AllowWhiteSpaces     = AllowLeadingWhite | AllowTrailingWhite | AllowInnerWhite,
        NoCurrentDateDefault = 0x00000008,
        AdjustToUniversal    = 0x00000010,
        AssumeLocal          = 0x00000020,
        AssumeUniversal      = 0x00000040,
        RoundtripKind        = 0x00000080,
    }

    System.Type.registerEnum(DateTimeStyles, "System.Globalization.DateTimeStyles");
} 