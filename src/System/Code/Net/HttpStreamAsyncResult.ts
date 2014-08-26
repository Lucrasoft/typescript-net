/// <reference path="../../../corlib/code/interfaces/iasyncresult.ts" />

module System.Net {
    class HttpStreamAsyncResult extends IAsyncResult {

        static _type: Type = System.Type.registerClass(HttpStreamAsyncResult, "System.Net.HttpStreamAsyncResult", ["System.IAsyncResult"]);

        locker: Object;
        handle: ManualResetEvent;
		completed: boolean;

        Buffer: byte[];
        Offset: number;
        Count: number;
        Callback: AsyncCallback;
		State: Object;
		SynchRead: number;
        Error: Exception;

		public Complete(e: Exception): void
		{
            Error = e;
            Complete();
		}

        public Complete(): void
        {
            {
                if (completed)
                    return;

                completed = true;
                if (handle != null)
                    handle.Set();

                if (Callback != null)
                    Callback.BeginInvoke(this, null, null);
            }
		}

        public get AsyncState(): Object  {
			  return this.State; 
		}

        public get AsyncWaitHandle(): WaitHandle {
            {
                if (handle == null)
                    handle = new ManualResetEvent(completed);
            }

            return handle;   
		}

        public get CompletedSynchronously(): boolean {
			  return (SynchRead == Count); 
		}

		public get IsCompleted(): boolean {
			 
            {
                return completed;
            }
        
        }
	}
}