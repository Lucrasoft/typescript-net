//todo

//namespace System.Collections.Generic
//{
//    [Serializable, ComVisible(false)]
//    [DebuggerDisplay("Count={Count}")]
//    [DebuggerTypeProxy(typeof (CollectionDebuggerView<>))]
//	public class LinkedList <T> : ICollection < T>, ICollection, ISerializable, IDeserializationCallback
//	{
//		const string DataArrayKey = "DataArray";
//		const string VersionKey = "version";		
//		uint count, version;

//		// Internally a circular list - first.back == last
//		internal LinkedListNode < T > first;
//		internal SerializationInfo si;

//		public LinkedList()
//		{
//		}

//		public LinkedList(IEnumerable < T > collection)
//		{
//        foreach(T item in collection)
//				AddLast(item);
//    }
		
//		protected LinkedList(SerializationInfo info, StreamingContext context)
//		{
//        si = info;
//    }

//    void VerifyReferencedNode(LinkedListNode < T > node)
//		{
//        if (node == null)
//            throw new ArgumentNullException("node");

//        if (node.List != this)
//            throw new InvalidOperationException();
//		}

//		static void VerifyBlankNode(LinkedListNode < T > newNode)
//		{
//        if (newNode == null)
//            throw new ArgumentNullException("newNode");

//        if (newNode.List != null)
//            throw new InvalidOperationException();
//		}

//		public LinkedListNode < T > AddAfter(LinkedListNode < T > node, T value)
//		{
//        VerifyReferencedNode(node);
//        LinkedListNode < T > newNode = new LinkedListNode<T>(this, value, node, node.forward);
//        count++;
//        version++;
//        return newNode;
//		}

//		public void AddAfter(LinkedListNode < T > node, LinkedListNode < T > newNode)
//		{
//        VerifyReferencedNode(node);
//        VerifyBlankNode(newNode);
//        newNode.InsertBetween(node, node.forward, this);
//        count++;
//        version++;
//		}

//		public LinkedListNode < T > AddBefore(LinkedListNode < T > node, T value)
//		{
//        VerifyReferencedNode(node);
//        LinkedListNode < T > newNode = new LinkedListNode<T>(this, value, node.back, node);
//        count++;
//        version++;

//        if (node == first)
//            first = newNode;
//        return newNode;
//		}

//		public void AddBefore(LinkedListNode < T > node, LinkedListNode < T > newNode)
//		{
//        VerifyReferencedNode(node);
//        VerifyBlankNode(newNode);
//        newNode.InsertBetween(node.back, node, this);
//        count++;
//        version++;

//        if (node == first)
//            first = newNode;
//		}

//		public void AddFirst(LinkedListNode < T > node)
//		{
//        VerifyBlankNode(node);
//        if (first == null)
//            node.SelfReference(this);
//        else
//            node.InsertBetween(first.back, first, this);
//        count++;
//        version++;
//        first = node;			
//		}

//		public LinkedListNode < T > AddFirst(T value)
//		{
//        LinkedListNode < T > newNode;
//        if (first == null)
//            newNode = new LinkedListNode<T>(this, value);
//        else
//            newNode = new LinkedListNode<T>(this, value, first.back, first);
//        count++;
//        version++;
//        first = newNode;
//        return newNode;
//		}

//		public LinkedListNode < T > AddLast(T value)
//		{
//        LinkedListNode < T > newNode;
//        if (first == null) {
//            newNode = new LinkedListNode<T>(this, value);
//            first = newNode;
//        }
//        else
//            newNode = new LinkedListNode<T>(this, value, first.back, first);
//        count++;
//        version++;
//        return newNode;
//		}

//		public void AddLast(LinkedListNode < T > node)
//		{
//        VerifyBlankNode(node);
//        if (first == null) {
//            node.SelfReference(this);
//            first = node;
//        }
//        else
//            node.InsertBetween(first.back, first, this);
//        count++;
//        version++;
//		}

//		public void Clear()
//		{
//        while (first != null)
//            Remove(first);
//		}

//		public bool Contains(T value)
//		{
//        return Find(value) != null;
//		}

//		public void CopyTo(T []array, int index)
//		{
//        if (array == null)
//            throw new ArgumentNullException("array");
//			if ((uint) index < (uint) array.GetLowerBound (0))
//				throw new ArgumentOutOfRangeException("index");
//        if (array.Rank != 1)
//            throw new ArgumentException("array", "Array is multidimensional");
//        if (array.Length - index + array.GetLowerBound(0) < count)
//            throw new ArgumentException("number of items exceeds capacity");

//        LinkedListNode < T > node = first;
//        if (first == null)
//            return;
//        do {
//            array[index] = node.Value;
//            index++;
//            node = node.forward;
//        }
//        while (node != first);
//		}

//		public LinkedListNode < T > Find(T value)
//		{
//        var node = first;
//        if (node == null)
//            return null;

//        do {
//            if (value == null) {
//                if (node.Value == null)
//                    return node;
//            } else {
//                if (EqualityComparer<T>.Default.Equals(node.Value, value))
//                    return node;
//            }

//            node = node.forward;
//        } while (node != first);

//        return null;
//		}

//		public LinkedListNode < T > FindLast(T value)
//		{
//        var node = first;
//        if (node == null)
//            return null;

//        do {
//            node = node.back;

//            if (value == null) {
//                if (node.Value == null)
//                    return node;
//            } else {
//                if (EqualityComparer<T>.Default.Equals(node.Value, value))
//                    return node;
//            }
//        } while (node != first);

//        return null;
//		}

//		public Enumerator GetEnumerator()
//		{
//        return new Enumerator(this);
//    }
		
