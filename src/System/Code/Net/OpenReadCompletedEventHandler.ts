module System.Net
{
    export interface OpenReadCompletedEventHandler
    { (sender: Object, e: OpenReadCompletedEventArgs): void; }


    System.Type.registerInterface("System.Net.OpenReadCompletedEventHandler");
}