//todo ref

module System.Configuration
{
	export class SettingsDescriptionAttribute extends Attribute
	{
		desc: string;

		public SettingsDescriptionAttribute(description: string)
		{
            desc = description;
		}

		public Description: string {
			get { return desc; }
        }
	}
}