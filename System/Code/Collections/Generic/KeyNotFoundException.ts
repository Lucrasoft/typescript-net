/// <reference path="../../Exceptions/Exception.ts"/>

module System.Collections.Generic {

    export class KeyNotFoundException extends System.Exception {
        static _type: Type = System.Type.registerClass(KeyNotFoundException, "System.Collection.Generic.KeyNotFoundException", []);

        constructor() {
            super();
        }

        //IObject
        getType(): Type { return KeyNotFoundException._type; }

    }

}