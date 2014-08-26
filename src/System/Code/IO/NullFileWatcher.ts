///<reference path="IFileWatcher.ts"/>

module System.IO
{
	class NullFileWatcher extends IFileWatcher
    {
        static _type: Type = System.Type.registerClass(NullFileWatcher, "System.IO.NullFileWatcher", []);
        
		static instance: IFileWatcher;

        public StartDispatching(fsw: FileSystemWatcher): void
		{
			// does nothing
		}

		public StopDispatching(fsw: FileSystemWatcher): void
		{
			// does nothing
		}

        public static GetInstance(watcher: IFileWatcher): boolean
		{
            if (instance != null) {
                watcher = this.instance;
                return true;
            }

            instance = watcher = new NullFileWatcher();
            return true;
        }
	}
} 