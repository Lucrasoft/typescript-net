///<reference path="FileSystemEventArgs.ts"/>

module System.IO {
	export class RenamedEventArgs extends FileSystemEventArgs {

        static _type: Type = System.Type.registerClass(RenamedEventArgs, "System.IO.RenamedEventArgs", []);

//		#region Fields

		//string oldName;
		//string oldFullPath;

//		#endregion // Fields

//		#region Constructors

        //constructor (changeType: WatcherChangeTypes,  directory: string,  name: string,  oldName: string)
		//{
        //    super(changeType, directory, name)
        //    this.oldName = oldName;
        //    oldFullPath = Path.Combine(directory, oldName);
		//}

//		#endregion // Constructors

//		#region Properties

		//public string OldFullPath {
		//	get { return oldFullPath; }
		//}

		//public string OldName {
		//	get { return oldName; }
		//}

//		#endregion // Properties
	}
}
