/// <reference path="../../Exceptions/Exception.ts"/>
/// <reference path="../../IObject.ts"/>

module System.Collections.Generic {

    export class KeyNotFoundException extends System.Exception implements IObject {
        private static _type: Type = System.Type.registerClass(KeyNotFoundException, "System.Collection.Generic.KeyNotFoundException", []);



        //IObject
        getType(): Type { return KeyNotFoundException._type; }

    }

}