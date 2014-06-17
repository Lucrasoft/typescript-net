/// <reference path="Exception.ts" />  
/// <reference path="../IObject.ts"/>
/// <reference path="../Type.ts"/>

module System {

    export class NotImplementedException extends Exception implements IObject {
        private static _type = System.Type.registerClass(NotImplementedException, "System.NotImplementedException", []);

    
        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return NotImplementedException._type; }

    }
} 