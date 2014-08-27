

module System.IO {
	interface IFileWatcher {
        StartDispatching(fsw: FileSystemWatcher): void;
        StopDispatching(fsw: FileSystemWatcher): void;
    }

    System.Type.registerInterface("System.IOIFileWatcher");
}