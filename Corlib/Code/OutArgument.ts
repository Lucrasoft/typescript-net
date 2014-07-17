module System {

    
    export interface IOutArgument<T> {
        value: T;
    }

    //Used to simulate the "out" arguments.
    export class OutArgument<T> implements IOutArgument<T> {
        constructor(public value?: T) { }
    }

}