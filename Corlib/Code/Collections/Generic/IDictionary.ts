/// <reference path="ICollection.ts"/>
//todo

module System.Collections.Generic
{
	//export interface IDictionary<TKey, TValue> extends ICollection < KeyValuePair < TKey, TValue >>
	//{
		
	//	add(key: TKey, value: TValue): void;
	//	containsKey (key: TKey): boolean;
	//	remove (key: TKey): boolean;
	//	tryGetValue (key: TKey, value: TValue): boolean;
    //	indexer(key: TKey) : TValue ;
    //    keys: ICollection<TKey>;
    //    values: ICollection<TValue>;
    //}
    
    System.Type.registerInterface("System.Collections.Generic.IDictionary", "System.Collections.Generic.ICollection");

}
