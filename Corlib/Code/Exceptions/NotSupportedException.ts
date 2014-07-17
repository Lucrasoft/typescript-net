/// <reference path="SystemException.ts" />  
/// <reference path="../Type.ts"/>


module System
{
	export class NotSupportedException extends System.SystemException
	{
		
        static _type = System.Type.registerClass(NotSupportedException, "System.NotSupportedException", []);


        constructor(message?: string, innerException?: System.Exception) {
            super(message,innerException);
            this.HResult = 0x80131515;
        }

        getType(): Type { return SystemException._type; }
	
	}
}
 