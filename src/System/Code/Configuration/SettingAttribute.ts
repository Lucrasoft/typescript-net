﻿//todo ref Attribute

module System.Configuration
{
    export class SettingAttribute extends Attribute
    {
        static _type: Type = System.Type.registerClass(SettingAttribute, "System.Configuration.SettingAttribute", []);
    }
}