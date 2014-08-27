//todo ref hashtable

module System.Configuration
{
	export class SettingsAttributeDictionary extends Hashtable
    {
        static _type: Type = System.Type.registerClass(SettingsAttributeDictionary, "System.Configuration.SettingsAttributeDictionary", []);


		public SettingsAttributeDictionary()
		{
		}

        constructor(attribute?: SettingsAttributeDictionary) {
            if (attribute != null) {

                //todo dont know how to "hard" convert to IDictionary
                super((IDictionary) attributes);
            }
        }
	}
}