module System.IO {
	enum WatcherChangeTypes {
    All = 0xF,
    Changed = 4,
    Created = 1,
    Deleted = 2,
    Renamed = 8
    }

    System.Type.registerEnum(WatcherChangeTypes, "System.IO.WatcherChangeTypes");
}