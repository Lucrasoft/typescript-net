module System.Net {

	export interface IAuthenticationModule {
        Authenticate(challenge: string, request: WebRequest, credentials: ICredentials): Authorization;
        PreAuthenticate(request: WebRequest, credentials: ICredentials): Authorization;

        AuthenticationType: string { get; }
		CanPreAuthenticate: boolean { get; }
	}

    System.Type.registerInterface("System.Net.IAuthenticationModule");
}