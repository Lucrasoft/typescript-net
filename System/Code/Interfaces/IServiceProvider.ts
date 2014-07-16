module System
{
	export interface IServiceProvider
	{
        getService(serviceType: Type): any;
	}
}
