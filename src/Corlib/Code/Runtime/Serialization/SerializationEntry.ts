/// <reference path="../../Type.ts" />

module System.Runtime.Serialization {

    //IObject necessary?

    export class SerializationEntry {

        static _type: Type = System.Type.registerClass(SerializationEntry, "System.Runtime.Serialization.SerializationEntry", []);

        name: string;
        objectType: Type;
        value: any;

        // Properties
        public get Name(): string {
            return this.name;
        }

        public get ObjectType(): Type {
            return this.objectType;
        }

        public get Value(): any {
            return this.value;
        }

        constructor(name: string, type: Type, value: any) {
            this.name = name;
            this.ObjectType = type;
            this.value = value;
        }

    }
}
