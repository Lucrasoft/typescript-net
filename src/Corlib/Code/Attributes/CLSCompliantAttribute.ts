///<reference path="Attribute.ts"/>


module System
{
 
	export class CLSCompliantAttribute extends Attribute
    {
        static _type: Type = System.Type.registerClass(CLSCompliantAttribute, "System.CLSCompliantAttribute", []);
		is_compliant: boolean;

		constructor(isCompliant: boolean)
		{
            this.is_compliant = isCompliant;
		    super();
		}

        get isCompliant(): boolean {
            return this.is_compliant;
        }
    }

  
}
 