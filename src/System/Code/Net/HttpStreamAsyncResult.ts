//todo ref that

module System.Net {
	class HttpStreamAsyncResult extends IAsyncResult {
        locker: object;
        handle: ManualResetEvent;
		completed: boolean;

        Buffer: byte[];
        Offset: number;
        Count: number;
        Callback: AsyncCallback;
		State: object;
		SynchRead: number;
        Error: Exception;

		public Complete(e: Exception): void
		{
            Error = e;
            Complete();
		}

        public void Complete()
        {
            lock(locker) {
                if (completed)
                    return;

                completed = true;
                if (handle != null)
                    handle.Set();

                if (Callback != null)
                    Callback.BeginInvoke(this, null, null);
        }
		}

		public object AsyncState {
			get { return State; }
		}

		public AsyncWaitHandle: WaitHandle {
			get {
            lock(locker) {
                if (handle == null)
                    handle = new ManualResetEvent(completed);
            }

            return handle;
        }
		}

		public CompletedSynchronously; boolean {
			get { return (SynchRead == Count); }
		}

		public IsCompleted: boolean {
			get {
            lock(locker) {
                return completed;
            }
        }
    }
	}
}