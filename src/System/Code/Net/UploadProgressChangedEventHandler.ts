module System.Net
{
    export interface UploadProgressChangedEventHandler{
        (sender: Object, e: UploadProgressChangedEventArgs): void;
    }

    System.Type.registerInterface("System.Net.UploadProgressChangedEventHandler");


}