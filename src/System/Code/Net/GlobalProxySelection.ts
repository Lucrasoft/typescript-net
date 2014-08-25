/// <reference path="IWebProxy.ts"/>


module System.Net 
{
    
	export class GlobalProxySelection
	{

        static _type: Type = System.Type.registerClass(GlobalProxySelection, "System.Net.GlobalProxySelection", []);

    // Constructors
    public GlobalProxySelection() { }

		// Properties

		public static IWebProxy Select {
			get { return WebRequest.DefaultWebProxy; }
			set { WebRequest.DefaultWebProxy = value; }
		}

		// Methods

		public static IWebProxy GetEmptyWebProxy() 
		{
    // must return a new one each time, as the credentials
    // can be set
            return new EmptyWebProxy();
        }

		// Internal Classes
		
		class EmptyWebProxy extends IWebProxy {
            private credentials; ICredentials = null;
			
			EmptyWebProxy() { }

			public Credentials: ICredentials {
				get { return credentials; } 
				set { credentials = value; }
			}

			public GetProxy(destination: Uri): Uri
			{
                return destination;
			}

			public IsBypassed(host: Uri): boolean
			{
        return true; // pass directly to host
    }
		}
	}
}