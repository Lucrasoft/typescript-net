/// <reference path="../Int32.ts" />  


module System.Text {


    //StringBuilder2 is built upon the Mono StringBuilder implmementation.
    //To finish , this requires the Char and String to be fully .NET like
    //For now : commented

	//export class StringBuilder2 implements ISerializable, IObject
	//{
    //    private static _type: Type = System.Type.RegisterClass(StringBuilder2, "System.Text.StringBuilder2", ["System.Runtime.Serialization.ISerializable"]);

    //    private _length: number;
    //    private _str: string;
    //    private _cached_str: string;

    //    private _maxCapacity: number;
    //    private DefaultCapacity: number = 16;

	
//        constructor(value?: string, startIndex?: number, length?: number, capacity?: number, maxCapacity?: number = System.Int32.MaxValue) {
//            // first, check the parameters and throw appropriate exceptions if needed
//            if (!value) { value = ""; }

//            // make sure startIndex is zero or positive
//            if (!startIndex) { startIndex = 0; }

//            if (startIndex < 0)
//                throw new System.ArgumentOutOfRangeException("StartIndex cannot be less than zero.", null, "startIndex : " + startIndex);

//            // make sure length is zero or positive
//            if (length < 0)
//                throw new System.ArgumentOutOfRangeException("Length cannot be less than zero.", null, "length : " + length);

//            if (capacity < 0)
//                throw new System.ArgumentOutOfRangeException("capacity must be greater than zero.", null, "capacity : " + capacity);

//            if (maxCapacity < 1)
//                throw new System.ArgumentOutOfRangeException("maxCapacity is less than one.", null, "maxCapacity");

//            if (capacity > maxCapacity)
//                throw new System.ArgumentOutOfRangeException("Capacity exceeds maximum capacity.", null, "capacity");

//            // make sure startIndex and length give a valid substring of value
//            // re-ordered to avoid possible integer overflow
//            if (startIndex > value.length - length)
//                throw new System.ArgumentOutOfRangeException("StartIndex and length must refer to a location within the string.", null, "startIndex : " + startIndex);

//            if (capacity == 0) {
//                if (maxCapacity > this.DefaultCapacity)
//                    capacity = this.DefaultCapacity;
//                else
//                    this._str = this._cached_str = String.Empty;
//            }

//            this._maxCapacity = maxCapacity;

//            if (this._str == null)
//                this._str = String.InternalAllocateStr((length > capacity) ? length : capacity);

//            //if (length > 0) String.CharCopy(_str, 0, value, startIndex, length);

//            this._length = length;
//        }

//        public get MaxCapacity(): number {
//            return this._maxCapacity;
//        }

//        public get Capacity(): number {

//            if (this._str.length == 0)
//                return Math.min(this._maxCapacity, this.DefaultCapacity);
//            return this._str.length;
//        }

//        public set Capacity(value: number) {
//            if (value < this._length)
//                throw new ArgumentException("Capacity must be larger than length");

//            if (value > this._maxCapacity)
//                throw new ArgumentOutOfRangeException("Should be less than or equal to MaxCapacity", null, "value");

//            this.InternalEnsureCapacity(value);
//        }

//        public get Length(): number {
//            return this._length;
//        }

//        public set Length(value: number) {
//            if (value < 0 || value > this._maxCapacity)
//                throw new ArgumentOutOfRangeException();

//            if (value == this._length)
//                return;

//            if (value < this._length) {
//                this.InternalEnsureCapacity(value);
//                this._length = value;
//            } else {
//                // Expand the capacity to the new length and
//                // pad the string with NULL characters.
//                this.Append('\0', value - this._length);
//            }
//        }


//        [IndexerName("Chars")]
//        public get Indexer(index : number) {

//            if (index >= _length || index < 0)
//                throw new IndexOutOfRangeException();

//            return _str[index];
//        } 

//        	set {
//            if (index >= _length || index < 0)
//                throw new IndexOutOfRangeException();

//            if (null != _cached_str)
//                InternalEnsureCapacity(_length);

//            _str.InternalSetChar(index, value);
//        }


//        public toString(): string {
//            if (this._length == 0)
//                return String.Empty;

//            if (null != this._cached_str)
//                return this._cached_str;

//            // If we only have a half-full buffer we return a new string.
//            if (this._length < (this._str.length >> 1) || (this._str.length > string.LOS_limit && this._length <= string.LOS_limit)) {
//                // use String.SubstringUnchecked instead of String.Substring
//                // as the former is guaranteed to create a new string object
//                this._cached_str = this._str.SubstringUnchecked(0, this._length);
//                return this._cached_str;
//            }

//            this._cached_str = this._str;
//            this._str.InternalSetLength(this._length);

//            return this._str;
//        }

//        public ToString(startIndex: number, length: number): string {
//            // re-ordered to avoid possible integer overflow
//            if (startIndex < 0 || length < 0 || startIndex > this._length - length)
//                throw new ArgumentOutOfRangeException();

//            // use String.SubstringUnchecked instead of String.Substring
//            // as the former is guaranteed to create a new string object
//            if (startIndex == 0 && length == this._length)
//                return this.toString();
//            else
//                return this._str.SubstringUnchecked(startIndex, length);
//        }

//        public EnsureCapacity(capacity: number): number {
//            if (capacity < 0)
//                throw new ArgumentOutOfRangeException("Capacity must be greater than 0.");

//            if (capacity <= this._str.length)
//                return this._str.length;

//            this.InternalEnsureCapacity(capacity);

//            return this._str.length;
//        }

//        public Equals(sb: StringBuilder): boolean {
//			if (((object)sb) == null)
//				return false;

//            if (_length == sb.Length && _str == sb._str)
//                return true;

//            return false;
//        }

//        public Remove(startIndex: number, length: number): StringBuilder {
//            // re-ordered to avoid possible integer overflow
//            if (startIndex < 0 || length < 0 || startIndex > _length - length)
//                throw new ArgumentOutOfRangeException();

//            if (null != this._cached_str)
//                this.InternalEnsureCapacity(this._length);

//            // Copy everything after the 'removed' part to the start 
//            // of the removed part and truncate the sLength
//            if (this._length - (startIndex + length) > 0)
//                String.CharCopy(_str, startIndex, _str, startIndex + length, _length - (startIndex + length));

//            this._length -= length;

//            return this;
//        }


//        public Replace(oldValue: string, newValue: string, startIndex?: number = 0, count?: number = this._length): StringBuilder {
//            if (oldValue == null)
//                throw new ArgumentNullException("The old value cannot be null.");

//            if (startIndex < 0 || count < 0 || startIndex > _length - count)
//                throw new ArgumentOutOfRangeException();

//            if (oldValue.length == 0)
//                throw new ArgumentException("The old value cannot be zero length.");


//            var substr: string = this._str.Substring(startIndex, count);
//            var replace: string = substr.Replace(oldValue, newValue);
//			// return early if no oldValue was found
//			if ((object) replace == (object) substr)
//				return this;

//            this.InternalEnsureCapacity(replace.Length + (_length - count));

//            // shift end part
//            if (replace.length < count)
//                String.CharCopy(_str, startIndex + replace.Length, _str, startIndex + count, _length - startIndex - count);
//            else if (replace.Length > count)
//                String.CharCopyReverse(_str, startIndex + replace.Length, _str, startIndex + count, _length - startIndex - count);

//            // copy middle part back into _str
//            String.CharCopy(_str, startIndex, replace, 0, replace.Length);

//            _length = replace.Length + (_length - count);

//            return this;
//        }


//        /* The Append Methods */


//        public Append(value: any): StringBuilder {
//            if (value == null)
//                return this;

//            value = value.toString();

//            if (this._length == 0 && value.Length < this._maxCapacity && value.Length > this._str.Length) {
//                this._length = value.Length;
//                this._str = this._cached_str = value;
//                return this;
//            }

//            var needed_cap: number = this._length + value.Length;
//            if (null != this._cached_str || this._str.Length < needed_cap)
//                this.InternalEnsureCapacity(needed_cap);

//            System.String.CharCopy(this._str, this._length, value, 0, value.Length);
//            this._length = needed_cap;
//            return this;
//        }


//        public Clear(): StringBuilder {
//            this.Length = 0;
//            return this;
//        }



//        public AppendLine(value?: string = ""): StringBuilder {
//            return this.Append(value).Append(System.Environment.NewLine);
//        }

//        public AppendFormat(format : string, ...args: any[]): StringBuilder {
//            this.Append(String.Format(format, args));
//            return this;
//            //return AppendFormat(null, format, args);
            
//        }

	


//		/*  The Insert Functions */

//		private InsertInternal(index:number, value:string)  : StringBuilder
//		{
//        if (index > this._length || index < 0)
//            throw new ArgumentOutOfRangeException();

//        if (value == null || value.Length == 0)
//            return this;

//        InternalEnsureCapacity(_length + value.Length);

//        // Move everything to the right of the insert point across
//        String.CharCopyReverse(_str, index + value.Length, _str, index, _length - index);

//        // Copy in stuff from the insert buffer
//        String.CharCopy(_str, index, value, 0, value.Length);

//        _length += value.Length;

//        return this;
//		}


//		public  Insert(index:number, value : string,  count?:number=1) :  StringBuilder
//		{

//        if (count < 0) throw new ArgumentOutOfRangeException();

//        if (value != null && value != String.Empty)
//				for (int insertCount = 0; insertCount < count; insertCount++) {

//            }
//					Insert(index, value);

//        return this;
//		}

//		public StringBuilder Insert(int index, char []value, int startIndex, int charCount)
//		{
//        if (value == null) {
//            if (startIndex == 0 && charCount == 0)
//                return this;

//            throw new ArgumentNullException("value");
//        }

//        if (charCount < 0 || startIndex < 0 || startIndex > value.Length - charCount)
//            throw new ArgumentOutOfRangeException();

//        return Insert(index, new String(value, startIndex, charCount));
//		}

//		private  InternalEnsureCapacity(size :number) : void
//		{
//        if (size > _str.Length || (object) _cached_str == (object) _str) {
//				int capacity = _str.Length;

//        // Try double buffer, if that doesn't work, set the length as capacity
//        if (size > capacity) {

//					// The first time a string is appended, we just set _cached_str
//					// and _str to it. This allows us to do some optimizations.
//					// Below, we take this into account.
//					if ((object) _cached_str == (object) _str && capacity < constDefaultCapacity)
//						capacity = constDefaultCapacity;

//            capacity = capacity << 1;
//            if (size > capacity)
//                capacity = size;

//            if (capacity >= Int32.MaxValue || capacity < 0)
//                capacity = Int32.MaxValue;

//            if (capacity > _maxCapacity && size <= _maxCapacity)
//                capacity = _maxCapacity;

//            if (capacity > _maxCapacity)
//                throw new ArgumentOutOfRangeException("size", "capacity was less than the current size.");
//        }

//				string tmp = String.InternalAllocateStr(capacity);
//        if (_length > 0)
//            String.CharCopy(tmp, 0, _str, 0, _length);

//        _str = tmp;
//    }

//    _cached_str = null;
//    }


//		public CopyTo(sourceIndex : number, destination : char[], destinationIndex:number, count:number) : void
//		{
//    if (destination == null)
//            throw new ArgumentNullException("destination");
//if ((Length - count < sourceIndex) ||
//    (destination.Length - count < destinationIndex) ||
//    (sourceIndex < 0 || destinationIndex < 0 || count < 0))
//    throw new ArgumentOutOfRangeException();

//			for (int i = 0; i < count; i++)
//				destination[destinationIndex + i] = _str[sourceIndex + i];
//    }


////ISerializable
//GetObjectData(info : SerializationInfo, context : StreamingContext ) : void
//{
//        info.AddValue("m_MaxCapacity", _maxCapacity);
//        info.AddValue("Capacity", Capacity);
//        info.AddValue("m_StringValue", ToString());
//        info.AddValue("m_currentThread", 0);
//    }

//    //Serializable constructor

//CreateForSerialize(info : SerializationInfo , context : StreamingContext ) : StringBuilder
//		{
//			string s = info.GetString("m_StringValue");
//    if (s == null)
//        s = "";
//    _length = s.Length;
//    _str = _cached_str = s;

//    _maxCapacity = info.GetInt32("m_MaxCapacity");
//    if (_maxCapacity < 0)
//        _maxCapacity = Int32.MaxValue;
//    Capacity = info.GetInt32("Capacity");
//    }
	}


