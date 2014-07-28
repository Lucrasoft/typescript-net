module System {

    
    //todo cannot extend 2 classes
	export class UriFormatException extends  FormatException, ISerializable
	{
        constructor(textString: string = "Invalid URI format", e?: Exception) {
            super(textString, e);

        }


    // Methods

    // This effectively kills the LinkDemand from Exception.GetObjectData (if someone
    // use the ISerializable interface to serialize the object). See unit tests.

    //todo not sure if too keep
    //void ISerializable.GetObjectData(SerializationInfo info, StreamingContext context)
	//	{
    //    base.GetObjectData(info, context);
    //}
	}
}