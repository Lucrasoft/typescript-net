/// <reference path="Stream.ts"/>
/// <reference path="../Text/Encoder.ts"/>
/// <reference path="../Text/Decoder.ts"/>
/// <reference path="../Text/Encoding.ts"/>
var System;
(function (System) {
    (function (IO) {
        var BinaryReader = (function () {
            function BinaryReader(input, encoding, leaveOpen) {
                if (typeof encoding === "undefined") { encoding = System.Text.Encoding.UTF8UnmarkedUnsafe; }
                if (typeof leaveOpen === "undefined") { leaveOpen = false; }
                //
                // 128 chars should cover most strings in one grab.
                //
                this.MaxBufferSize = 128;
                if (input == null || encoding == null)
                    throw new System.ArgumentNullException("Input or Encoding is a null reference.");
                if (!input.canRead)
                    throw new System.ArgumentException("The stream doesn't support reading.");

                this.m_stream = input;
                this.m_encoding = encoding;

                this.leave_open = leaveOpen;
                this.decoder = encoding.GetDecoder();

                // internal buffer size is documented to be between 16 and the value
                // returned by GetMaxByteCount for the specified encoding
                this.m_buffer = new Uint8Array(Math.max(16, encoding.getMaxByteCount(1)));
            }
            Object.defineProperty(BinaryReader.prototype, "BaseStream", {
                get: function () {
                    return this.m_stream;
                },
                enumerable: true,
                configurable: true
            });

            BinaryReader.prototype.close = function () {
                this.dispose(true);
                this.m_disposed = true;
            };

            BinaryReader.prototype.dispose = function (disposing) {
                if (typeof disposing === "undefined") { disposing = true; }
                if (disposing && this.m_stream != null && !this.leave_open)
                    this.m_stream.close();

                this.m_disposed = true;
                this.m_buffer = null;
                this.m_encoding = null;
                this.m_stream = null;
                this.charBuffer = null;
            };

            BinaryReader.prototype.fillBuffer = function (numBytes) {
                if (numBytes > this.m_buffer.length)
                    throw new System.ArgumentOutOfRangeException("numBytes");
                if (this.m_disposed)
                    throw new System.ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");
                if (this.m_stream == null)
                    throw new IO.IOException("Stream is invalid");

                /* Cope with partial reads */
                var pos = 0;

                while (pos < numBytes) {
                    var n = this.m_stream.read(this.m_buffer, pos, numBytes - pos);
                    if (n == 0) {
                        throw new IO.EndOfStreamException();
                    }
                    pos += n;
                }
            };

            BinaryReader.prototype.intPeekChar = function () {
                if (this.m_stream == null) {
                    if (this.m_disposed)
                        throw new System.ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                    throw new IO.IOException("Stream is invalid");
                }

                if (!this.m_stream.canSeek) {
                    return -1;
                }

                var result = new System.Char[1];

                var bcountParam = new System.OutArgument(0);

                var ccount = this.readCharBytes(result, 0, 1, bcountParam);

                // Reposition the stream
                this.m_stream.position -= bcountParam.value;

                // If we read 0 characters then return -1
                if (ccount == 0) {
                    return -1;
                }

                // Return the single character we read
                return result[0].value;
            };

            BinaryReader.prototype.read = function () {
                if (this.charBuffer == null)
                    this.charBuffer = new System.Char[this.MaxBufferSize];

                var count = this.read_char(this.charBuffer, 0, 1);
                if (count == 0) {
                    /* No chars available */
                    return -1;
                }

                return this.charBuffer[0].value;
            };

            //TODO :
            BinaryReader.prototype.read_buffer = function (buffer, index, count) {
                if (this.m_stream == null) {
                    if (this.m_disposed)
                        throw new System.ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                    throw new IO.IOException("Stream is invalid");
                }

                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer is null");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index is less than 0");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count is less than 0");
                }
                if (buffer.length - index < count) {
                    throw new System.ArgumentException("buffer is too small");
                }

                var bytes_read = this.m_stream.read(buffer, index, count);

                return (bytes_read);
            };

            BinaryReader.prototype.read_char = function (buffer, index, count) {
                if (this.m_stream == null) {
                    if (this.m_disposed)
                        throw new System.ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                    throw new IO.IOException("Stream is invalid");
                }

                if (buffer == null) {
                    throw new System.ArgumentNullException("buffer is null");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException("index is less than 0");
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count is less than 0");
                }
                if (buffer.length - index < count) {
                    throw new System.ArgumentException("buffer is too small");
                }

                var bytes_read = new System.OutArgument(0);
                return this.readCharBytes(buffer, index, count, bytes_read);
            };

            BinaryReader.prototype.readCharBytes = function (buffer, index, count, bytes_read) {
                var chars_read = 0;
                bytes_read.value = 0;

                while (chars_read < count) {
                    var pos = 0;
                    while (true) {
                        this.checkBuffer(pos + 1);

                        var read_byte = this.m_stream.readByte();

                        if (read_byte == -1)
                            /* EOF */
                            return chars_read;

                        this.m_buffer[pos++] = read_byte;
                        bytes_read.value++;

                        var n = this.m_encoding.getChars(this.m_buffer, 0, pos, buffer, index + chars_read);
                        if (n > 0)
                            break;
                    }
                    chars_read++;
                }

                return chars_read;
            };

            BinaryReader.prototype.Read7BitEncodedInt = function () {
                var ret = 0;
                var shift = 0;
                var len;
                var b;

                for (len = 0; len < 5; ++len) {
                    b = this.readByte();

                    ret = ret | ((b & 0x7f) << shift);
                    shift += 7;
                    if ((b & 0x80) == 0)
                        break;
                }

                if (len < 5)
                    return ret;
                else
                    throw new System.FormatException("Too many bytes in what should have been a 7 bit encoded Int32.");
            };

            BinaryReader.prototype.readBoolean = function () {
                // Return value:
                //  true if the byte is non-zero; otherwise false.
                return this.readByte() != 0;
            };

            BinaryReader.prototype.readByte = function () {
                if (this.m_stream == null) {
                    if (this.m_disposed)
                        throw new System.ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                    throw new IO.IOException("Stream is invalid");
                }

                var val = this.m_stream.readByte();
                if (val != -1)
                    return val;

                throw new IO.EndOfStreamException();
            };

            BinaryReader.prototype.readBytes = function (count) {
                if (this.m_stream == null) {
                    if (this.m_disposed)
                        throw new System.ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                    throw new IO.IOException("Stream is invalid");
                }

                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count is less than 0");
                }

                /* Can't use FillBuffer() here, because it's OK to
                * return fewer bytes than were requested
                */
                var buf = new Uint8Array(count);
                var pos = 0;

                while (pos < count) {
                    var n = this.m_stream.read(buf, pos, count - pos);
                    if (n == 0) {
                        break;
                    }

                    pos += n;
                }

                if (pos != count) {
                    var new_buffer = new Uint8Array(pos);
                    System.Buffer.blockCopy(buf, 0, new_buffer, 0, pos);

                    return (new_buffer);
                }

                return (buf);
            };

            BinaryReader.prototype.readChar = function () {
                var ch = this.read();

                if (ch == -1) {
                    throw new IO.EndOfStreamException();
                }

                return new System.Char(ch);
            };

            BinaryReader.prototype.readChars = function (count) {
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException("count is less than 0");
                }

                if (this.m_stream == null) {
                    if (this.m_disposed)
                        throw new System.ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                    throw new IO.IOException("Stream is invalid");
                }

                if (count == 0)
                    return [];

                var full = new System.Char[count];
                var bytes_read = new System.OutArgument(0);

                var chars = this.readCharBytes(full, 0, count, bytes_read);

                if (chars == 0)
                    throw new IO.EndOfStreamException();

                if (chars != count) {
                    var new_buffer = new System.Char[chars];

                    System.Buffer.blockCopyArray(full, 0, new_buffer, 0, 2 * chars);
                    return new_buffer;
                }

                return full;
            };

            //public ReadDecimal() : decimal {
            //    FillBuffer(16);
            //	decimal ret;
            //    byte * ret_ptr = (byte *) & ret;
            //    /*
            //     * internal representation of decimal is
            //     * ss32, hi32, lo32, mi32,
            //     * but in stream it is
            //     * lo32, mi32, hi32, ss32
            //     * So we have to rerange this int32 values
            //     */
            //    if (BitConverter.IsLittleEndian) {
            //		for (var i: number  = 0; i < 16; i++) {
            //            if (i < 4) {
            //                // lo 8 - 12
            //                ret_ptr[i + 8] = this.m_buffer[i];
            //            } else if (i < 8) {
            //                // mid 12 - 16
            //                ret_ptr[i + 8] = this.m_buffer[i];
            //            } else if (i < 12) {
            //                // hi 4 - 8
            //                ret_ptr[i - 4] = this.m_buffer[i];
            //            } else if (i < 16) {
            //                // ss 0 - 4
            //                ret_ptr[i - 12] = this.m_buffer[i];
            //            }
            //        }
            //    } else {
            //		for (var i : number = 0; i < 16; i++) {
            //            if (i < 4) {
            //                // lo 8 - 12
            //                ret_ptr[11 - i] = this.m_buffer[i];
            //            } else if (i < 8) {
            //                // mid 12 - 16
            //                ret_ptr[19 - i] = this.m_buffer[i];
            //            } else if (i < 12) {
            //                // hi 4 - 8
            //                ret_ptr[15 - i] = this.m_buffer[i];
            //            } else if (i < 16) {
            //                // ss 0 - 4
            //                ret_ptr[15 - i] = this.m_buffer[i];
            //            }
            //        }
            //    }
            //    return ret;
            //}
            BinaryReader.prototype.ReadDouble = function () {
                this.fillBuffer(8);

                return (System.BitConverter.toDouble(this.m_buffer, 0));
            };

            BinaryReader.prototype.ReadInt16 = function () {
                this.fillBuffer(2);

                return ((this.m_buffer[0] | (this.m_buffer[1] << 8)));
            };

            BinaryReader.prototype.ReadInt32 = function () {
                this.fillBuffer(4);

                return (this.m_buffer[0] | (this.m_buffer[1] << 8) | (this.m_buffer[2] << 16) | (this.m_buffer[3] << 24));
            };

            BinaryReader.prototype.ReadInt64 = function () {
                this.fillBuffer(8);

                var ret_low = (this.m_buffer[0] | (this.m_buffer[1] << 8) | (this.m_buffer[2] << 16) | (this.m_buffer[3] << 24));
                var ret_high = (this.m_buffer[4] | (this.m_buffer[5] << 8) | (this.m_buffer[6] << 16) | (this.m_buffer[7] << 24));

                return ((ret_high << 32) | ret_low);
            };

            BinaryReader.prototype.ReadSByte = function () {
                return this.readByte();
            };

            BinaryReader.prototype.ReadString = function () {
                /* Inspection of BinaryWriter-written files
                * shows that the length is given in bytes,
                * not chars
                */
                var len = this.Read7BitEncodedInt();

                if (len < 0)
                    throw new IO.IOException("Invalid binary file (string len < 0)");

                if (len == 0)
                    return System.String.empty;

                if (this.charByteBuffer == null) {
                    var b = this.m_encoding.getMaxByteCount(this.MaxBufferSize);
                    var a = new System.Char[2];

                    this.charBuffer = new System.Char[this.m_encoding.getMaxByteCount(this.MaxBufferSize)];
                    this.charByteBuffer = new Uint8Array(this.MaxBufferSize);
                }

                //
                // We read the string here in small chunks. Also, we
                // Attempt to optimize the common case of short strings.
                //
                var sb = null;
                do {
                    var readLen = Math.min(this.MaxBufferSize, len);

                    readLen = this.m_stream.read(this.charByteBuffer, 0, readLen);
                    if (readLen == 0)
                        throw new IO.EndOfStreamException();

                    var cch = this.decoder.getChars(this.charByteBuffer, 0, readLen, this.charBuffer, 0);

                    if (sb == null && readLen == len)
                        return System.String.fromCharArray(this.charBuffer, 0, cch);

                    if (sb == null)
                        // Len is a fairly good estimate of the number of chars in a string
                        // Most of the time 1 byte == 1 char
                        sb = new System.Text.StringBuilder();

                    sb.append(System.String.fromCharArray(this.charBuffer, 0, cch));
                    len -= readLen;
                } while(len > 0);

                return sb.toString();
            };

            BinaryReader.prototype.ReadSingle = function () {
                this.fillBuffer(4);

                return (System.BitConverter.toSingle(this.m_buffer, 0));
            };

            BinaryReader.prototype.ReadUInt16 = function () {
                this.fillBuffer(2);

                return ((this.m_buffer[0] | (this.m_buffer[1] << 8)));
            };

            BinaryReader.prototype.ReadUInt32 = function () {
                this.fillBuffer(4);

                return ((this.m_buffer[0] | (this.m_buffer[1] << 8) | (this.m_buffer[2] << 16) | (this.m_buffer[3] << 24)));
            };

            BinaryReader.prototype.ReadUInt64 = function () {
                this.fillBuffer(8);

                var ret_low = (this.m_buffer[0] | (this.m_buffer[1] << 8) | (this.m_buffer[2] << 16) | (this.m_buffer[3] << 24));
                var ret_high = (this.m_buffer[4] | (this.m_buffer[5] << 8) | (this.m_buffer[6] << 16) | (this.m_buffer[7] << 24));
                return ((ret_high) << 32) | ret_low;
            };

            /* Ensures that m_buffer is at least length bytes
            * long, growing it if necessary
            */
            BinaryReader.prototype.checkBuffer = function (length) {
                if (this.m_buffer.length <= length) {
                    var new_buffer = new Uint8Array(length);
                    System.Buffer.blockCopy(this.m_buffer, 0, new_buffer, 0, this.m_buffer.length);
                    this.m_buffer = new_buffer;
                }
            };
            return BinaryReader;
        })();
        IO.BinaryReader = BinaryReader;
    })(System.IO || (System.IO = {}));
    var IO = System.IO;
})(System || (System = {}));
//# sourceMappingURL=BinaryReader.js.map
