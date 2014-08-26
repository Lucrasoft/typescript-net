//todo ref

module System.IO {

	export class IODescriptionAttribute extends DescriptionAttribute {

        static _type: Type = System.Type.registerClass(IODescriptionAttribute, "System.IO.IODescriptionAttribute", []);


		public IODescriptionAttribute(description: string)
		{
            super(description);
		}



        //was override
		public get Description(): string {
			get
            { return DescriptionValue; }
        }

	}
}