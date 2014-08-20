module System.Globalization {

    //TODO : register enum to type system
    export enum TimeSpanStyles {
        None = 0,
        AssumeNegative = 1
    }

    System.Type.registerEnum(TimeSpanStyles, "System.Globalization.TimeSpanStyles");
}