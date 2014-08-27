/// <reference path="../Type.ts"/>
/// <reference path="exception.ts" />

module System {

    export class NotImplementedException extends Exception {
        static _type = System.Type.registerClass(NotImplementedException, "System.NotImplementedException", []);

    
        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return NotImplementedException._type; }

    }
} 