module System
{
    export enum AppDomainManagerInitializationOptions
    {
        None = 0,
        RegisterWithHost = 1,
    }

    System.Type.registerEnum(AppDomainManagerInitializationOptions, "System.AppDomainManagerInitializationOptions");
}
