///<reference path="SystemException.ts"/>
module System
{
	export class InsufficientExecutionStackException extends SystemException
    {
        static _type: Type = System.Type.registerClass(InsufficientExecutionStackException, "System.InsufficientExecutionStackException", []);


       constructor(message: string = "Insufficient execution stack", innerException?: Exception)
        {
            super(message, innerException);
        }
	}
} 