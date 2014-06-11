/// <reference path="../Type.ts" />  
/// <reference path="../IObject.ts" />  


module System {

    export interface IFormatProvider {
         GetFormat(formatType : Type) : IObject
    }

}

