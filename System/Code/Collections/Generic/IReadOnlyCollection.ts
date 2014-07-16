/// <reference path="../../Interfaces/IEnumerable.ts"/>

module System.Collections.Generic
{
    export interface IReadOnlyCollection<T> extends IEnumerable<T>
    {
        count: number;
    }

    System.Type.registerInterface("System.Collections.Generic.IReadOnlyCollection", "System.IEnumerable");
}
