/// <reference path="../../../corlib/code/interfaces/iasyncresult.ts" />

module System.Net
{
	class DnsAsyncResult extends IAsyncResult
    {
        static _type: Type = System.Type.registerClass(DnsAsyncResult, "System.Net.DnsAsyncResult", ["System.IAsyncResult"]);

        static internal_cb: WaitCallback = new WaitCallback(CB);
		handle: ManualResetEvent ;
		synch: boolean ;
		is_completed: boolean;
        callback: AsyncCallback ;
        state: Object;
        entry: IPHostEntry ;
		exc: Exception;

        public DnsAsyncResult(cb: AsyncCallback, state: Object)
		{
        this.callback = cb;
        this.state = state;
		}

        public SetCompleted(synch: boolean, entry: IPHostEntry, e: Exception ): void 
		{
        this.synch = synch;
        this.entry = entry;
        this.exc = e;
        
            if (is_completed)
                return;
            is_completed = true;
            if (handle != null)
                handle.Set();
        
        if (callback != null)
            ThreadPool.QueueUserWorkItem(internal_cb, this);
		}

        public SetCompleted(synch: boolean, e: Exception): void
		{
        SetCompleted(synch, null, e);
		}

        public SetCompleted(synch: boolean, entry: IPHostEntry ): void 
		{
            SetCompleted(synch, entry, null);
		}

        static CB(_this: Object): void
		{
			ares: DnsAsyncResult  = (DnsAsyncResult)_this; //todo this must be a DnsAsyncResult
            ares.callback(ares);
		}

		public get AsyncState(): object {
			return this.state;
		}

		public get AsyncWaitHandle(): WaitHandle  {
            
                if (handle == null)
                    handle = new ManualResetEvent(is_completed);
            
            return this.handle;
        }
		

        public get Exception(): Exception  {
			 return this.exc;
		}

        public get HostEntry(): IPHostEntry  {
			return this.entry; 
		}

		public get CompletedSynchronously(): boolean {
			return this.synch;
		}

		public get IsCompleted(): boolean {
                return this.is_completed;
        }
	}
}