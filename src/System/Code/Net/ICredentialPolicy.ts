module System.Net {

	export interface ICredentialPolicy {
    ShouldSendCredential( challengeUri: Uri,
        request: WebRequest,
        credential: NetworkCredential,
        authenticationModule: IAuthenticationModule
        ): boolean;
    }

    System.Type.registerInterface("System.Net.ICredentialPolicy");
}