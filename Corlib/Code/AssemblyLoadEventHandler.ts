module System {

    export interface AssemblyLoadEventHandler {

        (sender: object, args: AssemblyLoadEventArgs): void;

    }

    System.Type.registerInterface("System.AssemblyLoadEventHandler");

}  
	
