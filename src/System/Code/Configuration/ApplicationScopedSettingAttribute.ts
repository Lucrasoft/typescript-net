/// <reference path="settingattribute.ts" />

module System.Configuration
{
	export class ApplicationScopedSettingAttribute extends SettingAttribute
    {
        static _type: Type = System.Type.registerClass(ApplicationScopedSettingAttribute, "System.Configuration.ApplicationScopedSettingAttribute", []);
	}

}