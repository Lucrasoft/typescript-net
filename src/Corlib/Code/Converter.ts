module System
{

    export interface Converter<TInput, TOutput> {
        (input: TInput): TOutput;
    }

    System.Type.registerInterface("System.Converter");
}