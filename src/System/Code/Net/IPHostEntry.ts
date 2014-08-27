﻿module System.Net {
	
	export class IPHostEntry {

        static _type: Type = System.Type.registerClass(IPHostEntry,"System.Net.IPHostEntry",[]);

        private addressList: IPAddress[];
        private aliases: string[];
        private hostName: string;

        public IPHostEntry() {
        }
		
        public get AddressList(): IPAddress[] {
			return this.addressList;
			
		}
        public set AddressList(value: IPAddress){
            this.addressList = value; 
        }

        public get Aliases(): string[]	{
			 return this.aliases;	
		}
        public set Aliases(value: string[]){
            this.aliases = value;
        }

		public get HostName(): string {
			return this.hostName; 
		}
        public set HostName(value: string){
            this.hostName = value;
        }
/* According to the .NET Framework SDK Documentation (beta 2) the following
   methods from Object are not overrided. I implemented them before realizing
   this but I leave the implementation here if needed in the future.

		public override string ToString() {
			string res = hostName;
			if (addressList != null && addressList.Length > 0)
				res += " [" + addressList[0] + "]";
			return res;
		}

		public override bool Equals(object obj) {
			if (obj is IPHostEntry) {
				IPHostEntry h = (IPHostEntry)obj;
				return hostName.Equals(h.HostName) && aliases.Equals(h.Aliases) &&
					addressList.Equals(h.AddressList);
			}
			else
			  return false;
		}

		public override int GetHashCode() {
			return hostName.GetHashCode();
		}

		protected new object MemberwiseClone() {
			IPHostEntry res = new IPHostEntry();
			res.AddressList = new IPAddress[addressList.Length];
			Array.Copy(addressList, res.AddressList, addressList.Length);
			res.Aliases = new String[aliases.Length];
			Array.Copy(aliases, res.Aliases, aliases.Length);
			res.HostName = hostName;
			return res;
		}
*/
	}
}