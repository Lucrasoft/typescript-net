/// <reference path="ArgumentException.ts" />  


module System {

    
    export class ArgumentOutOfRangeException extends ArgumentException implements IObject {

        private static _type: Type = System.Type.RegisterClass(ArgumentOutOfRangeException, "System.ArgumentOutOfRangeException", []);

        constructor(message?: string, innerException?: System.Exception, paramName?: string) {
            super(message, innerException, paramName);
        }

        //IObject
        public getType(): Type { return ArgumentOutOfRangeException._type; }

    }
}