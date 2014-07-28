///<reference path="SystemException.ts"/>


module System
{

	export class InvalidProgramException extends SystemException
	{
        static _type: Type = System.Type.registerClass(InvalidProgramException, "System.InvalidProgramException", []);

        constructor(message: string = "Metadata is invalid.", inner?: Exception) {
            super(message, inner);

        }
	}
} 