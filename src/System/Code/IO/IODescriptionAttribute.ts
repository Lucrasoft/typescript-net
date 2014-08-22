//todo

module System.IO {

	public class IODescriptionAttribute extends DescriptionAttribute {

        static _type: Type = System.Type.registerClass(IODescriptionAttribute, "System.IO.IODescriptionAttribute", []);


		//#region Constructors

		public IODescriptionAttribute(description: string)
		{
            super(description);
		}

		//#endregion // Constructors

		//#region Methods

		public override Description: string {
			get
            { return DescriptionValue; }
		}

		//#endregion // Methods
	}
}