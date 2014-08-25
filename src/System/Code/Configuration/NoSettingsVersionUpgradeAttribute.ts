//todo ref Attribute

module System.Configuration
{
	export class NoSettingsVersionUpgradeAttribute extends Attribute
     {
        static _type: Type = System.Type.registerClass(NoSettingsVersionUpgradeAttribute, "System.Configuration.NoSettingsVersionUpgradeAttribute",[]);

		public NoSettingsVersionUpgradeAttribute ()
		{
		}
	}
}