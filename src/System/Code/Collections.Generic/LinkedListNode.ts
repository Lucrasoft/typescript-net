//todo

//namespace System.Collections.Generic
//{
//	[ComVisible(false)]
//	public sealed class LinkedListNode<T>
//	{
//    T item;
//		LinkedList<T> container;

//    internal LinkedListNode < T> forward, back;

//    public LinkedListNode(T value) {
//        item = value;
//    }

//    internal LinkedListNode(LinkedList < T > list, T value)
//		{
//    container = list;
//    item = value;
//    this.back = this.forward = this;
//}

//		internal LinkedListNode(LinkedList < T > list, T value, LinkedListNode < T > previousNode, LinkedListNode < T > nextNode)
//		{
//    container = list;
//    item = value;
//    this.back = previousNode;
//    this.forward = nextNode;
//    previousNode.forward = this;
//    nextNode.back = this;
//}
		
//		internal void Detach()
//		{
//    back.forward = forward;
//    forward.back = back;

//    forward = back = null;
//    container = null;
//}
		
//		internal void SelfReference(LinkedList < T > list)
//		{
//    forward = this;
//    back = this;
//    container = list;
//}
		
//		internal void InsertBetween(LinkedListNode < T > previousNode, LinkedListNode < T > nextNode, LinkedList < T > list)
//		{
//    previousNode.forward = this;
//    nextNode.back = this;
//    this.forward = nextNode;
//    this.back = previousNode;
//    this.container = list;
//		}

//		public LinkedList < T > List {
//			get { return container; }
//		}

//		public LinkedListNode < T > Next {
//			get { return (container != null && forward != container.first) ? forward : null; }
//		}

//		public LinkedListNode < T > Previous {
//			get { return (container != null && this != container.first) ? back : null; }
//		}

//		public T Value { 
//			get { return item; }
//			set { item = value; }
//		}
//	}
//}