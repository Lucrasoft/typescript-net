/// <reference path="IDisposable.ts" />  

module System {


    export interface IEnumerator<T> extends IDisposable {

        Current: T;
        MoveNext(): boolean;
        Reset(): void;

    }

}