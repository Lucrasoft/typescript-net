//todo

module System {

	export class UriTypeConverter /* extends TypeConverter */{

//		public UriTypeConverter()
//		{
//		}


//		private bool CanConvert(Type type)
//		{
//        if (type == typeof (string))
//            return true;
//        if (type == typeof (Uri))
//				return true;
//#if NET_2_1
//			return false;
//#else
//			return (type == typeof (InstanceDescriptor));
//#endif
//		}

//		public override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)
//		{
//        if (sourceType == null)
//            throw new ArgumentNullException("sourceType");

//        return CanConvert(sourceType);
//		}

//		public override bool CanConvertTo(ITypeDescriptorContext context, Type destinationType)
//		{
//        if (destinationType == null)
//            return false;

//        return CanConvert(destinationType);
//		}

//		public override Object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, Object value)
//		{
//        if (value == null) {
//#if NET_2_1
//				throw new NotSupportedException(Locale.GetText("Cannot convert from value."));
//#else
//				throw new ArgumentNullException("value");
//#endif
//			}

//        if (!CanConvertFrom(context, value.GetType()))
//            throw new NotSupportedException(Locale.GetText("Cannot convert from value."));

//			if (value is Uri)
//				return value;

//			string s = (value as string);
//        if (s != null) {
//#if NET_2_1
//				if (s == "")
//					return null;
//#endif
//				return new Uri(s, UriKind.RelativeOrAbsolute);
//			}

//#if !NET_2_1
//			InstanceDescriptor id = (value as InstanceDescriptor);
//        if (id != null) {
//            return id.Invoke();
//			}
//#endif
//			return base.ConvertFrom(context, culture, value);
//		}

//		public override Object ConvertTo(ITypeDescriptorContext context, CultureInfo culture, Object value, Type destinationType)
//		{
//        if (!CanConvertTo(context, destinationType))
//            throw new NotSupportedException(Locale.GetText("Cannot convert to destination type."));

//			Uri uri = (value as Uri);
//        if (uri != null) {
//            if (destinationType == typeof (string))
//                return uri.ToString();
//            if (destinationType == typeof (Uri))
//					return uri;
//#if !NET_2_1
//				if (destinationType == typeof (InstanceDescriptor)) {
//					ConstructorInfo ci = typeof (Uri).GetConstructor(new Type[2] { typeof (string), typeof (UriKind) });
//                    return new InstanceDescriptor(ci, new Object []{ uri.ToString(), uri.IsAbsoluteUri ? UriKind.Absolute : UriKind.Relative });
//				}
//#else
//				throw new NotSupportedException(Locale.GetText("Cannot convert to destination type."));
//#endif
//			}

//#if NET_2_1
//			throw new NotSupportedException(Locale.GetText("Cannot convert to destination type."));
//#else
//			return base.ConvertTo(context, culture, value, destinationType);
//#endif
//		}

//#if !NET_2_1
//		public override bool IsValid(ITypeDescriptorContext context, Object value)
//		{
//        if (value == null)
//            return false;

//			// LAMESPEC: docs says that a string is valid only if we can create an URI
//			// from it. However all strings seems to be accepted (see unit tests)
//			return ((value is string) || (value is Uri));
//		}
//#endif
	}
}