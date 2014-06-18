/// <reference path="IObject.ts" />  


declare var JSString;
JSString = window["String"];



module System {

    export class Type {

        // *** STATIC 

        //List of all the types
        private static _types: Type[] = Type.InitializeType();


        private obj: any;

        public isRuntimeType: boolean = false;
        public isClass: boolean = false;
        public isInterface: boolean = false;

        public implementations: string[] = [];
        public name: string;
        
     
       static registerClass(_class: any, name: string, interfaces: string[]): Type {
            var res = new Type();
            res.isClass = true;
            res.name = name;
            res.obj = _class;
            res.implementations.concat(interfaces);
            Type._types.push(res);
            return res;
       }


        static registerInterface(name: string);
        static registerInterface(name: string, parent? : string) {
            var res = new Type();
            res.isInterface = true;
            res.name = name;
            if (parent) {
                res.implementations.push(parent);
            }
            Type._types.push(res);
        }


        // Idea was to register the JS internal types as well : string, number, function, object, etc. 
        private static registerInternal(_type: any, name: string): Type {
            var res = new Type();
            res.isRuntimeType = true;
            res.obj = _type;
            res.name = (typeof _type);
            return res;
        }


        static getTypeName(obj: any): string {
            if (!obj) return "undefined";
            var str = typeof obj;
            if (str === "object") {
                if ((<Object>obj).hasOwnProperty("GetType")) {
                    return (<IObject>obj).getType().name;
                }
            }
            return str;
        }


        private static InitializeType(): Type[] {
            var res: Type[] = [];
            res.push(Type.registerInternal(Number, typeof 0));
            res.push(Type.registerInternal(JSString, typeof ""));
            res.push(Type.registerInternal(Boolean, typeof true));
            return res;
        }

    }


}