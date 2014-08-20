/// <reference path="../Type.ts" /> 
/// <reference path="../Interfaces/IDisposable.ts" /> 
/// <reference path="../Func.ts" />
/// <reference path="../Action.ts" />
/// <reference path="../Statements.ts" />

/// <reference path="../Exceptions/InvalidOperationException.ts" />

 
module System.IO {

 
    export class Stream implements System.IDisposable {

        public static null: Stream = new NullStream();



        //async_read: System.Func3<Uint8Array, number, number, number>;
        //async_write: System.Action3<Uint8Array, number, number>;
        //async_event: AutoResetEvent ;

        constructor() {
        }

        get canRead(): boolean {
            return null;
        }

        get canSeek(): boolean {
            return null;
        }

        get canWrite(): boolean {
            return null;
        }


        get canTimeout(): boolean {
            return false;
        }

        get length(): number {
            return null;
        }

        get position(): number {
            return null;
        }


        public dispose(): void {
            //
             	//if (this.async_event != null && disposing) {
            //    this.async_event.Close ();
            //    this.async_event = null;
        	//}
        }

     
        public close(): void {
            this.dispose();
            //GC.SuppressFinalize (this);
        }


        get readTimeout(): number {

            //throw new System.InvalidOperationException("Timeouts are not supported on this stream.");
            return null;
        }

        set readTimeout(value: number) {
            //throw new System.InvalidOperationException ("Timeouts are not supported on this stream.");
        }



        get writeTimeout(): number {

            //throw new System.InvalidOperationException("Timeouts are not supported on this stream.");
            return null;
        }

        set writeTimeout(value: number) {
            //throw new InvalidOperationException ("Timeouts are not supported on this stream.");
        }


        public static synchronized(stream: System.IO.Stream): System.IO.Stream {
            return new System.IO.SynchronizedStream(stream);
        }



        public flush(): void {

        }

        public read(buffer: Uint8Array, offset: number, count: number): number {
            //exceptie ? eigenlijk een abstract method ?
            return null;
            
        }

        public readByte(): number {

            var buffer: Uint8Array = new Uint8Array(1);

            if (this.read(buffer, 0, 1) > 0)
                return buffer[0];

            return -1;
        }

        public seek(offset: number, origin: SeekOrigin) {

        }

        public setLength(value: number): void {
        }

        public write(buffer: Uint8Array, offset: number, count: number) {

        }

        public writeByte(value: number): void {
            var buffer: Uint8Array = new Uint8Array(1);

            buffer[0] = value;

            this.write(buffer, 0, 1);
        }

        //public beginRead(buffer: Uint8Array, offset: number, count: number, callback: AsyncCallback, state: any): IAsyncResult {
        //    if (!this.canRead)
        //        throw new System.NotSupportedException("This stream does not support reading");

        //    if (this.async_event == null) {
        //        System.Statements.lock(this, () => {
        //            if (this.async_event == null)
        //                this.async_event = new AutoResetEvent(true);
        //        });
        //    }
            
        //    this.async_event.WaitOne();
        //    this.async_read = this.read;
            
        //    return this.async_read.beginInvoke(buffer, offset, count, callback, state);
        //}

        //public beginWrite(buffer: Uint8Array, offset: number, count: number, callback: AsyncCallback, state : any): IAsyncResult {
        //    if (!this.canWrite)
        //        throw new System.NotSupportedException("This stream does not support writing");

        //    if (this.async_event == null) {
        //        System.Statements.lock(this, () => {
        //            if (this.async_event == null)
        //                this.async_event = new this.AutoResetEvent(true);
        //        });
        //    }

        //    this.async_event.WaitOne();
        //    this.async_write = this.write;
        //    return this.async_write.beginInvoke(buffer, offset, count, callback, state);
        //}

        //public endRead(asyncResult: IAsyncResult): number {
        //    if (asyncResult == null)
        //        throw new ArgumentNullException("asyncResult");

        //    if (this.async_read == null)
        //        throw new ArgumentException("EndRead cannot be called multiple times");

        //    try {
        //        return this.async_read.endInvoke(asyncResult);
        //    } finally {
        //        async_read = null;
        //        async_event.Set();
        //    }
        //}

        //public endWrite(asyncResult: IAsyncResult): void {
        //    if (asyncResult == null)
        //        throw new ArgumentNullException("asyncResult");

        //    if (async_write == null)
        //        throw new ArgumentException("EndWrite cannot be called multiple times");

        //    try {
        //        async_write.EndInvoke(asyncResult);
        //    } finally {
        //        async_write = null;
        //        async_event.Set();
        //    }
        //}


        public copyTo(destination: Stream, bufferSize: number = 16 * 1024): void {
            if (destination == null)
                throw new System.ArgumentNullException("destination");
            if (!this.canRead)
                throw new System.NotSupportedException("This stream does not support reading");
            if (!destination.canWrite)
                throw new System.NotSupportedException("This destination stream does not support writing");
            if (bufferSize <= 0)
                throw new System.ArgumentOutOfRangeException("bufferSize");

            var buffer = new Uint8Array(bufferSize);
            var nread: number;
            while ((nread = this.read(buffer, 0, bufferSize)) != 0)
                destination.write(buffer, 0, nread);
        }




