module System.Net {

	export class DnsPermissionAttribute extends CodeAccessSecurityAttribute {

		// Constructors

		public DnsPermissionAttribute(action: SecurityAction)
		{
            super(action);
		}

		// Methods

		public override IPermission CreatePermission()
		{
        return new DnsPermission(
            this.Unrestricted ?
            PermissionState.Unrestricted :
            PermissionState.None);
    }
	}
}