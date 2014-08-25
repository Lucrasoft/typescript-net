module System.Configuration
{
    export interface SettingsLoadedEventHandler
    {
        (sender: object, e: SettingsLoadedEventArgs): void;
    }

    System.Type.registerInterface("System.Configuration.SettingsLoadedEventHandler");
	
}