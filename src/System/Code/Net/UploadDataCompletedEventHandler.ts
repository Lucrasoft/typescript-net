module System.Net
{
    export interface UploadDataCompletedEventHandler{
        (sender: Object, e: UploadDataCompletedEventArgs): void;

    }

    System.Type.registerInterface("System.Net.UploadDataCompletedEventHandler");
} 