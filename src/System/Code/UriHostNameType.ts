module System {

    export enum UriHostNameType {

        Unknown = 0,
        Basic = 1,
        Dns = 2,
        IPv4 = 3,
        IPv6 = 4,
    }

    System.Type.registerEnum(UriHostNameType, "System.UriHostNameType");

}