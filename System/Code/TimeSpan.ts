/// <reference path="Type.ts" />

/// <reference path="Exceptions\OverflowException.ts" />
/// <reference path="Exceptions\ArgumentException.ts" />
/// <reference path="Interfaces\IComparable.ts" />
/// <reference path="Interfaces\IEquatable.ts" />
/// <reference path="Interfaces\IFormattable.ts" />


module System {

    export class TimeSpan extends Type implements IComparable<TimeSpan>, IEquatable<TimeSpan>, IFormattable  {

        private static _type: Type = System.Type.registerClass(TimeSpan, "System.TimeSpan", ["IComparable", "IEquatable", "IFormattable"]);
        //var comparer = new System.Collections.Generic.GenericComparer<TimeSpan>();
        //var eqcomparer = new System.Collections.Generic.GenericEqualityComparer<TimeSpan>();

        public static MaxValue: TimeSpan = new TimeSpan(System.Int64.MaxValue);
        public static MinValue: TimeSpan = new TimeSpan(System.Int64.MinValue);
        public static Zero: TimeSpan = new TimeSpan(0);

        public static TicksPerDay: number = 864000000000;
        public static TicksPerHour: number = 36000000000;
        public static TicksPerMillisecond: number = 10000;
        public static TicksPerMinute: number = 600000000;
        public static TicksPerSecond: number = 10000000;

        private _ticks: number;


        constructor(ticks: number);
        constructor(hours: number, minutes?: number, seconds?: number);
        constructor(days: number, hours?: number, minutes?: number, seconds?: number);
        constructor(days: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number);



        constructor(ticksHoursDays: number, minutesHours?: number, secondMinutes?: number, seconds?: number, milliseconds: number = 0) {
            super();
            if (!minutesHours) {
                //constructor(ticks: number);
                this._ticks = ticksHoursDays;
            } else if (!seconds) {
                //constructor(hours: number, minutes?: number, seconds?: number);
                var outticks = new System.OutArgument<number>(0);
                if (TimeSpan.__internalCalculateTicks(0, ticksHoursDays, minutesHours, secondMinutes, 0, true, outticks)) {
                    this._ticks = outticks.value;
                }
            } else {
                //constructor(days: number, hours?: number, minutes?: number, seconds?: number);
                //constructor(days: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number);
                var outticks = new System.OutArgument<number>(0);
                if (TimeSpan.__internalCalculateTicks(ticksHoursDays, minutesHours, secondMinutes, seconds, milliseconds, true, outticks)) {
                    this._ticks = outticks.value;
                }
            }
        }



        private static __internalCalculateTicks(days: number, hours: number, minutes: number, seconds: number, milliseconds: number, throwExc: boolean, outresult: OutArgument<number>): boolean {
            // there's no overflow checks for hours, minutes, ...
            // so big hours/minutes values can overflow at some point and change expected values
            var hrssec: number = (hours * 3600); // break point at (Int32.MaxValue - 596523)
            var minsec: number = (minutes * 60);
            var t: number = (hrssec + minsec + seconds) * 1000 + milliseconds;
            t *= 10000;

            outresult.value = 0;

            var overflow: boolean = false;
            // days is problematic because it can overflow but that overflow can be 
            // "legal" (i.e. temporary) (e.g. if other parameters are negative) or 
            // illegal (e.g. sign change).
            if (days > 0) {
                var td: number = TimeSpan.TicksPerDay * days;
                if (t < 0) {
                    var ticks: number = t;
                    t += td;
                    // positive days -> total ticks should be lower
                    overflow = (ticks > t);
                }
                else {
                    t += td;
                    // positive + positive != negative result
                    overflow = (t < 0);
                }
            }
            else if (days < 0) {
                var td: number = TimeSpan.TicksPerDay * days;
                if (t <= 0) {
                    t += td;
                    // negative + negative != positive result
                    overflow = (t > 0);
                }
                else {
                    var ticks = t;
                    t += td;
                    // negative days -> total ticks should be lower
                    overflow = (t > ticks);
                }
            }

            if (overflow) {
                if (throwExc) throw new ArgumentOutOfRangeException("The timespan is too big or too small.");
                return false;
            }

            outresult.value = t;
            return true;
        }

