/// <reference path="StreamingContextStates.ts" />  


module System.Runtime.Serialization {



    export class StreamingContext implements IObject {
        private static _type: Type = System.Type.RegisterClass(StreamingContext, "System.Runtime.Serialization.StreamingContext", []);

        state: StreamingContextStates
		additional: any;


        constructor(state: StreamingContextStates, additional: any = null) {
            this.state = state;
            this.additional = additional;
        }

        public get Context(): any {
            return this.additional;
        }

        public get State(): StreamingContextStates {
            return this.state;
        }

        public Equals(obj: any): boolean {
            if (!(Statements.Is(obj, StreamingContext._type))) return false;

            var other = <StreamingContext> obj;
            return (other.state == this.state) && (other.additional == this.additional);
        }

        public GetHashCode(): number {
            return this.state;
        }

        public GetType(): Type { return StreamingContext._type; }
    }
}