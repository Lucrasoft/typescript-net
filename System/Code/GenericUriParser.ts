///<reference path="UriParser.ts"/>
///<reference path="GenericUriParserOptions.ts"/>

module System {
	export  class GenericUriParser extends UriParser {

        static _type: Type = System.Type.registerClass(GenericUriParser, "System.GenericUriParser", []);


        public GenericUriParser(options: GenericUriParserOptions)
		{
        }
	}
}
