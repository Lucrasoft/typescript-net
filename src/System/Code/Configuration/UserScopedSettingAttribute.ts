/// <reference path="settingattribute.ts" />

module System.Configuration
{
	export class UserScopedSettingAttribute extends SettingAttribute
    {
        static _type: Type = System.Type.registerClass(UserScopedSettingAttribute, "System.Configuration.UserScopedSettingAttribute", []);
	}

}