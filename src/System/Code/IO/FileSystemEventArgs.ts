///<reference path="WatcherChangeTypes.ts"/>
//todo

module System.IO {
	export class FileSystemEventArgs extends EventArgs {
        static _type: Type = System.Type.registerClass(FileSystemEventArgs, "System.Type.FileSystemEventArgs", []);

//		#region Fields

        changeType: WatcherChangeTypes;
        directory: string;
        name: string;

//		#endregion // Fields

//		#region Constructors

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
//		#endregion // Constructors

//		#region Properties

		//public ChangeType: WatcherChangeTypes {
		//	get { return changeType; }
		//}

		//public string FullPath {
		//	get { return Path.Combine(directory, name); }
		//}

		//public string Name {
		//	get { return name; }
		//}

//		#endregion // Properties
	}
}