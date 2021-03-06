/// <reference path="Attributes/Attribute.ts" />

declare var JSString;
JSString = window["String"];



module System {


    export class Type extends System.Object {

        // *** STATIC 

        //List of all the types
        private static _types: Type[] = Type.InitializeType();


        private obj: any;
        private implementations: string[] = [];

        public name: string;

        public isRuntimeType: boolean = false;
        public isClass: boolean = false;
        public isInterface: boolean = false;
        public isEnum: boolean = false;

        constructor() {
            super();
        }

        static registerClass(_class: any, name: string, interfaces: string[]): Type {
            var res = new Type();
            res.isClass = true;
            res.name = name;
            res.obj = _class;
            res.implementations.concat(interfaces);

            Type._types.push(res);
            return res;
        }


        static registerInterface(name: string, parent?: string) {
            var res = new Type();
            res.isInterface = true;
            res.name = name;
            if (parent) {
                res.implementations.push(parent);
            }
            Type._types.push(res);
        }


        static registerEnum(_enum: any, name: string) {

            var res = new Type();
            res.isEnum = true;
            res.name = name;
            res.obj = _enum;
            Type._types.push(res);
            return res;
        }

        // Idea was to register the JS internal types as well : string, number, function, Object, etc.
        private static registerInternal(_type: any, name: string): Type {
            var res = new Type();
            res.isRuntimeType = true;
            res.obj = _type;
            res.name = (typeof _type);
            return res;
        }

        // TODO : just a mockup for the moment..
        public static registerAttribute(_type: any, attrName, attribute: System.Attribute) {

        }


        static getTypeName(obj: any): string {
            if (!obj) return "undefined";
            var str = typeof obj;
            if (str === "Object") {
                if ((<Object>obj).hasOwnProperty("getType")) {
                    return (<Object>obj).getType().name;
                }
            }
            return str;
        }

        

        private static InitializeType(): Type[] {
            var res: Type[] = [];
            res.push(Type.registerInternal(Number, typeof 0));
            res.push(Type.registerInternal(JSString, typeof ""));
            res.push(Type.registerInternal(Boolean, typeof true));
            res.push(Type.registerInternal(Uint8Array, typeof Uint8Array));
            res.push(Type.registerInternal(Uint16Array, typeof Uint16Array));
            res.push(Type.registerInternal(Uint32Array, typeof Uint32Array));
            return res;
        }

    }


}