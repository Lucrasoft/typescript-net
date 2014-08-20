module System.Globalization {

    export enum CalendarWeekRule {

        FirstDay = 0,
        FirstFullWeek = 1,
        FirstFourDayWeek = 2
    }

    System.Type.registerEnum(CalendarWeekRule, "System.Globalization.CalendarWeekRule");
}