module System.Net {
	public class HttpListenerBasicIdentity extends GenericIdentity {

        static _type: Type = System.Type.registerClass(HttpListenerBasicIdentity, "System.Net.HttpListenerBasicIdentity", []);

        password: string;

		constructor(username: string, password: string)
		{
            super(username, "Basic");
            this.password = password;
		}

		public virtual string Password {
			get { return password; }
        }
	}
}