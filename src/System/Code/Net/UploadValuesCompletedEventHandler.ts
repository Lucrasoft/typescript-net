module System.Net
{
    export interface UploadValuesCompletedEventHandler{
        (sender: Object, e: UploadValuesCompletedEventArgs): void;
    }
    System.Type.registerInterface("System.Net.UploadValuesCompletedEventHandler");

}