//todo ref

module System.Configuration
{
	export class SettingsAttributeDictionary extends Hashtable
	{
		public SettingsAttributeDictionary()
		{
		}

        public SettingsAttributeDictionary (attribute: SettingsAttributeDictionary)	
		{
            super((IDictionary) attributes);
        }

	}
}