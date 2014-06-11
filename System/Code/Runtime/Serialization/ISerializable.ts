

module System.Runtime.Serialization {


    export interface ISerializable {

        GetObjectData(info: SerializationInfo, context: StreamingContext ) : void
    }


}