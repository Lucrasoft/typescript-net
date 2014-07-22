//todo
///<reference path="EventArgs.ts"/>

module System 
{
	
	export class AssemblyLoadEventArgs extends EventArgs
    {
        static _type: Type = System.Type.registerClass(AssemblyLoadEventArgs, "System.AssemblyLoadEventArgs", []);


		private m_loadedAssembly: Assembly;

        public AssemblyLoadEventArgs(loadedAssembly: Assembly)
		{
            this.m_loadedAssembly = loadedAssembly;
		}



        // Hoofdletter ja of nee ik weet niet.
		get LoadedAssembly(): Assembly{
			 {
                return m_loadedAssembly;
            }
        }
	}
}