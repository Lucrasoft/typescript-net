/// <reference path="Action.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
/// <reference path="Interfaces/IEnumerable.ts" />  
/// <reference path="Type.ts"/>
//todo

module System {

    export class Statements {

        constructor() { }

        //Simulates the ForEach statement
        //static forEach<T>(collection: IEnumberable<T>, callback: System.Action<T>): void {
            
        //    var enumerator = collection.getEnumerator();
        //    while (enumerator.moveNext()) {
        //        callback(enumerator.current);
        //    }
        //}

        static typeOf(Object: any): Type {
            if (!Object) {
                throw new ArgumentNullException("Object");
            }
            if (!Object._type) {
                //Idea : 
                throw new ArgumentException("Object should be a typescript-net Class");
            }

            return Object._type;
        }


        //Simulates the c# Using statement
        static using(Object: System.IDisposable, action: Function) {

            try {
            action();
            }
            finally {
            Object.dispose();
            }

        }

        static lock<T>(Object: any, action: Function) : T {
            //for now : just execute the action.
            return action();

        }


        //Simulates the "is" statement of C# 
        //Example in C# : if ( obj is Guid) { }
        //Example in TS : if (Statements.is(obj, Guid)

        static is(Object: any, interfaceName: string): boolean;
        static is(Object: any, Class: any): boolean;

        static is(Object: any, ClassInterface: any): boolean {

            if (!Object) {
                return false;
            }
            if (!Object.GetType) {
                return false;
            }

            //if TypeClassInterface is a 

            if (typeof ClassInterface == "string") {
                //het gaat om een interface ?!
            }

            //TODO : name check is way too simple!
            //  1. overervering class
            //  2. interfaces
         
        }

     
    }

}
