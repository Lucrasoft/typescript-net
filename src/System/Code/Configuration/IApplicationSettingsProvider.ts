 module System.Configuration
{

	export interface IApplicationSettingsProvider
	{
        GetPreviousVersion(context: SettingsContext, property: SettingsProperty): SettingsPropertyValue;

        Reset(context: SettingsContext): void;

        Upgrade(context: SettingsContext, properties: SettingsPropertyCollection): void;

    }

     System.Type.registerInterface("System.Configuration.IApplicationSettingsProvider");

}