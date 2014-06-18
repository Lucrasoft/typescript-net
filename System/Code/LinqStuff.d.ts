export declare class Yielder {
    private _current;
    public current(): any;
    public yieldReturn(value: any): boolean;
    public yieldBreaK(): boolean;
}
export declare class EnumeratorImpl<T> implements System.IEnumerator<T> {
    private initialize;
    private tryGetNext;
    private Dispose;
    private yielder;
    private state;
    private initializefunc;
    constructor(initialize: Function, tryGetNext: Function, Dispose: Function);
    public current : T;
    public moveNext(): boolean;
    public reset(): void;
    public dispose(): void;
}
