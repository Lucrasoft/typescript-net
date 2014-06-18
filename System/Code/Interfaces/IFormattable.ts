/// <reference path="IFormatProvider.ts" />  


module System {

    export interface IFormattable {


        toString(format: string, formatProvider: IFormatProvider ): string;

    }

}