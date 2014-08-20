/// <reference path="IDisposable.ts" />  

module System {


    export interface IEnumerator<T> extends IDisposable {

        current: T;
        moveNext(): boolean;
        reset(): void;

    }

    System.Type.registerInterface("System.IEnumerator", "System.IDisposable");
}