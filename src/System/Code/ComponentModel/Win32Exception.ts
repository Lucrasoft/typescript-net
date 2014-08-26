module System.ComponentModel
{
	
	export class Win32Exception extends ExternalException
	{
		private native_error_code: number;

//		[SecurityPermission (SecurityAction.LinkDemand, UnmanagedCode = true)]

		public Win32Exception ()
		{
            super(W32ErrorMessage(Marshal.GetLastWin32Error()))
			native_error_code = Marshal.GetLastWin32Error ();
		}

//		[SecurityPermission (SecurityAction.LinkDemand, UnmanagedCode = true)]
		public Win32Exception (int error)
			: base (W32ErrorMessage (error))
		{
			native_error_code = error;
		}

//		[SecurityPermission (SecurityAction.LinkDemand, UnmanagedCode = true)]
		public Win32Exception (int error, string message) 
			: base (message)
		{
			native_error_code = error;
		}

		public Win32Exception (string message)
			: base (message)
		{
			native_error_code = Marshal.GetLastWin32Error ();
		}


		public Win32Exception (string message, Exception innerException)
			: base (message, innerException)
		{
			native_error_code = Marshal.GetLastWin32Error ();
		}

		protected Win32Exception(SerializationInfo info,
					 StreamingContext context)
			: base (info, context) {

			native_error_code = info.GetInt32 ("NativeErrorCode");
		}

		public get NativeErrorCode: number {
				return(native_error_code);
		}

		[SecurityPermission (SecurityAction.Demand, SerializationFormatter = true)]
		public override void GetObjectData(SerializationInfo info, StreamingContext context)
		{
			if (info == null)
				throw new ArgumentNullException ("info");

			info.AddValue ("NativeErrorCode", native_error_code);
			base.GetObjectData (info, context);
		}


		internal static extern string W32ErrorMessage (int error_code);
	}
} 