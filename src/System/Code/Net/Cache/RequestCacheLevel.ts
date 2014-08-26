module System.Net.Cache 
{
	export enum RequestCacheLevel
	{
		Default = 0x00,
		BypassCache = 0x01,
		CacheOnly = 0x02,
		CacheIfAvailable = 0x03,
		Revalidate = 0x04,
		Reload = 0x05,
		NoCacheNoStore = 0x06,
    }

    System.Type.registerEnum(RequestCacheLevel, "System.Net.Cache.RequestCacheLevel");

} 