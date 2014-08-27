/// <reference path="iauthenticationmodule.ts" />
module System.Net
{
	class BasicClient extends IAuthenticationModule
    {
        static _type: Type = System.Type.registerClass(BasicClient, "System.Net.BasicClient", ["System.Net.IAuthenticationModule"]);


        public Authenticate(challenge: string, webRequest: WebRequest, credentials: ICredentials): Authorization
		{
        if (credentials == null || challenge == null)
            return null;

			header: string = challenge.Trim();
        if (header.ToLower().IndexOf("basic", StringComparison.Ordinal) == -1)
            return null;

        return InternalAuthenticate(webRequest, credentials);
		}

        static GetBytes(str: string): byte[]
		{
			i: number = str.Length;
            result: byte [] = new byte[i];
        for (--i; i >= 0; i--)
            result[i] = (byte) str[i];

            return result;
		}

        static InternalAuthenticate(webRequest: WebRequest , credentials: ICredentials ): Authorization
		{
            request: HttpWebRequest  = webRequest as HttpWebRequest; //todo no as keyword
        if (request == null || credentials == null)
            return null;

            cred: NetworkCredential  = credentials.GetCredential(request.AuthUri, "basic");
        if (cred == null)
            return null;

			userName: string = cred.UserName;
        if (userName == null || userName == "")
            return null;

			password: string = cred.Password;
			domain: string = cred.Domain;
            bytes: byte [];

        // If domain is set, MS sends "domain\user:password". 
        if (domain == null || domain == "" || domain.Trim() == "")
            bytes = GetBytes(userName + ":" + password);
        else
            bytes = GetBytes(domain + "\\" + userName + ":" + password);

			auth: string = "Basic " + Convert.ToBase64String(bytes);
        return new Authorization(auth);
		}

        public PreAuthenticate(webRequest: WebRequest, credentials:ICredentials ): Authorization 
		{
            return InternalAuthenticate(webRequest, credentials);
		}

		public get AuthenticationType(): string  {
			return "Basic"; 
		}

		public get CanPreAuthenticate(): boolean {
	        return true; 
        }
	}
}