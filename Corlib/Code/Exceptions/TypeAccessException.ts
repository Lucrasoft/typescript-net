///<reference path="TypeLoadException.ts"/>

module System
{
	export class TypeAccessException extends TypeLoadException
    {

        static _type: Type = System.Type.registerClass(TypeAccessException, "System.TypeAccessException", []);


		Result: number = 0x80131522; // FIXME: this code is probably wrong (<--This was c#)

        //todo HRESULT
		constructor(message: string = "Attempt to access the type failed.", inner?: Exception) {
		    super(message, inner);
            HResult = Result;
            //result is miss gewoon: 0x80131522
		}


		
        ////todo
		//protected TypeAccessException (SerializationInfo info, StreamingContext context)
		//	: base (info, context)
		//{
		//}
	}
}