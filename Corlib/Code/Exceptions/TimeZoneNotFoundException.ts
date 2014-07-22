///<reference path="Exception.ts"/>

module System
{

	export class TimeZoneNotFoundException extends Exception
	{
        static _type: Type = System.Type.registerClass(TimeZoneNotFoundException, "System.TimeZoneNotFoundException", []);

		constructor(message: string, innerException: Exception)
	    {
	        super(message, innerException);   

    	}
	}
} 