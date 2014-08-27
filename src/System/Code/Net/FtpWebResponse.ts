module System.Net
{
	export class FtpWebResponse extends WebResponse
    {
        static _type: Type = System.Type.registerClass(FtpWebResponse, "System.Net.FtpWebResponse", []);
       
        stream: Stream;
        uri: Uri;
        statusCode: FtpStatusCode ;
        lastModified: DateTime  = DateTime.MinValue;
        bannerMessage: string = String.Empty;
        welcomeMessage: string  = String.Empty;
        exitMessage: string  = String.Empty;
        statusDescription: string ;
        method: string;
		//bool keepAlive;
		disposed: boolean;
        request: FtpWebRequest ;
	    contentLength: number = -1;
		
        FtpWebResponse(request: FtpWebRequest, uri: Uri, method: string ,keepAlive: boolean)
		{
            this.request = request;
            this.uri = uri;
            this.method = method;
            //this.keepAlive = keepAlive;
        }

        FtpWebResponse(request: FtpWebRequest, uri: Uri, method: string, statusCode: FtpStatusCode, statusDescription: string )
		{
            this.request = request;
            this.uri = uri;
            this.method = method;
            this.statusCode = statusCode;
            this.statusDescription = statusDescription;
        }

		FtpWebResponse(request: FtpWebRequest, uri: Uri, method: string, status: FtpStatus)
        {
            super(request, uri, method, status.StatusCode, status.StatusDescription)
		}

        get ContentLength(): number {	  
            return this.contentLength;     
		}

        get Headers(): WebHeaderCollection  {		 
            return new WebHeaderCollection();
		}

        get ResponseUri(): Uri  {
            return this.uri;
		}

        get LastModified(): DateTime {		 
            return this.lastModified;
        }

        set LastModified(value: DateTime){
                this.lastModified = value;
		}

		get BannerMessage(): string {
            return this.bannerMessage;
			
        }
        set BannerMessage(value: string ){
            this.bannerMessage = value;
		}

		get WelcomeMessage(): string {
            return this.welcomeMessage;
    }

        set WelcomeMessage(value: string){
            this.welcomeMessage = value;
        }
		

		get ExitMessage(): string {
            return this.exitMessage;
        }
        set ExitMessage(value: string) {
            this.exitMessage = value;
		}

        get StatusCode(): FtpStatusCode {
            return this.statusCode;
            
        }
        set StatusCode(value: FtpStatusCode){
            this.statusCode = value;
		}

        get StatusDescription(): string {
            return this.statusDescription;
        }
        set StatusDescription(value: string){
            this.statusDescription = value;
		}

        public Close(): void 
		{
        if (disposed)
            return;

        disposed = true;
        if (stream != null) {
            stream.Close();
            if (stream == Stream.Null)
                request.OperationCompleted();
        }
        stream = null;
		}

        public GetResponseStream(): Stream 
		{
        if (stream == null)
            return Stream.Null; // After a STOR we get this

        if (method != WebRequestMethods.Ftp.DownloadFile &&
            method != WebRequestMethods.Ftp.ListDirectory)
            CheckDisposed();

        return stream;
    }
        get Stream(): Stream {
            return this.stream
        }
        set Stream(value: Stream) {

            this.stream = value;
        }

        UpdateStatus(status: FtpStatus): void {
        statusCode = status.StatusCode;
        statusDescription = status.StatusDescription;
    }

        CheckDisposed(): void
		{
        if (disposed)
            throw new ObjectDisposedException(GetType().FullName);
        }

		IsFinal(): boolean {
            return this.statusCode >= 200; //todo was: ((int) statusCode >= 200);
        }
	}
}