/// <reference path="../../../corlib/code/runtime/serialization/iserializable.ts" />
/// <reference path="../../../corlib/code/exceptions/invalidoperationexception.ts" />


module System.Net 
{
	export class ProtocolViolationException extends InvalidOperationException implements ISerializable
	{
        static _type: Type = System.Type.registerClass(ProtocolViolationException, "System.Net.ProtocolViolationException", []);

		constructor(message?: string) 
        {
            super(message)
		}


	}
}
