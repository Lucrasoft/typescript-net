module System {
	interface IUriData {
        absolutePath: string
		absoluteUri: string
		AbsoluteUri_SafeUnescaped: string
		Authority: string
		Fragment: string
		Host: string 
		PathAndQuery: string 
        StrongPort: string
        Query: string
        UserInfo: string
	}

    System.Type.registerInterface("System.AbsolutePath");

}

