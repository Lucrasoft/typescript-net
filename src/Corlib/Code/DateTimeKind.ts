module System 
{
    export enum DateTimeKind
    {
        Unspecified,
        Utc,
        Local
    }

    System.Type.registerEnum(DateTimeKind, "System.DateTimeKind");

}