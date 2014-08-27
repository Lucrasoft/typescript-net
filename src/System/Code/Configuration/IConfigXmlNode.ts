module System.Configuration
{
	interface IConfigXmlNode
	{
        Filename(): string
        
        
		LineNumber: number
    }

    System.Type.registerInterface("System.Configuration.IConfigXmlNode");
}
