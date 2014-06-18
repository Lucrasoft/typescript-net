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

        static _type: Type = System.Type.registerClass(IntBase, "System.IntBase", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

   
        private value: number;

        public get Value(): number {
            return this.value;
        }

        constructor(value: number) {
            this.value = value;
        }


        compareTo(value: any): number {
            if (value == null)
                return 1;

            if (!(Statements.is(value,System.IntBase._type)))
            	throw new ArgumentException("Value is not a System.IntXX");

            var xv = (<IntBase>value).value;
            if (this.value == xv)  return 0;
            if (this.value > xv) 
                return 1;
            else
                return -1;
        }

        equals(obj: any): boolean {
            if (!Statements.is(obj, System.IntBase._type)) return false;

            return (<IntBase>obj).value == this.value;
        }

        getHashCode(): number {
            return this.value;
        }


        static parse(s: string, style: System.Globalization.NumberStyles = null, provider: IFormatProvider = null): number {
            if (style != null) throw new NotImplementedException();
            if (provider != null) throw new NotImplementedException();
            //without the styles and provider, simply use the built in JS parser.
            return parseInt(s);

        }

        static tryParse(s: string, result: System.OutArgument<number>, style: System.Globalization.NumberStyles = null, provider: IFormatProvider = null): boolean {
            try {
                result.value = IntBase.parse(s, style, provider);
                return true;
            }
            catch (e) { }
            return false;
        }



        ToString(format: string = "", provider: IFormatProvider = null): string {
            throw new NotImplementedException();
            //return NumberFormatter.NumberToString(format, m_value, provider);
        }


        toType(targetType: Type, provider: IFormatProvider) {
            if (targetType == null)
                throw new ArgumentNullException("targetType");

        }


        //IObject
        getType(): Type { return IntBase._type; }
    }



}