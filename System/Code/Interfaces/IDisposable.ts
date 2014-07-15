
module System {

    export interface IDisposable {
        dispose(): void;
        dispose(disposing: boolean);
    }

    System.Type.registerInterface("System.IDisposable");

}