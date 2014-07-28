module System
{

	export enum LoaderOptimization
	{
		NotSpecified = 0,
		SingleDomain = 1,
		MultiDomain = 2,
		MultiDomainHost = 3,
		DomainMask = 3,
		DisallowBindings = 4
    }
    System.Type.registerEnum(LoaderOptimization, "System.LoaderOptimization");
} 