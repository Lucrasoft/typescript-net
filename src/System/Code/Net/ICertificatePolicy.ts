module System.Net {

	export interface ICertificatePolicy {
    CheckValidationResult(
        srvPoint: ServicePoint,
        certificate: X509Certificate,
        request: WebRequest,
        certificateProblem: number
        ): boolean;		
    }

    System.Type.registerInterface("System.Net.ICertificatePolicy");
}