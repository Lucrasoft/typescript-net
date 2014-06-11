/// <reference path="Exception.ts" />  


module System {


    export class InvalidCastException extends Exception implements IObject {
        private static _type = System.Type.RegisterClass(InvalidCastException, "System.InvalidCastException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        public GetType(): Type { return InvalidCastException._type; }

    }
}