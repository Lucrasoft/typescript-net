/// <reference path="ArgumentException.ts" />  
/// <reference path="../Type.ts"/> 

module System {

    
    export class ArgumentOutOfRangeException extends ArgumentException {

        static _type: Type = System.Type.registerClass(ArgumentOutOfRangeException, "System.ArgumentOutOfRangeException", []);

        constructor(message?: string, innerException?: System.Exception, paramName?: string) {
            super(message, innerException, paramName);
        }

        //IObject
        public getType(): Type { return ArgumentOutOfRangeException._type; }

    }
}