///<reference path="Exception.ts"/>

module System {

    export class InvalidTimeZoneException extends Exception {

        static _type: Type = System.Type.registerClass(InvalidTimeZoneException, "System.InvalidTimeZoneException", []);

        constructor(message?: string, innerException?: Exception) {
            super(message, innerException);

        }

    }

}
 