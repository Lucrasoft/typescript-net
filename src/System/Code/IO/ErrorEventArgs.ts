/// <reference path="../../../corlib/code/eventargs.ts" />

module System.IO {
	export class ErrorEventArgs extends EventArgs {

        static _type: Type = System.Type.registerClass(ErrorEventArgs, "System.IO.ErrorEventArgs", []);

        exception: Exception;

        constructor(exception: Exception) 
		{
            this.exception = exception;
		}

        

		public GetException(): Exception
		{
            return this.exception;
		}

	}
} 