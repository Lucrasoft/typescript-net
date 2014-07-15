
module System {

    export interface IDisposable {

        dispose(): void;
        dispose(disposing: boolean): void;
    }

    System.Type.registerInterface("System.IDisposable");

}