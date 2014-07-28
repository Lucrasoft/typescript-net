///<reference path="UriParser.ts"/>

module System {

	export class HttpStyleUriParser extends UriParser {

        static _type: Type = System.Type.registerClass(HttpStyleUriParser, "System.HttpStyleUriParser", []);

		public HttpStyleUriParser()
		{
    }
	}
} 