module System.Net {
	export enum SecurityProtocolType {
        Ssl3 = 48,
        Tls = 192
    }
    System.Type.registerEnum(SecurityProtocolType, "System.Net.SecurityProtocolType");
}