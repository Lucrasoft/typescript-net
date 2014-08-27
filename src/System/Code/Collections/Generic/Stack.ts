/// <reference path="../../../../corlib/code/interfaces/ienumerable.ts" />
/// <reference path="../../../../corlib/code/collections/generic/icollection.ts" />

module System.Collections.Generic
{

	public class Stack <T> implements IEnumerable < T>, ICollection, IEnumerable
	{
		_array: T[];
		_size: number;
		_version:number;

		private INITIAL_SIZE: number = 16;

        constructor(capacity?: number)
        constructor(collection?: IEnumerable<T>)
        {

            if (capacity != null) {
                if (capacity < 0)
                    throw new ArgumentOutOfRangeException("capacity");
                _array = new T[capacity];
            }
            if (collection != null) {

                if (collection == null)
                    throw new ArgumentNullException("collection");

                ICollection < T > col = collection as ICollection < T>;

                if (col != null) {
                    _size = col.Count;
                    _array = new T[_size];
                    col.CopyTo(_array, 0);
                } else {
                    foreach(t: T in collection)
					Push(t);
                }
            }

            

        }



		public Stack(IEnumerable < T > collection)
		{
        if (collection == null)
            throw new ArgumentNullException("collection");

        ICollection < T > col = collection as ICollection < T>;

        if (col != null) {
            _size = col.Count;
            _array = new T[_size];
            col.CopyTo(_array, 0);
        } else {
            foreach(t:T in collection)
					Push(t);
        }
		}

		public Clear(): void
		{
        if (_array != null)
            Array.Clear(_array, 0, _array.Length);

        _size = 0;
        _version++;
		}

		public Contains(item: T): boolean
		{
            return _array != null && Array.IndexOf(_array, item, 0, _size) != -1;
		}

        public CopyTo(array: T[], arrayIndex: number): void
		{
        if (array == null)
            throw new ArgumentNullException("array");
        if (arrayIndex < 0)
            throw new ArgumentOutOfRangeException("idx");

        // this gets copied in the order that it is poped
        if (this._array != null) {
            Array.Copy(_array, 0, array, arrayIndex, _size);
            Array.Reverse(array, arrayIndex, _size);
        }
		}

		public Peek(): T
		{
        if (_size == 0)
            throw new InvalidOperationException();

        return this._array[_size - 1];
		}

		public Pop(): T
		{
        if (_size == 0)
            throw new InvalidOperationException();

        _version++;
			popped: T = _array[--_size];
        // clear stuff out to make the GC happy
        _array[_size] = default(T);
        return popped;
		}

        public Push(item: T): void
		{
        if (_array == null || _size == _array.Length)
            Array.Resize<T>(ref this._array, _size == 0 ? INITIAL_SIZE : 2 * _size);

        _version++;

        this._array[_size++] = item;
		}

        public ToArray(): T[]
		{
            copy: T [] = new T[_size];
        CopyTo(copy, 0);
        return copy;
		}

		public TrimExcess(): void
		{
        if (_array != null && (_size < _array.Length * 0.9))
            Array.Resize<T>(ref this._array, _size);
        this._version++;
		}

		public get Count(): number {
			  return _size; 
        }
		
		get ICollection.IsSynchronized(): boolean {
			return false; 
        }
		
		get ICollection.SyncRoot(): Object {
			 return this; 
        }

        ICollection.CopyTo(dest: Array, idx: number): get
		{
        try {
            if (_array != null) {
                Array.Copy(_array, 0, dest, idx, _size);
                Array.Reverse(dest, idx, _size);
            }
        } catch (ArrayTypeMismatchException) {
            throw new ArgumentException();
        }
		}

        public GetEnumerator(): Enumerator
		{
        return new Enumerator(this);
        }

        IEnumerable<T>.GetEnumerator(): IEnumerator<T>
		{
        return GetEnumerator();
        }

		IEnumerable.GetEnumerator(): IEnumerator
		{
        return GetEnumerator();
        }
		
		public struct Enumerator: IEnumerator < T>, IEnumerator, IDisposable {
			NOT_STARTED = -2: number;

			// this MUST be -1, because we depend on it in move next.
			// we just decr the _size, so, 0 - 1 == FINISHED
			FINISHED = -1: number;

            parent: Stack < T > ;
			idx: number;
			_version: number;
			
			Enumerator(t: Stack < T > )
			{
            parent = t;
            idx = NOT_STARTED;
            _version = t._version;
			}

			// for some reason, MSFT added a dispose to this class
			// It means that in foreach, we must still do a try/finally. broken?
			Dispose():void
			{
                idx = FINISHED;
			}

			MoveNext(): boolean
			{
            if (_version != parent._version)
                throw new InvalidOperationException();

            if (idx == -2)
                idx = parent._size;

            return idx != FINISHED && --idx != FINISHED;
			}

            public get Current: T { 
                if (idx < 0)
                    throw new InvalidOperationException();

                return parent._array[idx];
            }

            IEnumerator.Reset(): void
			{
            if (_version != parent._version)
                throw new InvalidOperationException();

            idx = NOT_STARTED;
            }
			
			get IEnumerator.Current(): Object {
				  return Current; 
            }
			
		}
	}
}
