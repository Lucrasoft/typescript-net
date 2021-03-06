﻿///<reference path="TypeLoadException.ts"/>

module System
{

	export class DllNotFoundException extends TypeLoadException
	{
        static _type: Type = System.Type.registerClass(DllNotFoundException, "System.DllNotFoundException", []);

		Result: number = 0x80131524;

        constructor(message: string = "DLL not found.", inner?: Exception) {
            super(message, inner);
            this.HResult = this.Result;
        }



	}
}