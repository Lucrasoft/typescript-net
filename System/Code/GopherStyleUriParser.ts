///<reference path="UriParser.ts"/>

module System {

	export class GopherStyleUriParser extends UriParser {

        static _type: Type = System.Type.registerClass(GopherStyleUriParser, "System.GopherStyleUriParser", [])

		public GopherStyleUriParser()
		{
    }
	}
}