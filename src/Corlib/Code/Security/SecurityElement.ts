module System.Security {

	export class SecurityElement 
	{
        static _type: Type = System.Type.registerClass(SecurityElement, "System.Security.SecurityElement", []);

//        class SecurityAttribute {

//			private _name: string;
//			private _value: string;

//            public SecurityAttribute(name: string, value: string) 
//			{
//                if (!IsValidAttributeName(name))
//                throw new ArgumentException(Locale.GetText("Invalid XML attribute name") + ": " + name);

//                if (!IsValidAttributeValue(value))
//                throw new ArgumentException(Locale.GetText("Invalid XML attribute value") + ": " + value);

//                _name = name;
//                _value = SecurityElement.Unescape(value);
//			}

//            get Name(): string{
//                return _name;
//                }
//            get Value(): string{
//                return _value
//            }

//		}

//		text: string;
//		tag: string;
//        attributes: ArrayList;
//        children: ArrayList;

//		// these values are determined by a simple test program against the MS.Net implementation:
//		//	for (int i = 0; i < 256; i++) {
//		//		if (!SecurityElement.IsValidTag ("" + ((char) i))) {
//		//			System.Console.WriteLine ("TAG: " + i);
//		//		}
//		//	}		
//		// note: this is actually an incorrect implementation of MS, as for example the &
//		// character is not a valid character in tag names.
//		private static Char[] invalid_tag_chars = new Char []{ ' ', '<', '>' };
//		private static Char[] invalid_text_chars = new Char []{ '<', '>' };
//		private static Char[] invalid_attr_name_chars = new Char []{ ' ', '<', '>' };
//		private static Char[] invalid_attr_value_chars = new Char []{ '"', '<', '>' };
//		private static invalid_chars: Char = new Char['<', '>', '"', '\'', '&' ];


//		public SecurityElement (tag: string) : this(tag, null)
//		{

            
//		}

//		public SecurityElement(tag: string, text: string)
//		{
//    if (tag == null)
//        throw new ArgumentNullException("tag");
//    if (!IsValidTag(tag))
//        throw new ArgumentException(Locale.GetText("Invalid XML string") + ": " + tag);
//    this.tag = tag;

//    Text = text;
//}

//		// not a deep copy (childs are references)
//		internal SecurityElement(SecurityElement se)
//		{
//    this.Tag = se.Tag;
//    this.Text = se.Text;

//    if (se.attributes != null) {
//        foreach(SecurityAttribute sa in se.attributes) {
//            this.AddAttribute(sa.Name, sa.Value);
//        }
//    }
//    if (se.children != null) {
//        foreach(SecurityElement child in se.children) {
//            this.AddChild(child);
//        }
//    }
//		}

//		public Hashtable Attributes {
//			get {
//        if (attributes == null)
//            return null;
					
//				Hashtable result = new Hashtable(attributes.Count);
//        foreach(SecurityAttribute sa in attributes) {
//            result.Add(sa.Name, sa.Value);
//        }
//        return result;
//    }

//			set {
//        if (value == null || value.Count == 0) {
//            attributes.Clear();
//            return;
//        }

//        if (attributes == null)
//            attributes = new ArrayList();
//        else
//            attributes.Clear();
//				IDictionaryEnumerator e = value.GetEnumerator();
//        while (e.MoveNext()) {
//            attributes.Add(new SecurityAttribute((string) e.Key, (string) e.Value));
//        }
//    }
//		}

//		public ArrayList Children {
//			get {
//        return children;
//    }

//			set {
//        if (value != null) {
//            foreach(Object o in value) {
//                if (o == null)
//                    throw new ArgumentNullException();
//                // shouldn't we also throw an exception 
//                // when o isn't an instance of SecurityElement?
//            }
//        }
//        children = value;
//    }
//		}

//		public string Tag {
//			get {
//        return tag;
//    }
//			set {
//        if (value == null)
//            throw new ArgumentNullException("Tag");
//        if (!IsValidTag(value))
//            throw new ArgumentException(Locale.GetText("Invalid XML string") + ": " + value);
//        tag = value;
//    }
//		}

//		public string Text {
//			get {
//        return text;
//    }

//			set {
//        if (value != null) {
//            if (!IsValidText(value))
//                throw new ArgumentException(
//                    Locale.GetText("Invalid XML string")
//                    + ": " + value);
//        }
//        text = Unescape(value);
//    }
//		}

//		public void AddAttribute(string name, string value)
//		{
//    if (name == null)
//        throw new ArgumentNullException("name");
//    if (value == null)
//        throw new ArgumentNullException("value");
//    if (GetAttribute(name) != null)
//        throw new ArgumentException(Locale.GetText("Duplicate attribute : " + name));

//    if (attributes == null)
//        attributes = new ArrayList();
//    attributes.Add(new SecurityAttribute(name, value));
//		}

//		public void AddChild(SecurityElement child)
//		{
//    if (child == null)
//        throw new ArgumentNullException("child");

//    if (children == null)
//        children = new ArrayList();

//    children.Add(child);
//		}

//		public string Attribute(string name)
//		{
//    if (name == null)
//        throw new ArgumentNullException("name");

//			SecurityAttribute sa = GetAttribute(name);
//    return ((sa == null) ? null : sa.Value);
//}

//		[ComVisible(false)]
//		public SecurityElement Copy()
//		{
//    return new SecurityElement(this);
//		}

//		public bool Equal(SecurityElement other)
//		{
//    if (other == null)
//        return false;

//    if (this == other)
//        return true;

//    if (this.text != other.text)
//        return false;

//    if (this.tag != other.tag)
//        return false;

//    if (this.attributes == null && other.attributes != null && other.attributes.Count != 0)
//        return false;

//    if (other.attributes == null && this.attributes != null && this.attributes.Count != 0)
//        return false;

//    if (this.attributes != null && other.attributes != null) {
//        if (this.attributes.Count != other.attributes.Count)
//            return false;
//        foreach(SecurityAttribute sa1 in attributes) {
//					SecurityAttribute sa2 = other.GetAttribute(sa1.Name);
//            if ((sa2 == null) || (sa1.Value != sa2.Value))
//                return false;
//        }
//    }

//    if (this.children == null && other.children != null && other.children.Count != 0)
//        return false;

//    if (other.children == null && this.children != null && this.children.Count != 0)
//        return false;

//    if (this.children != null && other.children != null) {
//        if (this.children.Count != other.children.Count)
//            return false;
//				for (int i = 0; i < this.children.Count; i++) 
//					if (!((SecurityElement) this.children [i]).Equal ((SecurityElement) other.children[i]))
//						return false;
//    }

//    return true;
//		}

//		public static string Escape(string str)
//		{
//			StringBuilder sb;

//    if (str == null)
//        return null;

//    if (str.IndexOfAny(invalid_chars) == -1)
//        return str;

//    sb = new StringBuilder();
//			int len = str.Length;
			
//			for (int i = 0; i < len; i++) {
//				char c = str[i];

//        switch (c) {
//            case '<': sb.Append("&lt;"); break;
//            case '>': sb.Append("&gt;"); break;
//            case '"': sb.Append("&quot;"); break;
//            case '\'': sb.Append("&apos;"); break;
//            case '&': sb.Append("&amp;"); break;
//            default: sb.Append(c); break;
//        }
//    }

//    return sb.ToString();
//		}

//		private static string Unescape(string str)
//		{
//			StringBuilder sb;

//    if (str == null)
//        return null;

//    sb = new StringBuilder(str);
//    sb.Replace("&lt;", "<");
//    sb.Replace("&gt;", ">");
//    sb.Replace("&amp;", "&");
//    sb.Replace("&quot;", "\"");
//    sb.Replace("&apos;", "'");
//    return sb.ToString();
//		}

//		public static SecurityElement FromString(string xml)
//		{
//    if (xml == null)
//        throw new ArgumentNullException("xml");
//    if (xml.Length == 0)
//        throw new XmlSyntaxException(Locale.GetText("Empty string."));

//    try {
//				SecurityParser sp = new SecurityParser();
//        sp.LoadXml(xml);
//        return sp.ToXml();
//    } catch (Exception e) {
//				string msg = Locale.GetText("Invalid XML.");
//        throw new XmlSyntaxException(msg, e);
//    }
//		}

//		public static bool IsValidAttributeName(string name)
//		{
//    return name != null && name.IndexOfAny(invalid_attr_name_chars) == -1;
//		}

//		public static bool IsValidAttributeValue(string value)
//		{
//    return value != null && value.IndexOfAny(invalid_attr_value_chars) == -1;
//		}

//		public static bool IsValidTag(string tag)
//		{
//    return tag != null && tag.IndexOfAny(invalid_tag_chars) == -1;
//		}

//		public static bool IsValidText(string text)
//		{
//    return text != null && text.IndexOfAny(invalid_text_chars) == -1;
//		}

//		public SecurityElement SearchForChildByTag(string tag) 
//		{
//    if (tag == null)
//        throw new ArgumentNullException("tag");

//    if (this.children == null)
//        return null;
				
//			for (int i = 0; i < children.Count; i++) {
//				SecurityElement elem = (SecurityElement) children[i];
//        if (elem.tag == tag)
//            return elem;
//    }
//    return null;
//		}

//		public string SearchForTextOfTag(string tag) 
//		{
//    if (tag == null)
//        throw new ArgumentNullException("tag");

//    if (this.tag == tag)
//        return this.text;

//    if (this.children == null)
//        return null;
			
//			for (int i = 0; i < children.Count; i++) {
//				string result = ((SecurityElement) children [i]).SearchForTextOfTag(tag);
//        if (result != null)
//            return result;
//    }

//    return null;
//		}

//		public override string ToString()
//		{
//			StringBuilder s = new StringBuilder();
//    ToXml(ref s, 0);
//    return s.ToString();
//		}

//		private void ToXml(ref StringBuilder s, int level)
//		{
//    s.Append("<");
//    s.Append(tag);

//    if (attributes != null) {
//        s.Append(" ");
//				for (int i = 0; i < attributes.Count; i++) {
//					SecurityAttribute sa = (SecurityAttribute) attributes[i];
//            s.Append(sa.Name)
//                .Append("=\"")
//                .Append(Escape(sa.Value))
//                .Append("\"");
//            if (i != attributes.Count - 1)
//                s.Append(Environment.NewLine);
//        }
//    }

//    if ((text == null || text == String.Empty) &&
//        (children == null || children.Count == 0))
//        s.Append("/>").Append(Environment.NewLine);
//    else {
//        s.Append(">").Append(Escape(text));
//        if (children != null) {
//            s.Append(Environment.NewLine);
//            foreach(SecurityElement child in children) {
//                child.ToXml(ref s, level + 1);
//            }
//        }
//        s.Append("</")
//            .Append(tag)
//            .Append(">")
//            .Append(Environment.NewLine);
//    }
//}

//		internal SecurityAttribute GetAttribute(string name) 
//		{
//    if (attributes != null) {
//        foreach(SecurityAttribute sa in attributes) {
//            if (sa.Name == name)
//                return sa;
//        }
//    }
//    return null;
//		}
	}
}