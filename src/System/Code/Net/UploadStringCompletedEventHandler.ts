module System.Net
{
    export interface UploadStringCompletedEventHandler{
        (sender: object, e: UploadStringCompletedEventArgs): void;
    }

    System.Type.registerInterface("System.Net.UploadStringCompletedEventHandler");

}