/// <reference path="../Type.ts"/>
/// <reference path="../Array.ts"/>



module System.IO {

    export class MemoryStream extends System.IO.Stream {

        public _type: System.Type = System.Type.registerClass(System.IO.MemoryStream, "System.IO.MemoryStream", []);


        private _canWrite: boolean;
        private _allowGetBuffer: boolean;
        private _capacity: number;
        private _length: number;
        private _internalBuffer: Uint8Array;
        private _initialIndex: number;
        private _expandable: boolean;
        private _streamClosed: boolean;
        private _position: number;
        private _dirty_bytes: number;

        //private _read_task: Task<number>;



        constructor(capacity: number= 0) {
            super();
            if (capacity < 0)
                throw new ArgumentOutOfRangeException("capacity");

            this._canWrite = true;

            this._capacity = capacity;
            this._internalBuffer = new Uint8Array(capacity);

            this._expandable = true;
            this._allowGetBuffer = true;
        }

        public MemoryStream(buffer: Uint8Array) {
            if (buffer == null)
                throw new ArgumentNullException("buffer");

            this.internalConstructor(buffer, 0, buffer.length, true, false);
        }

        //TODO : Implement these overloads !

        //	public MemoryStream(byte []buffer, bool writable)
        //	{
        //    if (buffer == null)
        //        throw new ArgumentNullException("buffer");

        //    InternalConstructor(buffer, 0, buffer.Length, writable, false);
        //	}

        //	public MemoryStream(byte []buffer, int index, int count)
        //	{
        //    InternalConstructor(buffer, index, count, true, false);
        //	}

        //	public MemoryStream(byte []buffer, int index, int count, bool writable)
        //	{
        //    InternalConstructor(buffer, index, count, writable, false);
        //	}

        //	public MemoryStream(byte []buffer, index = 0, count , bool writable, bool publiclyVisible)
        //	{
        //    InternalConstructor(buffer, index, count, writable, publiclyVisible);
        //}

        private internalConstructor(buffer: Uint8Array, index: number, count: number, writable: boolean, publicallyVisible: boolean) {
            if (buffer == null)
                throw new ArgumentNullException("buffer");

            if (index < 0 || count < 0)
                throw new ArgumentOutOfRangeException("index or count is less than 0.");

            if (buffer.length - index < count)
                throw new ArgumentException("The size of the buffer is less than index + count.", null, "index+count");

            this._canWrite = writable;

            this._internalBuffer = buffer;
            this._capacity = count + index;
            this._length = this.capacity;
            this._position = index;
            this._initialIndex = index;

            this._allowGetBuffer = publicallyVisible;
            this._expandable = false;
        }

        private checkIfClosedThrowDisposed(): void {


            if (this._streamClosed) {
                throw new System.ObjectDisposedException("MemoryStream");
            }
        }

        get canRead(): boolean {
            return !this._streamClosed;
        }

        get canSeek(): boolean {
            return !this._streamClosed;
        }

        get canWrite(): boolean {
            return (!this._streamClosed && this.canWrite);
        }

        get capacity(): number {
            this.checkIfClosedThrowDisposed();
            return this.capacity - this._initialIndex;
        }


        set capacity(value: number) {
            this.checkIfClosedThrowDisposed();

            if (!this._expandable)
                throw new NotSupportedException("Cannot expand this MemoryStream");

            if (value < 0 || value < length)
                throw new ArgumentOutOfRangeException("New capacity cannot be negative or less than the current capacity " + value + " " + this._capacity, null, "value");

            if (this._internalBuffer != null && value == this._internalBuffer.length)
                return;

            var newBuffer: Uint8Array = null;
            if (value != 0) {
                newBuffer = new Uint8Array(value);
                if (this._internalBuffer != null)
                    Buffer.blockCopy(this._internalBuffer, 0, newBuffer, 0, length);
            }

            this._dirty_bytes = 0; // discard any dirty area beyond previous length
            this._internalBuffer = newBuffer; // It's null when capacity is set to 0
            this._capacity = value;
        }


