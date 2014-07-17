/// <reference path="Attribute.ts" />
/// <reference path="AttributeTargets.ts" />
//todo is de klas registratie goed.


module System {

    export class AttributeUsageAttribute extends Attribute {
        static _type: Type = System.Type.registerClass(AttributeUsageAttribute, "System.AttributeUsageAttribute", []);


        private valid_on: AttributeTargets;
        public Inherited: boolean = true;
        public AllowMultiple: boolean;

        constructor(validOn: AttributeTargets) {
            super();
            this.valid_on = validOn;
        }

        get validOn(): AttributeTargets {
            return this.valid_on;
        }


        //IObject
        getType(): Type { return AttributeUsageAttribute._type; }
    }
}
