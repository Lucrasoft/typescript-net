module System.Net.Cache 
{
	export enum HttpCacheAgeControl
	{
        None = 0,
        MinFresh = 0x01,
        MaxAge = 0x02,
        MaxAgeAndMinFresh = 0x03,
        MaxStale = 0x04,
        MaxAgeAndMaxStale = 0x06,
    }

    System.Type.registerEnum(HttpCacheAgeControl, "System.Net.Cache.HttpCacheAgeControl");

}