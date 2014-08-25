module System.Net
{
    export interface HttpContinueDelegate{
        (StatusCode: number, httpHeaders: WebHeaderCollection): void;
        }
    System.Type.registerInterface("System.Net.HttpContinueDelegate");
}