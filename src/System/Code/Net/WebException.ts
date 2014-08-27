/// <reference path="../../../corlib/code/exceptions/invalidoperationexception.ts" />
/// <reference path="../../../corlib/code/runtime/serialization/iserializable.ts" />

module System.Net 
{

	export class WebException extends InvalidOperationException implements ISerializable 
    {

        static _type: Type = System.Type.registerClass(WebException, "System.Net.WebException",["System.Runtime.Serialization.ISerializable"] )
	    
        private response: WebResponse;
        private status: WebExceptionStatus = WebExceptionStatus.UnknownError;

		// Constructors

        constructor()
        constructor(message: string)
        constructor(message: string, innerException: Exception)
        constructor(message: string, status: WebExceptionStatus)
        constructor(message: string, innerException: Exception, status: WebExceptionStatus)
        constructor(message: string, innerException: Exception, status: WebExceptionStatus, response: WebResponse)
        constructor()
		{
            super(message, innerException)
            this.status = status;
            this.response = response;
		}

		// Properties

        public get Response(): WebResponse {
			 return this.response; 
		}

		public get Status(): WebExceptionStatus  {
			return this.status;
		}

		// Methods

	}
}