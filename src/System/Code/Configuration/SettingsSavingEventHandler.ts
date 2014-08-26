module System.Configuration
{
    export interface SettingsSavingEventHandler{
        (sender: Object, e: CancelEventArgs): void;
    }

    System.Type.registerInterface("System.Configuration.SettingsSavingEventHandler");

}