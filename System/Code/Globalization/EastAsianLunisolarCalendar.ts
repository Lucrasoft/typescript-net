/// <reference path="../Exceptions/ArgumentOutOfRangeException.ts"/>

module System.Globalization {

    // Needs CalendricalCalculations.cs and Calendar.cs in order to work
    export class EastAsianLunisolarCalendar extends Calendar {

        M_EraHandler: CCEastAsianLunisolarEraHandler;

        EastAsianLunisolarCalendar(eraHandler: CCEastAsianLunisolarEraHandler) {

            this.M_EraHandler = eraHandler;
        }

        get twoDigitYearMax(): number { return twoDigitYearMax }
        set twoDigitYearMax(value: number) {

            checkReadOnly();
            m_ArgumentInRange("value", value, 100, m_MaxYear);
        }

        m_CheckDateTime(time: DateTime): void {
            M_Erahandler.checkDateTime(time);
        }

        get actualCurrentEra(): number{
            return 1;
        }

        m_CheckEra(era: number): void {
            if (era == CurrentEra)
                era = ActualCurrentEra;
            if (!M_EraHandler.validEra(era))
                throw new ArgumentException("Era value was not valid.");
        }

        m_CheckYEG(year: number, era: number): number {
            this.m_CheckEra(era);
            return M_EraHandler.gregorianYear(year, era);
        }

        m_CheckYE(year: number, era: number): number {
            this.m_CheckYEG(year, era);
        }

        m_CheckYMEG(year: number, month: number, era: number): number {
            var gregorianYear: number = this.m_CheckYEG(year, era);
            if (month < 1 || month > 12)
                throw new ArgumentOutOfRangeException("Month must be between one and twelve.", null, "month");
            return gregorianYear;
        }

        m_CheckYMDEG(year: number, month: number, day: number, era: number): number {
            var gregorianYear = this.m_CheckYMEG(year, month, era);
            M_ArgumentInRange("day", day, 1, this.getDaysInMonth(year, month, era));
            return gregorianYear;
        }

        addMonths(time: DateTime, months: number): DateTime {
            var t: DateTime = CCEastAsianLunisolarCalendar.addMonths(time, months);
            this.m_CheckDateTime(t);
        }

        getDayOfMonth(time: DateTime): number{
            this.m_CheckDateTime(time);
            return CCEastAsianLunisolarCalendar.getDayOfMonth(time);
        }

        getDayOfWeek(time: DateTime): DayOfWeek {
            this.m_CheckDateTime(time);
            var rd: number = CCFixed.fromDateTime(time);
            return <DayOfWeek>CCFixed.day_of_week(rd);
        }

        getDayOfYear(time: DateTime): number {
            this.m_CheckDateTime(time);
            return CCEastAsianLunisolarCalendar.getDayOfYear(time);
        }

        getDaysInMonth(year: number, month: number, era: number) {
            var gregorianYear: number = this.m_CheckYMEG(year, month, era);
            return CCEastAsianLunsolarCalendar.getDaysInMonth(gregorianYear, month);
        }

        getDaysInYear(year: number, era: number) {
            var gregorianYear: number = this.m_CheckYEG(year, era);
            return CCEastAsianLunisolarCalendar.getDaysInYear(gregorianYear);
        }

        getLeapMonth(year: number, era: number) {
            return super.getLeapMonth(year, era);
        }

        getMonth(time: DateTime): number {
            this.m_CheckDateTime(time);
            return CCEastAsianLunisolarCalendar.getMonth(time);
        }

        getMonthsInYear(year: number, era: number): number {
            this.m_CheckYE(year, era);
            return this.isLeapYear(year, era) ? 13 : 12;
        }

        getYear(time: DateTime): number {
            var rd: number = CCFixed.fromDateTime(time);
            var era: number;
            return this.M_EraHandler.eraYear(era, rd);
        }

        isLeapDay(year: number, month: number, day: number, era: number): boolean {
            var gregorianYear: number = this.m_CheckYMDEG(year, month, day, era);
            return CCEastAsianLunisolarCalendar.isLeapMonth(gregorianYear, month);
        }

        isLeapMonth(year: number, month: number, era: number): boolean {
            var gregorianYear: number = this.m_CheckYEG(year, era);
            return CCEastAsianLunisolarCalendar.isLeapYear(gregorianYear, month);
        }

        isLeapYear(year: number, era: number): boolean {
            var gregorianYear: number = this.m_CheckYMEG(year, month, era);
            return CCEastAsianLunisolarCalendar.isLeapMonth(gregorianYear, month);
        }

        toDateTime(year: number, month: number, day: number, hour: number, minute: number,
            second: number, millisecond: number, era: number): DateTime{
            var gregorianYear: number = this.m_CheckYMDEG(year, month, day, era);
            this.m_checkHMSM(hour, minute, second, millisecond);
            return CCGregorianCalendar.toDateTime(gregorianYear, month, day, hour,
                minute, second, millisecond);
        }

        toFourDigitYear(year: number): number {
            if (year < 0)
                throw new ArgumentOutOfRangeException("Non-negative number required", null, "year");
            var era: number = CurrentEra;
            this.m_CheckYE(year, era);
            return year;
        }

        get AlgorithmType(): CalendarAlgorithmType {
            return CalendarAlgorithmType.LunisolarCalendar;
        }

        getCelestialStem(sexagenaryYear: number): number {
            if (sexagenaryYear < 1 || 60 < sexagenaryYear)
                throw new ArgumentOutOfRangeException("sexagenaryYear is less than 0 or greater than 60");
            return (sexagenaryYear - 1) % 10 + 1;
        }

        getSexagenaryYear(time: DateTime): number {
            return (this.getYear(time) - 1900) % 60;
        }

        getTerrestrialBranch(sexagenaryYear) {
            if (sexagenaryYear < 1 || 60 < sexagenaryYear)
                throw new ArgumentOutOfRangeException("sexagenaryYear is less than 0 or greater than 60");
            return (sexagenaryYear - 1) % 12 + 1;
        }
    }

    System.Type.registerClass(EastAsianLunisolarCalendar, "System.Globalization", null);
}