        get length(): number {
            this.checkIfClosedThrowDisposed();
            // This is ok for MemoryStreamTest.ConstructorFive
            return this._length - this._initialIndex;
        }


        get position(): number {

            this.checkIfClosedThrowDisposed();
            return this._position - this._initialIndex;
        }

        set position(value: number) {
            this.checkIfClosedThrowDisposed();
            if (value < 0)
                throw new ArgumentOutOfRangeException("Position cannot be negative", null, "value");

            if (value > Int32.MaxValue)
                throw new ArgumentOutOfRangeException("Position must be non-negative and less than 2^31 - 1 - origin", null, "value");

            this._position = this._initialIndex + value;
        }


        public dispose(disposing: boolean = true) {
            this._streamClosed = true;
            this._expandable = false;
        }

        public flush(): void {
            // Do nothing
        }

        public getBuffer(): Uint8Array {
            if (!this._allowGetBuffer)
                throw new UnauthorizedAccessException();

            return this._internalBuffer;
        }

        public read(buffer: Uint8Array, offset: number, count: number): number {
            if (buffer == null)
                throw new ArgumentNullException("buffer");

            if (offset < 0 || count < 0)
                throw new ArgumentOutOfRangeException("offset or count less than zero.");

            if (buffer.length - offset < count)
                throw new ArgumentException("The size of the buffer is less than offset + count.", null, "offset+count");

            this.checkIfClosedThrowDisposed();

            if (this._position >= length || count == 0)
                return 0;

            if (this._position > length - count)
                count = length - this._position;

            Buffer.blockCopy(this._internalBuffer, this._position, buffer, offset, count);
            this._position += count;
            return count;
        }

        public readByte(): number {
            this.checkIfClosedThrowDisposed();
            if (this._position >= length)
                return -1;

            return this._internalBuffer[this._position++];
        }

        public seek(offset: number, loc: SeekOrigin): number {
            this.checkIfClosedThrowDisposed();

            // It's funny that they don't throw this exception for < Int32.MinValue
            if (offset > System.Int32.MaxValue)
                throw new ArgumentOutOfRangeException("Offset out of range. " + offset);

            var refPoint: number;
            switch (loc) {
                case SeekOrigin.Begin:
                    if (offset < 0)
                        throw new IOException("Attempted to seek before start of MemoryStream.");
                    refPoint = this._initialIndex;
                    break;
                case SeekOrigin.Current:
                    refPoint = this._position;
                    break;
                case SeekOrigin.End:
                    refPoint = length;
                    break;
                default:
                    throw new System.ArgumentException("Invalid SeekOrigin", null, "loc");
            }

         

            refPoint += offset;
            if (refPoint < this._initialIndex)
                throw new IOException("Attempted to seek before start of MemoryStream.");

            this._position = refPoint;
            return this._position;
        }

        calculateNewCapacity(minimum: number): number {
            if (minimum < 256)
                minimum = 256; // See GetBufferTwo test

            if (minimum < this._capacity * 2)
                minimum = this._capacity * 2;

            return minimum;
        }

        expand(newSize: number): void {
            // We don't need to take into account the dirty bytes when incrementing the
            // Capacity, as changing it will only preserve the valid clear region.
            if (newSize > this._capacity)
                this.capacity = this.calculateNewCapacity(newSize);
            else if (this._dirty_bytes > 0) {

                
                Array.clear(this._internalBuffer, length, this._dirty_bytes);
                this._dirty_bytes = 0;
            }
        }

        public setLength(value: number): void {
            if (!this._expandable && value > this._capacity)
                throw new NotSupportedException("Expanding this MemoryStream is not supported");

            this.checkIfClosedThrowDisposed();

            if (!this.canWrite) {
                throw new NotSupportedException("Cannot write to this MemoryStream");
            }

            
            if (value < 0 || (value + this._initialIndex) > System.Int32.MaxValue)
                throw new ArgumentOutOfRangeException();

            var newSize: number = value + this._initialIndex;

            if (newSize > length)
                this.expand(newSize);
            else if (newSize < length) // Postpone the call to Array.Clear till expand time
                this._dirty_bytes += length - newSize;

            length = newSize;
            if (this._position > length)
                this._position = length;
        }

