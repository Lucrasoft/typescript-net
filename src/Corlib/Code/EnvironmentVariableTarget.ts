module System 
{

	export enum EnvironmentVariableTarget
	{
        Process,
        User,
        Machine
    }

    System.Type.registerEnum(EnvironmentVariableTarget, "System.EnvironmentVariableTarget");
}
