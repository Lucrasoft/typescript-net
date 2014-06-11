/// <reference path="Exception.ts" />  


module System {

    export class FormatException extends Exception implements IObject {
        private static _type = System.Type.RegisterClass(FormatException, "System.FormatException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        public GetType(): Type { return FormatException._type; }

    }
}  