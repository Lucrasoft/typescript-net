/// <reference path="../TypeCode.ts" />
/// <reference path="IFormatProvider.ts"/>
/// <reference path="../TypeCode.ts"/>

module System {

    // not fully specified, only 
    
    export interface IConvertible {



        getTypeCode(): TypeCode;

        toNumber(provider: IFormatProvider): number;
        toString(provider: IFormatProvider): string;
        toBoolean(provider: IFormatProvider): boolean;

        //ToByte(provider: IFormatProvider): System.Byte;

        //ToChar(provider: IFormatProvider): System.Char;
        //ToDateTime(provider: IFormatProvider): System.DateTime;

        //decimal  ToDecimal(provider: IFormatProvider);
        //double   ToDouble(provider : IFormatProvider);
        ////short    ToInt16(provider : IFormatProvider);
        //int      ToInt32(provider : IFormatProvider);
        //long     ToInt64(provider : IFormatProvider);
        //sbyte    ToSByte(provider : IFormatProvider);
        //float    ToSingle(provider : IFormatProvider);
        //string   ToString(provider : IFormatProvider);
        //object   ToType(conversionType: Type, provider : IFormatProvider);
        //ushort   ToUInt16(provider : IFormatProvider);
        //uint     ToUInt32(provider : IFormatProvider);
        //ulong    ToUInt64(provider : IFormatProvider);

    }
}