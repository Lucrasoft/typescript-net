/// <reference path="AsyncCompletedEventArgs.ts"/>


module System.Net
{
	export class OpenWriteCompletedEventArgs extends AsyncCompletedEventArgs
    {
        static _type: Type = System.Type.registerClass(OpenWriteCompletedEventArgs, "System.Net.OpenWriteCompletedEventArgs", []);

		constructor (result: Stream, error: Exception, cancelled: boolean, userState: object)
        {
            super(error, cancelled, userState)
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