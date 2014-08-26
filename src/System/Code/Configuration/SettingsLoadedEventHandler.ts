module System.Configuration
{
    export interface SettingsLoadedEventHandler
    {
        (sender: Object, e: SettingsLoadedEventArgs): void;
    }

    System.Type.registerInterface("System.Configuration.SettingsLoadedEventHandler");
	
}