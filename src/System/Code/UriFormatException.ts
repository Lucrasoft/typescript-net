/// <reference path="../../corlib/code/runtime/serialization/iserializable.ts" />
/// <reference path="../../corlib/code/exceptions/formatexception.ts" />

module System {

    
    //todo cannot extend 2 classes
	export class UriFormatException extends FormatException implements ISerializable
    {
        static _type: Type = System.Type.registerClass(UriFormatException, "System.Net.UriFormatException", []);

        constructor(textString: string = "Invalid URI format", e?: Exception) {
            super(textString, e);

        }
	}
}