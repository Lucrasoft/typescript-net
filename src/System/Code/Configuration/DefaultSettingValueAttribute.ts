module System.Configuration
{
	export class DefaultSettingValueAttribute extends Attribute
	{
		value: string;

		public DefaultSettingValueAttribute(value: string)
		{
            this.value = value;
		}


        get Value(): string {
            return this.value;
        }        

	}

}