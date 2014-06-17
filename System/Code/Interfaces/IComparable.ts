module System {

    export interface IComparable<T> {
        compareTo(other: T): number;
    }
}