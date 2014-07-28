/// <reference path="../Exceptions/SystemException.ts"/>



module System.IO {

    export class IOException extends System.SystemException {

        static _type = System.Type.registerClass(IOException, "System.IOException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return IOException._type; }
    }
}
