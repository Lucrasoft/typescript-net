/// <reference path="../../Interfaces/IEnumerable.ts"/>

module System.Collections.Generic {

    export interface ICollection<T> extends IEnumberable<T> {

        count: number;
        isReadOnly: boolean;
        add(item: T): void;
        clear(): void;
        contains(item: T): boolean;
        copyTo(array: T[], arrayIndex: number): void;
        remove(item: T): boolean;

        (item : string): T;


    }

    System.Type.registerInterface("System.Collections.Generic.ICollection", "System.IEnumberable");
}