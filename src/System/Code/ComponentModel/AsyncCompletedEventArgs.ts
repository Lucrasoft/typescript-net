/// <reference path="../../../corlib/code/eventargs.ts" />

module System.ComponentModel 
{
	export class AsyncCompletedEventArgs extends EventArgs
	{
        _error: Exception;
		_cancelled: boolean;
		_userState: Object;

        public AsyncCompletedEventArgs(error: Exception,  cancelled: boolean, userState: Object)
		{
            this._error = error;
            this._cancelled = cancelled;
            this._userState = userState;
        }
		
		RaiseExceptionIfNecessary(): void
		{
            if (this._error != null)
                throw new System.Reflection.TargetInvocationException(this._error);
            else if (this._cancelled)
                throw new InvalidOperationException("The operation was cancelled");	
		}
        
        public get Cancelled(): boolean{
            return this._cancelled;
        }

		public get Error(): Exception {
			 return this._error; 
		}

		public get UserState(): Object {
			 return this._userState; 
        }
	}
}