/// <reference path="Exception.ts" />   
/// <reference path="../Type.ts"/> 

module System {

    export class FormatException extends Exception {
        static _type = System.Type.registerClass(FormatException, "System.FormatException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return FormatException._type; }

    }
}  