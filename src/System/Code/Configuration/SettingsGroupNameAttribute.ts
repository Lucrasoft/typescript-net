/// <reference path="../../../corlib/code/attributes/attribute.ts" />


module System.Configuration
{
	export class SettingsGroupNameAttribute extends Attribute
	{
		group_name: string;

		public SettingsGroupNameAttribute(groupName: string)
		{
            this.group_name = groupName;
		}

        public get GroupName(): string {
			  return this.group_name;
        }
	}
}