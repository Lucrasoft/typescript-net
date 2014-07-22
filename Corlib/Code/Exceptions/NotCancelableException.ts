///<reference path="SystemException.ts"/>

module System
{

	export class NotCancelableException extends SystemException
    {
        static _type: Type = System.Type.registerClass(NotCancelableException, "System.NotCancelableException", []);

		Result: number = 0x8013153c;


        constructor(message: string = "The operation attempted to be canceled could not be because it was not in a cancelable region.", innerException?: Exception) {
            super(message, innerException);
            this.HResult = this.Result;
        }        
	}
} 