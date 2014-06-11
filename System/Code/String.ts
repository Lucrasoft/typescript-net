

module System {



    export class String implements IObject {
        private static _type: Type = System.Type.RegisterClass(String, "System.String", []);


        static get Empty() : string {
             return "";
        }

        static Format(value: string, ...replacements: any[]): string {

            var formatted = value;
            for (var i = 0; i < replacements.length; i++) {
                formatted = formatted.replace(
                    RegExp("\\{" + i + "\\}", 'g'), replacements[i].toString());
            }
            return formatted;
     
        }



        public static IsNullOrEmpty(value: string) : boolean
 		{
                return (value == null) || (value.length == 0);
		}


        //IObject
        public GetType(): Type { return String._type; }

    }

}