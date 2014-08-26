/// <reference path="../componentmodel/win32exception.ts" />

module System.Net {
	export class HttpListenerException extends Win32Exception
	{
        static _type: Type = System.Type.registerClass(HttpListenerException, "System.Net.HttpListenerException", []);

        constructor(errorCode: number, message?: string) {
            super(errorCode, message);

        }

		public get ErrorCode(): number {
			 return base.ErrorCode;
		}
	}
}