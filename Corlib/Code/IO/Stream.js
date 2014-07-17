/// <reference path="../Type.ts" />
/// <reference path="../Interfaces/IDisposable.ts" />
/// <reference path="../Func.ts" />
/// <reference path="../Action.ts" />
/// <reference path="../Statements.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    /// <reference path="../Exceptions/InvalidOperationException.ts" />
    (function (IO) {
        var Stream = (function () {
            //async_read: System.Func3<Uint8Array, number, number, number>;
            //async_write: System.Action3<Uint8Array, number, number>;
            //async_event: AutoResetEvent ;
            function Stream() {
            }
            Object.defineProperty(Stream.prototype, "canRead", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Stream.prototype, "canSeek", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Stream.prototype, "canWrite", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Stream.prototype, "canTimeout", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Stream.prototype, "length", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Stream.prototype, "position", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });

            Stream.prototype.dispose = function () {
                //
                //if (this.async_event != null && disposing) {
                //    this.async_event.Close ();
                //    this.async_event = null;
                //}
            };

            Stream.prototype.close = function () {
                this.dispose();
                //GC.SuppressFinalize (this);
            };

            Object.defineProperty(Stream.prototype, "readTimeout", {
                get: function () {
                    //throw new System.InvalidOperationException("Timeouts are not supported on this stream.");
                    return null;
                },
                set: function (value) {
                    //throw new System.InvalidOperationException ("Timeouts are not supported on this stream.");
                },
                enumerable: true,
                configurable: true
            });


            Object.defineProperty(Stream.prototype, "writeTimeout", {
                get: function () {
                    //throw new System.InvalidOperationException("Timeouts are not supported on this stream.");
                    return null;
                },
                set: function (value) {
                    //throw new InvalidOperationException ("Timeouts are not supported on this stream.");
                },
                enumerable: true,
                configurable: true
            });


            Stream.synchronized = function (stream) {
                return new System.IO.SynchronizedStream(stream);
            };

            Stream.prototype.flush = function () {
            };

            Stream.prototype.read = function (buffer, offset, count) {
                //exceptie ? eigenlijk een abstract method ?
                return null;
            };

            Stream.prototype.readByte = function () {
                var buffer = new Uint8Array(1);

                if (this.read(buffer, 0, 1) > 0)
                    return buffer[0];

                return -1;
            };

            Stream.prototype.seek = function (offset, origin) {
            };

            Stream.prototype.setLength = function (value) {
            };

            Stream.prototype.write = function (buffer, offset, count) {
            };

            Stream.prototype.writeByte = function (value) {
                var buffer = new Uint8Array(1);

                buffer[0] = value;

                this.write(buffer, 0, 1);
            };

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
            Stream.prototype.copyTo = function (destination, bufferSize) {
                if (typeof bufferSize === "undefined") { bufferSize = 16 * 1024; }
                if (destination == null)
                    throw new System.ArgumentNullException("destination");
                if (!this.canRead)
                    throw new System.NotSupportedException("This stream does not support reading");
                if (!destination.canWrite)
                    throw new System.NotSupportedException("This destination stream does not support writing");
                if (bufferSize <= 0)
                    throw new System.ArgumentOutOfRangeException("bufferSize");

                var buffer = new Uint8Array(bufferSize);
                var nread;
                while ((nread = this.read(buffer, 0, bufferSize)) != 0)
                    destination.write(buffer, 0, nread);
            };
            Stream.null = new IO.NullStream();
            return Stream;
        })();
        IO.Stream = Stream;

        var SynchronizedStream = (function (_super) {
            __extends(SynchronizedStream, _super);
            function SynchronizedStream(source) {
                _super.call(this);
                this.source = source;
                this.slock = {};
            }
            Object.defineProperty(SynchronizedStream.prototype, "canRead", {
                get: function () {
                    var _this = this;
                    return System.Statements.lock(this.slock, function () {
                        return _this.source.canRead;
                    });
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SynchronizedStream.prototype, "canSeek", {
                get: function () {
                    var _this = this;
                    return System.Statements.lock(this.slock, function () {
                        return _this.source.canSeek;
                    });
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SynchronizedStream.prototype, "canWrite", {
                get: function () {
                    var _this = this;
                    return System.Statements.lock(this.slock, function () {
                        return _this.source.canWrite;
                    });
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SynchronizedStream.prototype, "length", {
                get: function () {
                    var _this = this;
                    return System.Statements.lock(this.slock, function () {
                        return _this.source.length;
                    });
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(SynchronizedStream.prototype, "position", {
                get: function () {
                    var _this = this;
                    return System.Statements.lock(this.slock, function () {
                        return _this.source.position;
                    });
                },
                set: function (value) {
                    var _this = this;
                    System.Statements.lock(this.slock, function () {
                        _this.source.position = value;
                    });
                },
                enumerable: true,
                configurable: true
            });


            SynchronizedStream.prototype.flush = function () {
                var _this = this;
                System.Statements.lock(this.slock, function () {
                    _this.source.flush();
                });
            };

            SynchronizedStream.prototype.read = function (buffer, offset, count) {
                var _this = this;
                return System.Statements.lock(this.slock, function () {
                    return _this.source.read(buffer, offset, count);
                });
            };

            SynchronizedStream.prototype.readByte = function () {
                var _this = this;
                return System.Statements.lock(this.slock, function () {
                    return _this.source.readByte();
                });
            };

            SynchronizedStream.prototype.seek = function (offset, origin) {
                var _this = this;
                return System.Statements.lock(this.slock, function () {
                    return _this.source.seek(offset, origin);
                });
            };

            SynchronizedStream.prototype.setLength = function (value) {
                var _this = this;
                return System.Statements.lock(this.slock, function () {
                    _this.source.setLength(value);
                });
            };

            SynchronizedStream.prototype.write = function (buffer, offset, count) {
                var _this = this;
                System.Statements.lock(this.slock, function () {
                    _this.source.write(buffer, offset, count);
                });
            };

            SynchronizedStream.prototype.writeByte = function (value) {
                var _this = this;
                System.Statements.lock(this.slock, function () {
                    _this.source.writeByte(value);
                });
            };
            return SynchronizedStream;
        })(System.IO.Stream);
        IO.SynchronizedStream = SynchronizedStream;
    })(System.IO || (System.IO = {}));
    var IO = System.IO;
})(System || (System = {}));
//# sourceMappingURL=Stream.js.map
