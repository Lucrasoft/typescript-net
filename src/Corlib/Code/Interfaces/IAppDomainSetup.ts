module  System {

	export  interface IAppDomainSetup {

        applicationBase: string;

        applicationName: string;

		cachePath: string;

        configurationFile: string;

        dynamicBase: string;

        licenseFile: string;

        privateBinPath: string;
    
        privateBinPathProbe: string;
    
        shadowCopyDirectories: string;

        shadowCopyFiles: string;
	}

    System.Type.registerInterface("System.IAppDomainSetup");

}
