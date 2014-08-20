/// <reference path="StreamingContextStates.ts" />  
/// <reference path="../../Type.ts"/>
/// <reference path="../../Statements.ts"/>

module System.Runtime.Serialization {



    export class StreamingContext extends System.Object {
        static _type: Type = System.Type.registerClass(StreamingContext, "System.Runtime.Serialization.StreamingContext", []);

        state: StreamingContextStates
		additional: any;


        constructor(state: StreamingContextStates, additional: any = null) {
            super();
            this.state = state;
            this.additional = additional;
        }

       get Context(): any {
            return this.additional;
        }

        get State(): StreamingContextStates {
            return this.state;
        }

        equals(obj: any): boolean {
            if (!(Statements.is(obj, StreamingContext._type))) return false;

            var other = <StreamingContext> obj;
            return (other.state == this.state) && (other.additional == this.additional);
        }

        getHashCode(): number {
            return this.state;
        }

        getType(): Type { return StreamingContext._type; }
    }
}