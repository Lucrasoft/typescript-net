///<reference path="SystemException.ts"/>


module System
{
	export class StackOverflowException extends SystemException
    {
        static _type: Type = System.Type.registerClass(StackOverflowException, "System.StackOverflowException", []);


		// Constructors
        constructor(message: string = "The requested operation caused a stack overflow.", innerException?: Exception) {
            super(message, innerException);

        }
        

    //  todo
	//	internal StackOverflowException (SerializationInfo info, StreamingContext context)
	//		: base(info, context)
	//	{
    //}
	}
} 