module System {

    export interface ICollection<T> extends IEnumberable<T> {

        Count: number;
        IsReadOnly: boolean;
        Add(item: T): void;
        Clear(): void;
        Contains(item: T): boolean;
        CopyTo(array: T[], arrayIndex: number): void;
        Remove(item: T): boolean;



    }


}