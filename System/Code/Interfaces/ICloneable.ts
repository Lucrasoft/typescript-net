/// <reference path="../Type.ts"/> 

module System {

    export interface ICloneable {
        clone(): any;
    }

    System.Type.registerInterface("ICloneable");
}