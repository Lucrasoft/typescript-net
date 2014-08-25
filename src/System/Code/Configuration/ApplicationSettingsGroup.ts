//todo ref extends

module System.Configuration 
{
	export class ApplicationSettingsGroup extends ConfigurationSectionGroup
    {
        static _type: Type = System.Type.registerClass(ApplicationSettingsGroup, "System.Configuration.ApplicationSettingsGroup", []);

	}
}