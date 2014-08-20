module System.Globalization {

    export enum CalendarAlgorithmType {

        Unknown = 0,
        SolarCalendar = 1,
        LunarCalendar = 2,
        LunisolarCalendar = 3
    }

    System.Type.registerEnum(CalendarAlgorithmType, "System.Globalization.CalendarAlgorithmType");
} 