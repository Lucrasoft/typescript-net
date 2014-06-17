/// <reference path="Exception.ts" />  
/// <reference path="../IObject.ts"/>
/// <reference path="../Type.ts"/>

module System {

    export class InvalidOperationException extends Exception implements IObject {
        private static _type = System.Type.registerClass(InvalidOperationException, "System.InvalidOperationException", []);

    
        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return InvalidOperationException._type; }

    }
} 