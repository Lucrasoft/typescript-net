///<reference path="IReadOnlyCollection.ts"/>

module System.Collections.Generic
{
	export interface IReadOnlyList<T> extends IReadOnlyCollection <T>
	{
		indexer(index: number): T;
	}

System.Type.registerInterface("System.Collections.Generic.IReadOnlyList", "System.Collections.Generic.IReadOnlyCollection");

}