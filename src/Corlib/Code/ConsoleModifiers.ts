module System
{
    export enum ConsoleModifiers
    {
		Alt = 1,
		Shift = 2,
		Control = 4
    }

    System.Type.registerEnum(ConsoleModifiers, "System.ConsoleModifiers");
    
}
