

module System.Collections.Generic {

    export interface IList<T> extends ICollection<T> {

        Indexer(index : number): T;
        IndexOf(item: T): number;
        RemoveAt(index: number): void;
        Insert(index: number, item: T): void;


    }


}
