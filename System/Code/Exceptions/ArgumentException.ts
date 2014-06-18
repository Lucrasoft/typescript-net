/// <reference path="Exception.ts" />
/// <reference path="../IObject.ts"/>
/// <reference path="../Type.ts"/>

module System {

    export class ArgumentException extends Exception implements IObject
    {
        
        static _type = System.Type.registerClass(ArgumentException, "System.ArgumentException", []);

        public paramName: string;

        constructor(message?: string, innerException?: System.Exception, paramName?: string) {
            super(message, innerException);
            this.paramName = paramName;

        }

        toString() : string {
            var s = super.toString();
            s += "Paramater : " + this.paramName;
            return s; 
        }


        //IObject
        getType(): Type { return ArgumentException._type; } 

    }
} 