


module System {
    export class EventArgs implements IObject {
        public static _type: Type = System.Type.RegisterClass(EventArgs, "System.EventArgs", []);
        
        public static Empty: EventArgs = new EventArgs();

        constructor() { }
        

        //IObject
        public GetType(): Type { return EventArgs._type; }
    }

}