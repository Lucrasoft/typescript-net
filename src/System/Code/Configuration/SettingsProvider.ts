module System.Configuration
{
	export class SettingsProvider{
		
        constructor()
		{
		}

        public GetPropertyValues(context: SettingsContext,
            collection: SettingsPropertyCollection): SettingsPropertyValueCollection;

        public SetPropertyValues(context: SettingsContext,
            collection: SettingsPropertyValueCollection): void;

        public ApplicationName: string;
	}

}