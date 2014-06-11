/// <reference path="IObject.ts" />  
/// <reference path="Type.ts" />  
/// <reference path="Statements.ts" />  
/// <reference path="OutArgument.ts" /> 
/// <reference path="Interfaces/IFormattable.ts" />  
/// <reference path="Interfaces/IEquatable.ts" />  
/// <reference path="Interfaces/IComparable.ts" />  
/// <reference path="Exceptions/ArgumentException.ts" />  
/// <reference path="Exceptions/ArgumentNullException.ts" />  
/// <reference path="Exceptions/NotImplementedException.ts" />  
/// <reference path="Globalization/NumberStyles.ts" />  


module System {


    //TODO : IConvertible
    export class IntBase implements IFormattable, IComparable<IntBase>, IEquatable<IntBase>, IObject {

        private static _type: Type = System.Type.RegisterClass(IntBase, "System.IntBase", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

   
        private value: number;

        public get Value(): number {
            return this.value;
        }

        constructor(value: number) {
            this.value = value;
        }


        public CompareTo(value: any): number {
            if (value == null)
                return 1;

            if (!(Statements.Is(value,System.IntBase._type)))
            	throw new ArgumentException("Value is not a System.IntXX");

            var xv = (<IntBase>value).value;
            if (this.value == xv)  return 0;
            if (this.value > xv) 
                return 1;
            else
                return -1;
        }

        public Equals(obj: any): boolean {
            if (!Statements.Is(obj, System.IntBase._type)) return false;

            return (<IntBase>obj).value == this.value;
        }

        public GetHashCode(): number {
            return this.value;
        }


        public static Parse(s: string, style: System.Globalization.NumberStyles = null, provider: IFormatProvider = null): number {
            if (style != null) throw new NotImplementedException();
            if (provider != null) throw new NotImplementedException();
            //without the styles and provider, simply use the built in JS parser.
            return parseInt(s);

        }

        public static TryParse(s: string, result: System.OutArgument<number>, style: System.Globalization.NumberStyles = null, provider: IFormatProvider = null): boolean {
            try {
                result.value = IntBase.Parse(s, style, provider);
                return true;
            }
            catch (e) { }
            return false;
        }



        public ToString(format: string = "", provider: IFormatProvider = null): string {
            throw new NotImplementedException();
            //return NumberFormatter.NumberToString(format, m_value, provider);
        }


        public ToType(targetType: Type, provider: IFormatProvider) {
            if (targetType == null)
                throw new ArgumentNullException("targetType");

        }


        //IObject
        public GetType(): Type { return IntBase._type; }
    }



}