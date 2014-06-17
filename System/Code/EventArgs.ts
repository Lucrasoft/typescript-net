/// <reference path="IObject.ts"/>
/// <reference path="Type.ts"/>

module System {
    export class EventArgs implements IObject {
        public static _type: Type = System.Type.registerClass(EventArgs, "System.EventArgs", []);
        
        public static Empty: EventArgs = new EventArgs();

        constructor() { }
        

        //IObject
        public getType(): Type { return EventArgs._type; }
    }

}