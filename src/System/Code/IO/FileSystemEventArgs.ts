///<reference path="WatcherChangeTypes.ts"/>


module System.IO {
	export class FileSystemEventArgs extends EventArgs {
        static _type: Type = System.Type.registerClass(FileSystemEventArgs, "System.Type.FileSystemEventArgs", []);

        changeType: WatcherChangeTypes;
        directory: string;
        name: string;

        public FileSystemEventArgs(changeType: WatcherChangeTypes, directory: string, name: string)
		{
        this.changeType = changeType;
        this.directory = directory;
        this.name = name;
    }
		
        SetName(name: string): void
		{
            this.name = name;
		}

		public get ChangeType(): WatcherChangeTypes {
			  return this.changeType; 
		}

        public get FullPath(): string{
		    return Path.Combine(this.directory, this.name); 
		}

        public get Name(): string{
			 return name; 
		}

//		#endregion // Properties
	}
}