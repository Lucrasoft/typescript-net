/// <reference path="Interfaces/IFormattable.ts" />  
/// <reference path="Globalization/NumberStyles.ts" />  

module System {


    //TODO : IConvertible
    export class Int16 extends IntBase implements IFormattable, IComparable<Int16>, IEquatable<Int16>, IObject {

        private static _type: Type = System.Type.RegisterClass(Int32, "System.Int16", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        public static MaxValue: number = 32767;
        public static MinValue: number = -32768;


        constructor(value: number) {
            super(value);
        }


        //IObject
        public GetType(): Type { return Int16._type; }
    }



}