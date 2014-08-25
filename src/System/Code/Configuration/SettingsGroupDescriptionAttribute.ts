module System.Configuration
{
	export class SettingsGroupDescriptionAttribute extends Attribute
	{
	    desc: string;

		public SettingsGroupDescriptionAttribute( description: string)
		{
            desc = description;
		}

		public Description: string {
			get { return desc; }
    }
	}
}
