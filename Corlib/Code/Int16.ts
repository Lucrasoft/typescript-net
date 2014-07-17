/// <reference path="Interfaces/IFormattable.ts" />  
/// <reference path="Interfaces/IComparable.ts"/>
/// <reference path="Interfaces/IEquatable.ts"/>
/// <reference path="Globalization/NumberStyles.ts" />  
/// <reference path="Type.ts"/>
/// <reference path="IntBase.ts"/>

module System {


    //TODO : IConvertible
    export class Int16 extends IntBase implements IFormattable, IComparable<Int16>, IEquatable<Int16> {

        static _type: Type = System.Type.registerClass(Int32, "System.Int16", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        public static MaxValue: number = 32767;
        public static MinValue: number = -32768;


        constructor(value: number) {
            super(value);
        }


        //IObject
        getType(): Type { return Int16._type; }
    }



}