        public get Days(): number {
            return Math.floor(this._ticks / TimeSpan.TicksPerDay);
        }

        public get Hours(): number {
            return Math.floor(this._ticks % TimeSpan.TicksPerDay / TimeSpan.TicksPerHour);
        }

        public get Milliseconds(): number {
            return Math.floor(this._ticks % TimeSpan.TicksPerSecond / TimeSpan.TicksPerMillisecond);
        }

        public get Minutes(): number {
            return Math.floor(this._ticks % TimeSpan.TicksPerHour / TimeSpan.TicksPerMinute);
        }

        public get Seconds(): number {
            return Math.floor(this._ticks % TimeSpan.TicksPerMinute / TimeSpan.TicksPerSecond);
        }

        public get Ticks(): number {
            return this._ticks;
        }

        public get TotalDays(): number {
            return this._ticks / TimeSpan.TicksPerDay;
        }

        public get TotalHours(): number {
            return this._ticks / TimeSpan.TicksPerHour;
        }

        public get TotalMilliseconds(): number {
            return this._ticks / TimeSpan.TicksPerMillisecond;
        }

        public get TotalMinutes(): number {
            return this._ticks / TimeSpan.TicksPerMinute;
        }

        public get TotalSeconds(): number {
            return this._ticks / TimeSpan.TicksPerSecond;
        }

        add(ts: TimeSpan): TimeSpan {
            try {
                return new TimeSpan(this._ticks + ts.Ticks);
            }
            catch (e) {
                throw new OverflowException("Resulting timespan is too big.");
            }
        }

        static compare(t1: TimeSpan, t2: TimeSpan): number {
            if (t1._ticks < t2._ticks)
                return -1;
            if (t1._ticks > t2._ticks)
                return 1;
            return 0;
        }

        compareTo(value: any): number {
            if (value == null) return 1;

            if (!(Statements.is(value, TimeSpan._type))) {
                throw new ArgumentException("Argument has to be a TimeSpan.", null, "value");
            }

            return TimeSpan.compare(this, <TimeSpan>value);
        }


        equals(obj: any): boolean {
            if (!(Statements.is(obj, TimeSpan._type))) return false;

            return this._ticks == (<TimeSpan>obj)._ticks;
        }

        duration(): TimeSpan {
            return new TimeSpan(Math.abs(this._ticks));
        }

        static equals(t1: TimeSpan, t2: TimeSpan): boolean {
            return t1._ticks == t2._ticks;
        }

        static fromDays(value: number): TimeSpan {
            return TimeSpan.FromMultiplied(value, TimeSpan.TicksPerDay);
        }

        static fromHours(value: number): TimeSpan {
            return TimeSpan.FromMultiplied(value, TimeSpan.TicksPerHour);
        }

        static fromMinutes(value: number): TimeSpan {
            return TimeSpan.FromMultiplied(value, TimeSpan.TicksPerMinute);
        }

        static fromSeconds(value: number): TimeSpan {
            return TimeSpan.FromMultiplied(value, TimeSpan.TicksPerSecond);
        }

        static fromMilliseconds(value: number): TimeSpan {
            return TimeSpan.FromMultiplied(value, TimeSpan.TicksPerMillisecond);
        }

        private static FromMultiplied(value: number, tickMultiplicator: number): TimeSpan {

            if (isNaN(value))
                throw new ArgumentException("Value cannot be NaN.", null, "value");
            if (!isFinite(value) || (value < TimeSpan.MinValue.Ticks) || (value > TimeSpan.MaxValue.Ticks))
                throw new OverflowException("Outside range [MinValue,MaxValue]");

            value = (value * (tickMultiplicator / TimeSpan.TicksPerMillisecond));
            var val = Math.round(value);
            return new TimeSpan(val * TimeSpan.TicksPerMillisecond);

        }

