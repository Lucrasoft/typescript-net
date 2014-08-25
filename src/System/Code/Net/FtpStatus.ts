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

		public StatusCode: FtpStatusCode {
			get { return statusCode; }
		}

		public StatusDescription: string {
			get { return statusDescription; }
		}
	}
}