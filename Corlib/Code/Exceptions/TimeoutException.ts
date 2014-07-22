///<reference path="SystemException.ts"/>

module System
{
	export class TimeoutException extends SystemException
    {
        static _type: Type = System.Type.registerClass(TimeoutException, "System.TimeoutException");

		 Result : number = 0x80131505;



        constructor(message: string = "The operation has timed -out.", innerException?: Exception ) {
            super(message, innerException);
            this.HResult = this.Result;
        }


	}
}