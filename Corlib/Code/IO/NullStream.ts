/// <reference path="../Type.ts" /> 
/// <reference path="Stream.ts" /> 


module System.IO {

    export class NullStream extends System.IO.Stream {

        public get canRead(): boolean {
            return true;
        }

        public get canSeek(): boolean {

            return true;
        }

        get CanWrite(): boolean {

            return true;

        }

        get Length(): number {
            return 0;
        }

        get Position(): number {

            return 0;

        }
        set Position(value: number) {

        }

        public Flush(): void {
        }

        public Read(buffer: Uint8Array, offset: number, count: number): number {
            return 0;
        }

        public ReadByte(): number {
            return -1;
        }

        public Seek(offset: number, origin: SeekOrigin): void {
            return;
        }

        public SetLength(value: number): void {
        }

        public Write(buffer: Uint8Array, offset: number, count: number): void {
        }

        public WriteByte(value: Byte): void {
        }
    }
}