module System {

    //TODO : IObject
    export class Environment {

        constructor() {
            
        }


        public static get NewLine(): string {
            return "\r\n";
            //Or : <br />
        }

        public static get TickCount(): number {
            //simulate the tickcount by returning the millisecond
            return Date.now();
        }

    }

}