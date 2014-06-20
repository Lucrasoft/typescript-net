/// <reference path="../Type.ts" />  



module System {

    export interface IFormatProvider {
         getFormat(formatType : Type) : System.Object
    }

    System.Type.registerInterface("System.IFormatProvider");
}

