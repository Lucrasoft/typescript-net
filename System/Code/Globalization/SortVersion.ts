/// <reference path="../Guid.ts"/>
/// <reference path="../Interfaces/IEquatable.ts"/>

module System.Globalization {

    export class SortVersion extends System.Object implements IEquatable<SortVersion>{

        constructor(fullVersion: number, sortId: Guid) {
            super();
            this.FullVersion = fullVersion;
            this.SortId = sortId;
        }

        SortId: Guid;
        FullVersion: number;

        equals(obj: Object): boolean; 

        equals(other: SortVersion): boolean {
            if (other == null)
                return false;

            return this.FullVersion == other.FullVersion && this.SortId == other.SortId;
        }
    }
} 