        static fromTicks(value: number): TimeSpan {
            return new TimeSpan(value);
        }

        getHashCode(): number {
            return this._ticks;
        }

        negate(): TimeSpan {
            if (this._ticks == TimeSpan.MinValue._ticks)
                throw new OverflowException("This TimeSpan value is MinValue and cannot be negated.");
            return new TimeSpan(-this._ticks);
        }

        static parse(input: string, formatProvider?: IFormatProvider): TimeSpan {
            if (input == null) {
                throw new ArgumentNullException("s");
            }

            result: TimeSpan;
            var p: Parser = new Parser(input, formatProvider);

            var outresult = new System.OutArgument<TimeSpan>(TimeSpan.MinValue);
            p.execute(false, outresult);
            return result.value;
        }

        static tryParse(s: string, result: System.OutArgument<TimeSpan>, formatProvider?: IFormatProvider): boolean {
            if (s == null) {
                result = TimeSpan.Zero;
                return false;
            }

            var p = new Parser(s, formatProvider);
            return p.Execute(true, result);
        }


        public static ParseExact(input: string, format: string, formatProvider: IFormatProvider): TimeSpan;
        public static ParseExact(input: string, formats: string[], formatProvider: IFormatProvider): TimeSpan;
        public static ParseExact(input: string, format: string, formatProvider: IFormatProvider, styles: System.Globalization.TimeSpanStyles): TimeSpan;
        public static ParseExact(input: string, format: string[], formatProvider: IFormatProvider, styles: System.Globalization.TimeSpanStyles): TimeSpan;

        public static ParseExact(input: string, format: any, formatProvider: IFormatProvider, styles?: System.Globalization.TimeSpanStyles = System.Globalization.TimeSpanStyles.None): TimeSpan {

            if (input == null)
                throw new ArgumentNullException("input");


            if (format == null)
                throw new ArgumentNullException("format");

            var formats;
            if (typeof format == "string") {
                formats = [format];

            }

            var outresult = new System.OutArgument<TimeSpan>(TimeSpan.MinValue);
            if (!TimeSpan.tryParseExact(input, formats, formatProvider, styles, outresult))
                throw new FormatException("Invalid format.");

            return outresult.value;

        }



        static tryParseExact(input: string, format: string, formatProvider: IFormatProvider, styles: System.Globalization.TimeSpanStyles, result: System.OutArgument<TimeSpan>): boolean;
        static tryParseExact(input: string, format: string[], formatProvider: IFormatProvider, styles: System.Globalization.TimeSpanStyles, result: System.OutArgument<TimeSpan>): boolean;

        static tryParseExact(input: string, format: any, formatProvider: IFormatProvider, styles?: System.Globalization.TimeSpanStyles = System.Globalization.TimeSpanStyles.None, result: System.OutArgument<TimeSpan>) {

            result.value = TimeSpan.Zero;

            var formats: string[];
            if (typeof format == "string") {
                formats = [<string>format];
            } else {
                formats = <string[]>format;
            }

            if (input == null || formats == null || formats.length == 0)
                return false;

            var p = new Parser(input, formatProvider);
            p.exact = true;

            formats.forEach((format: string) => {

                if (format == null || format.length == 0) return false; // wrong format, return immediately.

                switch (format) {
                    case "g":
                        p.allMembersRequired = false;
                        p.cultureSensitive = true;
                        p.useColonAsDaySeparator = true;
                        break;
                    case "G":
                        p.allMembersRequired = true;
                        p.cultureSensitive = true;
                        p.useColonAsDaySeparator = true;
                        break;
                    case "c":
                        p.allMembersRequired = false;
                        p.cultureSensitive = false;
                        p.useColonAsDaySeparator = false;
                        break;
                    default:
                        // Single letter formats other than the defined ones are not accepted.
                        if (format.length == 1)
                            return false;
                        // custom format
                        if (p.executeWithFormat(format, styles, true, result))
                            return true;
                    //continue;
                }


                if (p.execute(true, result))
                    return true;
            });

            return false;
        }

