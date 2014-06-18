/// <reference path="IObject.ts" />
/// <reference path="Type.ts" />

module System {

    export class Object implements IObject {

        static _type  = System.Type.registerClass(System.Object, "System.Object", []);


        getType() : Type { return System.Object._type; }

    }

}