 module System.Net {
    
	export enum NetworkAccess {
    Accept = 128,

    Connect = 64,
     }

     System.Type.registerEnum(NetworkAccess, "System.Net.NetworkAccess");

} 