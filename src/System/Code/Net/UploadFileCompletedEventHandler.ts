module System.Net
{
    export interface UploadFileCompletedEventHandler{
        (sender: Object, e: UploadFileCompletedEventArgs): void;

    }
    System.Type.registerInterface("System.Net.UploadFileCompletedEventHandler");
}