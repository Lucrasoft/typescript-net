module System.Globalization {

    export class EastAsianLunisolarCalendar extends Calendar {

        private M_EraHandler: CCEastAsianLunisolarEraHandler;

        private EastAsianLunisolarCalendar(eraHandler: CCEastAsianLunisolarEraHandler) {

            this.M_EraHandler = eraHandler;
        }

        get twoDigitYearMax(): number { return twoDigitYearMax }
        set twoDigitYearMax(value: number) {

            checkReadOnly();
            m_ArgumentInRange("value", value, 100, m_MaxYear);
        }


    }
}