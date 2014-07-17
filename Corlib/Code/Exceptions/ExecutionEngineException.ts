///<reference path="SystemException.ts"/>
//todo


module System
{

	export class ExecutionEngineException extends SystemException
    {
        static _type: Type = System.Type.registerClass(ExecutionEngineException, "System.ExecutionEngineException", []);

		constructor(message: string = "Internal error occurred.", innerException?: Exception) {

		    super(message, innerException);

		}
      
    }

	//	internal ExecutionEngineException (SerializationInfo info, StreamingContext context) : base(info, context)
	//	{
    //}
}

 