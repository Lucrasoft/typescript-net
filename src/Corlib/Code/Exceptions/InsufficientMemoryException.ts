﻿///<reference path="OutOfMemoryException.ts"/>


module System
{
    export class InsufficientMemoryException extends OutOfMemoryException
    {

        static _type: Type = System.Type.registerClass(InsufficientMemoryException, "System.InsufficientMemoryException", []);
    
        constructor(message: string = "Insufficient memory", innerException?: Exception)
        {
            super(message, innerException);
        }
    }
}