module System.Configuration
{
    export interface SettingChangingEventHandler{
        (sender: Object, e: SettingChangingEventArgs): void;
    }

    System.Type.registerInterface("System.Configuration.SettingChangingEventHandler");
}