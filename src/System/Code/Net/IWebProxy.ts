

module System.Net {

    export interface IWebProxy {

            
        Credentials: ICredentials;

        GetProxy(destination: Uri): Uri;
		
		 IsBypassed(host: Uri): boolean;
	}

    System.Type.registerInterface("System.Net.IWebProxy");
}