module System.Net
{
    export interface DownloadStringCompletedEventHandler{
        (sender: Object, e: DownloadStringCompletedEventArgs): void;

    }

    System.Type.registerInterface("System.Net.DownloadStringCompletedEventHandler");

}