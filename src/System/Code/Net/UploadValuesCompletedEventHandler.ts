module System.Net
{
    export interface UploadValuesCompletedEventHandler{
        (sender: object, e: UploadValuesCompletedEventArgs): void;
    }
    System.Type.registerInterface("System.Net.UploadValuesCompletedEventHandler");

}