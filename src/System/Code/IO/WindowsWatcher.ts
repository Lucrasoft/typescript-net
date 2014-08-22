///<reference path="IFileWatcher.ts"/>

module System.IO {
	class WindowsWatcher extends IFileWatcher
    {
        static _type: Type = System.Type.registerClass(WindowsWatcher, "System.IO.WindowsWatcher", []);

		private WindowsWatcher()
		{
		}
        
		// Locked by caller
		public static GetInstance(watcher: IFileWatcher): boolean
		{
            throw new NotSupportedException();
		}

		StartDispatching(fsw: FileSystemWatcher): void
		{
		}

		StopDispatching(fsw: FileSystemWatcher): void
		{
    }
	}
}