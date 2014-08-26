/// <reference path="../componentmodel/asynccompletedeventargs.ts" />

module System.Net
{
	export class DownloadStringCompletedEventArgs extends AsyncCompletedEventArgs
	{
        static _type: Type = System.Type.registerClass(DownloadStringCompletedEventArgs, "System.Net.DownloadStringCompletedEventArgs", []);


		DownloadStringCompletedEventArgs (result: string,
			error: Exception, cancelled: boolean, userState: boolean)
			
		{
            super(error, cancelled, userState)
            this.result = result;
        }

		result: string;

        public get Result(): string {
				return result;	
        }
	}
}