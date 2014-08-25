module System.Configuration
{
    export interface SettingsSavingEventHandler{
        (sender: object, e: CancelEventArgs): void;
    }

    System.Type.registerInterface("System.Configuration.SettingsSavingEventHandler");

}