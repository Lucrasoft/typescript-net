module System.Net {

	
	export class DnsPermission extends CodeAccessPermission implements IUnrestrictedPermission {

		private version: number = 1;

		// Fields
		m_noRestriction: boolean;
		
		// Constructors
		public DnsPermission(state: PermissionState)
		{		
            super()				
			m_noRestriction = (state == PermissionState.Unrestricted);
		}
		
		// Methods
				
        public Copy(): IPermission 
		{
			return new DnsPermission (m_noRestriction ? PermissionState.Unrestricted : PermissionState.None);		
		}
		
        public Intersect(target: IPermission): IPermission 
		{
            dp: DnsPermission = Cast (target);
			if (dp == null)
				return null;
			if (IsUnrestricted () && dp.IsUnrestricted ())
				return new DnsPermission (PermissionState.Unrestricted);
			return null;
		}
		
        public IsSubsetOf(target: IPermission): boolean 
		{
            dp: DnsPermission = Cast (target);
			if (dp == null)
				return IsEmpty ();

			return (dp.IsUnrestricted () || (m_noRestriction == dp.m_noRestriction));
		}

		public IsUnrestricted(): boolean
		{
			return this.m_noRestriction;
		}

        public ToXml(): SecurityElement 
		{
            se: SecurityElement = PermissionHelper.Element (typeof (DnsPermission), version);
			if (m_noRestriction)
				se.AddAttribute ("Unrestricted", "true");				
			return se;
		}
		
        public FromXml(securityElement: SecurityElement ): void
		{
			PermissionHelper.CheckSecurityElement (securityElement, "securityElement", version, version);
		
			// LAMESPEC: it says to throw an ArgumentNullException in this case				
			if (securityElement.Tag != "IPermission")
				throw new ArgumentException ("securityElement");
				
			this.m_noRestriction = PermissionHelper.IsUnrestricted (securityElement);
		}		
		
        public Union(target: IPermission ): IPermission  
		{
            dp: DnsPermission  = Cast (target);
			if (dp == null)
				return Copy ();
			if (IsUnrestricted () || dp.IsUnrestricted ())
				return new DnsPermission (PermissionState.Unrestricted);
			else
				return new DnsPermission (PermissionState.None);
		}

		// Internal helpers methods

		private IsEmpty (): boolean
		{
			return !m_noRestriction;
		}

        private Cast(target: IPermission ): DnsPermission 
		{
			if (target == null)
				return null;

            dp: DnsPermission = (target as DnsPermission); // no as keyword
			if (dp == null) {
				PermissionHelper.ThrowInvalidPermission (target, typeof (DnsPermission));
			}

			return dp;
		}
	}
}