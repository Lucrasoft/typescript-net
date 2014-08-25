/// <reference path="AsyncCompletedEventArgs.ts"/>

module System.Net
{
	public class OpenReadCompletedEventArgs extends AsyncCompletedEventArgs
    {
        static _type: Type = System.Type.registerClass(OpenReadCompletedEventArgs, "System.Net.OpenReadCompletedEventArgs", []);

		constructor(result: Stream, error: Exception,cancelled: boolean, userState: object)	
		{
            super(error, cancelled, userState);
            this.result = result;
        }

		result: Stream;

		public Result: Stream {
			get {

				return result;
			}
    }
	}
}