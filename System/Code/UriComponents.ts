module System {

	export enum UriComponents {

        Scheme = 1,
        UserInfo = 2,
        Host = 4,
        Port = 8,
        Path = 16,
        Query = 32,
        Fragment = 64,
        StrongPort = 128,

        NormalizedHost = 256,

    	KeepDelimiter = 0x40000000,

        HostAndPort = Host | StrongPort,
        StrongAuthority = Host | UserInfo | StrongPort,
        AbsoluteUri = Scheme | UserInfo | Host | Port | Path | Query | Fragment,
        PathAndQuery = Path | Query,
        HttpRequestUrl = Scheme | Port | Host | Path | Query,
        SchemeAndServer = Scheme | Host | Port,
        SerializationInfoString = Int32.MinValue
    }

    System.Type.registerEnum(UriComponents, "System.UriComponents");
}