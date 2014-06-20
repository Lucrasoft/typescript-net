/// <reference path="Action.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
/// <reference path="Interfaces/IEnumerable.ts" />  
/// <reference path="Type.ts"/>

module System {

    export class Statements {

        constructor() {
            
        }

        //Simulates the ForEach statement
        static forEach<T>(collection: IEnumberable<T>, callback: System.Action<T>): void {
            
            var enumerator = collection.getEnumerator();
            while (enumerator.moveNext()) {
                callback(enumerator.current);
            }
        }

        static typeOf(object: System.Object): Type {
            if (!object) {
                throw new ArgumentNullException("Object");
            }
            return object.getType();
        }

   

        //Simulates the "implements" method
        //Type checking is namebased.
        static Implements(object: any, Interface: string) {

            //check if object has 
            if (!object) {
                throw new ArgumentNullException("Object should not be null.");
            }

            
            throw new NotImplementedException();
        }

      

        //Simulates the "is" statement of C# 
        //Example in C# : if ( obj is Guid) { }
        //Example in TS : if (Statements.is(obj,Guid)
        static is(object: any, type: System.Object): boolean {
            if (!object) {
                return false;
            }
            if (!object.GetType) {
                return false;
            }

            //TODO : name check is way too simple!
            //  1. overervering class
            //  2. interfaces
            return (object.getType().name == type.getType().name);
        }

     
    }

}
