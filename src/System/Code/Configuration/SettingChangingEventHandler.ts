module System.Configuration
{
    export interface SettingChangingEventHandler{
        (sender: object, e: SettingChangingEventArgs): void;
    }

    System.Type.registerInterface("System.Configuration.SettingChangingEventHandler");
}