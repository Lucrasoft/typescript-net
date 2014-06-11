/// <reference path="Exception.ts" />  

module System {

    export class ArgumentException extends Exception implements IObject
    {
        
        private static _type = System.Type.RegisterClass(ArgumentException, "System.ArgumentException", []);

        public paramName: string;


        constructor(message?: string, innerException?: System.Exception, paramName?: string) {
            super(message, innerException);
            this.paramName = paramName;

        }

        public toString() : string {
            var s = super.toString();
            s += "Paramater : " + this.paramName;
            return s; 
        }


        //IObject
        public GetType(): Type { return ArgumentException._type; } 

    }
} 