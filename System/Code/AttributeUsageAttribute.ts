/// <reference path="IObject.ts" />
/// <reference path="Type.ts" />
/// <reference path="Attribute.ts" />
/// <reference path="AttributeTargets.ts" />

module System {

    export class AttributeUsageAttribute extends Attribute implements IObject {
        private static _type: Type = System.Type.registerClass(Attribute, "System.Attribute", []);


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
