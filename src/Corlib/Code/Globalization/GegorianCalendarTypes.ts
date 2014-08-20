module System.Globalization {

    export enum GregorianCalendarTypes {
        Localized = 1,
        USEnglish = 2,
        MiddleEastFrench = 9,
        Arabic = 10,
        TransliteratedEnglish = 11,
        TransliteredFrench = 12
    }

    System.Type.registerEnum(GregorianCalendarTypes, "System.Globalization.GregorianCalendarTypes");
}