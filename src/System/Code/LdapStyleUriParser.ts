///<reference path="UriParser.ts"/>

module System {

	export class LdapStyleUriParser extends UriParser {

        static _type: Type = System.Type.registerClass(LdapStyleUriParser, "System.LdapStyleUriParser", []);

		public LdapStyleUriParser()
		{
        }
    }



}