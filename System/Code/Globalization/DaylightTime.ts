/// <reference path="../Object.ts"/>
/// <reference path="../DateTime.ts"/>
/// <reference path="../TimeSpan.ts"/>

module System.Globalization {

    export class DaylightTime extends System.Object {
        static _type: Type = System.Type.registerClass(DaylightTime, "System.Globalization.DaylightTime", []);

        private m_start: DateTime;
        private m_end: DateTime;
        private m_delta: TimeSpan;

        constructor(start: DateTime, end: DateTime, delta: TimeSpan) {

            super();
            this.m_start = start;
            this.m_end = end;
            this.m_delta = delta;
        }

        get start(): DateTime {
            return this.m_start;
        }

        get end(): DateTime {
            return this.m_end;
        }

        get delta(): TimeSpan {
            return this.m_delta;
        }

        getType(): Type { return DaylightTime._type; }
    }
} 