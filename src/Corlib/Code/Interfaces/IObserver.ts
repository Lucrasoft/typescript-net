module System
{
	export interface IObserver<T>
	{
        onCompleted(): void;
        onError(error: Exception): void;
        onNext(value: T): void;
    }

    System.Type.registerInterface("System.IObserver");

}

