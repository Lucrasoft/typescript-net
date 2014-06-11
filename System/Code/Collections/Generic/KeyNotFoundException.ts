
module System.Collections.Generic {

    export class KeyNotFoundException extends System.Exception implements IObject {
        private static _type: Type = System.Type.RegisterClass(KeyNotFoundException, "System.Collection.Generic.KeyNotFoundException", []);



        //IObject
        public GetType(): Type { return KeyNotFoundException._type; }

    }

}