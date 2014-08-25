module System.Net
{
    export interface UploadProgressChangedEventHandler{
        (sender: object, e: UploadProgressChangedEventArgs): void;
    }

    System.Type.registerInterface("System.Net.UploadProgressChangedEventHandler");


}