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

        static typeOf(object: any): Type {
            if (!object) {
                throw new ArgumentNullException("Object");
            }
            if (!object._type) {
                //Idea : 
                throw new ArgumentException("object should be a typescript-net Class");
            }

            return object._type;
        }


        //Simulates the c# Using statement
        static using(object: System.IDisposable, action: Function) {

            try {
            action();
            }
            finally {
            object.dispose();
            }

        }

        static lock<T>(object: any, action: Function) : T {
            //for now : just execute the action.
            return action();

        }


        //Simulates the "is" statement of C# 
        //Example in C# : if ( obj is Guid) { }
        //Example in TS : if (Statements.is(obj, Guid)

        static is(object: any, interfaceName: string): boolean;
        static is(object: any, Class: any): boolean;

        static is(object: any, ClassInterface: any): boolean {

            if (!object) {
                return false;
            }
            if (!object.GetType) {
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
