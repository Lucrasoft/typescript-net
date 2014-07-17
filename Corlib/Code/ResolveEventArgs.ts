module System
{

	export class ResolveEventArgs extends  EventArgs
	{
		private m_Name: string;

        private m_Requesting: Assembly;


        public ResolveEventArgs(name: string)
		{
        m_Name = name;
		}


        public ResolveEventArgs(name: string, requestingAssembly: Assembly) {
        this.m_Name = name;
        this.m_Requesting = requestingAssembly;
		}


		get Name(): string {
			 {
            return m_Name;
        }
		}


        get RequestingAssembly(): Assembly {
			 {
            return m_Requesting;
        }
		}

    }

    System.Type.registerClass(ResolveEventArgs, "System.ResolveEventArgs");

} 