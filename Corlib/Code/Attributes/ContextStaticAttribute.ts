/// <reference path="Attribute.ts"/>

module System {

//   The ContextStatic attribute is used to flag fields as being unique

    export class ContextStaticAttribute extends Attribute {
        static _type: Type = System.Type.registerClass(ContextStaticAttribute, "System.ContextStaticAttribute", []);

        constructor() {
            super();

        }

    }

}