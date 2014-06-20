/// <reference path="IEnumerator.ts" />  


module System {

    export interface IEnumberable<T> {
        getEnumerator(): IEnumerator<T>;
    }

    System.Type.registerInterface("System.IEnumerable");
}
