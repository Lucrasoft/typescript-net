/// <reference path="Stream.ts"/>
/// <reference path="../Text/Encoder.ts"/>
/// <reference path="../Text/Decoder.ts"/>
/// <reference path="../Text/Encoding.ts"/>

module System.IO {
     
	export class BinaryReader implements System.IDisposable {


        private m_stream: System.IO.Stream;
        private m_encoding: System.Text.Encoding;

        private m_buffer: Uint8Array;

        private decoder: System.Text.Decoder;
		private charBuffer : Char[];
        private charByteBuffer: Uint8Array;

        //
        // 128 chars should cover most strings in one grab.
        //
        MaxBufferSize: number = 128;


        private m_disposed: boolean;

        private leave_open: boolean;


        constructor(input: Stream, encoding: System.Text.Encoding = System.Text.Encoding.UTF8UnmarkedUnsafe, leaveOpen: boolean = false) {
            if (input == null || encoding == null)
                throw new ArgumentNullException("Input or Encoding is a null reference.");
            if (!input.canRead)
                throw new ArgumentException("The stream doesn't support reading.");

            this.m_stream = input;
            this.m_encoding = encoding;

            this.leave_open = leaveOpen;
            this.decoder = encoding.GetDecoder();

            // internal buffer size is documented to be between 16 and the value
            // returned by GetMaxByteCount for the specified encoding

            this.m_buffer = new Uint8Array(Math.max(16, encoding.getMaxByteCount(1)));
        }

        public get BaseStream(): Stream {
            return this.m_stream;
        }

        public close(): void {
            this.dispose(true);
            this.m_disposed = true;
        }

        public dispose(disposing: boolean = true) {
            if (disposing && this.m_stream != null && !this.leave_open)
                this.m_stream.close();

            this.m_disposed = true;
            this.m_buffer = null;
            this.m_encoding = null;
            this.m_stream = null;
            this.charBuffer = null;
        }


        private fillBuffer(numBytes: number): void {
            if (numBytes > this.m_buffer.length)
                throw new ArgumentOutOfRangeException("numBytes");
            if (this.m_disposed)
                throw new System.ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");
            if (this.m_stream == null)
                throw new IOException("Stream is invalid");

            /* Cope with partial reads */
            var pos: number = 0;

            while (pos < numBytes) {
                var n: number = this.m_stream.read(this.m_buffer, pos, numBytes - pos);
                if (n == 0) {
                    throw new EndOfStreamException();
                }
                pos += n;
            }
        }

        public intPeekChar(): number {
            if (this.m_stream == null) {

                if (this.m_disposed)
                    throw new ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                throw new IOException("Stream is invalid");
            }

            if (!this.m_stream.canSeek) {
                return -1;
            }

            var result: Char[] = new Char[1];


            var bcountParam: OutArgument<number> = new OutArgument(0);


            var ccount: number = this.readCharBytes(result, 0, 1, bcountParam);

            // Reposition the stream
            this.m_stream.position -= bcountParam.value;

            // If we read 0 characters then return -1
            if (ccount == 0) {
                return -1;
            }

            // Return the single character we read
            return result[0].value;
        }

        public read(): number {
            if (this.charBuffer == null)
                this.charBuffer = new Char[this.MaxBufferSize];

            var count: number = this.read_char(this.charBuffer, 0, 1);
            if (count == 0) {
                /* No chars available */
                return -1;
            }

            return this.charBuffer[0].value;
        }

        //TODO : 

        private read_buffer(buffer: Uint8Array, index: number, count: number): number {
            if (this.m_stream == null) {

                if (this.m_disposed)
                    throw new ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                throw new IOException("Stream is invalid");
            }

            if (buffer == null) {
                throw new ArgumentNullException("buffer is null");
            }
            if (index < 0) {
                throw new ArgumentOutOfRangeException("index is less than 0");
            }
            if (count < 0) {
                throw new ArgumentOutOfRangeException("count is less than 0");
            }
            if (buffer.length - index < count) {
                throw new ArgumentException("buffer is too small");
            }

            var bytes_read: number = this.m_stream.read(buffer, index, count);

            return (bytes_read);
        }

