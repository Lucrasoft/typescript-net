module System.Globalization {

    export enum CultureTypes {

        NeutralCultures = 1,
        SpecificCultures = 2,
        InstalledWin32Cultures = 4,
        AllCultures = 7,
        WindowsOnlyCulture = 32,
        FrameworkCultures = 64
    }

    System.Type.registerEnum(CultureTypes, "System.Globalization.CultureTypes");
}