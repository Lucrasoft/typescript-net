/// <reference path="../Type.ts"/>

module System {

    export class Exception extends System.Object implements Error {
        private static type = System.Type.registerClass(Exception, "System.Exception", []);

        public get name(): string {
            return this.getType().name;
        }

        public message: string = "";
        private err: Error;
   
    
        constructor(message?: string, innerException?: Exception) {
            super();

            this.err = new Error(message);
            if (message) {
                this.message = message;
            }
        }

        //IObject
        getType(): Type { return Exception.type; }

    }


   
}