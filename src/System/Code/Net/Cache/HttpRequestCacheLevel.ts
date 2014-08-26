module System.Net.Cache 
{
	export enum HttpRequestCacheLevel
	{
    Default = 0x00,
    BypassCache = 0x01,
    CacheOnly = 0x02,
    CacheIfAvailable = 0x03,
    Revalidate = 0x04,
    Reload = 0x05,
    NoCacheNoStore = 0x06,
    CacheOrNextCacheOnly = 0x07,
    Refresh = 0x08,
    }

    System.Type.registerEnum(HttpRequestCacheLevel, "System.Net.Cache.HttpRequestCacheLevel");

} 