/// <reference path="Environment.ts" />
/// <reference path="IObject.ts" />
/// <reference path="Exceptions/ArgumentOutOfRangeException.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="Byte.ts"/>
/// <reference path="Type.ts"/>


module System {

    //Wrapper around the built-in javascript random 

    export class Random implements IObject {
        private static _type: Type = System.Type.registerClass(Random, "System.Random", []);

        constructor(Seed: number = Environment.TickCount) {

        }

        private Sample(): number {
            return Math.random();
        }

        //returns an int
        next(): number;
        next(maxValue: number): number;
        next(minValue: number, maxValue: number): number;


        next(minOrMaxValue: number = 0, maxValue?: number): number {
            var min : number, max : number;
            if (maxValue) {
                //then we are in min-max range
                min = minOrMaxValue;
                max = maxValue;
            } else {
                min = 0;
                max = (minOrMaxValue) ? minOrMaxValue : System.Int32.MaxValue;
            }

     
            if (max < 0) throw new ArgumentOutOfRangeException("Max value is less than min value.");
            if (min > max) throw new ArgumentOutOfRangeException("Min value is greater than max value.");

            // special case: a difference of one (or less) will always return the minimum
            // e.g. -1,-1 or -1,0 will always return -1
            var diff = Math.abs(max - min);
            if (diff <= 1) return min;

            return Math.floor((this.Sample() * diff) + min);

        }


        nextBytes(buffer: Uint8Array): void {
            if (buffer == null) throw new ArgumentNullException("buffer");

            for (var i: number = 0; i < buffer.length; i++) {
                buffer[i] = Math.floor(this.Sample() * (System.Byte.MaxValue + 1));
            }
        }

        nextDouble(): number {
            return this.Sample();
        }

        //IObject
        getType(): Type { return Random._type; } 

    }

}