///<reference path="SystemException.ts"/>



module System
{

	export class MemberAccessException extends SystemException
	{

        static _type: Type = System.Type.registerClass(MemberAccessException, "System.MemberAccessException", []);


        Result: number = 0x8013151A;

        constructor(message: string = "Cannot access a class member.", inner?: Exception) {
            super(message, inner);
            HResult = Result;

        }

        //todo
		//protected MemberAccessException (SerializationInfo info, StreamingContext context)
		//	: base (info, context)
		//{
		//}
		

	}
}

