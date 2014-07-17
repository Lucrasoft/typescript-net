module  System
{
	export enum GCCollectionMode {
    Default = 0,
    Forced = 1,
    Optimized = 2
    }

    System.Type.registerEnum(GCCollectionMode, "System.GCCollectionMode");

}
