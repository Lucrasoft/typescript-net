///<reference path="UriParser.ts"/>

module System {

	export class FileStyleUriParser extends UriParser {

        static _type: Type = System.Type.registerClass(FileStyleUriParser, "System.FileStyleUriParser", []);

		public FileStyleUriParser()
		{
        }
	}
}