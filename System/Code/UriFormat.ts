module System {
    
	export enum UriFormat {

		UriEscaped = 1,
		Unescaped,
		SafeUnescaped,
    }

    System.Type.registerEnum(UriFormat, "System.UriFormat");
}
 