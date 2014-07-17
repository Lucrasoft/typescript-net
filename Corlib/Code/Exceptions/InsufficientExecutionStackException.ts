//todo

module System
{
	export class InsufficientExecutionStackException extends SystemException
    {


        public InsufficientExecutionStackException(message: string = "Insufficient execution stack", innerException?: Exception)
        {
            super(message, innerException);
        }
	}
} 