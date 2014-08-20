/// <reference path="Type.ts" />

module System {

    export class Object {

        static _type = System.Type.registerClass(System.Object, "System.Object", []);

        constructor() {

        }

        public equals( obj : any): boolean {
            return this == obj;
        }

        // <summary>
        //   Compares two objects for equality
        // </summary>
        static equals(objA: any, objB: any): boolean {
            if (objA == objB)
                return true;

            if (objA == null || objB == null)
                return false;

            return objA.equals(objB);
        }

        //not tested yet !
        private memberwiseClone(): System.Object {
            var clone = this.getInstance(this);

            for (var prop in clone) {
                if (clone.hasOwnProperty(prop)) {
                    
                    clone[prop] = this[prop];
                }
            }
            return clone;
        }

        private getInstance(t: any) {
            return new t;
        }

        toString(): string {
            return this.getType().name;
        }

        getType(): Type { return Object._type; }

    }

}