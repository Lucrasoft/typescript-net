module System.Collections.Generic
{

	export interface IComparer<T>
	{
        compare(x: T, y: T): number;
	}

    System.Type.registerInterface("System.Collections.Generic.IComparer");

}
