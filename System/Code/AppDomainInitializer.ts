module System
{
    
    export interface AppDomainInitializer {
         (args: string[]): void;


    }

    System.Type.registerInterface("System.AppDomainInitializer");

}

