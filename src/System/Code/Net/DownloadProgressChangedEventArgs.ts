/// <reference path="../componentmodel/progresschangedeventargs.ts" />


module System.Net
{
	export class DownloadProgressChangedEventArgs extends ProgressChangedEventArgs
	{
        

		constructor (bytesReceived: number, totalBytesToReceive: number,  userState: Object)
        {
            //todo fix calculation
            super(totalBytesToReceive != -1 ? (bytesReceived * 100 / totalBytesToReceive) : 0, userState)
            this.received = bytesReceived;
            this.total = totalBytesToReceive;
            
        }

        received: number;
        total: number;

        public get BytesReceived(): number {
            return this.received;
        }


        public get TotalBytesToReceive(): number {
            return this.total;
        }
	}
}