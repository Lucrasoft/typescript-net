/// <reference path="../componentmodel/asynccompletedeventargs.ts" />

module System.Net
{
	export class UploadStringCompletedEventArgs extends AsyncCompletedEventArgs
    {
        static _type: Type = System.Type.registerClass(UploadStringCompletedEventArgs, "System.Net.UploadStringCompletedEventArgs", []);

		constructor (result: string,
			error: Exception, cancelled: boolean, userState: Object)
        {
            super(error, cancelled, userState);
            this.result = result;
        }

		result: string;

        
        public get Result(): string {
				return this.result;
        }
	}
}