        subtract(ts: TimeSpan): TimeSpan {
            return new TimeSpan(this._ticks - ts.Ticks);
        }


        private __internalToStringDefault(): string {
            var sb = new System.Text.StringBuilder("14");
            if (this._ticks < 0) sb.append('-');

            if (this.Days != 0) {
                sb.append(Math.abs(this.Days));
                sb.append('.');
            }

            sb.append(Math.abs(this.Hours).toString("D2"));
            sb.append(':');
            sb.append(Math.abs(this.Minutes).toString("D2"));
            sb.append(':');
            sb.append(Math.abs(this.Seconds).toString("D2"));

            var fractional: number = Math.floor(Math.abs(this._ticks % TimeSpan.TicksPerSecond));
            if (fractional != 0) {
                sb.append('.');
                sb.append(fractional.toString("D7"));
            }

            return sb.ToString();
        }


        public ToString(format?: string, formatProvider?: IFormatProvider): string {
            //TODO : finish as soon as NumberFormatInfo is available
            //if (format == null || format.Length == 0 || format == "c" ||
            //    format == "t" || format == "T") // Default version
            //    return this.__internalToStringDefault();

            //if (format != "g" && format != "G") return this.ToStringCustom(format); // custom formats ignore culture/formatProvider

            //    var number_info: NumberFormatInfo = null;
            //if (formatProvider)
            //    number_info = <NumberFormatInfo>formatProvider.GetFormat(typeof (NumberFormatInfo));
            //if (number_info == null)
            //    number_info = Thread.CurrentThread.CurrentCulture.NumberFormat;

            //	var decimal_separator : string = number_info.NumberDecimalSeparator;
            //	var days, hours, minutes, seconds, milliseconds, fractional;

            //    days = Math.abs(this.Days);
            //    hours = Math.abs(this.Hours);
            //    minutes = Math.abs(this.Minutes);
            //    seconds = Math.abs(this.Seconds);
            //milliseconds = Math.abs(this.Milliseconds);
            //fractional = (int) Math.Abs(_ticks % TicksPerSecond);

            //	// Set Capacity depending on whether it's long or shot format
            //	StringBuilder sb = new StringBuilder(format == "g" ? 16 : 32);
            //if (_ticks < 0)
            //    sb.Append('-');

            //switch (format) {
            //    case "g": // short version
            //        if (days != 0) {
            //            sb.Append(days.ToString());
            //            sb.Append(':');
            //        }
            //        sb.Append(hours.ToString());
            //        sb.Append(':');
            //        sb.Append(minutes.ToString("D2"));
            //        sb.Append(':');
            //        sb.Append(seconds.ToString("D2"));
            //        if (milliseconds != 0) {
            //            sb.Append(decimal_separator);
            //            sb.Append(milliseconds.ToString("D3"));
            //        }
            //        break;
            //    case "G": // long version
            //        sb.Append(days.ToString("D1"));
            //        sb.Append(':');
            //        sb.Append(hours.ToString("D2"));
            //        sb.Append(':');
            //        sb.Append(minutes.ToString("D2"));
            //        sb.Append(':');
            //        sb.Append(seconds.ToString("D2"));
            //        sb.Append(decimal_separator);
            //        sb.Append(fractional.ToString("D7"));
            //        break;
            //}

            //return sb.ToString();
        }

