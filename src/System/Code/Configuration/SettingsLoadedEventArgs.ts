//todo ref eventargs

module System.Configuration
{
	export class SettingsLoadedEventArgs extends EventArgs
	{
        public SettingsLoadedEventArgs(provider: SettingsProvider)
		{
            this.provider = provider;
		}

		public Provider: SettingsProvider {
			get {
            return provider;
        }
    }

        provider: SettingsProvider;
	}

}