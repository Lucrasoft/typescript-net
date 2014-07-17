/// <reference path="IReadOnlyCollection.ts"/>

module System.Collections.Generic
{
	export interface IReadOnlyDictionary<TKey, TValue> extends IReadOnlyCollection<KeyValuePair<TKey, TValue>>
	{
		indexer(key: TKey): TValue;
		keys: IEnumerable<TKey>; 
    	values: IEnumerable<TValue>

		containsKey (key: TKey): boolean;
		tryGetValue (key: TKey, value: TValue): boolean;
	} 

    System.Type.registerInterface("System.Collections.Generic.IReadOnlyDictionary","System.Collections.Generic.IReadOnlyCollection");

}