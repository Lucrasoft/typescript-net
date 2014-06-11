/// <reference path="Exception.ts" />  

module System {

    export class NotImplementedException extends Exception implements IObject {
        private static _type = System.Type.RegisterClass(NotImplementedException, "System.NotImplementedException", []);

    
        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        public GetType(): Type { return NotImplementedException._type; }

    }
} 