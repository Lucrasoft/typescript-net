/// <reference path="Type.ts" />  
/// <reference path="IObject.ts" />  
/// <reference path="Exceptions/NotImplementedException.ts" />  


module System {

    export class Attribute implements IObject {
        private static type: Type = System.Type.registerClass(Attribute, "System.Attribute", []);

        constructor() {

        }


        //Static methods
       static getCustomAttribute(element: IObject, attributeType: Type): Attribute {
            //TODO
            throw new System.NotImplementedException();
        }

        static isDefined(element : IObject, attributeType : Type, inherit : boolean) : boolean
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