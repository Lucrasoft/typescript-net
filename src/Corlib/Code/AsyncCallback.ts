/// <reference path="Interfaces/IAsyncResult.ts" />

module System {

    //delegate
    export interface AsyncCallback {
        (ar: IAsyncResult) : void ;
    }


}