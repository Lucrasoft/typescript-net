/// <reference path="Type.ts"/>

module System {
    export class EventArgs extends System.Object {
        static _type: Type = System.Type.registerClass(EventArgs, "System.EventArgs", []);
        
        static Empty: EventArgs = new EventArgs();

        constructor() {
            super();
        }
        

        //IObject
        getType(): Type { return EventArgs._type; }
    }

}