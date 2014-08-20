///<reference path="TypeLoadException.ts"/>

module System
{
	export class TypeAccessException extends TypeLoadException
    {

        static _type: Type = System.Type.registerClass(TypeAccessException, "System.TypeAccessException", []);

		Result: number = 0x80131522;

		constructor(message: string = "Attempt to access the type failed.", inner?: Exception) {
		    super(message, inner);
            this.HResult = this.Result;

		}
	}
}