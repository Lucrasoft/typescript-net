/// <reference path="Type.ts" />  
/// <reference path="IObject.ts" />  
/// <reference path="Exceptions/NotImplementedException.ts" />  


module System {

    export class Attribute implements IObject {
        private static _type: Type = System.Type.RegisterClass(Attribute, "System.Attribute", []);

        constructor() {

        }


        //Static methods
        public static GetCustomAttribute(element: IObject, attributeType: Type): Attribute {
            //TODO
            throw new System.NotImplementedException();
        }

        public static IsDefined(element : IObject, attributeType : Type, inherit : boolean) : boolean
        {
            //TODO
            throw new System.NotImplementedException();
        }


        public static GetCustomAttributes(): Attribute[]{
            //TODO 
            throw new System.NotImplementedException();
        }


        //IObject
        public GetType(): Type { return Attribute._type; }

    }

}