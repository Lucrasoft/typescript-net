module System
{
	export interface IObservable<T>
	{
        subscribe(observer: IObserver<T>): IDisposable;
    }

    System.Type.registerInterface("System.IObservable");

}
