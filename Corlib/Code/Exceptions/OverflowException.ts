/// <reference path="Exception.ts" />  
/// <reference path="../Type.ts"/>


module System {

    export class OverflowException extends Exception{
        static _type = System.Type.registerClass(OverflowException, "System.OverflowException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return OverflowException._type; }

    }
}   