/// <reference path="../Code/LinqStuff.d.ts" />
declare var JSString: any;
declare module System {
    class Type {
        private static _types;
        private obj;
        private implementations;
        public name: string;
        public isRuntimeType: boolean;
        public isClass: boolean;
        public isInterface: boolean;
        public isEnum: boolean;
        static registerClass(_class: any, name: string, interfaces: string[]): Type;
        static registerInterface(name: string, parent?: string): void;
        static registerEnum(_enum: any, name: string): Type;
        private static registerInternal(_type, name);
        static getTypeName(obj: any): string;
        private static InitializeType();
    }
}
declare module System {
    interface IObject {
        getType(): Type;
    }
}
declare module System {
    class Object {
        static _type: Type;
        constructor();
        public equals(obj: any): boolean;
        static equals(objA: any, objB: any): boolean;
        private memberwiseClone();
        private getInstance(t);
        public toString(): string;
        public getType(): Type;
    }
}
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
    class Exception implements Error, IObject {
        private static type;
        public name : string;
        public message: string;
        private err;
        constructor(message?: string, innerException?: Exception);
        public getType(): Type;
    }
}
declare module System {
    class NotImplementedException extends Exception implements IObject {
        private static _type;
        constructor(message?: string, innerException?: Exception);
        public getType(): Type;
    }
}
declare module System {
    class Attribute implements IObject {
        private static type;
        constructor();
        static getCustomAttribute(element: IObject, attributeType: Type): Attribute;
        static isDefined(element: IObject, attributeType: Type, inherit: boolean): boolean;
        static getCustomAttributes(): Attribute[];
        public getType(): Type;
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
    class AttributeUsageAttribute extends Attribute implements IObject {
        private static _type;
        private valid_on;
        public Inherited: boolean;
        public AllowMultiple: boolean;
        constructor(validOn: AttributeTargets);
        public validOn : AttributeTargets;
        public getType(): Type;
    }
}
declare module System {
    interface IDisposable {
        dispose(): void;
    }
}
declare module System {
    interface IEnumerator<T> extends IDisposable {
        current: T;
        moveNext(): boolean;
        reset(): void;
    }
}
declare module System {
    interface IEnumberable<T> {
        getEnumerator(): IEnumerator<T>;
    }
}
declare module System {
    class Statements {
        static forEach<T>(collection: IEnumberable<T>, callback: Action<T>): void;
        static as<T>(object: any, TofT: Type): T;
        static Implements(object: any, Interface: string): void;
        static typeOf(object: any): Type;
        static is(object: any, type: Type): boolean;
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
        getFormat(formatType: Type): IObject;
    }
}
declare module System {
    interface IFormattable {
        toString(format: string, formatProvider: IFormatProvider): string;
    }
}
declare module System {
    interface IEquatable<T> {
        equals(other: T): boolean;
    }
}
declare module System {
    interface IComparable<T> {
        compareTo(other: T): number;
    }
}
declare module System {
    class ArgumentException extends Exception implements IObject {
        static _type: Type;
        public paramName: string;
        constructor(message?: string, innerException?: Exception, paramName?: string);
        public toString(): string;
        public getType(): Type;
    }
}
declare module System {
    class ArgumentNullException extends ArgumentException implements IObject {
        static _type: Type;
        constructor(message?: string, innerException?: Exception, paramName?: string);
        public getType(): Type;
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
    class IntBase implements IFormattable, IComparable<IntBase>, IEquatable<IntBase>, IObject {
        static _type: Type;
        private value;
        public Value : number;
        constructor(value: number);
        public compareTo(value: any): number;
        public equals(obj: any): boolean;
        public getHashCode(): number;
        static parse(s: string, style?: Globalization.NumberStyles, provider?: IFormatProvider): number;
        static tryParse(s: string, result: OutArgument<number>, style?: Globalization.NumberStyles, provider?: IFormatProvider): boolean;
        public ToString(format?: string, provider?: IFormatProvider): string;
        public toType(targetType: Type, provider: IFormatProvider): void;
        public getType(): Type;
    }
}
declare module System {
    class Int32 extends IntBase implements IFormattable, IComparable<Int32>, IEquatable<Int32>, IObject {
        static _type: Type;
        static MaxValue: number;
        static MinValue: number;
        constructor(value: number);
        public getType(): Type;
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
    class StreamingContext implements IObject {
        private static _type;
        public state: StreamingContextStates;
        public additional: any;
        constructor(state: StreamingContextStates, additional?: any);
        public Context : any;
        public State : StreamingContextStates;
        public equals(obj: any): boolean;
        public getHashCode(): number;
        public getType(): Type;
    }
}
declare module System.Runtime.Serialization {
    class SerializationInfo {
        constructor();
        public addValue(name: string, value: any): void;
        public getString(name: string): string;
    }
}
declare module System.Runtime.Serialization {
    interface ISerializable {
        getObjectData(info: SerializationInfo, context: StreamingContext): void;
    }
}
declare module System.Text {
    class StringBuilder implements Runtime.Serialization.ISerializable, IObject {
        private static _type;
        private _str;
        constructor(value?: string);
        public MaxCapacity : number;
        public Length : number;
        public toString(startIndex?: number, length?: number): string;
        public equals(sb: StringBuilder): boolean;
        public remove(startIndex: number, length: number): StringBuilder;
        public replace(oldValue: string, newValue: string): StringBuilder;
        public append(value: any): StringBuilder;
        public clear(): StringBuilder;
        public appendLine(value?: string): StringBuilder;
        public appendFormat(format: string, ...args: any[]): StringBuilder;
        private InsertInternal(index, value);
        public insert(index: number, value: string, count?: number): StringBuilder;
        public getType(): Type;
        public getObjectData(info: Runtime.Serialization.SerializationInfo, context: Runtime.Serialization.StreamingContext): void;
        static ctor_Serializable(info: Runtime.Serialization.SerializationInfo, context: Runtime.Serialization.StreamingContext): StringBuilder;
    }
}
declare module System {
    class String implements IObject {
        private static _type;
        static empty : string;
        static format(value: string, ...replacements: any[]): string;
        static isNullOrEmpty(value: string): boolean;
        public getType(): Type;
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
        getTypeCode(): TypeCode;
        toNumber(provider: IFormatProvider): number;
        toString(provider: IFormatProvider): string;
        toBoolean(provider: IFormatProvider): boolean;
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
    class ArgumentOutOfRangeException extends ArgumentException implements IObject {
        static _type: Type;
        constructor(message?: string, innerException?: Exception, paramName?: string);
        public getType(): Type;
    }
}
declare module System {
    class InvalidCastException extends Exception implements IObject {
        private static _type;
        constructor(message?: string, innerException?: Exception);
        public getType(): Type;
    }
}
declare module System {
    class FormatException extends Exception implements IObject {
        private static _type;
        constructor(message?: string, innerException?: Exception);
        public getType(): Type;
    }
}
declare module System.Globalization {
    class CultureInfo {
        constructor();
    }
}
declare module System {
    class Char extends Object implements IConvertible, IComparable<Char>, IEquatable<Char> {
        static _type: Type;
        static MaxValue: number;
        static MinValue: number;
        public value: number;
        constructor(c: number);
        constructor(c: string);
        constructor(c: string, index: number);
        public equals(obj: any): boolean;
        public compareTo(other: Char): number;
        static convertFromUtf32(utf32: number): string;
        private static __checkAndConvertArgument(arg, index);
        static convertToUtf32(highSurrogate: string, lowSurrogate: string): number;
        static convertToUtf32(highSurrogate: number, lowSurrogate: number): number;
        static convertToUtf32(highSurrogate: Char, lowSurrogate: Char): number;
        static convertToUtf32FromString(s: string, index: number): number;
        static isSurrogatePair(highSurrogate: Char, lowSurrogate: Char): boolean;
        static isSurrogatePair(highSurrogate: string, lowSurrogate: string): boolean;
        static isSurrogatePair(highSurrogate: number, lowSurrogate: number): boolean;
        static isSurrogatePairString(s: string, index: number): boolean;
        public getHashCode(): number;
        static getNumericValue(c: number): number;
        static getNumericValue(c: string): number;
        static getNumericValue(c: string, index: number): number;
        static getNumericValue(c: Char): number;
        static getUnicodeCategory(c: Char): Globalization.UnicodeCategory;
        static getUnicodeCategory(c: string): Globalization.UnicodeCategory;
        static getUnicodeCategory(c: string, index: number): Globalization.UnicodeCategory;
        static getUnicodeCategory(c: number): Globalization.UnicodeCategory;
        static isControl(c: Char): boolean;
        static isControl(c: string): boolean;
        static isControl(c: string, index: number): boolean;
        static isControl(c: number): boolean;
        static isDigit(c: Char): boolean;
        static isDigit(c: string): boolean;
        static isDigit(c: string, index: number): boolean;
        static isDigit(c: number): boolean;
        static isHighSurrogate(c: Char): boolean;
        static isHighSurrogate(c: string): boolean;
        static isHighSurrogate(c: string, index: number): boolean;
        static isHighSurrogate(c: number): boolean;
        static isLetter(c: Char): boolean;
        static isLetter(c: string): boolean;
        static isLetter(c: string, index: number): boolean;
        static isLetter(c: number): boolean;
        static isLetterOrDigit(c: Char): boolean;
        static isLetterOrDigit(c: string): boolean;
        static isLetterOrDigit(c: string, index: number): boolean;
        static isLetterOrDigit(c: number): boolean;
        static isLower(c: Char): boolean;
        static isLower(c: string): boolean;
        static isLower(c: string, index: number): boolean;
        static isLower(c: number): boolean;
        static isLowSurrogate(c: Char): boolean;
        static isLowSurrogate(c: string): boolean;
        static isLowSurrogate(c: string, index: number): boolean;
        static isLowSurrogate(c: number): boolean;
        static isNumber(c: Char): boolean;
        static isNumber(c: string): boolean;
        static isNumber(c: string, index: number): boolean;
        static isNumber(c: number): boolean;
        static isPunctuation(c: Char): boolean;
        static isPunctuation(c: string): boolean;
        static isPunctuation(c: string, index: number): boolean;
        static isPunctuation(c: number): boolean;
        static isSeparator(c: Char): boolean;
        static isSeparator(c: string): boolean;
        static isSeparator(c: string, index: number): boolean;
        static isSeparator(c: number): boolean;
        static isSurrogate(c: Char): boolean;
        static isSurrogate(c: string): boolean;
        static isSurrogate(c: string, index: number): boolean;
        static isSurrogate(c: number): boolean;
        static isSymbol(c: Char): boolean;
        static isSymbol(c: string): boolean;
        static isSymbol(c: string, index: number): boolean;
        static isSymbol(c: number): boolean;
        static isUpper(c: Char): boolean;
        static isUpper(c: string): boolean;
        static isUpper(c: string, index: number): boolean;
        static isUpper(c: number): boolean;
        static isWhiteSpace(c: Char): boolean;
        static isWhiteSpace(c: string): boolean;
        static isWhiteSpace(c: string, index: number): boolean;
        static isWhiteSpace(c: number): boolean;
        private static __internalCheckParameters(s, index);
        static tryParse(s: string, result: OutArgument<Char>): boolean;
        static parse(s: string): Char;
        static toLower(c: Char, culture?: Globalization.CultureInfo): Char;
        static toLowerInvariant(c: Char): Char;
        static toLowerInvariant(c: string): Char;
        static toLowerInvariant(c: number): Char;
        static toUpper(c: Char, culture?: Globalization.CultureInfo): Char;
        static toUpperInvariant(c: Char): Char;
        static toUpperInvariant(c: string): Char;
        static toUpperInvariant(c: number): Char;
        public toString(provider?: IFormatProvider): string;
        static toString(c: Char): string;
        public getTypeCode(): TypeCode;
        public toNumber(provider: IFormatProvider): number;
        public toBoolean(provider: IFormatProvider): boolean;
    }
}
declare module System {
    class BitConverter {
        static IsLittleEndian: boolean;
        private static AmILittleEndian();
        static getBytes(value: any): Uint8Array;
        private static GetBytes_Boolean(value);
        static getBytes_String(value: string): Uint8Array;
        static getBytes_Int16(value: number): Uint8Array;
        static getBytes_Int32(value: number): Uint8Array;
        static toBoolean(value: Uint8Array, startIndex: number): boolean;
        static toChar(value: Uint8Array, startIndex: number): Char;
        static toInt16(value: Uint8Array, startIndex: number): Int16;
        static toInt32(value: Uint8Array, startIndex: number): Int32;
        static toString(value: Uint8Array, startIndex: number, length: number): string;
        private static __internalCheckParam(value, startIndex, length);
    }
}
declare module System {
    class Byte {
        static MinValue: number;
        static MaxValue: number;
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
    interface Func<TResult> {
        (): TResult;
    }
    interface Func1<T, TResult> {
        (arg: T): TResult;
    }
    interface Func2<T1, T2, TResult> {
        (arg1: T1, arg2: T2): TResult;
    }
    interface Func3<T1, T2, T3, TResult> {
        (arg1: T1, arg2: T2, arg3: T3): TResult;
    }
}
declare module System {
    interface ICloneable {
        clone(): any;
    }
}
declare module System {
    class Guid implements ICloneable, IObject {
        static _type: Type;
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
        static newGuid(): Guid;
        private static CreateFormatException(s);
        static construct_numbers(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): Guid;
        static empty: Guid;
        public equals(o: any): boolean;
        private static __internalCompare(x, y);
        public compareTo(value: Guid): number;
        public getHashCode(): number;
        private static ToHex(b);
        public toByteArray(): Uint8Array;
        private static appendInt(builder, value);
        private static appendShort(builder, value);
        private static appendByte(builder, value);
        public toString2(): string;
        public toString3(format?: string): string;
        public toString(): string;
        public toString(format: GuidFormat): string;
        public toString(format: string): string;
        static op_Equality(a: Guid, b: Guid): boolean;
        static op_Inequality(a: Guid, b: Guid): boolean;
        static parse(input: string): Guid;
        static parseExact(input: string, format: string): Guid;
        static tryParse(input: string, result: OutArgument<Guid>): boolean;
        static tryParseExact(input: string, format: string, result: OutArgument<Guid>): boolean;
        static parseFormat(format: string): GuidFormat;
        private static CheckNull(o);
        private static CheckLength(o, l);
        private static CheckArray(o, l);
        public clone(): Guid;
        public getType(): Type;
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
    class Int16 extends IntBase implements IFormattable, IComparable<Int16>, IEquatable<Int16>, IObject {
        static _type: Type;
        static MaxValue: number;
        static MinValue: number;
        constructor(value: number);
        public getType(): Type;
    }
}
declare module System {
    interface ICollection<T> extends IEnumberable<T> {
        count: number;
        isReadOnly: boolean;
        add(item: T): void;
        clear(): void;
        contains(item: T): boolean;
        copyTo(array: T[], arrayIndex: number): void;
        remove(item: T): boolean;
    }
}
declare module System.Collections.Generic {
    interface IList<T> extends ICollection<T> {
        indexer(index: number): T;
        indexOf(item: T): number;
        removeAt(index: number): void;
        insert(index: number, item: T): void;
    }
}
declare module Sample {
    class MyClass extends System.Object {
        static _type: System.Type;
        constructor();
    }
}
declare module System.Collections.Generic {
    class KeyNotFoundException extends Exception implements IObject {
        private static _type;
        public getType(): Type;
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
    class List<T> implements IList<T>, IEnumberable<T>, IObject {
        static _type: Type;
        private list;
        public changecount: number;
        public count : number;
        public isReadOnly : boolean;
        public add(item: T): void;
        public clear(): void;
        public contains(item: T): boolean;
        public copyTo(array: T[], arrayIndex: number): void;
        public remove(item: T): boolean;
        public indexer(index: number): T;
        public indexOf(item: T): number;
        public removeAt(index: number): void;
        public insert(index: number, item: T): void;
        public getEnumerator(): IEnumerator<T>;
        public getType(): Type;
    }
}
declare module System {
    class InvalidOperationException extends Exception implements IObject {
        private static _type;
        constructor(message?: string, innerException?: Exception);
        public getType(): Type;
    }
}
declare module System.Runtime.Serialization {
    interface IFormatConverter {
    }
}
declare module System.Runtime.Serialization {
    class SerializationEntry {
        public name: string;
        public objectType: Type;
        public value: any;
        public Name : string;
        public ObjectType : Type;
        public Value : any;
        constructor(name: string, type: Type, value: any);
    }
}
declare module System.Text {
}
