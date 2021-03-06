/// <reference path="ArgumentException.ts" />  
/// <reference path="../Type.ts"/>

module System {


    export class ArgumentNullException extends ArgumentException {

        static _type: Type = System.Type.registerClass(ArgumentNullException, "System.ArgumentNullException", []);

        constructor(message?: string, innerException?: System.Exception, paramName?: string) {
            super(message, innerException, paramName);
        }

        //IObject
        getType(): Type { return ArgumentNullException._type; }

    }
}