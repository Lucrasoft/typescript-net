module System.Net
{
    export interface OpenReadCompletedEventHandler
    { (sender: object, e: OpenReadCompletedEventArgs): void; }


    System.Type.registerInterface("System.Net.OpenReadCompletedEventHandler");
}