///<reference path="Attribute.ts"/>
//todo

module System
{
 
	export class CLSCompliantAttribute extends Attribute
	{
		is_compliant: boolean;

		constructor(isCompliant: boolean)
		{
            this.is_compliant = isCompliant;
		    
		}

        get isCompliant(): boolean {
            return this.is_compliant;
        }
    }

    System.Type.registerClass(CLSCompliantAttribute, "System.CLSCompliantAttribute");
}
 