module System.Net
{
    export interface DownloadStringCompletedEventHandler{
        (sender: object, e: DownloadStringCompletedEventArgs): void;

    }

    System.Type.registerInterface("System.Net.DownloadStringCompletedEventHandler");

}