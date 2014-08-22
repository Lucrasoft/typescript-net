//todo ref path to SystemException
//todo

module System.IO
{
	
	export class InvalidDataException extends SystemException
	{
        static _type: Type = System.Type.registerClass(InvalidDataException, "System.IO.InvalidDataException", []);

        Result: number = 0x80131503;

		// Constructors
		constructor(message: string = "Invalid data format.", innerException?: Exception)	
        {
            super(message, innerException);
            HResult = Result;
		}
    }

    
}
