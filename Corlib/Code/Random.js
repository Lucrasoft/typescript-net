/// <reference path="Environment.ts" />
/// <reference path="Exceptions/ArgumentOutOfRangeException.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="Byte.ts"/>
/// <reference path="Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    //Wrapper around the built-in javascript random
    var Random = (function (_super) {
        __extends(Random, _super);
        function Random(Seed) {
            if (typeof Seed === "undefined") { Seed = System.Environment.TickCount; }
            _super.call(this);
        }
        Random.prototype.Sample = function () {
            return Math.random();
        };

        Random.prototype.next = function (minOrMaxValue, maxValue) {
            if (typeof minOrMaxValue === "undefined") { minOrMaxValue = 0; }
            var min, max;
            if (maxValue) {
                //then we are in min-max range
                min = minOrMaxValue;
                max = maxValue;
            } else {
                min = 0;
                max = (minOrMaxValue) ? minOrMaxValue : System.Int32.MaxValue;
            }

            if (max < 0)
                throw new System.ArgumentOutOfRangeException("Max value is less than min value.");
            if (min > max)
                throw new System.ArgumentOutOfRangeException("Min value is greater than max value.");

            // special case: a difference of one (or less) will always return the minimum
            // e.g. -1,-1 or -1,0 will always return -1
            var diff = Math.abs(max - min);
            if (diff <= 1)
                return min;

            return Math.floor((this.Sample() * diff) + min);
        };

        Random.prototype.nextBytes = function (buffer) {
            if (buffer == null)
                throw new System.ArgumentNullException("buffer");

            for (var i = 0; i < buffer.length; i++) {
                buffer[i] = Math.floor(this.Sample() * (System.Byte.MaxValue + 1));
            }
        };

        Random.prototype.nextDouble = function () {
            return this.Sample();
        };

        //IObject
        Random.prototype.getType = function () {
            return Random._type;
        };
        Random._type = System.Type.registerClass(Random, "System.Random", []);
        return Random;
    })(System.Object);
    System.Random = Random;
})(System || (System = {}));
//# sourceMappingURL=Random.js.map
