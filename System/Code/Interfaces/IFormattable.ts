/// <reference path="IFormatProvider.ts" />  


module System {

    export interface IFormattable {


        //Remark : this is ToString, not toString on purpose. 

        ToString(format: string, formatProvider: IFormatProvider ): string;

    }

}