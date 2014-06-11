module System {



    export interface EventHandler<TEventArgs extends EventArgs> {
        (sender: any, e: TEventArgs): void;
    }
}

