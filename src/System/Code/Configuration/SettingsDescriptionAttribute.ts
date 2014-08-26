/// <reference path="../../../corlib/code/attributes/attribute.ts" />


module System.Configuration
{
	export class SettingsDescriptionAttribute extends Attribute
    {
        static _type: Type = System.Type.registerClass(SettingsDescriptionAttribute, "System.Configuration.SettingsDescriptionAttribute", []);
		desc: string;

		public SettingsDescriptionAttribute(description: string)
		{
            this.desc = description;
		}

        public get Description(): string {
			  return this.desc; 
        }
	}
}