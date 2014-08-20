


module System
{

    export class ObjectDisposedException extends System.InvalidOperationException {
        static _type = System.Type.registerClass(ObjectDisposedException, "System.ObjectDisposedException", []);


        constructor(message?: string, innerException?: System.Exception, object?:string ) {
            super(message, innerException);
        }


        //IObject
        getType(): Type { return ObjectDisposedException._type; }
    }
}
