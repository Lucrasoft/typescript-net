module System {

	class DefaultUriParser extends UriParser {

		public DefaultUriParser(scheme?: string)
        {
            if (scheme !== null) {
                this.scheme_name = scheme;

            }

		}
	}
}