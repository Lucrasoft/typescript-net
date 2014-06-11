/// <reference path="../Code/LinqStuff.d.ts" />
declare module System {
    interface Action<T> {
        (arg: T): void;
    }
    interface Action2<T1, T2> {
        (arg1: T1, arg2: T2): void;
    }
    interface Action3<T1, T2, T3> {
        (arg1: T1, arg2: T2, arg3: T3): void;
    }
}
declare module System {
    interface IObject {
        GetType(): System.Type;
    }
}
declare var JSString: any;
declare module System {
    class Type {
        private obj;
        public IsRuntimeType: boolean;
        public IsClass: boolean;
        public IsInterface: boolean;
        public implementations: string[];
        public name: string;
        private static _types;
        static RegisterClass(_class: any, name: string, interfaces: string[]): Type;
        static RegisterInterface(name: string): void;
        private static RegisterInternal(_type, name);
        static GetTypeName(obj: any): string;
        private static InitializeType();
    }
}
declare module System {
    class Exception implements Error, System.IObject {
        private static _type;
        public name : string;
        public message: string;
        private err;
        constructor(message?: string, innerException?: Exception);
        public GetType(): System.Type;
    }
}
declare module System {
    class NotImplementedException extends System.Exception implements System.IObject {
        private static _type;
        constructor(message?: string, innerException?: System.Exception);
        public GetType(): System.Type;
    }
}
declare module System {
    class Attribute implements System.IObject {
        private static _type;
        constructor();
        static GetCustomAttribute(element: System.IObject, attributeType: System.Type): Attribute;
        static IsDefined(element: System.IObject, attributeType: System.Type, inherit: boolean): boolean;
        static GetCustomAttributes(): Attribute[];
        public GetType(): System.Type;
    }
}
declare module System {
    enum AttributeTargets {
        Assembly = 1,
        Module = 2,
        Class = 4,
        Struct = 8,
        Enum = 16,
        Constructor = 32,
        Method = 64,
        Property = 128,
        Field = 256,
        Event = 512,
        Interface = 1024,
        Parameter = 2048,
        Delegate = 4096,
        ReturnValue = 8192,
        GenericParameter = 16384,
        All,
    }
}
declare module System {
    class AttributeUsageAttribute extends System.Attribute implements System.IObject {
        private static _type;
        private valid_on;
        public Inherited: boolean;
        public AllowMultiple: boolean;
        constructor(validOn: System.AttributeTargets);
        public ValidOn : System.AttributeTargets;
        public GetType(): System.Type;
    }
}
declare module System {
    interface IDisposable {
        Dispose(): void;
    }
}
declare module System {
    interface IEnumerator<T> extends System.IDisposable {
        Current: T;
        MoveNext(): boolean;
        Reset(): void;
    }
}
declare module System {
    interface IEnumberable<T> {
        GetEnumerator(): System.IEnumerator<T>;
    }
}
declare module System {
    class Statements {
        static ForEach<T>(collection: System.IEnumberable<T>, callback: System.Action<T>): void;
        static Implements(object: any, Interface: string): void;
        static TypeOf(object: any): System.IObject;
        static Is(object: any, type: System.Type): boolean;
    }
}
declare module System {
    interface IOutArgument<T> {
        value: T;
    }
    class OutArgument<T> implements IOutArgument<T> {
        public value: T;
        constructor(value?: T);
    }
}
declare module System {
    interface IFormatProvider {
        GetFormat(formatType: System.Type): System.IObject;
    }
}
declare module System {
    interface IFormattable {
        ToString(format: string, formatProvider: System.IFormatProvider): string;
    }
}
declare module System {
    interface IEquatable<T> {
        Equals(other: T): boolean;
    }
}
declare module System {
    interface IComparable<T> {
        CompareTo(other: T): number;
    }
}
declare module System {
    class ArgumentException extends System.Exception implements System.IObject {
        private static _type;
        public paramName: string;
        constructor(message?: string, innerException?: System.Exception, paramName?: string);
        public toString(): string;
        public GetType(): System.Type;
    }
}
declare module System {
    class ArgumentNullException extends System.ArgumentException implements System.IObject {
        private static _type;
        constructor(message?: string, innerException?: System.Exception, paramName?: string);
        public GetType(): System.Type;
    }
}
declare module System.Globalization {
    enum NumberStyles {
        None = 0,
        AllowLeadingWhite = 1,
        AllowTrailingWhite = 2,
        AllowLeadingSign = 4,
        AllowTrailingSign = 8,
        AllowParentheses = 16,
        AllowDecimalPoint = 32,
        AllowThousands = 64,
        AllowExponent = 128,
        AllowCurrencySymbol = 256,
        AllowHexSpecifier = 512,
        Integer,
        HexNumber,
        Number,
        Float,
        Currency,
        Any,
    }
}
declare module System {
    class IntBase implements System.IFormattable, System.IComparable<IntBase>, System.IEquatable<IntBase>, System.IObject {
        private static _type;
        private value;
        public Value : number;
        constructor(value: number);
        public CompareTo(value: any): number;
        public Equals(obj: any): boolean;
        public GetHashCode(): number;
        static Parse(s: string, style?: System.Globalization.NumberStyles, provider?: System.IFormatProvider): number;
        static TryParse(s: string, result: System.OutArgument<number>, style?: System.Globalization.NumberStyles, provider?: System.IFormatProvider): boolean;
        public ToString(format?: string, provider?: System.IFormatProvider): string;
        public ToType(targetType: System.Type, provider: System.IFormatProvider): void;
        public GetType(): System.Type;
    }
}
declare module System {
    class Int32 extends System.IntBase implements System.IFormattable, System.IComparable<Int32>, System.IEquatable<Int32>, System.IObject {
        private static _type;
        static MaxValue: number;
        static MinValue: number;
        constructor(value: number);
        public GetType(): System.Type;
    }
}
declare module System.Runtime.Serialization {
    interface ISerializable {
        GetObjectData(info: Serialization.SerializationInfo, context: Serialization.StreamingContext): void;
    }
}
declare module System.Collections.Generic {
    class Dictionary<TKey, TValue> {
    }
}
declare module System.Runtime.Serialization {
    class SerializationInfo {
        constructor();
        public AddValue(name: string, value: any): void;
        public GetString(name: string): string;
    }
}
declare module System.Runtime.Serialization {
    enum StreamingContextStates {
        CrossProcess = 1,
        CrossMachine = 2,
        File = 4,
        Persistence = 8,
        Remoting = 16,
        Other = 32,
        Clone = 64,
        CrossAppDomain = 128,
        All = 255,
    }
}
declare module System.Runtime.Serialization {
    class StreamingContext implements System.IObject {
        private static _type;
        public state: Serialization.StreamingContextStates;
        public additional: any;
        constructor(state: Serialization.StreamingContextStates, additional?: any);
        public Context : any;
        public State : Serialization.StreamingContextStates;
        public Equals(obj: any): boolean;
        public GetHashCode(): number;
        public GetType(): System.Type;
    }
}
declare module System.Text {
    class StringBuilder implements System.Runtime.Serialization.ISerializable, System.IObject {
        private static _type;
        private _str;
        constructor(value?: string);
        public MaxCapacity : number;
        public Length : number;
        public toString(): string;
        public ToString(startIndex?: number, length?: number): string;
        public Equals(sb: StringBuilder): boolean;
        public Remove(startIndex: number, length: number): StringBuilder;
        public Replace(oldValue: string, newValue: string): StringBuilder;
        public Append(value: any): StringBuilder;
        public Clear(): StringBuilder;
        public AppendLine(value?: string): StringBuilder;
        public AppendFormat(format: string, ...args: any[]): StringBuilder;
        private InsertInternal(index, value);
        public Insert(index: number, value: string, count?: number): StringBuilder;
        public GetType(): System.Type;
        public GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext): void;
        static ctor_Serializable(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext): StringBuilder;
    }
}
declare module System {
    class BitConverter {
        static IsLittleEndian: boolean;
        private static AmILittleEndian();
        static GetBytes(value: any): Uint8Array;
        private static GetBytes_Boolean(value);
        static GetBytes_String(value: string): Uint8Array;
        static GetBytes_Int16(value: number): Uint8Array;
        static GetBytes_Int32(value: number): Uint8Array;
        static ToBoolean(value: Uint8Array, startIndex: number): boolean;
        static ToChar(value: Uint8Array, startIndex: number): System.Char;
        static ToInt16(value: Uint8Array, startIndex: number): System.Int16;
        static ToInt32(value: Uint8Array, startIndex: number): System.Int32;
        static ToString(value: Uint8Array, startIndex: number, length: number): string;
        private static __internalCheckParam(value, startIndex, length);
    }
}
declare module System {
    class Byte {
    }
}
declare module System {
    enum TypeCode {
        Empty = 0,
        Object = 1,
        DBNull = 2,
        Boolean = 3,
        Char = 4,
        SByte = 5,
        Byte = 6,
        Int16 = 7,
        UInt16 = 8,
        Int32 = 9,
        UInt32 = 10,
        Int64 = 11,
        UInt64 = 12,
        Single = 13,
        Double = 14,
        Decimal = 15,
        DateTime = 16,
        String = 18,
    }
}
declare module System {
    interface IConvertible {
        GetTypeCode(): System.TypeCode;
        ToNumber(provider: System.IFormatProvider): number;
        ToString(provider: System.IFormatProvider): string;
        ToBoolean(provider: System.IFormatProvider): boolean;
    }
}
declare module System.Globalization {
    enum UnicodeCategory {
        UppercaseLetter = 0,
        LowercaseLetter = 1,
        TitlecaseLetter = 2,
        ModifierLetter = 3,
        OtherLetter = 4,
        NonSpacingMark = 5,
        SpacingCombiningMark = 6,
        EnclosingMark = 7,
        DecimalDigitNumber = 8,
        LetterNumber = 9,
        OtherNumber = 10,
        SpaceSeparator = 11,
        LineSeparator = 12,
        ParagraphSeparator = 13,
        Control = 14,
        Format = 15,
        Surrogate = 16,
        PrivateUse = 17,
        ConnectorPunctuation = 18,
        DashPunctuation = 19,
        OpenPunctuation = 20,
        ClosePunctuation = 21,
        InitialQuotePunctuation = 22,
        FinalQuotePunctuation = 23,
        OtherPunctuation = 24,
        MathSymbol = 25,
        CurrencySymbol = 26,
        ModifierSymbol = 27,
        OtherSymbol = 28,
        OtherNotAssigned = 29,
    }
}
declare module System {
    class Char implements System.IConvertible, System.IComparable<Char>, System.IEquatable<Char> {
        private static _type;
        static MaxValue: number;
        static MinValue: number;
        public value: number;
        constructor(c: number);
        constructor(c: string);
        constructor(c: string, index: number);
        public Equals(obj: any): boolean;
        public CompareTo(other: Char): number;
        static ConvertFromUtf32(utf32: number): string;
        private static __checkAndConvertArgument(arg, index);
        static ConvertToUtf32(highSurrogate: string, lowSurrogate: string): number;
        static ConvertToUtf32(highSurrogate: number, lowSurrogate: number): number;
        static ConvertToUtf32(highSurrogate: Char, lowSurrogate: Char): number;
        static ConvertToUtf32FromString(s: string, index: number): number;
        static IsSurrogatePair(highSurrogate: Char, lowSurrogate: Char): boolean;
        static IsSurrogatePair(highSurrogate: string, lowSurrogate: string): boolean;
        static IsSurrogatePair(highSurrogate: number, lowSurrogate: number): boolean;
        static IsSurrogatePairString(s: string, index: number): boolean;
        public GetHashCode(): number;
        static GetNumericValue(c: number): number;
        static GetNumericValue(c: string): number;
        static GetNumericValue(c: string, index: number): number;
        static GetNumericValue(c: Char): number;
        static GetUnicodeCategory(c: Char): System.Globalization.UnicodeCategory;
        static GetUnicodeCategory(c: string): System.Globalization.UnicodeCategory;
        static GetUnicodeCategory(c: string, index: number): System.Globalization.UnicodeCategory;
        static GetUnicodeCategory(c: number): System.Globalization.UnicodeCategory;
        static IsControl(c: Char): boolean;
        static IsControl(c: string): boolean;
        static IsControl(c: string, index: number): boolean;
        static IsControl(c: number): boolean;
        static IsDigit(c: Char): boolean;
        static IsDigit(c: string): boolean;
        static IsDigit(c: string, index: number): boolean;
        static IsDigit(c: number): boolean;
        static IsHighSurrogate(c: Char): boolean;
        static IsHighSurrogate(c: string): boolean;
        static IsHighSurrogate(c: string, index: number): boolean;
        static IsHighSurrogate(c: number): boolean;
        static IsLetter(c: Char): boolean;
        static IsLetter(c: string): boolean;
        static IsLetter(c: string, index: number): boolean;
        static IsLetter(c: number): boolean;
        static IsLetterOrDigit(c: Char): boolean;
        static IsLetterOrDigit(c: string): boolean;
        static IsLetterOrDigit(c: string, index: number): boolean;
        static IsLetterOrDigit(c: number): boolean;
        static IsLower(c: Char): boolean;
        static IsLower(c: string): boolean;
        static IsLower(c: string, index: number): boolean;
        static IsLower(c: number): boolean;
        static IsLowSurrogate(c: Char): boolean;
        static IsLowSurrogate(c: string): boolean;
        static IsLowSurrogate(c: string, index: number): boolean;
        static IsLowSurrogate(c: number): boolean;
        static IsNumber(c: Char): boolean;
        static IsNumber(c: string): boolean;
        static IsNumber(c: string, index: number): boolean;
        static IsNumber(c: number): boolean;
        static IsPunctuation(c: Char): boolean;
        static IsPunctuation(c: string): boolean;
        static IsPunctuation(c: string, index: number): boolean;
        static IsPunctuation(c: number): boolean;
        static IsSeparator(c: Char): boolean;
        static IsSeparator(c: string): boolean;
        static IsSeparator(c: string, index: number): boolean;
        static IsSeparator(c: number): boolean;
        static IsSurrogate(c: Char): boolean;
        static IsSurrogate(c: string): boolean;
        static IsSurrogate(c: string, index: number): boolean;
        static IsSurrogate(c: number): boolean;
        static IsSymbol(c: Char): boolean;
        static IsSymbol(c: string): boolean;
        static IsSymbol(c: string, index: number): boolean;
        static IsSymbol(c: number): boolean;
        static IsUpper(c: Char): boolean;
        static IsUpper(c: string): boolean;
        static IsUpper(c: string, index: number): boolean;
        static IsUpper(c: number): boolean;
        static IsWhiteSpace(c: Char): boolean;
        static IsWhiteSpace(c: string): boolean;
        static IsWhiteSpace(c: string, index: number): boolean;
        static IsWhiteSpace(c: number): boolean;
        private static __internalCheckParameters(s, index);
        static TryParse(s: string, result: System.OutArgument<Char>): boolean;
        static Parse(s: string): Char;
        static ToLower(c: Char, culture?: System.Globalization.CultureInfo): Char;
        static ToLowerInvariant(c: Char): Char;
        static ToLowerInvariant(c: string): Char;
        static ToLowerInvariant(c: number): Char;
        static ToUpper(c: Char, culture?: System.Globalization.CultureInfo): Char;
        static ToUpperInvariant(c: Char): Char;
        static ToUpperInvariant(c: string): Char;
        static ToUpperInvariant(c: number): Char;
        public ToString(provider?: System.IFormatProvider): string;
        static ToString(c: Char): string;
        public GetTypeCode(): System.TypeCode;
        public ToNumber(provider: System.IFormatProvider): number;
        public ToBoolean(provider: System.IFormatProvider): boolean;
    }
}
declare module System {
    class DateTime {
    }
}
declare module System {
    class Environment {
        static NewLine : string;
        static TickCount : number;
    }
}
declare module System {
    interface Func<TResult, T, T1, T2, T3> {
        (): TResult;
    }
    interface Func<TResult, T, T1, T2, T3> {
        (arg: T): TResult;
    }
    interface Func<TResult, T, T1, T2, T3> {
        (arg1: T1, arg2: T2): TResult;
    }
    interface Func<TResult, T, T1, T2, T3> {
        (arg1: T1, arg2: T2, arg3: T3): TResult;
    }
}
declare module System {
    class Guid implements System.ICloneable, System.IObject {
        static _type: System.Type;
        private _a;
        private _b;
        private _c;
        private _d;
        private _e;
        private _f;
        private _g;
        private _h;
        private _i;
        private _j;
        private _k;
        constructor();
        constructor(byteArray: Uint8Array);
        constructor(guidString: string);
        constructor(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number);
        static NewGuid(): Guid;
        private static CreateFormatException(s);
        static Construct_numbers(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): Guid;
        static Empty: Guid;
        public Equals(o: any): boolean;
        private static __internalCompare(x, y);
        public CompareTo(value: Guid): number;
        public GetHashCode(): number;
        private static ToHex(b);
        public ToByteArray(): Uint8Array;
        private static AppendInt(builder, value);
        private static AppendShort(builder, value);
        private static AppendByte(builder, value);
        public ToString2(): string;
        public ToString3(format?: string): string;
        public ToString(): string;
        public ToString(format: GuidFormat): string;
        public ToString(format: string): string;
        static op_Equality(a: Guid, b: Guid): boolean;
        static op_Inequality(a: Guid, b: Guid): boolean;
        static Parse(input: string): Guid;
        static ParseExact(input: string, format: string): Guid;
        static TryParse(input: string, result: System.OutArgument<Guid>): boolean;
        static TryParseExact(input: string, format: string, result: System.OutArgument<Guid>): boolean;
        static ParseFormat(format: string): GuidFormat;
        private static CheckNull(o);
        private static CheckLength(o, l);
        private static CheckArray(o, l);
        public Clone(): Guid;
        public GetType(): System.Type;
    }
    enum GuidFormat {
        N = 0,
        D = 1,
        B = 2,
        P = 3,
        X = 4,
    }
}
declare module System {
    class Int16 extends System.IntBase implements System.IFormattable, System.IComparable<Int16>, System.IEquatable<Int16>, System.IObject {
        private static _type;
        static MaxValue: number;
        static MinValue: number;
        constructor(value: number);
        public GetType(): System.Type;
    }
}
declare module System {
    class String implements System.IObject {
        private static _type;
        static Empty : string;
        static Format(value: string, ...replacements: any[]): string;
        static IsNullOrEmpty(value: string): boolean;
        public GetType(): System.Type;
    }
}
declare module System {
    interface ICollection<T> extends System.IEnumberable<T> {
        Count: number;
        IsReadOnly: boolean;
        Add(item: T): void;
        Clear(): void;
        Contains(item: T): boolean;
        CopyTo(array: T[], arrayIndex: number): void;
        Remove(item: T): boolean;
    }
}
declare module System.Collections.Generic {
    interface IList<T> extends System.ICollection<T> {
        Indexer(index: number): T;
        IndexOf(item: T): number;
        RemoveAt(index: number): void;
        Insert(index: number, item: T): void;
    }
}
declare module System.Collections.Generic {
    class KeyNotFoundException extends System.Exception implements System.IObject {
        private static _type;
        public GetType(): System.Type;
    }
}
declare module System.Collections.Generic {
    class KeyValuePair<TKey, TValue> {
        private key;
        private value;
        public Key : TKey;
        public Value : TValue;
        constructor(key: TKey, value: TValue);
        public toString(): string;
    }
}
declare module System.Collections.Generic {
    class List<T> implements Generic.IList<T>, System.IEnumberable<T>, System.IObject {
        static _type: System.Type;
        private list;
        public changecount: number;
        public Count : number;
        public IsReadOnly : boolean;
        public Add(item: T): void;
        public Clear(): void;
        public Contains(item: T): boolean;
        public CopyTo(array: T[], arrayIndex: number): void;
        public Remove(item: T): boolean;
        public Indexer(index: number): T;
        public IndexOf(item: T): number;
        public RemoveAt(index: number): void;
        public Insert(index: number, item: T): void;
        public GetEnumerator(): System.IEnumerator<T>;
        public GetType(): System.Type;
    }
}
declare module System {
    class ArgumentOutOfRangeException extends System.ArgumentException implements System.IObject {
        private static _type;
        constructor(message?: string, innerException?: System.Exception, paramName?: string);
        public GetType(): System.Type;
    }
}
declare module System {
    class FormatException extends System.Exception implements System.IObject {
        private static _type;
        constructor(message?: string, innerException?: System.Exception);
        public GetType(): System.Type;
    }
}
declare module System {
    class InvalidCastException extends System.Exception implements System.IObject {
        private static _type;
        constructor(message?: string, innerException?: System.Exception);
        public GetType(): System.Type;
    }
}
declare module System {
    class InvalidOperationException extends System.Exception implements System.IObject {
        private static _type;
        constructor(message?: string, innerException?: System.Exception);
        public GetType(): System.Type;
    }
}
declare module System.Globalization {
    class CultureInfo {
    }
}
declare module System {
    interface ICloneable {
        Clone(): any;
    }
}
declare module System.Runtime.Serialization {
    interface IFormatConverter {
    }
}
declare module System.Runtime.Serialization {
    class SerializationEntry {
        public name: string;
        public objectType: System.Type;
        public value: any;
        public Name : string;
        public ObjectType : System.Type;
        public Value : any;
        constructor(name: string, type: System.Type, value: any);
    }
}
declare module System.Text {
}
