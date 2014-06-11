export declare class Yielder {
    private _current;
    public current(): any;
    public yieldReturn(value: any): boolean;
    public yieldBreaK(): boolean;
}
export declare class EnumeratorImpl<T> implements System.IEnumerator<T> {
    private initialize;
    private tryGetNext;
    private dispose;
    private yielder;
    private state;
    private initializefunc;
    constructor(initialize: Function, tryGetNext: Function, dispose: Function);
    public Current : T;
    public MoveNext(): boolean;
    public Reset(): void;
    public Dispose(): void;
}
