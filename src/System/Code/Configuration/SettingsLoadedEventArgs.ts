/// <reference path="../../../corlib/code/eventargs.ts" />

module System.Configuration
{
	export class SettingsLoadedEventArgs extends EventArgs
    {

        static _type: Type = System.Type.registerClass(SettingsLoadedEventArgs, "System.Configuration.SettingsLoadedEventArgs", []);


        public SettingsLoadedEventArgs(provider: SettingsProvider)
		{
            this.provider = provider;
		}

        public get Provider(): SettingsProvider {
			 
            return this.provider;
        
        }

        provider: SettingsProvider;
	}

}