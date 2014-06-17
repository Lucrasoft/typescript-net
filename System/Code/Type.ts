/// <reference path="IObject.ts" />  


declare var JSString;
JSString = window["String"];



module System {

    export class Type {
     


        private obj: Object;
        public IsRuntimeType: boolean = false;
        public IsClass: boolean = false;
        public IsInterface: boolean = false;

        public implementations: string[] = [];
        public name: string;


        // *** STATIC 

        //List of all the types
        private static _types: Type[] = Type.InitializeType();

        
     
       static registerClass(_class: any, name: string, interfaces: string[]): Type {
            var res = new Type();
            res.IsClass = true;
            res.name = name;
            res.obj = _class;
            res.implementations.concat(interfaces);
            Type._types.push(res);
            return res;
        }


        static registerInterface(name: string) {
            var res = new Type();
            res.IsInterface = true;
            res.name = name;
            Type._types.push(res);
        }


        // Idea was to register the JS internal types as well : string, number, function, object, etc. 
        private static RegisterInternal(_type: any, name: string): Type {
            var res = new Type();
            res.IsRuntimeType = true;
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
            res.push(Type.RegisterInternal(Number, typeof 0));
            res.push(Type.RegisterInternal(JSString, typeof ""));
            res.push(Type.RegisterInternal(Boolean, typeof true));
            return res;
        }

    }


}