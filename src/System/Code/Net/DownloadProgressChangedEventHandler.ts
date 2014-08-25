module System.Net
{
    export interface DownloadProgressChangedEventHandler{
        (sender: object, e: DownloadProgressChangedEventArgs): void;
    }
    System.Type.registerInterface("System.Net.DownloadProgressChangedEventHandler");
}