//		[SecurityPermission(SecurityAction.LinkDemand, Flags = SecurityPermissionFlag.SerializationFormatter)]
//		public virtual void GetObjectData(SerializationInfo info, StreamingContext context)
//		{
//			T []data = new T[count];
//        CopyTo(data, 0);
//        info.AddValue(DataArrayKey, data, typeof (T []));
//        info.AddValue(VersionKey, version);
//		}

//		public virtual void OnDeserialization(Object sender)
//		{
//        if (si != null) {
//				T []data = (T []) si.GetValue(DataArrayKey, typeof (T []));
//            if (data != null)
//                foreach(T item in data)
//						AddLast(item);
//            version = si.GetUInt32(VersionKey);
//            si = null;
//        }
//		}

//		public bool Remove(T value)
//		{
//        LinkedListNode < T > node = Find(value);
//        if (node == null)
//            return false;
//        Remove(node);
//        return true;
//		}

//		public void Remove(LinkedListNode < T > node)
//		{
//        VerifyReferencedNode(node);
//        count--;
//        if (count == 0)
//            first = null;

//        if (node == first)
//            first = first.forward;

//        version++;
//        node.Detach();
//		}

//		public void RemoveFirst()
//		{
//        if (first == null)
//            throw new InvalidOperationException();

//        Remove(first);
//		}

//		public void RemoveLast()
//		{
//        if (first == null)
//            throw new InvalidOperationException();

//        Remove(first.back);
//    }

//    void ICollection<T>.Add(T value)
//		{
//        AddLast(value);
//    }

//    void ICollection.CopyTo(Array array, int index)
//		{
//			T []Tarray = array as T [];
//        if (Tarray == null)
//            throw new ArgumentException("array");
//        CopyTo(Tarray, index);
//    }

//    IEnumerator < T > IEnumerable<T>.GetEnumerator()
//		{
//        return GetEnumerator();
//    }
		
//		IEnumerator IEnumerable.GetEnumerator()
//		{
//        return GetEnumerator();
//		}

//		public int Count {
//			get { return (int) count; }
//		}

//		public LinkedListNode < T > First {
//			get { return first; }
//		}

//		public LinkedListNode < T > Last {
//			get { return (first != null) ? first.back : null; }
//    }
		
//		bool ICollection<T>.IsReadOnly {
//			get { return false; }
//    }
		
//		bool ICollection.IsSynchronized {
//			get { return false; }
//    }
		
//		Object ICollection.SyncRoot {
//			get { return this; }
//    }

//		[Serializable, StructLayout(LayoutKind.Sequential)]
//		public struct Enumerator: IEnumerator < T>, IDisposable, IEnumerator
//#if !NET_2_1
//        , ISerializable, IDeserializationCallback
//#endif
//		{
//			const String VersionKey = "version";
//			const String IndexKey = "index";
//			const String ListKey = "list";

//        LinkedList < T > list;
//        LinkedListNode < T > current;
//			int index;
//			uint version;
//#if !NET_2_1
//			SerializationInfo si;

//			internal Enumerator(SerializationInfo info, StreamingContext context)
//			{
//            si = info;
//            list = (LinkedList < T>) si.GetValue(ListKey, typeof (LinkedList < T>));
//            index = si.GetInt32(IndexKey);
//            version = si.GetUInt32(VersionKey);
//            current = null;
//			}
//#endif
			
//			internal Enumerator(LinkedList < T > parent)
//			{
//#if !NET_2_1
//				si = null;
//#endif
//				this.list = parent;
//            current = null;
//            index = -1;
//            version = parent.version;
//			}

//			public T Current {
//				get {
//                if (list == null)
//                    throw new ObjectDisposedException(null);
//                if (current == null)
//                    throw new InvalidOperationException();
//                return current.Value;
//            }
//        }
			
//			Object IEnumerator.Current {
//				get { return Current; }
//			}

//			public bool MoveNext()
//			{
//            if (list == null)
//                throw new ObjectDisposedException(null);
//            if (version != list.version)
//                throw new InvalidOperationException("list modified");

//            if (current == null) {
//                if (index < 0)
//                    current = list.first;
//            } else {
//                current = current.forward;
//                if (current == list.first)
//                    current = null;
//            }

//            if (current == null) {
//                index = int.MaxValue;
//                return false;
//            }

//            ++index;
//            return true;
//        }

//        void IEnumerator.Reset()
//			{
//            if (list == null)
//                throw new ObjectDisposedException(null);
//            if (version != list.version)
//                throw new InvalidOperationException("list modified");

//            current = null;
//            index = -1;
//			}

//			public void Dispose()
//			{
//            if (list == null)
//                throw new ObjectDisposedException(null);
//            current = null;
//            list = null;
//			}

//#if !NET_2_1
//        [SecurityPermission(SecurityAction.LinkDemand, Flags = SecurityPermissionFlag.SerializationFormatter)]
//			void ISerializable.GetObjectData(SerializationInfo info, StreamingContext context)
//			{
//            if (list == null)
//                throw new ObjectDisposedException(null);
//            info.AddValue(VersionKey, version);
//            info.AddValue(IndexKey, index);
//        }

//        void IDeserializationCallback.OnDeserialization(Object sender)
//			{
//            if (si == null)
//                return;

//            if (list.si != null)
//					((IDeserializationCallback) list).OnDeserialization(this);

//            si = null;

//            if (version == list.version && index != -1) {
//                LinkedListNode < T > node = list.First;
					
//					for (int i = 0; i < index; i++)
//						node = node.forward;

//                current = node;
//            }
//			}
//#endif
//		}
//	}
//} 