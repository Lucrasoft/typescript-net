///<reference path="SystemException.ts"/>
//todo

module System {
    export class OutOfMemoryException extends SystemException
    {
        static _type: Type = System.Type.registerClass(OutOfMemoryException, "System.OutOfMemoryException", []);


		Result: number = 0x8007000E;

        

		// Constructors
		constructor(message: string = "Out of memory.", innerException?: Exception) {
		    super(message, innerException);
            this.HResult = Result;
            //Can Result be     0x8007000E;
		}
        
	//	protected OutOfMemoryException (SerializationInfo info, StreamingContext context)
	//		: base(info, context)
	//	{
    //}
	}
}