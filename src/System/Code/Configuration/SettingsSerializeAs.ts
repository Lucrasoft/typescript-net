module System.Configuration
{
	export enum SettingsSerializeAs
	{
        String = 0,
        Xml = 1,
        Binary = 2,
        ProviderSpecific = 3
	}
    System.Type.registerEnum(SettingsSerializeAs, "System.Configuration.SettingsSerializeAs");
}