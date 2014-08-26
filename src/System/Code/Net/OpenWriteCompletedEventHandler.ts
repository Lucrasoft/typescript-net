module System.Net
{
    export interface OpenWriteCompletedEventHandler{
        (sender: Object, e: OpenWriteCompletedEventArgs): void;

    }
    System.Type.registerInterface("System.Net.OpenWriteCompletedEventHandler");


}