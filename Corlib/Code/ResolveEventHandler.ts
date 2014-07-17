module System
{
    export interface ResolveEventHandler
    {
        (sender: object, args: ResolveEventArgs): Reflection.Assembly ;
    }
}