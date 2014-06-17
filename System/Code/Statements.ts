/// <reference path="Action.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
/// <reference path="Interfaces/IEnumerable.ts" />  
/// <reference path="Type.ts"/>

module System {

    export class Statements {

        //Simulates the ForEach statement
        static forEach<T>(collection: IEnumberable<T>, callback: System.Action<T>): void {
            
            var enumerator = collection.getEnumerator();
            while (enumerator.moveNext()) {
                callback(enumerator.current);
            }
        }


        static as<T>(object: any, TofT: Type): T {
            var objType = Statements.typeOf(object);

            return null;
        }

        //Simulates the "implements"
        static Implements(object: any, Interface: string) {
            throw new NotImplementedException();
        }

        static typeOf(object: any): Type {
            throw new NotImplementedException();
        }

        //Simulates the "is" statement of C# 
        //Example in C# : if ( obj is Guid) { }
        //Example in TS : if (Statements.is(obj,Guid.GetType())
        static is(object: any, type: Type): boolean {
            if (!object) {
                return false;
            }
            if (!object.GetType) {
                return false;
            }

            //TODO : name check is way too simple!
            //  1. overervering class
            //  2. interfaces
            return (object.getType().name == type.name);
        }

     
    }

}
