 module System.Net
{
	export enum DecompressionMethods {
		None = 0,
		GZip = 1,
		Deflate = 2
     }

     System.Type.registerEnum(DecompressionMethods, "System.Net.DecompressionMethods");
}