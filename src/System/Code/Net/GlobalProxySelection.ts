/// <reference path="iwebproxy.ts" />


module System.Net 
{
    
	export class GlobalProxySelection
	{

        static _type: Type = System.Type.registerClass(GlobalProxySelection, "System.Net.GlobalProxySelection", []);

        public GlobalProxySelection() { }

        public static get Select(): IWebProxy {
			return WebRequest.DefaultWebProxy;
        }

        public static set Select(value: IWebProxy) {
            WebRequest.DefaultWebProxy = value;
        } 


        public static GetEmptyWebProxy(): IWebProxy
		{
            return new EmptyWebProxy();
        }

		
		

    }

    //ask this was in the previous class as internal class

    class EmptyWebProxy implements IWebProxy {
        private credentials; ICredentials = null;

        EmptyWebProxy() { }

        public get Credentials(): ICredentials {
            return credentials;

        }

        public set Credentials(valeu: ICredentials) {
            this.credentials = value;
        }

        public GetProxy(destination: Uri): Uri {
            return destination;
        }

        public IsBypassed(host: Uri): boolean {
            return true;
        }
    }
}