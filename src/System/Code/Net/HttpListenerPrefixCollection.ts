
module System.Net {
//#if EMBEDDED_IN_1_0
//	public class HttpListenerPrefixCollection : IEnumerable, ICollection {
//		ArrayList prefixes;
//#else

	export class HttpListenerPrefixCollection implements ICollection <string>, IEnumerable < string>, IEnumerable {
    
        static _type: Type = System.Type.registerClass(HttpListenerPrefixCollection, "System.Net.HttpListenerPrefixCollection", []); //todo ref all Interfaces

        prefixes: List<string> = new List<string>();
        listener: HttpListener;

        HttpListenerPrefixCollection(listener: HttpListener)
		{
            this.listener = listener;
		}

		get Count(): number {
			  return this.prefixes.Count; 
		}

		get IsReadOnly(): boolean {
			return false;
		}

		get IsSynchronized(): boolean {
			return false; 
		}

		public Add(uriPrefix: string): void
		{
        this.listener.CheckDisposed();
        ListenerPrefix.CheckUri(uriPrefix);
        if (prefixes.Contains(uriPrefix))
            return;

        prefixes.Add(uriPrefix);
        if (listener.IsListening)
            EndPointManager.AddPrefix(uriPrefix, listener);
		}

		public Clear(): void
		{
        listener.CheckDisposed();
        prefixes.Clear();
        if (listener.IsListening)
            EndPointManager.RemoveListener(listener);
		}

		public Contains(uriPrefix: string): boolean
		{
            this.listener.CheckDisposed();
            return this.prefixes.Contains(uriPrefix);
		}

        public CopyTo(array: string[], offset: number): void
		{
            this.listener.CheckDisposed();
            this.prefixes.CopyTo(array, offset);
		}

        public CopyTo(array: Array , offset: number): void
		{
            this.listener.CheckDisposed();
			((ICollection) this.prefixes).CopyTo(array, offset);
		}

        public GetEnumerator(): IEnumerator<string>
		{
            return this.prefixes.GetEnumerator();
		}

		IEnumerable.GetEnumerator(): IEnumerator
		{
            return this.prefixes.GetEnumerator();
		}

        public Remove(uriPrefix: string): boolean
		{
        this.listener.CheckDisposed();
        if (uriPrefix == null)
            throw new ArgumentNullException("uriPrefix");

			result: boolean = prefixes.Remove(uriPrefix);
        if (result && listener.IsListening)
            EndPointManager.RemovePrefix(uriPrefix, listener);

        return result;
        }
	}
}