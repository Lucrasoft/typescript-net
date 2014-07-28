/// <reference path="IFormatProvider.ts" />  


module System {

    export interface IFormattable {


        toString(format: string, formatProvider: IFormatProvider ): string;

    }

    System.Type.registerInterface("System.IFormattable");
}