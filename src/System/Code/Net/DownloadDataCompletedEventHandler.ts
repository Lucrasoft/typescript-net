module System.Net
{
    export interface DownloadDataCompletedEventHandler{
        (sender: Object, e: DownloadDataCompletedEventArgs): void;

    }

    System.Type.registerInterface("System.Net.DownloadDataCompletedEventHandler");
}