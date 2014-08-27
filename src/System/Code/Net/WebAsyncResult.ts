//todo ref that

module System.Net
{
	export WebAsyncResult extends SimpleAsyncResult
	{
        static _type: Type = System.Type.registerClass(WebAsyncResult, "System.Net.WebAsyncResult", []);

		nbytes: number;
        innerAsyncResult: IAsyncResult;
        response: HttpWebResponse;
        writeStream: Stream;
        buffer: Byte[];
		offset: number;
		size: number;
		public EndCalled: boolean;
		public AsyncWriteAll: boolean;

		public WebAsyncResult (cb: AsyncCallback, state: Object )
		{
            super(cb, state);
		}

		public WebAsyncResult (request: HttpWebRequest, cb: AsyncCallback , state: Object)
		{
            super(cb, state);
		}

		public WebAsyncResult (cb: AsyncCallback,state: Object,buffer: byte[], offset: number,size: number)
			: base(cb, state)
		{
        this.buffer = buffer;
        this.offset = offset;
        this.size = size;
    }

		Reset(): void
		{
        this.nbytes = 0;
        this.response = null;
        this.buffer = null;
        this.offset = 0;
        this.size = 0;
        Reset_internal();
    }

		SetCompleted(synch: boolean, nbytes: number): void
		{
            this.nbytes = nbytes;
            SetCompleted_internal(synch);
        }
		
        SetCompleted(synch: boolean, writeStream: Stream): void 
		{
            this.writeStream = writeStream;
            SetCompleted_internal(synch);
        }

        SetCompleted(synch: boolean, response: HttpWebResponse ): void
		{
            this.response = response;
            SetCompleted_internal(synch);
        }

		DoCallback(): void
		{
            DoCallback_internal();
        }
		
		get NBytes(): number {
			return this.nbytes; 
			
        }
        set NBytes(value: number) {
            this.nbytes = value;
        }
        

        get InnerAsyncResult(): IAsyncResult  {
			return this.innerAsyncResult;
    }
        set InnerAsyncResult(value:IAsyncResult) {
            this.innerAsyncResult = value;
        }

		get WriteStream(): Stream {
			 return this.writeStream;
        }

        get Response(): HttpWebResponse  {
			 return this.response;
        }

        get Buffer():byte []  {
			  return buffer; 
        }

		get Offset(): number {
			 return this.offset;
        }

        get Size: number {
		    return size; 
        }
	}
}