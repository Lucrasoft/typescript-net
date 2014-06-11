
module System {

    export class Exception implements Error, IObject {
        private static _type = System.Type.RegisterClass(Exception, "System.Exception", []);

        public get name(): string {
            return this.GetType().name;
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
        public GetType(): Type { return Exception._type; }

    }


   
}