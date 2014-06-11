/// <reference path="IntBase.ts" />  
/// <reference path="Interfaces/IFormattable.ts" />  
/// <reference path="Globalization/NumberStyles.ts" />  

module System {


    //TODO : IConvertible
    export class Int64 extends IntBase implements IFormattable, IComparable<Int64>, IEquatable<Int64>, IObject {
        private static _type: Type = System.Type.RegisterClass(Int64, "System.Int64", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        public static MaxValue: number = 0x7fffffffffffffff;
        public static MinValue: number = -9223372036854775808;


        constructor(value: number) {
            super(value);
        }


        //IObject
        public GetType(): Type { return Int64._type; }
    }



}