///<reference path="Attribute.ts"/>

module System
{
	export class LoaderOptimizationAttribute extends Attribute
    {

        static _type: Type = System.Type.registerClass(LoaderOptimizationAttribute, "System.LoaderOptimizationAttribute", []);


        public lo: LoaderOptimization;

		//TODO
        //constructor(value: any) {
        //    if (value: typeof byte) {
        //        this.lo = value(LoaderOptimization);
        //    }
        //    else if (typeof value == LoaderOptimization) {
        //        this.lo = value;

        //    }
        //    super();
        //}
		
		// Properties
        get Value(): LoaderOptimization {
        { return this.lo; }
            
        }
    }

    

}