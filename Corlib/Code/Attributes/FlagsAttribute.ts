/// <reference path="Attribute.ts"/>

module System {

	/// <summary>
	///   The FlagsAttribute tags enumerations as bitfields.
	/// </summary>
	///
	/// <remarks>
	///   The FlagsAttribute can be used to tag an enumeration to be 
	///   a bit field.  This will allow the compiler and visual tools
	///   to treat the bits in an enumeration as a set of flags.
	/// </remarks>


	export class FlagsAttribute extends Attribute {
        static _type: Type = System.Type.registerClass(FlagsAttribute, "System.FlagsAttribute", []);
		//No methods
		
    }

    

}
