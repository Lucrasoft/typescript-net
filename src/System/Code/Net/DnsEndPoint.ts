/// <reference path="endpoint.ts" />

module System.Net {

	export class DnsEndPoint extends EndPoint {

        static _type: Type = System.Type.registerClass(DnsEndPoint, "System.Net.DnsEndPoint", []);

        host: string;
		port: number;
        addressFamily: AddressFamily = AddressFamily.Unspecified;

        public DnsEndPoint(host: string, port: number)
		{
        if (host == null)
            throw new ArgumentNullException("host");
        if (host == String.Empty)
            throw new ArgumentException("host parameter contains an empty string");
        if (port < 0 || port > 0xffff)
            throw new ArgumentOutOfRangeException("port is less than 0 or greater than 0xffff");

        this.host = host;
        this.port = port;
		}

		public DnsEndPoint(host: string, port: number, addressFamily: AddressFamily )
		{
            super(host, port);
        switch (addressFamily) {
            case AddressFamily.InterNetwork:
            case AddressFamily.InterNetworkV6:
            case AddressFamily.Unspecified:
                this.addressFamily = addressFamily;
                break;
            default:
                // throw for Unknown or any invalid value
                throw new ArgumentException("addressFamily");
        }
		}

		public Equals(comparand: Object): boolean
		{
            dep: DnsEndPoint= (comparand as DnsEndPoint); //todo we have no 'as' keyword
        return (comparand != null) && Equals(dep);
		}

        private Equals(other: DnsEndPoint): boolean
		{
        if (port != other.port || addressFamily != other.addressFamily || host != other.host)
            return false;
        return true;
		}

		public GetHashCode(): number
		{
			return port ^ (int) addressFamily ^ host.GetHashCode();
		}

		public ToString(): string
		{
        return String.Format("{0}/{1}:{2}", addressFamily, host, port);
		}

		public get AddressFamily(): AddressFamily  {
			 return this.addressFamily; 
		}

		public get Host(): string  {
			return this.host;
		}

		public get Port(): number {
			return this.port;
    }
	}
}