        private read_char(buffer: Char[], index: number, count: number): number {

            if (this.m_stream == null) {

                if (this.m_disposed)
                    throw new ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                throw new IOException("Stream is invalid");
            }

            if (buffer == null) {
                throw new ArgumentNullException("buffer is null");
            }
            if (index < 0) {
                throw new ArgumentOutOfRangeException("index is less than 0");
            }
            if (count < 0) {
                throw new ArgumentOutOfRangeException("count is less than 0");
            }
            if (buffer.length - index < count) {
                throw new ArgumentException("buffer is too small");
            }

            var bytes_read: OutArgument<number> = new OutArgument(0);
            return this.readCharBytes(buffer, index, count, bytes_read);
        }

        private readCharBytes(buffer: Char[], index: number, count: number, bytes_read: OutArgument<number>): number {
            var chars_read: number = 0;
            bytes_read.value = 0;

            while (chars_read < count) {
                var pos: number = 0;
                while (true) {
                    this.checkBuffer(pos + 1);

                    var read_byte: number = this.m_stream.readByte();

                    if (read_byte == -1)
                        /* EOF */
                        return chars_read;

                    this.m_buffer[pos++] = read_byte;
                    bytes_read.value++;

                    var n: number = this.m_encoding.getChars(this.m_buffer, 0, pos, buffer, index + chars_read);
                    if (n > 0)
                        break;
                }
                chars_read++;
            }

            return chars_read;
        }

        private Read7BitEncodedInt(): number {

            var ret: number = 0;
            var shift: number = 0;
            var len: number;
            var b: number;

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
                throw new FormatException("Too many bytes in what should have been a 7 bit encoded Int32.");
        }

        public readBoolean(): boolean {
            // Return value:
            //  true if the byte is non-zero; otherwise false.
            return this.readByte() != 0;
        }

        public readByte(): number {
            if (this.m_stream == null) {
                if (this.m_disposed)
                    throw new ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                throw new IOException("Stream is invalid");
            }

            var val: number = this.m_stream.readByte();
            if (val != -1)
                return val;

            throw new EndOfStreamException();
        }

        public readBytes(count: number): Uint8Array {
            if (this.m_stream == null) {

                if (this.m_disposed)
                    throw new ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                throw new IOException("Stream is invalid");
            }

            if (count < 0) {
                throw new ArgumentOutOfRangeException("count is less than 0");
            }

            /* Can't use FillBuffer() here, because it's OK to
             * return fewer bytes than were requested
             */

            var buf: Uint8Array = new Uint8Array(count);
            var pos: number = 0;

            while (pos < count) {
                var n: number = this.m_stream.read(buf, pos, count - pos);
                if (n == 0) {
                    /* EOF */
                    break;
                }

                pos += n;
            }

            if (pos != count) {
                var new_buffer: Uint8Array = new Uint8Array(pos);
                Buffer.blockCopy(buf, 0, new_buffer, 0, pos);

                return (new_buffer);
            }

            return (buf);
        }

        public readChar(): System.Char {
            var ch: number = this.read();

            if (ch == -1) {
                throw new EndOfStreamException();
            }

            return new Char(ch);
        }

        public readChars(count: number): Char[] {
            if (count < 0) {
                throw new ArgumentOutOfRangeException("count is less than 0");
            }

            if (this.m_stream == null) {
                if (this.m_disposed)
                    throw new ObjectDisposedException("Cannot read from a closed BinaryReader.", null, "BinaryReader");

                throw new IOException("Stream is invalid");
            }

            if (count == 0)
                return [];

            var full: Char[] = new Char[count];
            var bytes_read: System.OutArgument<number> = new System.OutArgument<number>(0);

            var chars: number = this.readCharBytes(full, 0, count, bytes_read);

            if (chars == 0)
                throw new EndOfStreamException();

            if (chars != count) {
                var new_buffer = new Char[chars];
                
                Buffer.blockCopyArray<Char>(full, 0, new_buffer, 0, 2 * chars);
                return new_buffer;
            }

            return full;
        }

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

        public ReadDouble(): number {
            this.fillBuffer(8);

            return (BitConverter.toDouble(this.m_buffer, 0));
        }

