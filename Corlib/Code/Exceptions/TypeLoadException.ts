///<reference path="SystemException.ts"/>
//todo

module System
{

	export class TypeLoadException extends SystemException
	{
        static _type: Type = System.Type.registerClass(TypeLoadException, "System.TypeLoadException", []);


		Result: number = 0x80131522;

		// Fields
        private className: string;
        private assemblyName: string;


        constructor(message: string = "A type load exception has occurred.", inner?: Exception) {
            super(message, inner);

        }
		// Constructors
		//public TypeLoadException ()
		//	: base(Locale.GetText("A type load exception has occurred."))
		//{

        //HResult = Result;
		//}

		//public TypeLoadException (string message)
		//	: base(message)
		//{
        //HResult = Result;
		//}

		//public TypeLoadException (string message, Exception inner)
		//	: base(message, inner)
		//{
        //HResult = Result;
    //}

	//	internal TypeLoadException (string className, string assemblyName) : this()
	//	{
    //    this.className = className;
    //    this.assemblyName = assemblyName;
    //}

	//	protected TypeLoadException (SerializationInfo info, StreamingContext context)
	//		: base(info, context)
	//	{
    //    if (info == null)
    //        throw new ArgumentNullException("info");

    //    className = info.GetString("TypeLoadClassName");
    //    assemblyName = info.GetString("TypeLoadAssemblyName");
	//	}

	//	// Properties
	//	public override string Message {
	//		get {
    //        if (className != null) {
    //            if ((assemblyName != null) && (assemblyName != String.Empty))
    //                return String.Format("Could not load type '{0}' from assembly '{1}'.", className, assemblyName);
    //            else
    //                return String.Format("Could not load type '{0}'.", className);
    //        }
    //        else
    //            return base.Message;
    //    }
	//	}

	//	public string TypeName {
	//		get {
    //        if (className == null)
    //            return String.Empty;
    //        else
    //            return className;
    //    }
	//	}

	//	// Methods
	//	public override void GetObjectData(SerializationInfo info, StreamingContext context)
	//	{
    //    if (info == null)
    //        throw new ArgumentNullException("info");

    //    base.GetObjectData(info, context);
    //    info.AddValue("TypeLoadClassName", className, typeof (string));
    //    info.AddValue("TypeLoadAssemblyName", assemblyName, typeof (string));
    //    info.AddValue("TypeLoadMessageArg", "", typeof (string));
    //    info.AddValue("TypeLoadResourceID", 0, typeof (int));
    //}
	}
}
