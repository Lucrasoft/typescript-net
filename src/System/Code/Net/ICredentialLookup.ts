module System.Net {

	export interface ICredentials 
	{
        GetCredential(uri: Uri, authType: string); NetworkCredential;
	}
}