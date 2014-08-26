module System.Net
{
    export interface DownloadProgressChangedEventHandler{
        (sender: Object, e: DownloadProgressChangedEventArgs): void;
    }
    System.Type.registerInterface("System.Net.DownloadProgressChangedEventHandler");
}