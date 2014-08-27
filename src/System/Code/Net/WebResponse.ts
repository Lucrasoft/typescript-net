module System.Net 
{
	
	export class WebResponse extends MarshalByRefObject implements ISerializable, IDisposable {
		
		
        static _type: Type = System.Type.registerClass(WebResponse, "System.Net.WebResponse", []); // todo ref them both

		WebResponse()
        { }
		
		get ContentLength(): number {		
			throw new NotSupportedException (); 
		}
        set ContentLength(value: number) {
            throw new NotSupportedException();
        }

		get ContentType(): string {		
			throw new NotSupportedException ();
		}
		
        set ContentType(value: string){
            throw new NotSupportedException();
        }

        get Headers(): WebHeaderCollection {		
			 throw new NotSupportedException ();
		}

        static GetMustImplement(): Exception
		{
			return new NotImplementedException ();
		}
		
		
        get IsFromCache(): boolean
        {
            return false;
		}
		
		get IsMutuallyAuthenticated(): boolean
		{
				throw GetMustImplement ();
		}
		
        get ResponseUri(): Uri {		
			 throw new NotSupportedException ();
		}		


        get SupportsHeaders(): boolean {
				return true;	
		}
		
		public Close(): void
		{
			throw new NotSupportedException ();
		}
		
		public GetResponseStream(): Stream
		{
			throw new NotSupportedException ();
		}

		public Dispose(): void
		{
			Dispose (true);
		}
		

		Dispose (disposing: boolean): void
		{
            if (disposing)
                Close();
        }
	}
}