/// <reference path="../../../corlib/code/security/ipermission.ts" />



module System.Net {

	export class DnsPermissionAttribute extends CodeAccessSecurityAttribute {

		// Constructors

		public DnsPermissionAttribute(action: SecurityAction)
		{
            super(action);
		}

		// Methods
       
        //todo this was:
        //public override IPermission CreatePermission ()
		public CreatePermission()
		{
            return new DnsPermission(
            this.Unrestricted ?
            PermissionState.Unrestricted :
            PermissionState.None);
        }
	}
    
    
}