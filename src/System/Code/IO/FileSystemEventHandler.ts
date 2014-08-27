module System.IO {

    export interface FileSystemEventHandler{
        (sender: Object , e: FileSystemEventArgs): void
    }

    System.Type.registerInterface("System.IO.FileSystemEventHandler");
}