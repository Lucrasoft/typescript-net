module System {

	class DefaultUriParser extends UriParser {

        static _type: Type = System.Type.registerClass(DefaultUriParser, "System.DefaultUriParser", []);

		constructor(scheme?: string)
        {
            if (scheme !== null) {
                this.scheme_name = scheme;

            }

		}
	}
}