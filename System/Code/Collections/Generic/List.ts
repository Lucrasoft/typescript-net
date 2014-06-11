

module System.Collections.Generic {

    export class List<T> implements IList<T>, IEnumberable<T>, IObject {
        public static _type: Type = System.Type.RegisterClass(List, "System.Collections.Generic.List", [""]);

        private list: T[] = [];
        public changecount: number = 0;


        public get Count() : number {
            return this.list.length;
        }

        public get IsReadOnly(): boolean {
            return false;
        }

        add(item: T): void {
            this.changecount++;
            this.list.push(item);
        }

        clear(): void {
            this.changecount++;
            this.list = [];
        }

        public Contains(item: T): boolean {
            return (this.list.indexOf(item) > -1);
        }

        public CopyTo(array: T[], arrayIndex: number): void {
            //TODO : verify !
            for (var i: number = 0; i < this.list.length; i++) {
                array[i + arrayIndex] = this.list[i];
            }
        }

        public Remove(item: T): boolean {
            this.changecount++;
            var index = this.IndexOf(item);
            if (index >= 0) {
                this.list.splice(index);
                return true;
            }
            return false;
        }


        public Indexer(index: number): T {
            return this.list[index];
        }

        public IndexOf(item: T): number {
            return this.list.indexOf(item);
        }

        public RemoveAt(index: number): void {
            if (index >= this.list.length) {
                throw new ArgumentOutOfRangeException("", null, "index");
            }
            this.changecount++;
            this.list.splice(index);

        }

        public Insert(index: number, item: T): void {
            this.changecount++;
            this.list.splice(2, 0, item);
        }


        public GetEnumerator(): System.IEnumerator<T> {
            return new ListEnumerator(this);
        }


        //IObject
        public getType(): Type { return List._type; }


    }

    class ListEnumerator<T> implements IEnumerator<T> {

        private interalList: List<T>;
        private current: T;
        private lastchangecount: number;
        private index: number;


        constructor(list: List<T>) {
            this.interalList = list;
            this.lastchangecount = this.interalList.changecount;
        }

        private checkChangeCount() {
            if (this.lastchangecount != this.interalList.changecount) {
                throw new InvalidOperationException("List changed during enumeration");
            }
        }

        public get Current(): T {
            return this.current;
        }

        public MoveNext(): boolean {

            if (this.index < this.interalList.Count) {
                this.current = this.interalList.Indexer(this.index);
                this.index++;
                return true;
            }

            this.checkChangeCount();

            this.index = this.interalList.Count + 1;
            this.current = null;
            return false;
        }

        public Reset(): void {
            this.index = -1;
        }

        public Dispose(): void {
            this.interalList = null;
        }


    }


}