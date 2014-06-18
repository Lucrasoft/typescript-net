

module System {

    export interface IEquatable<T> {
        equals(other: T): boolean;
    }
} 