/// <reference path="../componentmodel/asynccompletedeventargs.ts" />

module System.Net
{
	export class OpenReadCompletedEventArgs extends AsyncCompletedEventArgs
    {
        static _type: Type = System.Type.registerClass(OpenReadCompletedEventArgs, "System.Net.OpenReadCompletedEventArgs", []);

		constructor(result: Stream, error: Exception,cancelled: boolean, userState: Object)	
		{
            super(error, cancelled, userState);
            this.result = result;
        }

		result: Stream;

		public get Result(): Stream {
				return this.result;	
        }
	}
}