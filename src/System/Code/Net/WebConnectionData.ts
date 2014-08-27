/// <reference path="httpwebrequest.ts" />
//todo

module System.Net
{
	class WebConnectionData
	{
        static _type: Type = System.Type.registerClass(WebConnectionData, "System.Net.WebConnectionData", []);

        _request: HttpWebRequest;
		public StatusCode: number;
        public StatusDescription: string;
        public Headers: WebHeaderCollection;
        public Version: Version;
        public ProxyVersion: Version;
		public stream: Stream;
        public Challenge: string[];
        _readState: ReadState;

		public WebConnectionData()
		{
            this._readState = ReadState.None;
		}

        constructor(request: HttpWebRequest)
		{
            this._request = request;
		}

        public get request(): HttpWebRequest {
            return this._request;
        }
        public set request(value: HttpWebRequest){
            this._request = value;
        }

        public get ReadState(): ReadState {
            return this._readState;
        }
        public set ReadState(value: ReadState){
            if ((this._readState == ReadState.Aborted) && (value != ReadState.Aborted))
                throw new WebException("Aborted", WebExceptionStatus.RequestCanceled);
            this._readState = value;
        
        }
	}
}
