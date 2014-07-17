/// <reference path="../Type.ts"/>
/// <reference path="../Array.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    (function (IO) {
        var MemoryStream = (function (_super) {
            __extends(MemoryStream, _super);
            //private _read_task: Task<number>;
            function MemoryStream(capacity) {
                if (typeof capacity === "undefined") { capacity = 0; }
                _super.call(this);
                this._type = System.Type.registerClass(System.IO.MemoryStream, "System.IO.MemoryStream", []);
                if (capacity < 0)
                    throw new System.ArgumentOutOfRangeException("capacity");

                this._canWrite = true;

                this._capacity = capacity;
                this._internalBuffer = new Uint8Array(capacity);

                this._expandable = true;
                this._allowGetBuffer = true;
            }
            MemoryStream.prototype.MemoryStream = function (buffer) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer");

                this.internalConstructor(buffer, 0, buffer.length, true, false);
            };

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
            MemoryStream.prototype.internalConstructor = function (buffer, index, count, writable, publicallyVisible) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer");

                if (index < 0 || count < 0)
                    throw new System.ArgumentOutOfRangeException("index or count is less than 0.");

                if (buffer.length - index < count)
                    throw new System.ArgumentException("The size of the buffer is less than index + count.", null, "index+count");

                this._canWrite = writable;

                this._internalBuffer = buffer;
                this._capacity = count + index;
                this._length = this.capacity;
                this._position = index;
                this._initialIndex = index;

                this._allowGetBuffer = publicallyVisible;
                this._expandable = false;
            };

            MemoryStream.prototype.checkIfClosedThrowDisposed = function () {
                if (this._streamClosed) {
                    throw new System.ObjectDisposedException("MemoryStream");
                }
            };

            Object.defineProperty(MemoryStream.prototype, "canRead", {
                get: function () {
                    return !this._streamClosed;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(MemoryStream.prototype, "canSeek", {
                get: function () {
                    return !this._streamClosed;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(MemoryStream.prototype, "canWrite", {
                get: function () {
                    return (!this._streamClosed && this.canWrite);
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(MemoryStream.prototype, "capacity", {
                get: function () {
                    this.checkIfClosedThrowDisposed();
                    return this.capacity - this._initialIndex;
                },
                set: function (value) {
                    this.checkIfClosedThrowDisposed();

                    if (!this._expandable)
                        throw new System.NotSupportedException("Cannot expand this MemoryStream");

                    if (value < 0 || value < length)
                        throw new System.ArgumentOutOfRangeException("New capacity cannot be negative or less than the current capacity " + value + " " + this._capacity, null, "value");

                    if (this._internalBuffer != null && value == this._internalBuffer.length)
                        return;

                    var newBuffer = null;
                    if (value != 0) {
                        newBuffer = new Uint8Array(value);
                        if (this._internalBuffer != null)
                            System.Buffer.blockCopy(this._internalBuffer, 0, newBuffer, 0, length);
                    }

                    this._dirty_bytes = 0; // discard any dirty area beyond previous length
                    this._internalBuffer = newBuffer; // It's null when capacity is set to 0
                    this._capacity = value;
                },
                enumerable: true,
                configurable: true
            });


            Object.defineProperty(MemoryStream.prototype, "length", {
                get: function () {
                    this.checkIfClosedThrowDisposed();

                    // This is ok for MemoryStreamTest.ConstructorFive
                    return this._length - this._initialIndex;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(MemoryStream.prototype, "position", {
                get: function () {
                    this.checkIfClosedThrowDisposed();
                    return this._position - this._initialIndex;
                },
                set: function (value) {
                    this.checkIfClosedThrowDisposed();
                    if (value < 0)
                        throw new System.ArgumentOutOfRangeException("Position cannot be negative", null, "value");

                    if (value > System.Int32.MaxValue)
                        throw new System.ArgumentOutOfRangeException("Position must be non-negative and less than 2^31 - 1 - origin", null, "value");

                    this._position = this._initialIndex + value;
                },
                enumerable: true,
                configurable: true
            });


            MemoryStream.prototype.dispose = function (disposing) {
                if (typeof disposing === "undefined") { disposing = true; }
                this._streamClosed = true;
                this._expandable = false;
            };

            MemoryStream.prototype.flush = function () {
                // Do nothing
            };

            MemoryStream.prototype.getBuffer = function () {
                if (!this._allowGetBuffer)
                    throw new System.UnauthorizedAccessException();

                return this._internalBuffer;
            };

            MemoryStream.prototype.read = function (buffer, offset, count) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer");

                if (offset < 0 || count < 0)
                    throw new System.ArgumentOutOfRangeException("offset or count less than zero.");

                if (buffer.length - offset < count)
                    throw new System.ArgumentException("The size of the buffer is less than offset + count.", null, "offset+count");

                this.checkIfClosedThrowDisposed();

                if (this._position >= length || count == 0)
                    return 0;

                if (this._position > length - count)
                    count = length - this._position;

                System.Buffer.blockCopy(this._internalBuffer, this._position, buffer, offset, count);
                this._position += count;
                return count;
            };

            MemoryStream.prototype.readByte = function () {
                this.checkIfClosedThrowDisposed();
                if (this._position >= length)
                    return -1;

                return this._internalBuffer[this._position++];
            };

            MemoryStream.prototype.seek = function (offset, loc) {
                this.checkIfClosedThrowDisposed();

                // It's funny that they don't throw this exception for < Int32.MinValue
                if (offset > System.Int32.MaxValue)
                    throw new System.ArgumentOutOfRangeException("Offset out of range. " + offset);

                var refPoint;
                switch (loc) {
                    case 0 /* Begin */:
                        if (offset < 0)
                            throw new IO.IOException("Attempted to seek before start of MemoryStream.");
                        refPoint = this._initialIndex;
                        break;
                    case 1 /* Current */:
                        refPoint = this._position;
                        break;
                    case 2 /* End */:
                        refPoint = length;
                        break;
                    default:
                        throw new System.ArgumentException("Invalid SeekOrigin", null, "loc");
                }

                refPoint += offset;
                if (refPoint < this._initialIndex)
                    throw new IO.IOException("Attempted to seek before start of MemoryStream.");

                this._position = refPoint;
                return this._position;
            };

            MemoryStream.prototype.calculateNewCapacity = function (minimum) {
                if (minimum < 256)
                    minimum = 256; // See GetBufferTwo test

                if (minimum < this._capacity * 2)
                    minimum = this._capacity * 2;

                return minimum;
            };

            MemoryStream.prototype.expand = function (newSize) {
                // We don't need to take into account the dirty bytes when incrementing the
                // Capacity, as changing it will only preserve the valid clear region.
                if (newSize > this._capacity)
                    this.capacity = this.calculateNewCapacity(newSize);
                else if (this._dirty_bytes > 0) {
                    System.Array.clear(this._internalBuffer, length, this._dirty_bytes);
                    this._dirty_bytes = 0;
                }
            };

            MemoryStream.prototype.setLength = function (value) {
                if (!this._expandable && value > this._capacity)
                    throw new System.NotSupportedException("Expanding this MemoryStream is not supported");

                this.checkIfClosedThrowDisposed();

                if (!this.canWrite) {
                    throw new System.NotSupportedException("Cannot write to this MemoryStream");
                }

                if (value < 0 || (value + this._initialIndex) > System.Int32.MaxValue)
                    throw new System.ArgumentOutOfRangeException();

                var newSize = value + this._initialIndex;

                if (newSize > length)
                    this.expand(newSize);
                else if (newSize < length)
                    this._dirty_bytes += length - newSize;

                length = newSize;
                if (this._position > length)
                    this._position = length;
            };

            MemoryStream.prototype.ToArray = function () {
                var l = length - this._initialIndex;
                var outBuffer = new Uint8Array(l);

                if (this._internalBuffer != null)
                    System.Buffer.blockCopy(this._internalBuffer, this._initialIndex, outBuffer, 0, l);
                return outBuffer;
            };

            MemoryStream.prototype.write = function (buffer, offset, count) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer");

                if (offset < 0 || count < 0)
                    throw new System.ArgumentOutOfRangeException();

                if (buffer.length - offset < count)
                    throw new System.ArgumentException("The size of the buffer is less than offset + count.", null, "offset+count");

                this.checkIfClosedThrowDisposed();

                if (!this.canWrite)
                    throw new System.NotSupportedException("Cannot write to this stream.");

                // reordered to avoid possible integer overflow
                if (this._position > length - count)
                    this.expand(this._position + count);

                System.Buffer.blockCopy(buffer, offset, this._internalBuffer, this._position, count);
                this._position += count;
                if (this._position >= length)
                    length = this._position;
            };

            MemoryStream.prototype.writeByte = function (value) {
                this.checkIfClosedThrowDisposed();
                if (!this.canWrite)
                    throw new System.NotSupportedException("Cannot write to this stream.");

                if (this._position >= length) {
                    this.expand(this._position + 1);
                    length = this._position + 1;
                }

                this._internalBuffer[this._position++] = value;
            };

            MemoryStream.prototype.WriteTo = function (stream) {
                this.checkIfClosedThrowDisposed();

                if (stream == null)
                    throw new System.ArgumentNullException("stream");

                stream.write(this._internalBuffer, this._initialIndex, length - this._initialIndex);
            };
            return MemoryStream;
        })(System.IO.Stream);
        IO.MemoryStream = MemoryStream;
    })(System.IO || (System.IO = {}));
    var IO = System.IO;
})(System || (System = {}));
//# sourceMappingURL=MemoryStream.js.map
