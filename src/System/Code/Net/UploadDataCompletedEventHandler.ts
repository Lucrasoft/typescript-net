module System.Net
{
    export interface UploadDataCompletedEventHandler{
        (sender: object, e: UploadDataCompletedEventArgs): void;

    }

    System.Type.registerInterface("System.Net.UploadDataCompletedEventHandler");
} 