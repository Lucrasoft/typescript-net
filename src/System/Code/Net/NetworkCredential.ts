/// <reference path="icredentialsbyhost.ts" />


module System.Net
{
    

	public class NetworkCredential implements ICredentials, ICredentialsByHost
    {
        static _type: Type = System.Type.registerClass(NetworkCredential, "System.Net.NetworkCredential", ["System.Net.ICredentialsByHost"]); //todo register ICRedentials

        userName: string ;
		password: string;
		domain: string;


        securePassword: SecureString ;

		// Constructors
		public NetworkCredential()
		{
		}

		public NetworkCredential(string userName, string password)
		{
        this.userName = userName;
        this.password = password;
		}

		public NetworkCredential (string userName, string password, string domain)
			: this(userName, password)
		{
        this.domain = domain;
		}

 
		public NetworkCredential(string userName, SecureString password)
		{
        this.userName = userName;
        SecurePassword = password;
		}

		public NetworkCredential (string userName, SecureString password, string domain)
			: this(userName, password)
		{
        this.domain = domain;
		}

		// Properties

		public get Domain(): string{
			 return this.domain ?? String.Empty;
			
		}
        public set Domain(value: string){
            this.domain = value;
        }


		public get  UserName(): string {
			return this.userName ?? String.Empty;
		}
        public set UserName(value:string) {
            this.userName = value
        }
        public get Password(): string {
			return this.password ?? String.Empty; 
			
		}
        public set Password(value:string){
            this.password = value;
        }
		public get SecurePassword(): SecureString  {
			return this.securePassword;

		}
        public set SecurePassword(value: SecureString) {
            if (value == null)
            {
                this.securePassword = new SecureString();
            }
            else
            {

                this.securePassword = value;
            
        }

        public GetCredential(uri: Uri, authType: string): NetworkCredential
		{
            return this;
		}

        public GetCredential(host: string, port: number, authenticationType: string): NetworkCredential
		{
        return this;
        }
	}
}