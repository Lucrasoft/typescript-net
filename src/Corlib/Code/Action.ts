module System {


    export interface Action<T> { (arg: T): void; }
    export interface Action2<T1, T2> { (arg1: T1, arg2: T2): void; }
    export interface Action3<T1, T2, T3> { (arg1: T1, arg2: T2, arg3: T3): void; }

}