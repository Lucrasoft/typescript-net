module System.ComponentModel
{
	export class ProgressChangedEventArgs extends EventArgs
	{
		public ProgressChangedEventArgs(progressPercentage: number, userState: Object)
		{
            this.progress = progressPercentage;
            this.state = userState;
        }

		progress: number;
		state: Object;

		public get ProgressPercentage(): number {
			 return this.progress; 
		}

        public get UserState(): Object  {
			  return this.state; 
        }
	}
}