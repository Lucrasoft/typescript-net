module System.Net
{
	class FtpStatus
    {
        static _type: Type = System.Type.registerClass(FtpStatus, "System.Net.FtpStatus", []);
        statusCode: FtpStatusCode;
        statusDescription: string;

        public FtpStatus(statusCode: FtpStatusCode, statusDescription: string) {
        this.statusCode = statusCode;
        this.statusDescription = statusDescription;
    }

		
        
        public get StatusCode(): FtpStatusCode {
			 return this.statusCode; 
		}

		public get StatusDescription(): string {
			 return this.statusDescription;
		}
	}
}