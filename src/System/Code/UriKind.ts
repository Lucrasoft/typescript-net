module System {

	export enum UriKind {

		RelativeOrAbsolute,
		Absolute,
		Relative,
    }

    System.Type.registerEnum(UriKind, "System.UriKind");
}