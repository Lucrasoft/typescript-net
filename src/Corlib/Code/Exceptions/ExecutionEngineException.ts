///<reference path="SystemException.ts"/>


module System
{

	export class ExecutionEngineException extends SystemException
    {
        static _type: Type = System.Type.registerClass(ExecutionEngineException, "System.ExecutionEngineException", []);

		constructor(message: string = "Internal error occurred.", innerException?: Exception) {

		    super(message, innerException);

		}
      
    }


}

 