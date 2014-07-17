/// <reference path="Action.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
/// <reference path="Interfaces/IEnumerable.ts" />
/// <reference path="Type.ts"/>
var System;
(function (System) {
    var Statements = (function () {
        function Statements() {
        }
        //Simulates the ForEach statement
        Statements.forEach = function (collection, callback) {
            var enumerator = collection.getEnumerator();
            while (enumerator.moveNext()) {
                callback(enumerator.current);
            }
        };

        Statements.typeOf = function (object) {
            if (!object) {
                throw new System.ArgumentNullException("Object");
            }
            if (!object._type) {
                throw new System.ArgumentException("object should be a typescript-net Class");
            }

            return object._type;
        };

        //Simulates the c# Using statement
        Statements.using = function (object, action) {
            try  {
                action();
            } finally {
                object.dispose();
            }
        };

        Statements.lock = function (object, action) {
            //for now : just execute the action.
            return action();
        };

        Statements.is = function (object, ClassInterface) {
            if (!object) {
                return false;
            }
            if (!object.GetType) {
                return false;
            }

            //if TypeClassInterface is a
            if (typeof ClassInterface == "string") {
                //het gaat om een interface ?!
            }
            //TODO : name check is way too simple!
            //  1. overervering class
            //  2. interfaces
        };
        return Statements;
    })();
    System.Statements = Statements;
})(System || (System = {}));
//# sourceMappingURL=Statements.js.map
