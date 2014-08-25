module System.Configuration
{
	export enum SettingsManageability
	{
        Roaming
    }

    System.Type.registerEnum(SettingsManageability, "System.Configuration.SettingsManageability");
}