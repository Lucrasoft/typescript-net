//todo ref them both

module System.Net 
{
	export class ProtocolViolationException extends InvalidOperationException ,ISerializable
	{
        static _type: Type = System.Type.registerClass(ProtocolViolationException, "System.Net.ProtocolViolationException", []);

		constructor(message?: string) 
        {
            super(message)
		}


	}
}
