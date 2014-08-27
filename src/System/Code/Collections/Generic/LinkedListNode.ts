module System.Collections.Generic
{
	export class LinkedListNode<T>
    {
        static _type: Type = System.Type.registerClass(LinkedListNode , "System.Collections.Generic.LinkedListNode", []);

        item: T;
        container: LinkedList<T> ;

        forward: LinkedListNode < T>;
        back: LinkedListNode<T>;

    public LinkedListNode(value: T) {
        item = value;
    }

    LinkedListNode(list: LinkedList<T>, value: T)
	{
        container = list;
        item = value;
        this.back = this.forward = this;
    }

        LinkedListNode(list: LinkedList<T>, value: T, previousNode: LinkedListNode<T>, nextNode: LinkedListNode<T> )
		{
        container = list;
        item = value;
        this.back = previousNode;
        this.forward = nextNode;
        previousNode.forward = this;
        nextNode.back = this;
        }
		
		Detach(): void
		{
            back.forward = forward;
            forward.back = back;

            forward = back = null;
            container = null;
}
		
        SelfReference(list: LinkedList < T >): void 
		{
            forward = this;
            back = this;
            container = list;
        }
		
        InsertBetween(previousNode: LinkedListNode<T> , nextNode: LinkedListNode<T>, list: LinkedList<T>): void
		{
            previousNode.forward = this;
            nextNode.back = this;
            this.forward = nextNode;
            this.back = previousNode;
            this.container = list;
		}

		public get List(): LinkedList<T>  {
		 return this.container; 
		}

        public get Next(): LinkedListNode<T> {
			 return (this.container != null && forward != this.container.first) ? forward : null; 
		}

        public get Previous(): LinkedListNode<T> {
			 return (this.container != null && this != this.container.first) ? back : null; 
		}

        public get Value(): T{ 
			 return this.item; 
        }

        public set Value(value: T){ 
            this.item = value;
        }
	}
}