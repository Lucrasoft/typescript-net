/// <reference path="IntBase.ts" />  
/// <reference path="Interfaces/IFormattable.ts" />  
/// <reference path="Globalization/NumberStyles.ts" />  

module System {


    //TODO : IConvertible
    export class Int32 extends IntBase implements IFormattable, IComparable<Int32>, IEquatable<Int32>, IObject {

        private static _type: Type = System.Type.RegisterClass(Int32, "System.Int32", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        public static MaxValue: number = 0x7fffffff;
        public static MinValue: number = -2147483648;


     
        constructor(value: number) {
            super(value);
        }


        //IObject
        public GetType(): Type { return Int32._type; }
    }



}