module System {


    export interface IAsyncResult {
        AsyncState: any;
        //AsyncWaitHandle: WaitHandle;
        CompletedSynchronously: boolean;
        IsCompleted: boolean;
    }

    System.Type.registerInterface("System.IAsyncResult");
}
	