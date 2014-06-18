/// <reference path="IObject.ts"/>
/// <reference path="Type.ts"/>

module System {

    //just a start.. 

    export class String implements IObject {
        private static _type: Type = System.Type.registerClass(String, "System.String", []);


        static get empty() : string {
             return "";
        }

        static format(value: string, ...replacements: any[]): string {

            var formatted = value;
            for (var i = 0; i < replacements.length; i++) {
                formatted = formatted.replace(
                    RegExp("\\{" + i + "\\}", 'g'), replacements[i].toString());
            }
            return formatted;
     
        }



        static isNullOrEmpty(value: string) : boolean
 		{
                return (value == null) || (value.length == 0);
		}


        //IObject
        getType(): Type { return String._type; }

    }

}