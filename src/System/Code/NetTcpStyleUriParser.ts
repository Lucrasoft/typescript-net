///<reference path="UriParser.ts"/>

module System {
	export class NetTcpStyleUriParser extends UriParser {

        static _type: Type = System.Type.registerClass(NetTcpStyleUriParser, "System.NetTcpStyleUriParser", [])


		public NetTcpStyleUriParser ()
		{
		}
	}
}