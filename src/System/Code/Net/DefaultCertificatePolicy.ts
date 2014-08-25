//todo register interface
/// <reference path="ICertificatePolicy.ts"/>


module System.Net {

	class DefaultCertificatePolicy extends ICertificatePolicy {

        static _type: Type = System.Type.registerClass(DefaultCertificatePolicy, "System.Net.DefaultCertificatePolicy", []);

		public CheckValidationResult(point: ServicePoint, certificate: X509Certificate, request: WebRequest, certificateProblem: number): boolean
		{

			switch (certificateProblem) {
            case 0:			// No error
            case -2146762495:	// CERT_E_EXPIRED 0x800B0101 (WinError.h)
                return true;
            default:
                return false;
        }
		}
	}
}