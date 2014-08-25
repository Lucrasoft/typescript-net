module System.Net
{
    export interface OpenWriteCompletedEventHandler{
        (sender: object, e: OpenWriteCompletedEventArgs): void;

    }
    System.Type.registerInterface("System.Net.OpenWriteCompletedEventHandler");


}