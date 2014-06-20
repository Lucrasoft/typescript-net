
module System {

    export interface IDisposable {
        dispose() : void;
    }

    System.Type.registerInterface("System.IDisposable");

}