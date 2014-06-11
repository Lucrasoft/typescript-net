module System {

    export interface IComparable<T> {
        CompareTo(other: T): number;
    }
}