///todo ref to systemException

module System.IO {
	export class InternalBufferOverflowException extends SystemException {

        //		#region Constructors

        constructor(message: string = "Internal buffer overflow occurred.", inner?: Exception)
        {
            super(message, inner);
        }

//		#endregion // Constructors
	}
}