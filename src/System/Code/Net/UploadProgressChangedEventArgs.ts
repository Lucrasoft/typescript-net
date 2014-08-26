/// <reference path="../componentmodel/progresschangedeventargs.ts" />

module System.Net
{
	export class UploadProgressChangedEventArgs extends ProgressChangedEventArgs
    {
        static _type: Type = System.Type.registerClass(UploadProgressChangedEventArgs, "System.Net.UploadProgressChangedEventArgs", []);

        received: number;
        sent: number;
        total_recv: number;
        total_send: number;

		constructor (
			bytesReceived:number, totalBytesToReceive:number,
			bytesSent:number, totalBytesToSend:number,
			progressPercentage:number, userState: Object)
		
        {
            super(progressPercentage, userState)
            this.received = bytesReceived;
            this.total_recv = totalBytesToReceive;
            this.sent = bytesSent;
            this.total_send = totalBytesToSend;
        }



        public get BytesReceived(): number {
			 return this.received; 
		}

        public get TotalBytesToReceive(): number {
			return this.total_recv;
		}

        public get BytesSent(): number {
			return this.sent; 
		}

        public get TotalBytesToSend(): number {
			return this.total_send;
    }
	}
}