        //	public Task CopyToAsync(Stream destination)
        //	{
        //    return CopyToAsync(destination, 16 * 1024, CancellationToken.None);
        //	}

        //	public Task CopyToAsync(Stream destination, int bufferSize)
        //	{
        //    return CopyToAsync(destination, bufferSize, CancellationToken.None);
        //	}

        //	public virtual Task CopyToAsync(Stream destination, int bufferSize, CancellationToken cancellationToken)
        //	{
        //    if (destination == null)
        //        throw new ArgumentNullException("destination");
        //    if (!CanRead)
        //        throw new NotSupportedException("This stream does not support reading");
        //    if (!destination.CanWrite)
        //        throw new NotSupportedException("This destination stream does not support writing");
        //    if (bufferSize <= 0)
        //        throw new ArgumentOutOfRangeException("bufferSize");

        //    if (cancellationToken.IsCancellationRequested)
        //        return TaskConstants.Canceled;

        //    return CopyToAsync(destination, new byte[bufferSize], cancellationToken);
        //}

        //	async Task CopyToAsync(Stream destination, byte[]buffer, CancellationToken cancellationToken)
        //	{
        //		int nread;
        //		while ((nread = await ReadAsync(buffer, 0, buffer.Length, cancellationToken).ConfigureAwait (false)) != 0)
        //			await destination.WriteAsync(buffer, 0, nread, cancellationToken).ConfigureAwait(false);
        //	}

        //	public Task FlushAsync()
        //	{
        //    return FlushAsync(CancellationToken.None);
        //	}

        //	public virtual Task FlushAsync(CancellationToken cancellationToken)
        //	{
        //    if (cancellationToken.IsCancellationRequested)
        //        return TaskConstants.Canceled;

        //		return Task.Factory.StartNew(l => ((Stream) l).Flush(), this, cancellationToken);
        //	}

        //	public Task < int > ReadAsync(byte[]buffer, int offset, int count)
        //	{
        //    return ReadAsync(buffer, offset, count, CancellationToken.None);
        //	}

        //	public virtual Task < int > ReadAsync(byte[]buffer, int offset, int count, CancellationToken cancellationToken)
        //	{
        //    if (cancellationToken.IsCancellationRequested)
        //        return TaskConstants<int>.Canceled;

        //    return Task<int>.Factory.FromAsync(BeginRead, EndRead, buffer, offset, count, null);
        //	}

        //	public Task WriteAsync(byte[]buffer, int offset, int count)
        //	{
        //    return WriteAsync(buffer, offset, count, CancellationToken.None);
        //	}

        //	public virtual Task WriteAsync(byte[]buffer, int offset, int count, CancellationToken cancellationToken)
        //	{
        //    return Task.Factory.FromAsync(BeginWrite, EndWrite, buffer, offset, count, null);
        //}

    }



	export class SynchronizedStream extends System.IO.Stream {

        private source: System.IO.Stream;
        private slock: any;

        constructor(source: System.IO.Stream) {
            super();
            this.source = source;
            this.slock = {};
        }

        get canRead(): boolean {
            return System.Statements.lock<boolean>(this.slock, () => {
                return this.source.canRead;
            });
        }

		get canSeek() : boolean
		{
            return System.Statements.lock<boolean>(this.slock, () => {
                return this.source.canSeek;
            });
        }
                
        get  canWrite() : boolean
		{
            return System.Statements.lock<boolean>(this.slock, () => {
                return this.source.canWrite;
            });
        }
         
		get length() : number
		{
            return System.Statements.lock<number>(this.slock, () => {
                return this.source.length;
            });
		}

		get position() : number
		{
            return System.Statements.lock<number>(this.slock, () => {
                return this.source.position;
            });
        }

        set position(value :number ) {
            System.Statements.lock<void>(this.slock, () => {
                this.source.position = value;
            });
        }

		public flush() : void
		{
            System.Statements.lock<void>(this.slock, () => {
                this.source.flush();
            });
		}

        public read(buffer: Uint8Array, offset: number, count: number): number {
            return System.Statements.lock<number>(this.slock, () => {
                return this.source.read(buffer, offset, count);
            });
        }

		public readByte() : number
		{
        return System.Statements.lock<number>(this.slock, () => {
				return this.source.readByte();
            });
		}

        public seek(offset: number, origin: SeekOrigin): number {
            return System.Statements.lock<number>(this.slock, () => {
                return this.source.seek(offset, origin);
            });
        }


		public setLength(value : number) : void
		{
        return System.Statements.lock<void>(this.slock, () => {
                        this.source.setLength(value);
                    });
		}

        public write(buffer: Uint8Array, offset: number, count: number): void {
            System.Statements.lock<void>(this.slock, () => {
                this.source.write(buffer, offset, count);
            });
        }

        public writeByte(value: number): void {
            System.Statements.lock<void>(this.slock, () => {
                this.source.writeByte(value);
            });
        }
    
	}
}
