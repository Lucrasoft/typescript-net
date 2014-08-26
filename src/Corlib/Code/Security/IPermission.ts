module System.Security {

	export interface IPermission extends ISecurityEncodable {
        Copy(): IPermission;

		Demand(): void;

        Intersect(target: IPermission): IPermission;

        IsSubsetOf(target: IPermission): boolean;

        Union(target: IPermission): IPermission;
    }

    System.Type.registerInterface("System.Security.IPermission", "System.Security.ISecurityEncodable");
} 