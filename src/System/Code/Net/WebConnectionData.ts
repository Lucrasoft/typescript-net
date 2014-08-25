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
            _readState = ReadState.None;
		}

        constructor(request: HttpWebRequest)
		{
            this._request = request;
		}

		public HttpWebRequest request {
			get {
                    return _request;
                }
			set {
                    _request = value;
                }
        }

		public ReadState: ReadState {
			get {
                    return _readState;
                }
			set {
                lock(this) {
            if ((_readState == ReadState.Aborted) && (value != ReadState.Aborted))
                throw new WebException("Aborted", WebExceptionStatus.RequestCanceled);
            _readState = value;
        }
    }
		}
	}
}