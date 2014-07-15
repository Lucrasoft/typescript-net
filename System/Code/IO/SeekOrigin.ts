

module System.IO {

    export enum SeekOrigin {

        Begin = 0,
        Current = 1,
        End = 2
    }

    System.Type.registerEnum(SeekOrigin, "System.IO.SeekOrigin");
}