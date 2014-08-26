module System.Security.Principal {

	export interface IIdentity {
        AuthenticationType: string ;
        IsAuthenticated: boolean;
        Name: string;     
	}

    System.Type.registerInterface("System.Security.Principal.IIdentity");
}