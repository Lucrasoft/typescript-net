module  System.Collections.Generic
{
  
	export interface IEqualityComparer<T>
	{
		equals(x: T, y: T): boolean;
		getHashCode(obj: T): number; 
    }

    System.Type.registerInterface("System.Collections.Generic.IEqualityComparer");

}
