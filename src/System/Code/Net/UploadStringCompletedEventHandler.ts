module System.Net
{
    export interface UploadStringCompletedEventHandler{
        (sender: Object, e: UploadStringCompletedEventArgs): void;
    }

    System.Type.registerInterface("System.Net.UploadStringCompletedEventHandler");

}