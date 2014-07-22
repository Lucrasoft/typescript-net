module System
{
	export enum UriIdnScope
	{
        None,
        AllExceptIntranet,
        All,
    }

    System.Type.registerEnum(UriIdnScope, "System.UriIdnScope");

}