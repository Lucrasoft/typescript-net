module System {

	export interface IHostContext {

        assumeTrust: boolean;
		exclusiveGrant: boolean;
		isFirstTimeInstall: boolean; 
		noPrompt: boolean; 
		persist: boolean;
    }
    System.Type.registerInterface("System.IHostContext");
}
