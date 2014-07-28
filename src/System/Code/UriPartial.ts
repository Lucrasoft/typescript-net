module System {

	export enum UriPartial {

		Scheme = 0,
		Authority = 1,
		Path = 2,
		Query
    }

    System.Type.registerEnum(UriPartial, "System.UriPartial");

}