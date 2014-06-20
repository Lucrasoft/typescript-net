/// <reference path="Exception.ts" />  
/// <reference path="../Type.ts"/> 

module System {


    export class InvalidCastException extends Exception {
        static _type = System.Type.registerClass(InvalidCastException, "System.InvalidCastException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return InvalidCastException._type; }

    }
}