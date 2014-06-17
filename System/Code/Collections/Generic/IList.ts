/// <reference path="ICollection.ts"/>

module System.Collections.Generic {

    export interface IList<T> extends ICollection<T> {

        indexer(index : number): T;
        indexOf(item: T): number;
        removeAt(index: number): void;
        insert(index: number, item: T): void;


    }


}
