//todo ref that

module System.Configuration
{
	export class SettingsGroupNameAttribute extends Attribute
	{
		group_name: string;

		public SettingsGroupNameAttribute(groupName: string)
		{
            group_name = groupName;
		}

		public GroupName: string {
			get { return group_name; }
        }
	}
}