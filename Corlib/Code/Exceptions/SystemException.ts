/// <reference path="Exception.ts" />  
/// <reference path="../Type.ts" />

module System
{
	
	export class SystemException extends System.Exception
	{
        static _type = System.Type.registerClass(SystemException, "System.SystemException", []);


		constructor (message?: string, innerException?: System.Exception)
        {
            super(message, innerException);
            this.HResult = 0x80131501;
		}

        getType(): Type { return SystemException._type; }
	
	}
}
 