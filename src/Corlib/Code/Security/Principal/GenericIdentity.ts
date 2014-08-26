/// <reference path="iidentity.ts" />

module System.Security.Principal {

    export class GenericIdentity implements IIdentity {

        static _type: Type = System.Type.registerClass(GenericIdentity, "System.Security.Principal.GenericIdentity", ["System.Security.Principal.IIdentity"])

		// field names are serialization compatible with .net
		private m_name: string;
        private m_type: string;

        constructor(name: string, type: string = "")
        {
            if (name == null)
            throw new ArgumentNullException("name");

            if (type == null)
            throw new ArgumentNullException("type");

            this.m_name = name;
            this.m_type = type;
		}


		public get AuthenticationType(): string {
            return this.m_type;
		}

		public get Name(): string {
            return this.m_name;
		}

		public get IsAuthenticated(): boolean {

            return (this.m_name !== "");
        }
	}
}