
module System.IO {


    export class EndOfStreamException extends IOException {
        static _type = System.Type.registerClass(EndOfStreamException, "System.IO.EndOfStreamException", []);


        constructor(message: string = "Failed to read past end of stream.", innerException?: System.Exception) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return EndOfStreamException._type; }
    }
}
			 