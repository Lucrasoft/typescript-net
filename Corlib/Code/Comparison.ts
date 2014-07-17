//todo

module System
{
    
    export interface Comparison<T> {
        (x: T, y: T): number;
    }

    System.Type.registerInterface("System.Comparison");

}