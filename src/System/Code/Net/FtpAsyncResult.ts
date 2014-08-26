/// <reference path="../../../corlib/code/interfaces/iasyncresult.ts" />

module System.Net 
{
	class FtpAsyncResult extends IAsyncResult
    {
        static _type: Type = System.Type.registerClass(FtpAsyncResult, "System.Net.FtpAsyncResult", ["System.IAsyncResult"]);

        response: FtpWebResponse;
        waitHandle: ManualResetEvent;
        exception: Exception;
        callback: AsyncCallback;
        stream: Stream;
        state: Object;
		completed: boolean;
		synch: boolean;
		locker: Object = new Object();

        public FtpAsyncResult(callback: AsyncCallback, state: Object)
		{
            this.callback = callback;
            this.state = state;
		}

        public get AsyncState(): Object {
            return this.state;
        }

        public get AsyncWaitHandle(): WaitHandle {
                if (this.waitHandle == null)
                    this.waitHandle = new ManualResetEvent(false);
            return this.waitHandle;
        
		}

		public get CompletedSynchronously(): boolean {			
            return this.synch;
		}

        public get IsCompleted(): boolean {
                return this.completed;
        }

		get GotException(): boolean {
            return this.exception != null;
        }

        get Exception(): Exception{
            return this.exception; 
        }

        get Response(): FtpWebResponse {
            return this.response;
        }
        set Response(value: FtpWebResponse) {
            this.response = value;
        }


        get Stream(): Stream {
            return this.stream;
        }
        set Stream(value: Stream ){
			  this.stream = value; 
        }

		WaitUntilComplete(): void
		{
            if (IsCompleted)
                return;

            this.AsyncWaitHandle.WaitOne();
        }

		WaitUntilComplete(timeout: number,exitContext: boolean): boolean
		{
            if (IsCompleted)
                return true;

            return AsyncWaitHandle.WaitOne(timeout, exitContext);
        }

        SetCompleted(synch: bool, exc: Exception, response: FtpWebResponse): void
		{
            this.synch = synch;
            this.exception = exc;
            this.response = response;
                completed = true;
                if (waitHandle != null)
                    this.waitHandle.Set();
            DoCallback();
        }

        SetCompleted(synch: boolean, response: FtpWebResponse ): void
		{
            SetCompleted(synch, null, response);
        }

        SetCompleted(synch: boolean, exc: Exception): void
		{
        SetCompleted(synch, exc, null);
    }

		DoCallback(): void
		{
        if (callback != null)
            try {
                callback(this);
            }
            catch (Exception) {
            }
        }

		// Cleanup resources
		Reset(): void
		{
        this.exception = null;
        this.synch = false;
        this.response = null;
        this.state = null;

        
            completed = false;
            if (waitHandle != null)
                waitHandle.Reset();
        
        }	
	}
}