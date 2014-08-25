module System.Net 
{
	export static class WebRequestMethods
	{
        static _type: Type = System.Type.registerClass(WebRequestMethods, "System.Net.WebRequestMethods", []);

		public static class File
		{
			public DownloadFile: string = "GET";
			public UploadFile: string = "PUT";
		}

		public static class Ftp
		{
			public AppendFile: string = "APPE";
			public DeleteFile: string = "DELE";
			public DownloadFile: string = "RETR";
			public GetFileSize: string = "SIZE";
			public GetDateTimestamp: string = "MDTM";
			public ListDirectory: string = "NLST";
			public ListDirectoryDetails: string = "LIST";
			public MakeDirectory: string = "MKD";
			public PrintWorkingDirectory: string = "PWD";
			public RemoveDirectory: string = "RMD";
			public Rename: string = "RENAME";
			public UploadFile: string = "STOR";
			public UploadFileWithUniqueName: string = "STOU";
		}

		public static class Http
		{
			public Connect: string = "CONNECT";
			public Get: string = "GET";
			public Head: string = "HEAD";
			public MkCol: string = "MKCOL";
			public Post: string = "POST";
			public Put: string = "PUT";
		}
	}
}