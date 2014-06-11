/// <reference path="Exception.ts" />  

module System {

    export class InvalidOperationException extends Exception implements IObject {
        private static _type = System.Type.RegisterClass(InvalidOperationException, "System.InvalidOperationException", []);

    
        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        public GetType(): Type { return InvalidOperationException._type; }

    }
} 