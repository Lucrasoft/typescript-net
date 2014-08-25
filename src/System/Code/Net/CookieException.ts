//todo ref them both

module System.Net 
{
    
	export class CookieException extends FormatException, ISerializable
	{
        static _type: Type = System.Type.registerClass(CookieException, "System.Net.CookieException", []);
		
		constructor(msg?: string) 
		{
            super(msg);
        }
	}
}