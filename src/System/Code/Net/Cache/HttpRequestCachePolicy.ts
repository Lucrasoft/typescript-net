module System.Net.Cache 
{
	export class HttpRequestCachePolicy extends RequestCachePolicy
	{
        static _type: Type = System.Type.registerClass(HttpRequestCachePolicy, "System.Net.Cache.HttpRequestCachePolicy", []);
		
        cacheSyncDate: DateTime;
        level: HttpRequestCacheLevel = HttpRequestCacheLevel.Default;
        maxAge: TimeSpan;
        maxStale: TimeSpan;
        minFresh: TimeSpan;

		HttpRequestCachePolicy ()
		{
		}

        HttpRequestCachePolicy(cacheSyncDate?: DateTime, level?: HttpRequestCacheLevel  )
        {
            this.level = level;
			this.cacheSyncDate = cacheSyncDate;
		}



        HttpRequestCachePolicy(cacheAgeControl: HttpCacheAgeControl, ageOrFreshOrStale: TimeSpan)
		{
			switch (cacheAgeControl) {
			case HttpCacheAgeControl.MaxAge:
				maxAge = ageOrFreshOrStale;
				break;
			case HttpCacheAgeControl.MaxStale:
				maxStale = ageOrFreshOrStale;
				break;
			case HttpCacheAgeControl.MinFresh:
				minFresh = ageOrFreshOrStale;
				break;
			default:
				throw new ArgumentException ("ageOrFreshOrStale");
			}
		}

        constructor(cacheAgeControl: HttpCacheAgeControl, maxAge: TimeSpan,
            freshOrStale: TimeSpan, cacheSyncDate?: DateTime)
        {
            if (cacheSyncDate !== null)
            {
                this.cacheSyncDate = cacheSyncDate;
            }

			this.maxAge = maxAge;

			switch (cacheAgeControl) {
			case HttpCacheAgeControl.MaxStale:
				this.maxStale = freshOrStale;
				break;
			case HttpCacheAgeControl.MinFresh:
				this.minFresh = freshOrStale;
				break;
			default:
				throw new ArgumentException ("freshOrStale");
			}
		}


		public get CacheSyncDate(): DateTime {
			 return cacheSyncDate; 
		}

		public get Level(): HttpRequestCacheLevel {
			  return level; 
		}

        public get MaxAge(): TimeSpan {
			  return this.maxAge; 
		}

		public get MaxStale(): TimeSpan {
			  return this.maxStale; 
		}

        public get MinFresh(): TimeSpan {
			  return this.minFresh; 
		}





        public ToString(): string 
		{
			throw new NotImplementedException ();
		}
	}
} 