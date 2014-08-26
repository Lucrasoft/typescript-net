/// <reference path="../../../corlib/code/security/principal/genericidentity.ts" />

module System.Net {
	export class HttpListenerBasicIdentity extends GenericIdentity {

        static _type: Type = System.Type.registerClass(HttpListenerBasicIdentity, "System.Net.HttpListenerBasicIdentity", []);

        password: string;

		constructor(username: string, password: string)
		{
            super(username, "Basic");
            this.password = password;
		}

		public get Password(): string {
			 return password; 
        }
	}
}