        private ToStringCustom(format: string): string {
            // Single char formats are not accepted.
            if (format.length < 2)
                throw new FormatException("The format is not recognized.");



            var parser = new FormatParser(format);
            var element: FormatElement;
            var value: number;

            var sb = new StringBuilder(format.length + 1);

            for (; ;) {
                if (parser.AtEnd)
                    break;

                element = parser.GetNextElement();
                switch (element.Type) {
                    case FormatElementType.Days:
                        value = Math.abs(this.Days);
                        break;
                    case FormatElementType.Hours:
                        value = Math.abs(this.Hours);
                        break;
                    case FormatElementType.Minutes:
                        value = Math.abs(this.Minutes);
                        break;
                    case FormatElementType.Seconds:
                        value = Math.abs(this.Seconds);
                        break;
                    case FormatElementType.Ticks:
                        value = Math.abs(this.Milliseconds);
                        break;
                    case FormatElementType.TicksUppercase:
                        value = Math.abs(this.Milliseconds);
                        if (value > 0) {
                            var threshold: number = Math.pow(10, element.IntValue);
                            while (value >= threshold)
                                value /= 10;
                            sb.Append(value.toString());
                        }
                        break;
                    case FormatElementType.EscapedChar:
                        sb.Append(element.CharValue);
                        break;
                    case FormatElementType.Literal:
                        sb.Append(element.StringValue);
                        break;
                    default:
                        throw new FormatException("The format is not recognized.");
                }
            }

            return sb.ToString();
        }


        public static op_Addition(t1: TimeSpan, t2: TimeSpan): TimeSpan {
            return t1.add(t2);
        }

        public static op_Equalilty(t1: TimeSpan, t2: TimeSpan): boolean {
            return t1._ticks == t2._ticks;
        }

        public static op_GreaterThan(t1: TimeSpan, t2: TimeSpan): boolean {
            return t1._ticks > t2._ticks;
        }

        public static op_GreaterThanOrEqual(t1: TimeSpan, t2: TimeSpan): boolean {
            return t1._ticks >= t2._ticks;
        }

        public static op_Inequality(t1: TimeSpan, t2: TimeSpan): boolean {
            return t1._ticks != t2._ticks;
        }

        public static op_LessThan(t1: TimeSpan, t2: TimeSpan): boolean {
            return t1._ticks < t2._ticks;
        }

        public static op_LessThanOrEqual(t1: TimeSpan, t2: TimeSpan): boolean {
            return t1._ticks <= t2._ticks;
        }

        public static op_Substraction(t1: TimeSpan, t2: TimeSpan): TimeSpan {
            return t1.subtract(t2);
        }

        public static op_UnaryNegation(t: TimeSpan): TimeSpan {
            return t.negate();
        }

        public static op_UnaryPlus(t: TimeSpan): TimeSpan {
            return t;
        }
    }

    enum ParseError {
        None,
        Format,
        Overflow
    }

    class Parser {
        private _src: string;
        private _cur: number = 0;
        private _length: number;
        parse_error: ParseError;

        parsed_ticks: boolean;
        number_format: NumberFormatInfo;
        parsed_numbers_count: number;
        parsed_days_separator: boolean;

        public exact: boolean; // no fallback, strict pattern.
        public allMembersRequired: boolean;
        public cultureSensitive: boolean = true;
        public useColonAsDaySeparator: boolean = true;

        constructor(src: string, formatProvider?: IFormatProvider) {
            this._src = src;
            this._length = this._src.length;
            this.number_format = this.getNumberFormatInfo(null);

            if (formatProvider) {
                this.number_format = this.getNumberFormatInfo(formatProvider);
            }
        }

        private reset(): void {
            this._cur = 0;
            this.parse_error = ParseError.None;
            this.parsed_ticks = this.parsed_days_separator = false;
            this.parsed_numbers_count = 0;
        }

        static getNumberFormatInfo(formatProvider: IFormatProvider): NumberFormatInfo {

            var format: NumberFormatInfo = null;
            if (formatProvider != null)
                format = <NumberFormatInfo>formatProvider.getFormat(System.Statements.typeOf(NumberFormatInfo));
            if (format == null)
                format = Thread.CurrentThread.Currentculture.NumberFormat;
        }

        get atEnd(): boolean {
            return this._cur >= this._length;
        }

        private parseWhiteSpace(): void {
            while (!this.atEnd && Char.isWhiteSpace(this._src, this._cur)) {
                this._cur++;
            }
        }

        private parseSign(): boolean {
            var res: boolean = false;

            if (!this.atEnd && this._src.charAt(this._cur) == '-') {
                res = true;
                this._cur++;
            }

            return res;
        }

