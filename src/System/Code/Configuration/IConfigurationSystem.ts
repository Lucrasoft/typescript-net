module System.Configuration
{
	export interface IConfigurationSystem
	{
        GetConfig(configKey: string): Object;
        Init(): void;
    }

    System.Type.registerInterface("System.Configuration.IConfigurationSystem");
}