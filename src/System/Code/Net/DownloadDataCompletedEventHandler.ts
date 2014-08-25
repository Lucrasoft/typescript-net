module System.Net
{
    export interface DownloadDataCompletedEventHandler{
        (sender: object, e: DownloadDataCompletedEventArgs): void;

    }

    System.Type.registerInterface("System.Net.DownloadDataCompletedEventHandler");
}