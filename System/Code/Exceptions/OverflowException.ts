/// <reference path="Exception.ts" />  
/// <reference path="../IObject.ts"/>
/// <reference path="../Type.ts"/>


module System {

    export class OverflowException extends Exception implements IObject {
        private static _type = System.Type.registerClass(FormatException, "System.OverflowException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return OverflowException._type; }

    }
}   