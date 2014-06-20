/// <reference path="Type.ts" />  
/// <reference path="Exceptions/NotImplementedException.ts" />  


module System {

    export class Attribute extends System.Object {
        static type: Type = System.Type.registerClass(Attribute, "System.Attribute", []);

        constructor() {
            super();
        }


        //Static methods
       static getCustomAttribute(element: Object, attributeType: Type): Attribute {
            //TODO
            throw new System.NotImplementedException();
        }

        static isDefined(element : Object, attributeType: Type, inherit: boolean): boolean
        {
            //TODO
            throw new System.NotImplementedException();
        }


        static getCustomAttributes(): Attribute[]{
            //TODO 
            throw new System.NotImplementedException();
        }


        //IObject
        getType(): Type { return Attribute.type; }

    }

}