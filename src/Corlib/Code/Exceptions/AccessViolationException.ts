﻿///<reference path="SystemException.ts"/>

module System
{

	export class AccessViolationException extends SystemException
    {
        static _type: Type = System.Type.registerClass(AccessViolationException, "System.AccessViolationException", []);


		Result: number = 0x80004003;
		
        constructor(message: string = "Attempted to read or write protected memory. This is often an indication that other memory has been corrupted.", innerException?: Exception) {
            super(message, innerException);
            this.HResult = this.Result;
        }
	}
}