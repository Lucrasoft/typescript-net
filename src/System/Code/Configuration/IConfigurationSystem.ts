module System.Configuration
{
	export interface IConfigurationSystem
	{
        GetConfig(configKey: string): object;
        Init(): void;
    }

    System.Type.registerInterface("System.Configuration.IConfigurationSystem");
}