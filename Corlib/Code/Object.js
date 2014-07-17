/// <reference path="Type.ts" />
var System;
(function (System) {
    var Object = (function () {
        function Object() {
        }
        Object.prototype.equals = function (obj) {
            return this == obj;
        };

        // <summary>
        //   Compares two objects for equality
        // </summary>
        Object.equals = function (objA, objB) {
            if (objA == objB)
                return true;

            if (objA == null || objB == null)
                return false;

            return objA.equals(objB);
        };

        //not tested yet !
        Object.prototype.memberwiseClone = function () {
            var clone = this.getInstance(this);

            for (var prop in clone) {
                if (clone.hasOwnProperty(prop)) {
                    clone[prop] = this[prop];
                }
            }
            return clone;
        };

        Object.prototype.getInstance = function (t) {
            return new t;
        };

        Object.prototype.toString = function () {
            return this.getType().name;
        };

        Object.prototype.getType = function () {
            return Object._type;
        };
        Object._type = System.Type.registerClass(System.Object, "System.Object", []);
        return Object;
    })();
    System.Object = Object;
})(System || (System = {}));
//# sourceMappingURL=Object.js.map
