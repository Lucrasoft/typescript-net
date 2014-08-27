/// <reference path="../../../corlib/code/exceptions/systemexception.ts" />

module System.IO {
	export class InternalBufferOverflowException extends SystemException {

        static _type: Type = System.Type.registerClass(InternalBufferOverflowException, "System.IO.InternalBufferOverflowException", []);

        constructor(message: string = "Internal buffer overflow occurred.", inner?: Exception)
        {
            super(message, inner);
        }
	}
}