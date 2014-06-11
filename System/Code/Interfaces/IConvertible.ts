/// <reference path="../TypeCode.ts" />
/// <reference path="IFormatProvider.ts" />


module System {

    // not fully implemented, only 
    
    export interface IConvertible {



        GetTypeCode(): TypeCode;

        ToNumber(provider: IFormatProvider): number;
        ToString(provider: IFormatProvider): string;
        ToBoolean(provider: IFormatProvider): boolean;

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