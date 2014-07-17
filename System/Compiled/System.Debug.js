var System;
(function (System) {
    (function (UriFormat) {
        UriFormat[UriFormat["UriEscaped"] = 1] = "UriEscaped";
        UriFormat[UriFormat["Unescaped"] = 2] = "Unescaped";
        UriFormat[UriFormat["SafeUnescaped"] = 3] = "SafeUnescaped";
    })(System.UriFormat || (System.UriFormat = {}));
    var UriFormat = System.UriFormat;

    System.Type.registerEnum(UriFormat, "System.UriFormat");
})(System || (System = {}));
//* Typescript Base Class Library
//* Closing the gap between C# and Javascript
//*
//* Authors : Lucas Vos
//*         : Mono , Stackoverflow
/// <reference path="Code/UriFormat.ts" />
