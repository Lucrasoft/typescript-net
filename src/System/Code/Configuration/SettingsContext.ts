//todo ref that

module System.Configuration
{
	public class SettingsContext extends Hashtable
	{

        current: ApplicationSettingsBase;

        CurrentSettings: ApplicationSettingsBase {
			get { return current; }
			set { current = value; }
        }
	}

}