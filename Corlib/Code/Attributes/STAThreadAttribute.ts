///<reference path="Attribute.ts"/>

module System
{

	export class STAThreadAttribute extends Attribute
    {
        static _type: Type = System.Type.registerClass(STAThreadAttribute, "System.STAThreadAttribute", []);

		// Constructors
		constructor () {
		    super();
		}
	}
} 