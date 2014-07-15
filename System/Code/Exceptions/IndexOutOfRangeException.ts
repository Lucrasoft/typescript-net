/// <reference path="Exception.ts" />   
/// <reference path="../Type.ts"/> 

module System {

    export class IndexOutOfRangeException extends Exception {
        static _type = System.Type.registerClass(IndexOutOfRangeException, "System.IndexOutOfRangeException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return IndexOutOfRangeException._type; }

    }
}   