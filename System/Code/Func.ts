module System {
    export interface Func<TResult> { (): TResult; }

    export interface Func1<T, TResult> { (arg: T): TResult; }
    export interface Func2<T1, T2, TResult> { (arg1: T1, arg2: T2): TResult; }
    export interface Func3<T1, T2, T3, TResult> { (arg1: T1, arg2: T2, arg3: T3): TResult; }

} 