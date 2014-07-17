/// <reference path="IEnumerator.ts" />  


module System {

    export interface IEnumerable<T> {
        getEnumerator(): IEnumerator<T>;
    }

    System.Type.registerInterface("System.IEnumerable");
}
