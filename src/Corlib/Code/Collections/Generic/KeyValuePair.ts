module System.Collections.Generic {

    //TODO : [Serializable]
    export class KeyValuePair<TKey, TValue> {

        private key: TKey;
        private value: TValue;

        public get Key(): TKey {
            return this.key;
        }

        public get Value(): TValue {
            return this.value;
        }

        constructor(key: TKey, value: TValue) {
            this.key = key;
            this.value = value;
        }

		toString() : string {
            return "[" + (this.key != null ? this.key.toString() : "") + ", " + (this.value != null ? this.value.toString() : "") + "]";
        }
    }

}
