/// <reference path="../Type.ts"/>

module System {

    export class Exception extends System.Object implements Error {
        static _type : Type = System.Type.registerClass(Exception, "System.Exception", []);

        public get name(): string {
            return this.getType().name;
        }

        public message: string = "";
        public HResult: number = 0;
        private err: Error;
   
    
        constructor(message?: string, innerException?: Exception) {
            super();

            this.err = new Error(message);
            if (message) {
                this.message = message;
            }
        }

        //IObject
        getType(): Type { return Exception._type; }

    }


   
}