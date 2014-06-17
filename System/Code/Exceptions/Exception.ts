/// <reference path="../Type.ts"/>
/// <reference path="../IObject.ts"/>

module System {

    export class Exception implements Error, IObject {
        private static type = System.Type.registerClass(Exception, "System.Exception", []);

        public get name(): string {
            return this.getType().name;
        }

        public message: string = "";
        private err: Error;
   
    
        constructor(message?: string, innerException?: Exception) {

            this.err = new Error(message);
            if (message) {
                this.message = message;
            }

        }

        //IObject
        getType(): Type { return Exception.type; }

    }


   
}