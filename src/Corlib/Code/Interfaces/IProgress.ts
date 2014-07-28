module System
{
	export interface IProgress<T>
	{
		report (value: T): void;
    }

    System.Type.registerInterface("System.IProgress");

}