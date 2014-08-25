module System.Net {

	export class HttpVersion {

        static _type: Type = System.Type.registerClass(HttpVersion, "System.Net.HttpVersion", []);

		public static  Version10: Version = new Version(1, 0);
		public static  Version11: Version = new Version(1, 1);

    
    public HttpVersion() { }
	}
}