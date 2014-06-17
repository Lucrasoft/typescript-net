
export class Yielder {

    private _current = null;

    current() {
        return this._current;
    }

    yieldReturn(value) {
        this._current = value;
        return true;

    }
    yieldBreaK() {
        return false;
    }

}

enum State {
    Before= 0,
    Running = 1,
    After = 2
}



export class EnumeratorImpl<T>
  implements  System.IEnumerator<T> {


    private yielder = new Yielder();
    private state: State = State.Before;

    private initializefunc: Function;


    constructor(private initialize: Function, private tryGetNext : Function, private Dispose : Function) {

    }


    public get current() :T {
        return this.yielder.current();
    }

    moveNext(): boolean {
        try {
            switch (this.state) {
                case State.Before:
                    this.state = State.Running;
                    this.initialize();
                // fall through
                case State.Running:
                    if (this.tryGetNext.apply(this.yielder)) {
                        return true;
                    }
                    else {
                        this.dispose();
                        return false;
                    }
                case State.After:
                    return false;
            }
        }
        catch (e) {
            this.dispose();
            throw e;
        }
    }

    reset() {

    }

    dispose() {
        if (this.state != State.Running) return;

        try {
            this.dispose();
        }
        finally {
            this.state = State.After;
        }
       
    }

}


