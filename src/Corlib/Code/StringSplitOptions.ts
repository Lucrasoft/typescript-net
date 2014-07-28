module System
{
	export enum StringSplitOptions
	{
        None = 0,
        RemoveEmptyEntries = 1
    }

    System.Type.registerEnum(StringSplitOptions, "System.StringSplitOptions");

}