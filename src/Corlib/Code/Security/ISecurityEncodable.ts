module System.Security {

    export interface ISecurityEncodable {

        FromXml(e: SecurityElement): void;

        ToXml(): SecurityElement;
	}
}