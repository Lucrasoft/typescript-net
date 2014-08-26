//todo

module System.Net 
{
	class MonoHttpDate
    {
        static _type: Type = System.Type.registerClass(MonoHttpDate, "System.Net.MonoHttpDate",[]);

		private static rfc1123_date: string = "r";
		private static rfc850_date: string = "dddd, dd-MMM-yy HH:mm:ss G\\MT";
		private static asctime_date: string = "ddd MMM d HH:mm:ss yyyy";
        private static formats: string[] =
        new string[rfc1123_date, rfc850_date, asctime_date];
		
        

		static Parse(dateSt: string): DateTime
		{
            return DateTime.ParseExact(dateStr, formats, CultureInfo.InvariantCulture, DateTimeStyles.AllowWhiteSpaces).ToLocalTime();
		}
	}
}