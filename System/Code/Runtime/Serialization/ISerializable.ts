/// <reference path="StreamingContext.ts" />
/// <reference path="SerializationInfo.ts"/>


module System.Runtime.Serialization {


    export interface ISerializable {

        getObjectData(info: SerializationInfo, context: StreamingContext ) : void
    }

    System.Type.registerInterface("System.Runtime.Serialization.ISerializable");
}