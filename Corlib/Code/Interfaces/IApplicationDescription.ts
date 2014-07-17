/// <reference path="ICloneable.ts"/> 

module System {

	export interface IApplicationDescription extends ICloneable {

		applicationCodeBase: string;

        applicationManifest: string;

        applicationManifestPath: string; 

        deploymentCodeBase: string;

        deploymentManifest: string;

        deploymentManifestPath: string; 
    }

    System.Type.registerInterface("System.IApplicationDescription","System.ICloneable");

}
