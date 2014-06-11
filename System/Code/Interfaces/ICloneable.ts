
module System {

    export interface ICloneable {
        Clone(): any;
    }

    System.Type.RegisterInterface("ICloneable");
}