        private parseIntExact(digit_count: number, max_digit_count: number): number {
            var res: number = 0;
            var count: number = 0;

            while (!this.atEnd && Char.isDigit(this._src, this._cur)) {
                res = (res * 10) + parseInt(this._src.charAt(this._cur));
                if (res > Int32.MaxValue) {
                    this.setParseError(ParseError.Format);
                    break;
                }
                this._cur++;
                count++;
            }

            if (count == 0 || (digit_count > 1 && digit_count != count) ||
                    count > max_digit_count)
                this.setParseError(ParseError.Format);

            return <number>res;
        }

        private parseInt(optional: boolean): number {

            if (optional && this.atEnd)
                return 0;

            var res: number = 0;
            var count: number = 0;

            while (!this.atEnd && Char.isDigit(this._src, this._cur)) {
                res = (res * 10) + parseInt(this._src.charAt(this._cur));
                if (res > Int32.MaxValue) {
                    this.setParseError(ParseError.Overflow);
                    break;
                }

                this._cur++;
                count++;
            }

            if (!optional && (count == 0))
                this.setParseError(ParseError.Format);

            if (count > 0)
                this.parsed_numbers_count++;

            return <number>res;
        }

        private parseOptDaysSeparator(): boolean {
            if (this.atEnd)
                return false;

            if (this._src.charAt(this._cur) == '.') {
                this._cur++;
                this.parsed_days_separator = true;
                return true;
            }

            return false;
        }

