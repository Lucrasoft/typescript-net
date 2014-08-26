module System.Net.Cache 
{
	export class RequestCachePolicy
	{
        static _type: Type = System.Type.registerClass(RequestCachePolicy, "System.Net.Cache.RequestCachePolicy", []);

        level: RequestCacheLevel = RequestCacheLevel.Default;


        constructor(level?: RequestCacheLevel) {

            this.level = level;
        }



        public get Level(): RequestCacheLevel{
			 return level;
		}

		public ToString(): string
		{
            throw new NotImplementedException();
		}		
	}
}
 