///<reference path="Attribute.ts"/>


module System
{


	export class NonSerializedAttribute extends Attribute
    {

        static _type: Type = System.Type.registerClass(NonSerializedAttribute, "System.NonSerializedAttribute");

        constructor() {
        }
    
	}
}