module System {

    export enum StringComparison {

    CurrentCulture,
    CurrentCultureIgnoreCase,
    InvariantCulture,
    InvariantCultureIgnoreCase,
    Ordinal,
    OrdinalIgnoreCase

    }

    System.Type.registerEnum(StringComparison, "System.StringComparison");

}
