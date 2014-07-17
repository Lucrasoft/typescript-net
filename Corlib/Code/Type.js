/// <reference path="Attribute.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
JSString = window["String"];

var System;
(function (System) {
    var Type = (function (_super) {
        __extends(Type, _super);
        function Type() {
            _super.call(this);
            this.implementations = [];
            this.isRuntimeType = false;
            this.isClass = false;
            this.isInterface = false;
            this.isEnum = false;
        }
        Type.registerClass = function (_class, name, interfaces) {
            var res = new Type();
            res.isClass = true;
            res.name = name;
            res.obj = _class;
            res.implementations.concat(interfaces);

            Type._types.push(res);
            return res;
        };

        Type.registerInterface = function (name, parent) {
            var res = new Type();
            res.isInterface = true;
            res.name = name;
            if (parent) {
                res.implementations.push(parent);
            }
            Type._types.push(res);
        };

        Type.registerEnum = function (_enum, name) {
            var res = new Type();
            res.isEnum = true;
            res.name = name;
            res.obj = _enum;
            Type._types.push(res);
            return res;
        };

        // Idea was to register the JS internal types as well : string, number, function, object, etc.
        Type.registerInternal = function (_type, name) {
            var res = new Type();
            res.isRuntimeType = true;
            res.obj = _type;
            res.name = (typeof _type);
            return res;
        };

        // TODO : just a mockup for the moment..
        Type.registerAttribute = function (_type, attrName, attribute) {
        };

        Type.getTypeName = function (obj) {
            if (!obj)
                return "undefined";
            var str = typeof obj;
            if (str === "object") {
                if (obj.hasOwnProperty("GetType")) {
                    return obj.getType().name;
                }
            }
            return str;
        };

        Type.InitializeType = function () {
            var res = [];
            res.push(Type.registerInternal(Number, typeof 0));
            res.push(Type.registerInternal(JSString, typeof ""));
            res.push(Type.registerInternal(Boolean, typeof true));
            res.push(Type.registerInternal(Uint8Array, typeof Uint8Array));
            res.push(Type.registerInternal(Uint16Array, typeof Uint16Array));
            res.push(Type.registerInternal(Uint32Array, typeof Uint32Array));
            return res;
        };
        Type._types = Type.InitializeType();
        return Type;
    })(System.Object);
    System.Type = Type;
})(System || (System = {}));
//# sourceMappingURL=Type.js.map
