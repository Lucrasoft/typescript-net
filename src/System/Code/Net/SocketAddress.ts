module System.Net {

	export class SocketAddress {
		static _type: Type = System.Type.registerClass(SocketAddress, "System.Net.SocketAddress", [])

        private data: Byte[];

        public SocketAddress(family: AddressFamily, size: number) {
            if (size < 2) {
                throw new ArgumentOutOfRangeException("size is too small");
            }

            data = new Byte[size];
            data[0] = (Byte) family;
            data[1] = (Byte)((int) family >> 8);
        }

        public SocketAddress(family: AddressFamily )
		{
            super(family, 32)
		}

		//LAMESPEC: the MS doc about this class is wrong. The size is not stored in byte 1. Instead
		// byte [0] and byte [1] hold the family (little endian).
		public get Family(): AddressFamily  {
            return (AddressFamily)(data[0] + (data[1] << 8));    
		}

		public get Size(): number{
			
        return this.data.Length;
        }

        public get this(): Byte [offset: number ] {

        return (data[offset]);
        }
        public set this(value: Byte){
			
            data[offset] = value;
    
		}

		public ToString(): string {
            af: string =((AddressFamily)data[0]).ToString();
			size: number = data.Length;
            ret: string  = af + ":" + size + ":{";
			
			for(i: number = 2; i < size; i++) {
				val: number = (int) data[i];
        ret = ret + val;
        if (i < size - 1) {
            ret = ret + ",";
        }
    }

    ret = ret + "}";

    return (ret);
		}

		public Equals(comparand: object): boolean
		{
			SocketAddress sa = (comparand as SocketAddress);
                if ((sa != null) && (sa.data.Length == data.Length)) {
                    otherData: byte [] = sa.data;
				for (i: number = 0; i < data.Length; i++)
					if (otherData[i] != data[i])
            return false;

        return true;
    }

    return false;
		}

		public GetHashCode(): number
		{
			code: number = 0;

			for (i: number = 0; i < data.Length; i++)
				code += data[i] + i;

    return code;
		}
	}
}