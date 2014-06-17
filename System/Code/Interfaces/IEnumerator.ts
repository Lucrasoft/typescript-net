/// <reference path="IDisposable.ts" />  

module System {


    export interface IEnumerator<T> extends IDisposable {

        current: T;
        moveNext(): boolean;
        reset(): void;

    }

}