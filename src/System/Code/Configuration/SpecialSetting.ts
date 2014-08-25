module System.Configuration
{
	export enum SpecialSetting
	{
        ConnectionString,
        WebServiceUrl 
    }

    System.Type.registerEnum(SpecialSetting, "System.Configuration.SpecialSetting");

}
