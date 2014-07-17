///<reference path="Attribute.ts"/>
//todo


module System
{
	export class LoaderOptimizationAttribute extends Attribute
	{
        private lo: LoaderOptimization;

		// Constructors
        constructor(value: any) {
            if (typeof value == byte) {
                lo = value(LoaderOptimization);
            }
            else if (typeof value == LoaderOptimization) {
                lo = value;

            }
        }
		
		// Properties
        get Value(): LoaderOptimization {
			{return lo;}
        }
    }

    //System.Type.registerClass(LoaderOptimizationAttribute, "System.LoaderOptimizationAttribute");

}