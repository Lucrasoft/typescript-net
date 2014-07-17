///<reference path="SystemException.ts"/>

module System
{
	export class MulticastNotSupportedException extends SystemException
    {

        static _type: Type = System.Type.registerClass(MulticastNotSupportedException, "System.MulticastNotSupportedException", []);


        constructor(message: string = "This operation cannot be performed with the specified delagates.", inner?: Exception) {

            super(message, inner);
        }


        //todo
		//internal MulticastNotSupportedException (SerializationInfo info, StreamingContext context) : base(info, context)
		//{
		//}
	}
}