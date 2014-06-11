/// <reference path="Exception.ts" />  


module System {

    export class OverflowException extends Exception implements IObject {
        private static _type = System.Type.RegisterClass(FormatException, "System.OverflowException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        public GetType(): Type { return OverflowException._type; }

    }
}   