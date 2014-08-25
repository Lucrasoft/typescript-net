//todo ref extends

module System.Configuration 
{
    export class UserSettingsGroup extends ConfigurationSectionGroup
    {

        static _type: Type = System.Type.registerClass(UserSettingsGroup, "System.Configuration.UserSettingsGroup",[]);

    }

}
