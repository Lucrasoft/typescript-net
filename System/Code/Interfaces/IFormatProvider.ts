/// <reference path="../Type.ts" />  
/// <reference path="../IObject.ts" />  


module System {

    export interface IFormatProvider {
         getFormat(formatType : Type) : IObject
    }

}

