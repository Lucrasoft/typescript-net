
module System.Collections.Generic
{	
	export class Queue<T> implements IEnumerable < T>, ICollection, IEnumerable
	{
		_array: T [];
		_head: number;
		_tail: number;
		_size: number;
		_version: number;

		public Queue()
		{
        _array = new T[0];
		}

		public Queue(capacity: number)
		{
        if (capacity < 0)
            throw new ArgumentOutOfRangeException("capacity");

        _array = new T[capacity];
		}

        public Queue(collection: IEnumerable<T>)
		{
        if (collection == null)
            throw new ArgumentNullException("collection");

        var icoll = collection as ICollection < T>;
        var size = icoll != null ? icoll.Count : 0;

        _array = new T[size];

        foreach(t: T in collection)
				Enqueue(t);
		}

		Clear(): void
		{
        Array.Clear(_array, 0, _array.Length);

        _head = _tail = _size = 0;
        _version++;
		}

		Contains( item: T): boolean
		{
        if (item == null) {
            foreach(t:T in this)
					if (t == null)
                return true;
        } else {
            foreach(T t in this)
					if (item.Equals(t))
                return true;
        }

        return false;
		}

		CopyTo(Array: T[],arrayIndex: number): void
		{
        if (array == null)
            throw new ArgumentNullException();

			((ICollection) this).CopyTo(array, arrayIndex);
    }

        ICollection.CopyTo(array: Array, idx: number): void
		{
        if (array == null)
            throw new ArgumentNullException();
			
			if ((uint) idx > (uint) array.Length)
				throw new ArgumentOutOfRangeException();

        if (array.Length - idx < _size)
            throw new ArgumentOutOfRangeException();

        if (_size == 0)
            return;

        try {
				contents_length: number = _array.Length;
				length_from_head: number = contents_length - _head;

            Array.Copy(_array, _head, array, idx, Math.Min(_size, length_from_head));
            if (_size > length_from_head)
                Array.Copy(_array, 0, array,
                    idx + length_from_head,
                    _size - length_from_head);
        } catch (ArrayTypeMismatchException) {
            throw new ArgumentException();
        }
		}

		public Dequeue(): T
		{
			ret: T = Peek();

        // clear stuff out to make the GC happy
        _array[_head] = default (T);

        if (++_head == _array.Length)
            _head = 0;
        _size--;
        _version++;

        return ret;
		}

		public Peek(): T
		{
        if (_size == 0)
            throw new InvalidOperationException();

        return _array[_head];
		}

		public Enqueue(item: T): void
		{
        if (_size == _array.Length || _tail == _array.Length)
            SetCapacity(Math.Max(Math.Max(_size, _tail) * 2, 4));

        _array[_tail] = item;

        if (++_tail == _array.Length)
            this._tail = 0;

        this._size++;
        this._version++;
		}

        public ToArray(): T[]
		{
            t: T [] = new T[_size];
        CopyTo(t, 0);
        return t;
		}

		public TrimExcess(): void
		{
        if (_size < _array.Length * 0.9)
            SetCapacity(_size);
    }

    SetCapacity(new_size: number): void
		{
        if (new_size == _array.Length)
            return;

        if (new_size < _size)
            throw new InvalidOperationException("shouldnt happen");
			
           new_data: T [] = new T[new_size];
        if (_size > 0)
            CopyTo(new_data, 0);

        _array = new_data;
        _tail = _size;
        _head = 0;
        _version++;
		}

		public get Count(): number {
			 return this._size; 
        }
		
		get ICollection.IsSynchronized(): boolean {
			return false;
        }
		
		get ICollection.SyncRoot: Object {
			return this;
		}

		public GetEnumerator(): 
		{
        return new Enumerator(this);
        }

        IEnumerable<T>.GetEnumerator(): IEnumerator < T >
		{
        return this.GetEnumerator();
        }

        IEnumerable.GetEnumerator(): IEnumerator
		{
        return this.GetEnumerator();
        }
		
		public Enumerator: IEnumerator < T>, IEnumerator, IDisposable {
			NOT_STARTED: number = -2;

			// this MUST be -1, because we depend on it in move next.
			// we just decr the _size, so, 0 - 1 == FINISHED
			FINISHED: number = -1;

            q: Queue < T > ;
			idx: number;
			ver: number;
			
			Enumerator(q: this.Queue < T >)
			{
            this.q = q;
            this.idx = NOT_STARTED;
            ver = q._version;
			}

			// for some reason, MSFT added a dispose to this class
			// It means that in foreach, we must still do a try/finally. Broken?
			Dispose(): void
			{
                this.idx = NOT_STARTED;
			}

			MoveNext(): boolean
			{
            if (ver != q._version)
                throw new InvalidOperationException();

            if (idx == NOT_STARTED)
                idx = q._size;

            return idx != FINISHED && --idx != FINISHED;
			}

			public get Current : T{
				
                if (idx < 0)
                    throw new InvalidOperationException();

                return q._array[(q._size - 1 - idx + q._head) % q._array.Length];
            
            }

        IEnumerator.Reset(): void
			{
            if (ver != q._version)
                throw new InvalidOperationException();
            s
            idx = NOT_STARTED;
        }
			
		get	IEnumerator.Current(): Object {
				  return Current; 
        }
			
		}
	}
}
 