        private parseOptDecimalSeparator(): boolean {
            if (this.atEnd)
                return false;

            if (!this.exact || !this.cultureSensitive)
                if (this._src.charAt(this._cur) == '.') {
                    this._cur++;
                    return true;    
                }

            var decimal_seperator: string = this.number_format.NumberDecimalSeperator;
            if(this.cultureSensitive && String.compare(this._src, this._cur, decimal_seperator, 0, decimal_seperator.length) == 0{
                this._cur += decimal_seperator.length;
                return true;
            }

            return false;
        }

        private parseLiteral(value: string): boolean {
            if (!this.atEnd && String.compare(this._src, this._cur, value, 0, value.length) == 0) {
                this._cur += value.length;
                return true;
            }

            return false;
        }

        private parseChar(c: string): boolean {
            if (!this.atEnd && this._src.charAt(this._cur) == c) {
                this._cur++;
                return true;
            }

            return false;
        }

        private parseOptDot(): boolean {
            if (this.atEnd)
                return false;

            if (this._src.charAt(this._cur) == '.') {
                this._cur++;
                return true;
            }

            return false;
        }

        private parseColon(optional: boolean): void {
            if (!this.atEnd) {
                if (this._src.charAt(this._cur) == ':')
                    this._cur++;
                else if (!optional)
                    this.setParseError(ParseError.Format);
            }
        }

        private parseTicks(): number {
            var mag: number = 1000000;
            var res: number = 0;
            var digitseen: boolean = false;

            while (mag > 0 && !this.atEnd && Char.isDigit(this._src, this._cur)) {
                res = res + parseInt(this._src.charAt(this._cur)) * mag;
                this._cur++;
                mag = mag / 10;
                digitseen = true;
            }

            if (!digitseen)
                this.setParseError(ParseError.Format);

            else if (!this.atEnd && Char.isDigit(this._src, this._cur))
                this.setParseError(ParseError.Overflow);

            this.parsed_ticks = true;

            return res;
        }

        private parseTicksExact(digits_count: number, max_digits_count: number): number {
            var mag: number = 1000000;
            var res: number = 0;
            var count: number = 0;

            while(mag > 0 && !this.atEnd && Char.isDigit(this._src, this._cur)) {
                res = res + parseInt(this._src.charAt(this._cur)) * mag;
                this._cur++;
                count++;
                mag = mag / 10;
            }

            if ((digits_count > 0 && count != digits_count) || count > max_digits_count)
                this.setParseError(ParseError.Format);

            return res;
        }

        private setParseError(error: ParseError) {
            if (this.parse_error != ParseError.None)
                return;

            this.parse_error = error;
        }

        private checkParseSuccess(tryParse: boolean){
            if (this.parse_error == ParseError.Overflow) {
                if (tryParse)
                    return false;
                throw new OverflowException(Locale.getText("Invalid time data."));
            }

            if (this.parse_error == ParseError.Format) {
                if (tryParse)
                    return false;
                throw new FormatException(Locale.getText("Invalid format for TimeSpan Parse."));
            }

            return true;
        }

        // We are using a different parse approach in 4.0, due to some changes in the behaviour
        // of the parse routines.
        // The input string is documented as:
        // 	Parse [ws][-][dd.]hh:mm:ss[.ff][ws]
        //
        // There are some special cases as part of 4.0, however:
        // 1. ':' *can* be used as days separator, instead of '.', making valid the format 'dd:hh:mm:ss'
        // 2. A input in the format 'hh:mm:ss' will end up assigned as 'dd.hh:mm' if the first int has a value
        // exceeding the valid range for hours: 0-23.
        // 3. The decimal separator can be retrieved from the current culture, as well as keeping support
        // for the '.' value as part of keeping compatibility.
        //
        // So we take the approach to parse, if possible, 4 integers, and depending on both how many were
        // actually parsed and what separators were read, assign the values to days/hours/minutes/seconds.
        //
        execute(tryParse: boolean, result: TimeSpan) {
            var sign: boolean;
            var value1, value2, value3, value4: number;
            var days, hours, minutes, seconds: number;
            var ticks: number = 0;

            result = TimeSpan.Zero;
            value1 = value2 = value3 = value4 = 0;
            days = hours = minutes = seconds = 0;

            this.reset();
            this.parseWhiteSpace();
            sign = this.parseSign();

            // Parse 4 integers, making only the first one non-optional.
            value1 = this.parseInt(false);
            if (!this.parseOptDaysSeparator()) // Parse either day separator or colon
                this.parseColon(false);
            var p: number = this._cur;
            value2 = this.parseInt(true);
            value3 = value4 = 0;
            if (p < this._cur) {
                this.parseColon(true);
                value3 = this.parseInt(true);
                this.parseColon(true);
                value4 = this.parseInt(true);
            }

            // We know the precise separator for ticks, so there's no need to guess.
            if (this.parseOptDecimalSeparator())
                ticks = this.parseTicks();

            this.parseWhiteSpace();

            if (!this.atEnd)
                this.setParseError(ParseError.Format);

            if (this.exact) {
                // In Exact mode we cannot allow both ':' and '.' as day separator.
                if (this.useColonAsDaySeparator && this.parsed_days_separator ||
                    this.allMembersRequired && (this.parsed_numbers_count < 4 || !this.parsed_ticks))
                    this.setParseError(ParseError.Format);
            }

            switch (this.parsed_numbers_count) {
                case 1:
                    days = value1;
                    break;
                case 2: // Two elements are valid only if they are *exactly* in the format: 'hh:mm'
                    if (this.parsed_days_separator)
                        this.setParseError(ParseError.Format);
                    else {
                        hours = value1;
                        minutes = value2;
                    }
                    break;
                case 3: // Assign the first value to days if we parsed a day separator or the value
                    // is not in the valid range for hours.
                    if (this.parsed_days_separator || value1 > 23) {
                        days = value1;
                        hours = value2;
                        minutes = value3;
                    } else {
                        hours = value1;
                        minutes = value2;
                        seconds = value3;
                    }
                    break;
                case 4: // We are either on 'dd.hh:mm:ss' or 'dd:hh:mm:ss'
                    if (!this.useColonAsDaySeparator && !this.parsed_days_separator)
                        this.setParseError(ParseError.Format);
                    else {
                        days = value1;
                        hours = value2;
                        minutes = value3;
                        seconds = value4;
                    }
                    break;
            }

            if (hours > 23 || minutes > 59 || seconds > 59)
                this.setParseError(ParseError.Overflow);
                
            if (!this.checkParseSuccess(tryParse))
                return false;

            var t: number;
            //TODO
            //There is no public CalculateTicks yet.
            //if (!TimeSpan.__internalCalculateTicks(days, hours, minutes, seconds, 0, false, t))
            //    return false;

            try {
                t = ((sign) ? (-t - ticks) : (t + ticks));
            } catch (e: OverflowException) {
                if (tryParse)
                    return false;
                throw e;
            }

            result = new TimeSpan(t);
            return true;
        }

        executeWithFormat(format: string, style: TimeSpanStyles, tryParse: boolean, result: TimeSpan) {
            var days, hours, minutes, seconds, ticks: number;
            var format_element: FormatElement;

            days = hours = minutes = seconds = ticks = -1;
            result = TimeSpan.Zero;
            this.reset();

            var format_parser: FormatParser = new FormatParser(format);

            for (; ;) {
                // We need to continue if atEnd == true, since we could have
                // a optional second element.
                if (this.parse_error != ParseError.None)
                    break;
                if (format_parser.atEnd)
                    break;

                format_element = format_parser.getNextElement();
                switch (format_element.type) {
                    case FormatElementType.Days:
                    if (days != -1)
                        this.setParseError(ParseError.Format);
						days = this.parseIntExact(format_element.IntValue, 8);
						break;
					case FormatElementType.Hours:
						if (hours != -1)
                            this.setParseError(ParseError.Format);
                        hours = this.parseIntExact(format_element.IntValue, 2);
						break;
					case FormatElementType.Minutes:
						if (minutes != -1)
                            this.setParseError(ParseError.Format);
                            minutes = this.parseIntExact(format_element.IntValue, 2);
						break;
					case FormatElementType.Seconds:
						if (seconds != -1)
                            this.setParseError(ParseError.Format);
                            seconds = this.parseIntExact(format_element.IntValue, 2);
						break;
					case FormatElementType.Ticks:
						if (ticks != -1)
                            this.setParseError(ParseError.Format);
                            ticks = this.parseTicksExact(format_element.IntValue, format_element.IntValue);
						break;
					case FormatElementType.TicksUppercase:
						// Similar to Milliseconds, but optional and the
						// number of F defines the max length, not the required one.
						if (ticks != -1)
                            this.setParseError(ParseError.Format);
                            ticks = this.parseTicksExact(0, format_element.IntValue);
						break;
					case FormatElementType.Literal:
						if (!this.parseLiteral(format_element.StringValue))
                            this.setParseError(ParseError.Format);
						break;
					case FormatElementType.EscapedChar:
						if (!this.parseChar(format_element.CharValue))
                            this.setParseError(ParseError.Format);
						break;
					case FormatElementType.Error:
						this.setParseError(ParseError.Format);
                        break;
                }
            }

            if (days == -1)
                days = 0;
            if (hours == -1)
                hours = 0;
            if (minutes == -1)
                minutes = 0;
            if (seconds == -1)
                seconds = 0;
            if (ticks == -1)
                ticks = 0;

            if(!this.atEnd || !format_parser.AtEnd)
					this.setParseError(ParseError.Format);
            if (hours > 23 || minutes > 59 || seconds > 59)
                this.setParseError(ParseError.Format);

            if (!this.checkParseSuccess(tryParse))
                return false;

            var t: number;

            // TODO
            // Commented out since we don't have the public CalculateTicks() yet.
            //if (!TimeSpan.CalculateTicks(days, hours, minutes, seconds, 0, false, out t))
            //   return false;

            try {
                t = (style == TimeSpanStyles.AssumeNegative) ? (-t - ticks) : (t + ticks);
            } catch (e: OverflowException) {
                if (tryParse)
                    return false;
                throw e;
            }

            result = new TimeSpan(t);
            return true;
        }

    }

    enum FormatElementType {
        Days,
        Hours,
        Minutes,
        Seconds,
        Ticks, // 'f'
        TicksUppercase, // 'F'
        Literal,
        EscapedChar,
        Error,
        End
    }

}


	