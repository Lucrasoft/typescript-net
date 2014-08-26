module System.Net {

	export interface IAuthenticationModule {
        Authenticate(challenge: string, request: WebRequest, credentials: ICredentials): Authorization;
        PreAuthenticate(request: WebRequest, credentials: ICredentials): Authorization;

        AuthenticationType: string;
        CanPreAuthenticate: boolean;
	}

    System.Type.registerInterface("System.Net.IAuthenticationModule");
}