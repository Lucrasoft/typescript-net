module System.IO {
	enum NotifyFilters {
    Attributes = 4,
    CreationTime = 64,
    DirectoryName = 2,
    FileName = 1,
    LastAccess = 32,
    LastWrite = 16,
    Security = 256,
    Size = 8
    }

    System.Type.registerEnum(NotifyFilters, "System.IO.NotifyFilters");
}