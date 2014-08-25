module System.Configuration
{
	export interface IPersistComponentSettings
	{
        SaveSettings: boolean
        SettingsKey: string

        LoadComponentSettings(): void;
        ResetComponentSettings(): void;
        SaveComponentSettings(): void;
    }

    System.Type.registerInterface("System.Configuration.IPersistComponentSettings");
}