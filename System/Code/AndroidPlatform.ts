//#if MONODROID
//using System;
//using System.Collections.Generic;
//using System.Net;
//using System.Net.Security;
//using System.Security.Cryptography.X509Certificates;
//#if SECURITY_DEP
//using MSX = Mono.Security.X509;
//#endif

//namespace System {

//	internal static class AndroidPlatform {

//#if SECURITY_DEP
//		static readonly Converter < List <byte[]>, bool > trustEvaluateSsl;
//#endif  // SECURITY_DEP
//		static readonly Func < IWebProxy > getDefaultProxy;


//		static AndroidPlatform()
//		{
//    var t = Type.GetType("Android.Runtime.AndroidEnvironment, Mono.Android", throwOnError:true);
//#if SECURITY_DEP
//			trustEvaluateSsl = (Converter < List <byte[]>, bool>)
//				Delegate.CreateDelegate(typeof (Converter < List <byte[]>, bool>),
//        t,
//        "TrustEvaluateSsl",
//        ignoreCase:false,
//        throwOnBindFailure:true);
//#endif  // SECURITY_DEP
//			getDefaultProxy = (Func < IWebProxy>) Delegate.CreateDelegate(
//        typeof (Func < IWebProxy>), t, "GetDefaultProxy",
//        ignoreCase:false,
//        throwOnBindFailure:true);
//		}

//#if SECURITY_DEP
//		internal static bool TrustEvaluateSsl(MSX.X509CertificateCollection collection, object sender, X509Certificate2 certificate, X509Chain chain, SslPolicyErrors errors)
//		{
//    var certsRawData = new List<byte[]>(collection.Count);
//    foreach(MSX.X509Certificate cert in collection)
//				certsRawData.Add(cert.RawData);
//    return trustEvaluateSsl(certsRawData);
//		}
//#endif  // SECURITY_DEP

//		internal static IWebProxy GetDefaultProxy()
//		{
//    return getDefaultProxy();
//		}
//	}
//}
//#endif  // MONODROID
