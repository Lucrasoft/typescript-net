/// <reference path="IAuthenticationModule.ts"/>
//todo ref interface

module System.Net
{
	class NtlmClient extends IAuthenticationModule
    {
        static _type: Type = System.Type.registerClass(NtlmClient, "System.Net.NtlmClient", []);

        authObject: IAuthenticationModule;

		public NtlmClient()
		{
            authObject = null;
		}

        public Authenticate(challenge: string, webRequest: WebRequest, credentials: ICredentials): Authorization 
		{
        if (authObject == null)
            return null;

        return authObject.Authenticate(challenge, webRequest, credentials);
		}

		public PreAuthenticate(webRequest: WebRequest, credentials: ICredentials): ICredentials 
		{
            return null;
		}

		public AuthenticationType: string { 
			get { return "NTLM"; }
		}

		public CanPreAuthenticate: boolean { 
			get { return false; }
    }
	}
}