//todo

module System
{
    export class TypeUnloadedException extends SystemException {

        // Constructors
        constructor(message: string, innerException?: Exception);
        constructor(stringOrSerializationInfoParameter?: any, exceptionOrStreamingContextParameter?: any) {
            if (!stringOrSerializationInfoParameter) {
                if(!exceptionOrStreamingContextParameter)
                    super(Locale.GetText("Cannot access an unloaded class."));
            } else {
                if (typeof stringOrSerializationInfoParameter == "string") {
                    if (!exceptionOrStreamingContextParameter) {
                        super(stringOrSerializationInfoParameter);
                    } else {
                        super(stringOrSerializationInfoParameter, exceptionOrStreamingContextParameter);
                    }
                } else {
                    super(stringOrSerializationInfoParameter, exceptionOrStreamingContextParameter);
                }
            }

        }
    }
}
