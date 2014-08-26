//todo ref that

module System.Configuration
{
    export class SettingsContext extends Hashtable {

        current: ApplicationSettingsBase;

        get CurrentSettings(): ApplicationSettingsBase {
			 return current;
        }

        set CurrentSettings(value: ApplicationSettingsBase){
            current = value;
        }
    }
}