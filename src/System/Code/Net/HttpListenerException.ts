//todo ref win32exception

module System.Net {
	public class HttpListenerException extends Win32Exception
	{
        static _type: Type = System.Type.registerClass(HttpListenerException, "System.Net.HttpListenerException", []);
        constructor(errorCode: number, message?: string) {
            super(errorCode, message);

        }

		public override ErrorCode: number {
			get { return base.ErrorCode; }
		}
	}
}