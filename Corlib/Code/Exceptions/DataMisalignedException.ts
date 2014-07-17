///<reference path="SystemException.ts"/>

module  System
{

	export class DataMisalignedException extends SystemException
	{
        static _type: Type = System.Type.registerClass(DataMisalignedException, "System.DataMisalignedException", []);


        Result: number = 0x80131541;
        
        constructor(message: string = "A datatype misalignment was detected in a load or store instruction.", innerException?: Exception) {

            super(message, innerException);
        }

		// Constructors

        //todo          (Was al zo in de c#)
		/*
		protected DataMisalignedException (SerializationInfo info, StreamingContext context)
			: base (info, context)
		{
		}
		*/
	}
}