/// <reference path="IFormatProvider.ts" />  


module System {


    export interface ICustomFormatter {

        format(format: string, arg: any, formatProvider: IFormatProvider): string;

    }

    System.Type.registerInterface("System.ICustomFormatter");

}
