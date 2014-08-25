module System.Net
{
    export interface UploadFileCompletedEventHandler{
        (sender: object, e: UploadFileCompletedEventArgs): void;

    }
    System.Type.registerInterface("System.Net.UploadFileCompletedEventHandler");
}