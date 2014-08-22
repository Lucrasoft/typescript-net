//todo

module System.IO {

    export interface ErrorEventHandler{
        (sender: object, e: ErrorEventArgs): void;
    }

    System.Type.registerInterface("System.IO.ErrorEventHandler");
}