        public ToArray(): Uint8Array {
            var l: number = length - this._initialIndex;
            var outBuffer: Uint8Array = new Uint8Array(l);

            if (this._internalBuffer != null)
                System.Buffer.blockCopy(this._internalBuffer, this._initialIndex, outBuffer, 0, l);
            return outBuffer;
        }

        public write(buffer: Uint8Array, offset: number, count: number): void {
            if (buffer == null)
                throw new ArgumentNullException("buffer");

            if (offset < 0 || count < 0)
                throw new ArgumentOutOfRangeException();

            if (buffer.length - offset < count)
                throw new ArgumentException("The size of the buffer is less than offset + count.", null, "offset+count");

            this.checkIfClosedThrowDisposed();

            if (!this.canWrite)
                throw new NotSupportedException("Cannot write to this stream.");

            // reordered to avoid possible integer overflow
            if (this._position > length - count)
                this.expand(this._position + count);

            System.Buffer.blockCopy(buffer, offset, this._internalBuffer, this._position, count);
            this._position += count;
            if (this._position >= length)
                length = this._position;
        }

        public writeByte(value: number): void {
            this.checkIfClosedThrowDisposed();
            if (!this.canWrite)
                throw new NotSupportedException("Cannot write to this stream.");

            if (this._position >= length) {
                this.expand(this._position + 1);
                length = this._position + 1;
            }

            this._internalBuffer[this._position++] = value;
        }

        public WriteTo(stream: System.IO.Stream): void {
            this.checkIfClosedThrowDisposed();

            if (stream == null)
                throw new ArgumentNullException("stream");

            stream.write(this._internalBuffer, this._initialIndex, length - this._initialIndex);
        }

        //#if NET_4_5

        //		public override Task CopyToAsync(Stream destination, int bufferSize, CancellationToken cancellationToken)
        //		{
        //        // TODO: Specialization but what for?
        //        return base.CopyToAsync(destination, bufferSize, cancellationToken);
        //		}

        //		public override Task FlushAsync(CancellationToken cancellationToken)
        //		{
        //        if (cancellationToken.IsCancellationRequested)
        //            return TaskConstants.Canceled;

        //        try {
        //            Flush();
        //            return TaskConstants.Finished;
        //        } catch (Exception ex) {
        //            return Task<Object>.FromException(ex);
        //        }
        //		}

        //		public override Task < int > ReadAsync(byte[]buffer, int offset, int count, CancellationToken cancellationToken)
        //		{
        //        if (buffer == null)
        //            throw new ArgumentNullException("buffer");

        //        if (offset < 0 || count < 0)
        //            throw new ArgumentOutOfRangeException("offset or count less than zero.");

        //        if (buffer.Length - offset < count)
        //            throw new ArgumentException("offset+count",
        //                "The size of the buffer is less than offset + count.");
        //        if (cancellationToken.IsCancellationRequested)
        //            return TaskConstants<int>.Canceled;

        //        try {
        //            count = Read(buffer, offset, count);

        //            // Try not to allocate a new task for every buffer read
        //            if (read_task == null || read_task.Result != count)
        //                read_task = Task<int>.FromResult(count);

        //            return read_task;
        //        } catch (Exception ex) {
        //            return Task<int>.FromException(ex);
        //        }
        //		}

        //		public override Task WriteAsync(byte[]buffer, int offset, int count, CancellationToken cancellationToken)
        //		{
        //        if (buffer == null)
        //            throw new ArgumentNullException("buffer");

        //        if (offset < 0 || count < 0)
        //            throw new ArgumentOutOfRangeException();

        //        if (buffer.Length - offset < count)
        //            throw new ArgumentException("offset+count",
        //                "The size of the buffer is less than offset + count.");

        //        if (cancellationToken.IsCancellationRequested)
        //            return TaskConstants.Canceled;

        //        try {
        //            Write(buffer, offset, count);
        //            return TaskConstants.Finished;
        //        } catch (Exception ex) {
        //            return Task<Object>.FromException(ex);
        //        }
        //		}
        //#endif
    }
}
