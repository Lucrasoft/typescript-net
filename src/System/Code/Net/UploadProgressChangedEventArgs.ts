//todo ref Porgresschanged

module System.Net
{
	export class UploadProgressChangedEventArgs extends ProgressChangedEventArgs
    {
        static _type: Type = System.Type.registerClass(UploadProgressChangedEventArgs, "System.Net.UploadProgressChangedEventArgs", []);

		constructor (
			bytesReceived:number, totalBytesToReceive:number,
			bytesSent:number, totalBytesToSend:number,
			progressPercentage:number, userState: object)
		
        {
            super(progressPercentage, userState)
            this.received = bytesReceived;
            this.total_recv = totalBytesToReceive;
            this.sent = bytesSent;
            this.total_send = totalBytesToSend;
        }

		long received, sent, total_recv, total_send;

		public BytesReceived: number {
			get { return received; }
		}

		public TotalBytesToReceive: number {
			get { return total_recv; }
		}

		public BytesSent: number {
			get { return sent; }
		}

		public TotalBytesToSend: number {
			get { return total_send; }
    }
	}
}