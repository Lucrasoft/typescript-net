/// <reference path="Type.ts"/>

module System {

    //just a start.. 

    export class String extends System.Object {
        static _type: Type = System.Type.registerClass(String, "System.String", []);




        constructor() {
            super();
        }

        static fromCharArray(input: Char[], startIndex: number, length: number): string {
            var result = "";
            for (var i = startIndex; i < length; i++) {
                result += <string>JSString.fromCharCode(input[i]);
            }
            
            return result;
        }

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
        //getType(): Type { return String._type; }

    }

}