/// <reference path="ProgressChangedEventArgs.ts"/>

module System.Net
{
	export class DownloadProgressChangedEventArgs extends ProgressChangedEventArgs
	{
        

		constructor (bytesReceived: number, totalBytesToReceive: number,  userState: object)
		{
            super(totalBytesToReceive != -1 ? ((int)(bytesReceived * 100 / totalBytesToReceive)) : 0, userState)
            this.received = bytesReceived;
            this.total = totalBytesToReceive;
        }

        received: number;
        total: number;

		public BytesReceived: number {
			get { return received; }
		}

		public TotalBytesToReceive: number {
			get { return total; }
    }
	}
}