        public ReadInt16(): number {
            this.fillBuffer(2);

            return ((this.m_buffer[0] | (this.m_buffer[1] << 8)));
        }

        public ReadInt32(): number {
            this.fillBuffer(4);

            return (this.m_buffer[0] | (this.m_buffer[1] << 8) |
                (this.m_buffer[2] << 16) | (this.m_buffer[3] << 24));
        }

        public ReadInt64(): number {
            this.fillBuffer(8);

			var ret_low :number = (this.m_buffer[0] | (this.m_buffer[1] << 8) | (this.m_buffer[2] << 16) | (this.m_buffer[3] << 24) );
            var ret_high: number = (this.m_buffer[4] | (this.m_buffer[5] << 8) |(this.m_buffer[6] << 16) | (this.m_buffer[7] << 24) );


            return ((ret_high << 32) | ret_low);
        }

    
		public  ReadSByte() : number {
			return this.readByte();
        }

        public ReadString(): string {
            /* Inspection of BinaryWriter-written files
             * shows that the length is given in bytes,
             * not chars
             */
            var len: number = this.Read7BitEncodedInt();

            if (len < 0)
                throw new IOException("Invalid binary file (string len < 0)");

            if (len == 0)
                return String.empty;

            if (this.charByteBuffer == null) {
                var b = this.m_encoding.getMaxByteCount(this.MaxBufferSize);
                var a = new Char[2];

                this.charBuffer = new Char[this.m_encoding.getMaxByteCount(this.MaxBufferSize)];
                this.charByteBuffer = new Uint8Array(this.MaxBufferSize);
            }

            //
            // We read the string here in small chunks. Also, we
            // Attempt to optimize the common case of short strings.
            //
            var sb: System.Text.StringBuilder = null;
            do {
                var readLen: number = Math.min(this.MaxBufferSize, len);

                readLen = this.m_stream.read(this.charByteBuffer, 0, readLen);
                if (readLen == 0)
                    throw new EndOfStreamException();

                var cch: number = this.decoder.getChars(this.charByteBuffer, 0, readLen, this.charBuffer, 0);

                if (sb == null && readLen == len) // ok, we got out the easy way, dont bother with the sb
                    return String.fromCharArray(this.charBuffer, 0, cch);

                if (sb == null)
                    // Len is a fairly good estimate of the number of chars in a string
                    // Most of the time 1 byte == 1 char
                    sb = new System.Text.StringBuilder();

                sb.append(String.fromCharArray(this.charBuffer, 0, cch));
                len -= readLen;
            } while (len > 0);

            return sb.toString();
        }

        public ReadSingle(): number {
            this.fillBuffer(4);

            return (BitConverter.toSingle(this.m_buffer, 0));
        }

	
		public ReadUInt16() : number {
            this.fillBuffer(2);

        return ((this.m_buffer[0] | (this.m_buffer[1] << 8)));
    }

	
		public ReadUInt32() : number {
            this.fillBuffer(4);


            return ((this.m_buffer[0] |
            (this.m_buffer[1] << 8) |
            (this.m_buffer[2] << 16) |
            (this.m_buffer[3] << 24)));
    }


        public ReadUInt64(): number {
            this.fillBuffer(8);

            var ret_low: number = (this.m_buffer[0] |
                (this.m_buffer[1] << 8) |
                (this.m_buffer[2] << 16) |
                (this.m_buffer[3] << 24)
                );
            var ret_high: number = (this.m_buffer[4] |
                (this.m_buffer[5] << 8) |
                (this.m_buffer[6] << 16) |
                (this.m_buffer[7] << 24)
                );
            return ((ret_high) << 32) | ret_low;
        }

		/* Ensures that m_buffer is at least length bytes
		 * long, growing it if necessary
		 */
		private checkBuffer(length : number)
		{
        if (this.m_buffer.length <= length) {
            var new_buffer: Uint8Array = new Uint8Array(length);
            Buffer.blockCopy(this.m_buffer, 0, new_buffer, 0, this.m_buffer.length);
            this.m_buffer = new_buffer;
        }
    }
	}
}
 