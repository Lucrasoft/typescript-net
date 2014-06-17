/// <reference path="Type.ts" />

/// <reference path="Exceptions\OverflowException.ts" />
/// <reference path="Exceptions\ArgumentException.ts" />
/// <reference path="Interfaces\IComparable.ts" />
/// <reference path="Interfaces\IEquatable.ts" />
/// <reference path="Interfaces\IFormattable.ts" />


module System
{

    export class TimeSpan implements IComparable<TimeSpan>, IEquatable<TimeSpan>, IFormattable, IObject {

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

            var p = new Parser(s`, formatProvider);
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
            p.Exact = true;

            formats.forEach((format: string) => {

                if (format == null || format.length == 0) return false; // wrong format, return immediately.

                switch (format) {
                    case "g":
                        p.AllMembersRequired = false;
                        p.CultureSensitive = true;
                        p.UseColonAsDaySeparator = true;
                        break;
                    case "G":
                        p.AllMembersRequired = true;
                        p.CultureSensitive = true;
                        p.UseColonAsDaySeparator = true;
                        break;
                    case "c":
                        p.AllMembersRequired = false;
                        p.CultureSensitive = false;
                        p.UseColonAsDaySeparator = false;
                        break;
                    default:
                        // Single letter formats other than the defined ones are not accepted.
                        if (format.length == 1)
                            return false;
                        // custom format
                        if (p.ExecuteWithFormat(format, styles, true, result))
                            return true;
                    //continue;
                }


                if (p.Execute(true, result))
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
                        value = Math.abs(Days);
                        sb.Append(value.ToString("D" + element.IntValue));
                        break;
                    case FormatElementType.Hours:
                        value = Math.abs(Hours);
                        sb.Append(value.ToString("D" + element.IntValue));
                        break;
                    case FormatElementType.Minutes:
                        value = Math.Abs(Minutes);
                        sb.Append(value.ToString("D" + element.IntValue));
                        break;
                    case FormatElementType.Seconds:
                        value = Math.Abs(Seconds);
                        sb.Append(value.ToString("D" + element.IntValue));
                        break;
                    case FormatElementType.Ticks:
                        value = Math.Abs(Milliseconds);
                        sb.Append(value.ToString("D" + element.IntValue));
                        break;
                    case FormatElementType.TicksUppercase:
                        value = Math.Abs(Milliseconds);
                        if (value > 0) {
							int threshold = (int) Math.Pow(10, element.IntValue);
                            while (value >= threshold)
                                value /= 10;
                            sb.Append(value.ToString());
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
            return t1.Subtract(t2);
        }

        public static op_UnaryNegation(t: TimeSpan): TimeSpan {
            return t.Negate();
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

     class Parser
		{
        private _src: string;
        private _cur: number = 0;
        private _length: number;
        parse_error: ParseError;

        parsed_ticks: boolean;
        number_format: NumberFormatInfo;
        parsed_numbers_count: number;
        parsed_days_separator: boolean;

        public Exact: boolean; // no fallback, strict pattern.
        public AllMembersRequired: boolean;
        public CultureSensitive: boolean = true;
        public UseColonAsDaySeparator: boolean = true;

        constructor(src: string) {
            this._src = src;
            this._length = _src.length;
            this.number_format = GetNumberFormatInfo(null);

        }

			// Reset state data, so we can execute another parse over the input.
		reset()
			{
        this._cur = 0;
        this.parse_error = ParseError.None;
        parsed_ticks = parsed_days_separator = false;
        parsed_numbers_count = 0;
			}

			public Parser (string src, IFormatProvider formatProvider) :
				this(src)
			{
        number_format = GetNumberFormatInfo(formatProvider);
    }

			NumberFormatInfo GetNumberFormatInfo(IFormatProvider formatProvider)
			{
				NumberFormatInfo format = null;
        if (formatProvider != null)
            format = (NumberFormatInfo) formatProvider.GetFormat(typeof (NumberFormatInfo));
        if (format == null)
            format = Thread.CurrentThread.CurrentCulture.NumberFormat;

        return format;
			}
			public get AtEnd() : boolean {

        return this._cur >= _length;

			}

			// All "Parse" functions throw a FormatException on syntax error.
			// Their return value is semantic value of the item parsed.

			// Range checking is spread over three different places:
			// 1) When parsing "int" values, an exception is thrown immediately
			//    when the value parsed exceeds the maximum value for an int.
			// 2) An explicit check is built in that checks for hours > 23 and
			//    for minutes and seconds > 59.
			// 3) Throwing an exceptions for a final TimeSpan value > MaxValue
			//    or < MinValue is left to the TimeSpan constructor called.

			// Parse zero or more whitespace chars.
			private void ParseWhiteSpace()
			{
        while (!AtEnd && Char.IsWhiteSpace(_src, _cur)) {
            _cur++;
        }
			}

			// Parse optional sign character.
			private bool ParseSign()
			{
				bool res = false;

        if (!AtEnd && _src[_cur] == '-') {
            res = true;
            _cur++;
        }

        return res;
			}


			// Used for custom formats parsing, where we may need to declare how
			// many digits we expect, as well as the maximum allowed.
			private int ParseIntExact(int digit_count, int max_digit_count)
			{
				long res = 0;
				int count = 0;

        // We can have more than one preceding zero here.
        while (!AtEnd && Char.IsDigit(_src, _cur)) {
            res = res * 10 + _src[_cur] - '0';
            if (res > Int32.MaxValue) {
                SetParseError(ParseError.Format);
                break;
            }
            _cur++;
            count++;
        }

        // digit_count = 1 means we can use up to maximum count,
        if (count == 0 || (digit_count > 1 && digit_count != count) ||
            count > max_digit_count)
            SetParseError(ParseError.Format);

				return (int) res;
			}

			// Parse simple int value
			private int ParseInt(bool optional)
			{
        if (optional && AtEnd)
            return 0;

				long res = 0;
				int count = 0;

        while (!AtEnd && Char.IsDigit(_src, _cur)) {
            res = res * 10 + _src[_cur] - '0';
            if (res > Int32.MaxValue) {
                SetParseError(ParseError.Overflow);
                break;
            }
            _cur++;
            count++;
        }

        if (!optional && (count == 0))
            SetParseError(ParseError.Format);
        if (count > 0)
            parsed_numbers_count++;

				return (int) res;
			}

			// This behaves pretty much like ParseOptDot, but we need to have it
			// as a separated routine for both days and decimal separators.
			private bool ParseOptDaysSeparator()
			{
        if (AtEnd)
            return false;

        if (_src[_cur] == '.') {
            _cur++;
            parsed_days_separator = true;
            return true;
        }
        return false;
			}

			// Just as ParseOptDot, but for decimal separator
			private bool ParseOptDecimalSeparator()
			{
        if (AtEnd)
            return false;

        // we may need to provide compatibility with old versions using '.'
        // for culture insensitve and non exact formats.
        if (!Exact || !CultureSensitive)
            if (_src[_cur] == '.') {
                _cur++;
                return true;
            }

				string decimal_separator = number_format.NumberDecimalSeparator;
        if (CultureSensitive && String.Compare(_src, _cur, decimal_separator, 0, decimal_separator.Length) == 0) {
            _cur += decimal_separator.Length;
            return true;
        }

        return false;
			}

			private bool ParseLiteral(string value)
			{
        if (!AtEnd && String.Compare(_src, _cur, value, 0, value.Length) == 0) {
            _cur += value.Length;
            return true;
        }

        return false;
			}

			private bool ParseChar(char c)
			{
        if (!AtEnd && _src[_cur] == c) {
            _cur++;
            return true;
        }

        return false;
			}
			// Parse optional dot
			private bool ParseOptDot()
			{
        if (AtEnd)
            return false;

        if (_src[_cur] == '.') {
            _cur++;
            return true;
        }
        return false;
			}

			private void ParseColon(bool optional)
			{
        if (!AtEnd) {
            if (_src[_cur] == ':')
                _cur++;
            else if (!optional)
                SetParseError(ParseError.Format);
        }
			}

			// Parse [1..7] digits, representing fractional seconds (ticks)
			// In 4.0 more than 7 digits will cause an OverflowException
			private long ParseTicks()
			{
				long mag = 1000000;
				long res = 0;
				bool digitseen = false;

        while (mag > 0 && !AtEnd && Char.IsDigit(_src, _cur)) {
            res = res + (_src[_cur] - '0') * mag;
            _cur++;
            mag = mag / 10;
            digitseen = true;
        }

        if (!digitseen)
            SetParseError(ParseError.Format);
        else if (!AtEnd && Char.IsDigit(_src, _cur))
            SetParseError(ParseError.Overflow);

        parsed_ticks = true;

        return res;
			}

			// Used by custom formats parsing
			// digits_count = 0 for digits up to max_digits_count (optional), and other value to
			// force a precise number of digits.
			private long ParseTicksExact(int digits_count, int max_digits_count)
			{
				long mag = 1000000;
				long res = 0;
				int count = 0;

        while (mag > 0 && !AtEnd && Char.IsDigit(_src, _cur)) {
            res = res + (_src[_cur] - '0') * mag;
            _cur++;
            count++;
            mag = mag / 10;
        }

        if ((digits_count > 0 && count != digits_count) ||
            count > max_digits_count)
            SetParseError(ParseError.Format);

        return res;
    }

    void SetParseError(ParseError error)
			{
        // We preserve the very first error.
        if (parse_error != ParseError.None)
            return;

        parse_error = error;
    }

			bool CheckParseSuccess(bool tryParse)
			bool CheckParseSuccess(int hours, int minutes, int seconds, bool tryParse)
			{
        // We always report the first error, but for 2.0 we need to give a higher
        // precence to per-element overflow (as opposed to int32 overflow).
        if (parse_error == ParseError.Overflow) {
            if (parse_error == ParseError.Overflow || hours > 23 || minutes > 59 || seconds > 59) {
                if (tryParse)
                    return false;
                throw new OverflowException(
                    Locale.GetText("Invalid time data."));
            }

            if (parse_error == ParseError.Format) {
                if (tryParse)
                    return false;
                throw new FormatException(
                    Locale.GetText("Invalid format for TimeSpan.Parse."));
            }

            return true;
			}

#if NET_4_0
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
			public Execute(tryParse : boolean, out TimeSpan result) : boolean
			{
				bool sign;
				int value1, value2, value3, value4;
				int days, hours, minutes, seconds;
				long ticks = 0;

            result = TimeSpan.Zero;
            value1 = value2 = value3 = value4 = 0;
            days = hours = minutes = seconds = 0;

            Reset();

            ParseWhiteSpace();
            sign = ParseSign();

            // Parse 4 integers, making only the first one non-optional.
            value1 = ParseInt(false);
            if (!ParseOptDaysSeparator()) // Parse either day separator or colon
                ParseColon(false);
				int p = _cur;
            value2 = ParseInt(true);
            value3 = value4 = 0;
            if (p < _cur) {
                ParseColon(true);
                value3 = ParseInt(true);
                ParseColon(true);
                value4 = ParseInt(true);
            }

            // We know the precise separator for ticks, so there's no need to guess.
            if (ParseOptDecimalSeparator())
                ticks = ParseTicks();

            ParseWhiteSpace();

            if (!AtEnd)
                SetParseError(ParseError.Format);

            if (Exact)
                // In Exact mode we cannot allow both ':' and '.' as day separator.
                if (UseColonAsDaySeparator && parsed_days_separator ||
                    AllMembersRequired && (parsed_numbers_count < 4 || !parsed_ticks))
                    SetParseError(ParseError.Format);

            switch (parsed_numbers_count) {
                case 1:
                    days = value1;
                    break;
                case 2: // Two elements are valid only if they are *exactly* in the format: 'hh:mm'
                    if (parsed_days_separator)
                        SetParseError(ParseError.Format);
                    else {
                        hours = value1;
                        minutes = value2;
                    }
                    break;
                case 3: // Assign the first value to days if we parsed a day separator or the value
                    // is not in the valid range for hours.
                    if (parsed_days_separator || value1 > 23) {
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
                    if (!UseColonAsDaySeparator && !parsed_days_separator)
                        SetParseError(ParseError.Format);
                    else {
                        days = value1;
                        hours = value2;
                        minutes = value3;
                        seconds = value4;
                    }
                    break;
            }

            if (hours > 23 || minutes > 59 || seconds > 59)
                SetParseError(ParseError.Overflow);

            if (!CheckParseSuccess(tryParse))
                return false;

				long t;
            if (!TimeSpan.CalculateTicks(days, hours, minutes, seconds, 0, false, out t))
                return false;

            try {
                t = checked((sign) ? (-t - ticks) : (t + ticks));
            } catch (OverflowException) {
                if (tryParse)
                    return false;
					throw;
            }

            result = new TimeSpan(t);
            return true;
			}
#else
			public bool Execute(bool tryParse, out TimeSpan result)
			{
				bool sign;
				int days;
				int hours = 0;
				int minutes;
				int seconds;
				long ticks;

            result = TimeSpan.Zero;

            // documented as...
            // Parse [ws][-][dd.]hh:mm:ss[.ff][ws]
            // ... but not entirely true as an lonely 
            // integer will be parsed as a number of days
            ParseWhiteSpace();
            sign = ParseSign();
            days = ParseInt(false);
            if (ParseOptDot()) {
                hours = ParseInt(true);
            }
            else if (!AtEnd) {
                hours = days;
                days = 0;
            }
            ParseColon(false);
				int p = _cur;
            minutes = ParseInt(true);
            seconds = 0;
            if (p < _cur) {
                ParseColon(true);
                seconds = ParseInt(true);
            }

            if (ParseOptDot()) {
                ticks = ParseTicks();
            }
            else {
                ticks = 0;
            }
            ParseWhiteSpace();

            if (!AtEnd)
                SetParseError(ParseError.Format);

            if (!CheckParseSuccess(hours, minutes, seconds, tryParse))
                return false;

				long t;
            if (!TimeSpan.CalculateTicks(days, hours, minutes, seconds, 0, false, out t))
                return false;

            try {
                t = checked((sign) ? (-t - ticks) : (t + ticks));
            } catch (OverflowException) {
                if (tryParse)
                    return false;
					throw;
            }

            result = new TimeSpan(t);
            return true;
			}
#endif

#if NET_4_0
			public bool ExecuteWithFormat(string format, TimeSpanStyles style, bool tryParse, out TimeSpan result)
			{
				int days, hours, minutes, seconds;
				long ticks;
				FormatElement format_element;

            days = hours = minutes = seconds = -1;
            ticks = -1;
            result = TimeSpan.Zero;
            Reset();

				FormatParser format_parser = new FormatParser(format);

            for (; ;) {
                // We need to continue even if AtEnd == true, since we could have
                // a optional second element.
                if (parse_error != ParseError.None)
                    break;
                if (format_parser.AtEnd)
                    break;

                format_element = format_parser.GetNextElement();
					switch (format_element.Type) {
                    case FormatElementType.Days:
                        if (days != -1)
								goto case FormatElementType.Error;
							days = ParseIntExact(format_element.IntValue, 8);
							break;
						case FormatElementType.Hours:
							if (hours != -1)
								goto case FormatElementType.Error;
                hours = ParseIntExact(format_element.IntValue, 2);
							break;
						case FormatElementType.Minutes:
							if (minutes != -1)
								goto case FormatElementType.Error;
                minutes = ParseIntExact(format_element.IntValue, 2);
							break;
						case FormatElementType.Seconds:
							if (seconds != -1)
								goto case FormatElementType.Error;
                seconds = ParseIntExact(format_element.IntValue, 2);
							break;
						case FormatElementType.Ticks:
							if (ticks != -1)
								goto case FormatElementType.Error;
                ticks = ParseTicksExact(format_element.IntValue,
                    format_element.IntValue);
							break;
						case FormatElementType.TicksUppercase:
							// Similar to Milliseconds, but optional and the
							// number of F defines the max length, not the required one.
							if (ticks != -1)
								goto case FormatElementType.Error;
                ticks = ParseTicksExact(0, format_element.IntValue);
							break;
						case FormatElementType.Literal:
							if (!ParseLiteral(format_element.StringValue))
                    SetParseError(ParseError.Format);
							break;
						case FormatElementType.EscapedChar:
							if (!ParseChar(format_element.CharValue))
                    SetParseError(ParseError.Format);
							break;
						case FormatElementType.Error:
							SetParseError(ParseError.Format);
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

        if (!AtEnd || !format_parser.AtEnd)
            SetParseError(ParseError.Format);
        if (hours > 23 || minutes > 59 || seconds > 59)
            SetParseError(ParseError.Format);

        if (!CheckParseSuccess(tryParse))
            return false;

				long t;
        if (!TimeSpan.CalculateTicks(days, hours, minutes, seconds, 0, false, out t))
            return false;

        try {
            t = checked((style == TimeSpanStyles.AssumeNegative) ? (-t - ticks) : (t + ticks));
        } catch (OverflowException) {
            if (tryParse)
                return false;
					throw;
        }

        result = new TimeSpan(t);
        return true;
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

		struct FormatElement
		{
			public FormatElement(FormatElementType type)
			{
        Type = type;
        CharValue = (char) 0;
        IntValue = 0;
        StringValue = null;
			}

			public FormatElementType Type;
			public char CharValue; // Used by EscapedChar
			public string StringValue; // Used by Literal
			public int IntValue; // Used by numerical elements.
		}

		class FormatParser 
		{
    int cur;
			string format;

			public FormatParser(string format)
			{
    this.format = format;
			}

			public bool AtEnd {
				get {
        return cur >= format.Length;
    }
			}

			public FormatElement GetNextElement()
			{
				FormatElement element = new FormatElement();

    if (AtEnd)
        return new FormatElement(FormatElementType.End);

				int count = 0;
				switch (format[cur]) {
        case 'd':
            count = ParseChar('d');
            if (count > 8)
                return new FormatElement(FormatElementType.Error);
            element.Type = FormatElementType.Days;
            element.IntValue = count;
            break;
        case 'h':
            count = ParseChar('h');
            if (count > 2)
                return new FormatElement(FormatElementType.Error);
            element.Type = FormatElementType.Hours;
            element.IntValue = count;
            break;
        case 'm':
            count = ParseChar('m');
            if (count > 2)
                return new FormatElement(FormatElementType.Error);
            element.Type = FormatElementType.Minutes;
            element.IntValue = count;
            break;
        case 's':
            count = ParseChar('s');
            if (count > 2)
                return new FormatElement(FormatElementType.Error);
            element.Type = FormatElementType.Seconds;
            element.IntValue = count;
            break;
        case 'f':
            count = ParseChar('f');
            if (count > 7)
                return new FormatElement(FormatElementType.Error);
            element.Type = FormatElementType.Ticks;
            element.IntValue = count;
            break;
        case 'F':
            count = ParseChar('F');
            if (count > 7)
                return new FormatElement(FormatElementType.Error);
            element.Type = FormatElementType.TicksUppercase;
            element.IntValue = count;
            break;
        case '%':
            cur++;
            if (AtEnd)
                return new FormatElement(FormatElementType.Error);
            if (format[cur] == 'd')
							goto case 'd';
						else if (format[cur] == 'h')
							goto case 'h';
						else if (format[cur] == 'm')
							goto case 'm';
						else if (format[cur] == 's')
							goto case 's';
						else if (format[cur] == 'f')
							goto case 'f';
						else if (format[cur] == 'F')
							goto case 'F';

						return new FormatElement(FormatElementType.Error);
					case '\'':
						string literal = ParseLiteral();
    if (literal == null)
        return new FormatElement(FormatElementType.Error);
    element.Type = FormatElementType.Literal;
    element.StringValue = literal;
						break;
					case '\\':
						char escaped_char = ParseEscapedChar();
						if ((int)escaped_char == 0)
							return new FormatElement(FormatElementType.Error);
    element.Type = FormatElementType.EscapedChar;
    element.CharValue = escaped_char;
						break;
					default:
    return new FormatElement(FormatElementType.Error);
}

				return element;
			}

			int ParseChar(char c)
			{
				int count = 0;

    while (!AtEnd && format[cur] == c) {
        cur++;
        count++;
    }

    return count;
}

			char ParseEscapedChar()
			{
    if (AtEnd || format[cur] != '\\')
					return (char) 0;

    cur++;
    if (AtEnd)
					return (char) 0;

    return format[cur++];
}

			string ParseLiteral()
			{
				int start;
				int count = 0;

    if (AtEnd || format[cur] != '\'')
        return null;

    start = ++cur;
    while (!AtEnd && format[cur] != '\'') {
        cur++;
        count++;
    }

    if (!AtEnd && format[cur] == '\'') {
        cur++;
        return format.Substring(start, count);
    }

    return null;
			}
		}
#endif

	}
}
}


		// Class Parser implements parser for TimeSpan.Parse
	   
