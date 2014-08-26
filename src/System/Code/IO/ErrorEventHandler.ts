//todo

module System.IO {

    export interface ErrorEventHandler{
        (sender: Object, e: ErrorEventArgs): void;
    }

    System.Type.registerInterface("System.IO.ErrorEventHandler");
}