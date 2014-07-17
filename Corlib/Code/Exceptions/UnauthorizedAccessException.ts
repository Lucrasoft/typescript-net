

module System
{

	export class UnauthorizedAccessException extends SystemException
	{
        static _type = System.Type.registerClass(UnauthorizedAccessException, "System.UnauthorizedAccessException", []);


        constructor(message: string = "Access to the requested resource is not authorized.", innerException?: System.Exception) {
            super(message, innerException);
            this.HResult = 0x80131500;
        }


        //IObject
        getType(): Type { return UnauthorizedAccessException._type; }
	}
}
 