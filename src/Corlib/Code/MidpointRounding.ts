﻿module System
{
	export enum MidpointRounding
	{
        ToEven = 0,
        AwayFromZero = 1
    }

    System.Type.registerEnum(MidpointRounding, "System.MidpointRounding");

}