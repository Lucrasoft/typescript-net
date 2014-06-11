/// <reference path="Environment.ts" />
/// <reference path="Environment.ts" />


module System {

    //Wrapper around the built-in javascript randaom 

    export class Random implements IObject {
        private static _type: Type = System.Type.RegisterClass(Random, "System.Random", []);

        constructor(Seed: number = Environment.TickCount) {

        }

        private Sample(): number {
            return Math.random();
        }

        //returns an int
        public Next(): number;
        public Next(maxValue: number): number;
        public Next(minValue: number, maxValue: number): number;


        public Next(minOrMaxValue: number = 0, maxValue?: number): number {
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


        public NextBytes(buffer: Uint8Array): void {
            if (buffer == null) throw new ArgumentNullException("buffer");

            for (var i: number = 0; i < buffer.length; i++) {
                buffer[i] = Math.floor(this.Sample() * (System.Byte.MaxValue + 1));
            }
        }

        public NextDouble(): number {
            return this.Sample();
        }

        //IObject
        public GetType(): Type { return Random._type; } 

    }

}