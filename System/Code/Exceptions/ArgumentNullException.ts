/// <reference path="ArgumentException.ts" />  


module System {


    export class ArgumentNullException extends ArgumentException implements IObject {

        private static _type: Type = System.Type.RegisterClass(ArgumentNullException, "System.ArgumentNullException", []);

        constructor(message?: string, innerException?: System.Exception, paramName?: string) {
            super(message, innerException, paramName);
        }

        //IObject
        public getType(): Type { return ArgumentNullException._type; }

    }
}