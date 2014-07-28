///<reference path="Attribute.ts"/>

module System
{
    //   Used to flag that the method will take a variable number
    //  of arguments

	export class ParamArrayAttribute extends Attribute
    {
        static _type: Type = System.Type.registerClass(ParamArrayAttribute, "System.ParamArrayAttribute", []);


        constructor() {
            super();
        }
	}
} 