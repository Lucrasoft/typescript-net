module System.ComponentModel {
    export class Win32Exception extends ExternalException {
        static _type: Type = System.Type.registerClass(Win32Exception, "System.ComponentModel.Win32Exception", []);

        private native_error_code: number;

        constructor()
        constructor(error?: number, message?: string)
        constructor(error?: number)
        constructor(message?: string)
        constructor(message?: string, innerException?: number)
        constructor() {
            if (error != null)
                native_error_code = error;
            else
                native_error_code = Marshal.GetLastWin32Error();

            if (message == null)
                message = W32ErrorMessage(Marshal.GetLastWin32Error());

            if (innerException != null)
                super(message, innerException);
            else
                super(message)

        }


        public get NativeErrorCode(): number {
            return (this.native_error_code);
        }

        //todo dont know what to do with this: 		internal static extern string W32ErrorMessage (int error_code);
		public W32ErrorMessage: string (error_code: number);
	    }
    }
} 