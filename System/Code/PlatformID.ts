﻿module System
{
	export enum PlatformID
	{
        Win32S = 0,
        Win32Windows = 1,
        Win32NT = 2,
        WinCE = 3,
        Unix = 4,
        Xbox = 5,
        MacOSX = 6,
    }

    System.Type.registerEnum(PlatformID,"System.PlatformID")

}