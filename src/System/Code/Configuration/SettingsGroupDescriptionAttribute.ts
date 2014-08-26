/// <reference path="../../../corlib/code/attributes/attribute.ts" />

module System.Configuration
{
	export class SettingsGroupDescriptionAttribute extends Attribute
	{
	    desc: string;

		public SettingsGroupDescriptionAttribute( description: string)
		{
            this.desc = description;
		}

        public get Description(): string {
			  return this.desc;
    }
	}
}
