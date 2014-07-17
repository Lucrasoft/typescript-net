module System
{
	export class TypeUnloadedException extends SystemException
	{
		// Constructors
		public constr ()
			: base(Locale.GetText("Cannot access an unloaded class."))
		{
		}

		public TypeUnloadedException (string message)
			: base(message)
		{
    }

		protected TypeUnloadedException (SerializationInfo info, StreamingContext context)
			: base(info, context)
		{
		}

		public TypeUnloadedException (string message, Exception innerException)
			:base(message, innerException)
		{
    }
	}
}
