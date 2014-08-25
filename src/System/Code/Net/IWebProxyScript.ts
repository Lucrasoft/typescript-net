module System.Net {
	export interface IWebProxyScript {
		Close(): void;
        Load(scriptLocation: Uri , script: string,  helperType: Type): boolean;
        Run(url: string, host: string): string;
	}
} 