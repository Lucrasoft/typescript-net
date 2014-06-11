/// <reference path="Action.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
/// <reference path="Interfaces/IEnumerable.ts" />  

module System {

    export class Statements {

        //Simulates the ForEach statement
        public static ForEach<T>(collection: IEnumberable<T>, callback: System.Action<T>): void {
            
            var enumerator = collection.GetEnumerator();
            while (enumerator.MoveNext()) {
                callback(enumerator.Current);
            }
        }


        public static As<T>(object: any, TofT: Type): T {
            var objType = Statements.TypeOf(object);

            return null;
        }

        //Simulates the "implements"
        public static Implements(object: any, Interface: string) {
            throw new NotImplementedException();
        }

        public static TypeOf(object: any): Type {
            throw new NotImplementedException();
        }

        //Simulates the "is" statement of C# 
        //Example in C# : if ( obj is Guid) { }
        //Example in TS : if (Statements.is(obj,Guid.GetType())
        public static Is(object: any, type: Type): boolean {
            if (!object) {
                return false;
            }
            if (!object.GetType) {
                return false;
            }

            //TODO : name check is way too simple!
            //  1. overervering class
            //  2. interfaces
            return (object.GetType().name == type.name);
        }

     
    }

}
