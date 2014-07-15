

//TODO : classify it

module System {

    export class Array {

        public static clear(array: any, index: number, length: number) : void {
            if (array == null)
                throw new ArgumentNullException("array");

        
            if (length < 0)
                throw new IndexOutOfRangeException("length < 0");

            if (System.TypedArray.isTypedArray(array)) {
                System.Array.clearTypedArray(array, index, length);
                return;
            }

        }

        private static clearTypedArray(array: any, index: number, length: number) {
            
        }

    }
}