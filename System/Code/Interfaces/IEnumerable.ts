/// <reference path="IEnumerator.ts" />  


module System {

    export interface IEnumberable<T> {
        GetEnumerator(): IEnumerator<T>;
    }


}
