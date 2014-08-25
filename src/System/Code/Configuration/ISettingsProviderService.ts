module System.Configuration
{
	export interface ISettingsProviderService {
        GetSettingsProvider(property: SettingsProperty): SettingsProvider;
	}

    System.Type.registerInterface("System.Configuration.ISettingsProviderService");
}