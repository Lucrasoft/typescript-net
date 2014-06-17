/// <reference path="../Type.ts" />  
/// <reference path="../Int32.ts" />  
/// <reference path="../Runtime/Serialization/ISerializable.ts" />  
/// <reference path="../Runtime/Serialization/SerializationInfo.ts" />  
/// <reference path="../Runtime/Serialization/StreamingContext.ts" />  


module System.Text {


    //Basic implementation

    export class StringBuilder implements Runtime.Serialization.ISerializable, IObject {
        private static _type: Type = System.Type.registerClass(StringBuilder, "System.Text.StringBuilder", ["System.Runtime.Serialization.ISerializable"]);

        private _str: string;


        constructor(value?: string) {
            if (!value) { value = ""; }
            this._str = value;
        }


        public get MaxCapacity(): number {
            return Int32.MaxValue;
        }


        public get Length(): number {
            return this._str.length;
        }


        public toString(): string {
            return this._str;
        }


        public ToString(startIndex: number= 0, length: number = this._str.length): string {
            if (startIndex < 0 || length < 0 || startIndex > this._str.length - length)
                throw new ArgumentOutOfRangeException();

            if (startIndex == 0 && length == this._str.length)
                return this.toString();
            else
                return this._str.substr(startIndex, length);
        }


        equals(sb: StringBuilder): boolean {
            if (sb == null) return false;
            if (this.toString() == sb.toString()) return true;
            return false;
        }

        remove(startIndex: number, length: number): StringBuilder {

            if (startIndex < 0 || length < 0 || startIndex > this._str.length - length)
                throw new ArgumentOutOfRangeException();

            var s = this._str;
            this._str = s.substr(0, startIndex) + s.substr(startIndex + length);
            return this;
        }


        replace(oldValue: string, newValue: string): StringBuilder {
            if (oldValue == null)
                throw new ArgumentNullException("The old value cannot be null.");

            if (oldValue.length == 0)
                throw new ArgumentException("The old value cannot be zero length.");

            this._str = this._str.replace(oldValue, newValue);
            return this;
        }


        /* The Append Methods */

        append(value: any): StringBuilder {
            if (value == null)
                return this;

            value = value.toString();
            this._str += value;

            return this;
        }


        clear(): StringBuilder {
            this._str = String.empty;
            return this;
        }


        appendLine(value: string = ""): StringBuilder {
            return this.append(value).append(System.Environment.NewLine);
        }

        appendFormat(format: string, ...args: any[]): StringBuilder {
            return this.append(String.format(format, args));
        }



        private InsertInternal(index: number, value: string): StringBuilder {
            if (value == null || value.length == 0)
                return this;

            var s = this._str;

            if (index > this._str.length || index < 0)
                throw new ArgumentOutOfRangeException();
            
            
            this._str = s.substring(0, index).concat(value, s.substring(index));

            return this;
        }

        insert(index: number, value: string, count: number= 1): StringBuilder {
            if (count < 0) throw new ArgumentOutOfRangeException();

            for (var insertCount: number = 0; insertCount < count; insertCount++) {
                this.InsertInternal(index, value);
            }

            return this;
        }

        //IObject
        public getType(): Type { return StringBuilder._type; }


        //ISerializable
        getObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext): void {
            //info.AddValue("m_MaxCapacity", _maxCapacity);
            //info.AddValue("Capacity", Capacity);
            info.addValue("m_StringValue", this.toString());
            info.addValue("m_currentThread", 0);
        }

        //Serializable constructor
        static ctor_Serializable(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext): StringBuilder {
            var s : string = info.getString("m_StringValue");
            var result = new StringBuilder(s);

            return result;
            
        }
    }
}
