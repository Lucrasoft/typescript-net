/// <reference path="Type.ts" />
/// <reference path="IObject.ts" />
JSString = window["String"];

var System;
(function (System) {
    var Type = (function () {
        function Type() {
            this.isRuntimeType = false;
            this.isClass = false;
            this.isInterface = false;
            this.implementations = [];
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

        // Idea was to register the JS internal types as well : string, number, function, object, etc.
        Type.registerInternal = function (_type, name) {
            var res = new Type();
            res.isRuntimeType = true;
            res.obj = _type;
            res.name = (typeof _type);
            return res;
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
            return res;
        };
        Type._types = Type.InitializeType();
        return Type;
    })();
    System.Type = Type;
})(System || (System = {}));
/// <reference path="../Type.ts"/>
/// <reference path="../IObject.ts"/>
var System;
(function (System) {
    var Exception = (function () {
        function Exception(message, innerException) {
            this.message = "";
            this.err = new Error(message);
            if (message) {
                this.message = message;
            }
        }
        Object.defineProperty(Exception.prototype, "name", {
            get: function () {
                return this.getType().name;
            },
            enumerable: true,
            configurable: true
        });

        //IObject
        Exception.prototype.getType = function () {
            return Exception.type;
        };
        Exception.type = System.Type.registerClass(Exception, "System.Exception", []);
        return Exception;
    })();
    System.Exception = Exception;
})(System || (System = {}));
/// <reference path="Exception.ts" />
/// <reference path="../IObject.ts"/>
/// <reference path="../Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var NotImplementedException = (function (_super) {
        __extends(NotImplementedException, _super);
        function NotImplementedException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        NotImplementedException.prototype.getType = function () {
            return NotImplementedException._type;
        };
        NotImplementedException._type = System.Type.registerClass(NotImplementedException, "System.NotImplementedException", []);
        return NotImplementedException;
    })(System.Exception);
    System.NotImplementedException = NotImplementedException;
})(System || (System = {}));
/// <reference path="Type.ts" />
/// <reference path="IObject.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
var System;
(function (System) {
    var Attribute = (function () {
        function Attribute() {
        }
        //Static methods
        Attribute.getCustomAttribute = function (element, attributeType) {
            throw new System.NotImplementedException();
        };

        Attribute.isDefined = function (element, attributeType, inherit) {
            throw new System.NotImplementedException();
        };

        Attribute.getCustomAttributes = function () {
            throw new System.NotImplementedException();
        };

        //IObject
        Attribute.prototype.getType = function () {
            return Attribute.type;
        };
        Attribute.type = System.Type.registerClass(Attribute, "System.Attribute", []);
        return Attribute;
    })();
    System.Attribute = Attribute;
})(System || (System = {}));
var System;
(function (System) {
    (function (AttributeTargets) {
        AttributeTargets[AttributeTargets["Assembly"] = 0x00000001] = "Assembly";
        AttributeTargets[AttributeTargets["Module"] = 0x00000002] = "Module";
        AttributeTargets[AttributeTargets["Class"] = 0x00000004] = "Class";
        AttributeTargets[AttributeTargets["Struct"] = 0x00000008] = "Struct";
        AttributeTargets[AttributeTargets["Enum"] = 0x00000010] = "Enum";
        AttributeTargets[AttributeTargets["Constructor"] = 0x00000020] = "Constructor";
        AttributeTargets[AttributeTargets["Method"] = 0x00000040] = "Method";
        AttributeTargets[AttributeTargets["Property"] = 0x00000080] = "Property";
        AttributeTargets[AttributeTargets["Field"] = 0x00000100] = "Field";
        AttributeTargets[AttributeTargets["Event"] = 0x00000200] = "Event";
        AttributeTargets[AttributeTargets["Interface"] = 0x00000400] = "Interface";
        AttributeTargets[AttributeTargets["Parameter"] = 0x00000800] = "Parameter";
        AttributeTargets[AttributeTargets["Delegate"] = 0x00001000] = "Delegate";
        AttributeTargets[AttributeTargets["ReturnValue"] = 0x00002000] = "ReturnValue";
        AttributeTargets[AttributeTargets["GenericParameter"] = 0x00004000] = "GenericParameter";
        AttributeTargets[AttributeTargets["All"] = AttributeTargets.Assembly | AttributeTargets.Module | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Constructor | AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Event | AttributeTargets.Interface | AttributeTargets.Parameter | AttributeTargets.Delegate | AttributeTargets.ReturnValue | AttributeTargets.GenericParameter] = "All";
    })(System.AttributeTargets || (System.AttributeTargets = {}));
    var AttributeTargets = System.AttributeTargets;
})(System || (System = {}));
/// <reference path="IObject.ts" />
/// <reference path="Type.ts" />
/// <reference path="Attribute.ts" />
/// <reference path="AttributeTargets.ts" />
var System;
(function (System) {
    var AttributeUsageAttribute = (function (_super) {
        __extends(AttributeUsageAttribute, _super);
        function AttributeUsageAttribute(validOn) {
            _super.call(this);
            this.Inherited = true;
            this.valid_on = validOn;
        }
        Object.defineProperty(AttributeUsageAttribute.prototype, "validOn", {
            get: function () {
                return this.valid_on;
            },
            enumerable: true,
            configurable: true
        });

        //IObject
        AttributeUsageAttribute.prototype.getType = function () {
            return AttributeUsageAttribute._type;
        };
        AttributeUsageAttribute._type = System.Type.registerClass(System.Attribute, "System.Attribute", []);
        return AttributeUsageAttribute;
    })(System.Attribute);
    System.AttributeUsageAttribute = AttributeUsageAttribute;
})(System || (System = {}));
/// <reference path="IDisposable.ts" />
/// <reference path="IEnumerator.ts" />
/// <reference path="Action.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
/// <reference path="Interfaces/IEnumerable.ts" />
/// <reference path="Type.ts"/>
var System;
(function (System) {
    var Statements = (function () {
        function Statements() {
        }
        //Simulates the ForEach statement
        Statements.forEach = function (collection, callback) {
            var enumerator = collection.getEnumerator();
            while (enumerator.moveNext()) {
                callback(enumerator.current);
            }
        };

        Statements.as = function (object, TofT) {
            var objType = Statements.typeOf(object);

            return null;
        };

        //Simulates the "implements"
        Statements.Implements = function (object, Interface) {
            throw new System.NotImplementedException();
        };

        Statements.typeOf = function (object) {
            throw new System.NotImplementedException();
        };

        //Simulates the "is" statement of C#
        //Example in C# : if ( obj is Guid) { }
        //Example in TS : if (Statements.is(obj,Guid.GetType())
        Statements.is = function (object, type) {
            if (!object) {
                return false;
            }
            if (!object.GetType) {
                return false;
            }

            //TODO : name check is way too simple!
            //  1. overervering class
            //  2. interfaces
            return (object.getType().name == type.name);
        };
        return Statements;
    })();
    System.Statements = Statements;
})(System || (System = {}));
var System;
(function (System) {
    //Used to simulate the "out" arguments.
    var OutArgument = (function () {
        function OutArgument(value) {
            this.value = value;
        }
        return OutArgument;
    })();
    System.OutArgument = OutArgument;
})(System || (System = {}));
/// <reference path="../Type.ts" />
/// <reference path="../IObject.ts" />
/// <reference path="IFormatProvider.ts" />
var System;
(function (System) {
    System.Type.registerInterface("System.IComparable");
})(System || (System = {}));
/// <reference path="Exception.ts" />
/// <reference path="../IObject.ts"/>
/// <reference path="../Type.ts"/>
var System;
(function (System) {
    var ArgumentException = (function (_super) {
        __extends(ArgumentException, _super);
        function ArgumentException(message, innerException, paramName) {
            _super.call(this, message, innerException);
            this.paramName = paramName;
        }
        ArgumentException.prototype.toString = function () {
            var s = _super.prototype.toString.call(this);
            s += "Paramater : " + this.paramName;
            return s;
        };

        //IObject
        ArgumentException.prototype.getType = function () {
            return ArgumentException._type;
        };
        ArgumentException._type = System.Type.registerClass(ArgumentException, "System.ArgumentException", []);
        return ArgumentException;
    })(System.Exception);
    System.ArgumentException = ArgumentException;
})(System || (System = {}));
/// <reference path="ArgumentException.ts" />
/// <reference path="../IObject.ts"/>
/// <reference path="../Type.ts"/>
var System;
(function (System) {
    var ArgumentNullException = (function (_super) {
        __extends(ArgumentNullException, _super);
        function ArgumentNullException(message, innerException, paramName) {
            _super.call(this, message, innerException, paramName);
        }
        //IObject
        ArgumentNullException.prototype.getType = function () {
            return ArgumentNullException._type;
        };
        ArgumentNullException._type = System.Type.registerClass(ArgumentNullException, "System.ArgumentNullException", []);
        return ArgumentNullException;
    })(System.ArgumentException);
    System.ArgumentNullException = ArgumentNullException;
})(System || (System = {}));
var System;
(function (System) {
    (function (Globalization) {
        //TODO: register enum to Type system
        (function (NumberStyles) {
            NumberStyles[NumberStyles["None"] = 0x00000000] = "None";
            NumberStyles[NumberStyles["AllowLeadingWhite"] = 0x00000001] = "AllowLeadingWhite";
            NumberStyles[NumberStyles["AllowTrailingWhite"] = 0x00000002] = "AllowTrailingWhite";
            NumberStyles[NumberStyles["AllowLeadingSign"] = 0x00000004] = "AllowLeadingSign";
            NumberStyles[NumberStyles["AllowTrailingSign"] = 0x00000008] = "AllowTrailingSign";
            NumberStyles[NumberStyles["AllowParentheses"] = 0x00000010] = "AllowParentheses";
            NumberStyles[NumberStyles["AllowDecimalPoint"] = 0x00000020] = "AllowDecimalPoint";
            NumberStyles[NumberStyles["AllowThousands"] = 0x00000040] = "AllowThousands";
            NumberStyles[NumberStyles["AllowExponent"] = 0x00000080] = "AllowExponent";
            NumberStyles[NumberStyles["AllowCurrencySymbol"] = 0x00000100] = "AllowCurrencySymbol";
            NumberStyles[NumberStyles["AllowHexSpecifier"] = 0x00000200] = "AllowHexSpecifier";

            NumberStyles[NumberStyles["Integer"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign)] = "Integer";
            NumberStyles[NumberStyles["HexNumber"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowHexSpecifier)] = "HexNumber";
            NumberStyles[NumberStyles["Number"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands)] = "Number";
            NumberStyles[NumberStyles["Float"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowDecimalPoint | NumberStyles.AllowExponent)] = "Float";
            NumberStyles[NumberStyles["Currency"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowParentheses | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands | NumberStyles.AllowCurrencySymbol)] = "Currency";
            NumberStyles[NumberStyles["Any"] = (NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowParentheses | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands | NumberStyles.AllowExponent | NumberStyles.AllowCurrencySymbol)] = "Any";
        })(Globalization.NumberStyles || (Globalization.NumberStyles = {}));
        var NumberStyles = Globalization.NumberStyles;
    })(System.Globalization || (System.Globalization = {}));
    var Globalization = System.Globalization;
})(System || (System = {}));
/// <reference path="IObject.ts" />
/// <reference path="Type.ts" />
/// <reference path="Statements.ts" />
/// <reference path="OutArgument.ts" />
/// <reference path="Interfaces/IFormattable.ts" />
/// <reference path="Interfaces/IEquatable.ts" />
/// <reference path="Interfaces/IComparable.ts" />
/// <reference path="Exceptions/ArgumentException.ts" />
/// <reference path="Exceptions/ArgumentNullException.ts" />
/// <reference path="Exceptions/NotImplementedException.ts" />
/// <reference path="Globalization/NumberStyles.ts" />
var System;
(function (System) {
    //TODO : IConvertible
    var IntBase = (function () {
        function IntBase(value) {
            this.value = value;
        }
        Object.defineProperty(IntBase.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });

        IntBase.prototype.compareTo = function (value) {
            if (value == null)
                return 1;

            if (!(System.Statements.is(value, System.IntBase._type)))
                throw new System.ArgumentException("Value is not a System.IntXX");

            var xv = value.value;
            if (this.value == xv)
                return 0;
            if (this.value > xv)
                return 1;
            else
                return -1;
        };

        IntBase.prototype.equals = function (obj) {
            if (!System.Statements.is(obj, System.IntBase._type))
                return false;

            return obj.value == this.value;
        };

        IntBase.prototype.getHashCode = function () {
            return this.value;
        };

        IntBase.parse = function (s, style, provider) {
            if (typeof style === "undefined") { style = null; }
            if (typeof provider === "undefined") { provider = null; }
            if (style != null)
                throw new System.NotImplementedException();
            if (provider != null)
                throw new System.NotImplementedException();

            //without the styles and provider, simply use the built in JS parser.
            return parseInt(s);
        };

        IntBase.tryParse = function (s, result, style, provider) {
            if (typeof style === "undefined") { style = null; }
            if (typeof provider === "undefined") { provider = null; }
            try  {
                result.value = IntBase.parse(s, style, provider);
                return true;
            } catch (e) {
            }
            return false;
        };

        IntBase.prototype.ToString = function (format, provider) {
            if (typeof format === "undefined") { format = ""; }
            if (typeof provider === "undefined") { provider = null; }
            throw new System.NotImplementedException();
            //return NumberFormatter.NumberToString(format, m_value, provider);
        };

        IntBase.prototype.toType = function (targetType, provider) {
            if (targetType == null)
                throw new System.ArgumentNullException("targetType");
        };

        //IObject
        IntBase.prototype.getType = function () {
            return IntBase._type;
        };
        IntBase._type = System.Type.registerClass(IntBase, "System.IntBase", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);
        return IntBase;
    })();
    System.IntBase = IntBase;
})(System || (System = {}));
/// <reference path="IntBase.ts" />
/// <reference path="Interfaces/IFormattable.ts" />
/// <reference path="Globalization/NumberStyles.ts" />
/// <reference path="IObject.ts"/>
/// <reference path="Interfaces/IComparable.ts"/>
/// <reference path="Interfaces/IEquatable.ts"/>
/// <reference path="Type.ts"/>
var System;
(function (System) {
    //TODO : IConvertible
    var Int32 = (function (_super) {
        __extends(Int32, _super);
        function Int32(value) {
            _super.call(this, value);
        }
        //IObject
        Int32.prototype.getType = function () {
            return Int32._type;
        };
        Int32._type = System.Type.registerClass(Int32, "System.Int32", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        Int32.MaxValue = 0x7fffffff;
        Int32.MinValue = -2147483648;
        return Int32;
    })(System.IntBase);
    System.Int32 = Int32;
})(System || (System = {}));
var System;
(function (System) {
    (function (Runtime) {
        (function (Serialization) {
            (function (StreamingContextStates) {
                StreamingContextStates[StreamingContextStates["CrossProcess"] = 1] = "CrossProcess";
                StreamingContextStates[StreamingContextStates["CrossMachine"] = 2] = "CrossMachine";
                StreamingContextStates[StreamingContextStates["File"] = 4] = "File";
                StreamingContextStates[StreamingContextStates["Persistence"] = 8] = "Persistence";
                StreamingContextStates[StreamingContextStates["Remoting"] = 16] = "Remoting";
                StreamingContextStates[StreamingContextStates["Other"] = 32] = "Other";
                StreamingContextStates[StreamingContextStates["Clone"] = 64] = "Clone";
                StreamingContextStates[StreamingContextStates["CrossAppDomain"] = 128] = "CrossAppDomain";
                StreamingContextStates[StreamingContextStates["All"] = 255] = "All";
            })(Serialization.StreamingContextStates || (Serialization.StreamingContextStates = {}));
            var StreamingContextStates = Serialization.StreamingContextStates;
        })(Runtime.Serialization || (Runtime.Serialization = {}));
        var Serialization = Runtime.Serialization;
    })(System.Runtime || (System.Runtime = {}));
    var Runtime = System.Runtime;
})(System || (System = {}));
/// <reference path="StreamingContextStates.ts" />
/// <reference path="../../IObject.ts"/>
/// <reference path="../../Type.ts"/>
/// <reference path="../../Statements.ts"/>
var System;
(function (System) {
    (function (Runtime) {
        (function (Serialization) {
            var StreamingContext = (function () {
                function StreamingContext(state, additional) {
                    if (typeof additional === "undefined") { additional = null; }
                    this.state = state;
                    this.additional = additional;
                }
                Object.defineProperty(StreamingContext.prototype, "Context", {
                    get: function () {
                        return this.additional;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(StreamingContext.prototype, "State", {
                    get: function () {
                        return this.state;
                    },
                    enumerable: true,
                    configurable: true
                });

                StreamingContext.prototype.equals = function (obj) {
                    if (!(System.Statements.is(obj, StreamingContext._type)))
                        return false;

                    var other = obj;
                    return (other.state == this.state) && (other.additional == this.additional);
                };

                StreamingContext.prototype.getHashCode = function () {
                    return this.state;
                };

                StreamingContext.prototype.getType = function () {
                    return StreamingContext._type;
                };
                StreamingContext._type = System.Type.registerClass(StreamingContext, "System.Runtime.Serialization.StreamingContext", []);
                return StreamingContext;
            })();
            Serialization.StreamingContext = StreamingContext;
        })(Runtime.Serialization || (Runtime.Serialization = {}));
        var Serialization = Runtime.Serialization;
    })(System.Runtime || (System.Runtime = {}));
    var Runtime = System.Runtime;
})(System || (System = {}));
/// <reference path="../../Type.ts" />
/// <reference path="../../IObject.ts" />
var System;
(function (System) {
    (function (Runtime) {
        (function (Serialization) {
            var SerializationInfo = (function () {
                function SerializationInfo() {
                    throw new System.NotImplementedException();
                }
                //place holder
                SerializationInfo.prototype.addValue = function (name, value) {
                    throw new System.NotImplementedException();
                };

                SerializationInfo.prototype.getString = function (name) {
                    throw new System.NotImplementedException();
                };
                return SerializationInfo;
            })();
            Serialization.SerializationInfo = SerializationInfo;
        })(Runtime.Serialization || (Runtime.Serialization = {}));
        var Serialization = Runtime.Serialization;
    })(System.Runtime || (System.Runtime = {}));
    var Runtime = System.Runtime;
})(System || (System = {}));
/// <reference path="StreamingContext.ts" />
/// <reference path="SerializationInfo.ts"/>
/// <reference path="../Type.ts" />
/// <reference path="../Int32.ts" />
/// <reference path="../Runtime/Serialization/ISerializable.ts" />
/// <reference path="../Runtime/Serialization/SerializationInfo.ts" />
/// <reference path="../Runtime/Serialization/StreamingContext.ts" />
var System;
(function (System) {
    (function (Text) {
        //Basic implementation
        var StringBuilder = (function () {
            function StringBuilder(value) {
                if (!value) {
                    value = "";
                }
                this._str = value;
            }
            Object.defineProperty(StringBuilder.prototype, "MaxCapacity", {
                get: function () {
                    return System.Int32.MaxValue;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(StringBuilder.prototype, "Length", {
                get: function () {
                    return this._str.length;
                },
                enumerable: true,
                configurable: true
            });

            StringBuilder.prototype.toString = function () {
                return this._str;
            };

            StringBuilder.prototype.ToString = function (startIndex, length) {
                if (typeof startIndex === "undefined") { startIndex = 0; }
                if (typeof length === "undefined") { length = this._str.length; }
                if (startIndex < 0 || length < 0 || startIndex > this._str.length - length)
                    throw new System.ArgumentOutOfRangeException();

                if (startIndex == 0 && length == this._str.length)
                    return this.toString();
                else
                    return this._str.substr(startIndex, length);
            };

            StringBuilder.prototype.equals = function (sb) {
                if (sb == null)
                    return false;
                if (this.toString() == sb.toString())
                    return true;
                return false;
            };

            StringBuilder.prototype.remove = function (startIndex, length) {
                if (startIndex < 0 || length < 0 || startIndex > this._str.length - length)
                    throw new System.ArgumentOutOfRangeException();

                var s = this._str;
                this._str = s.substr(0, startIndex) + s.substr(startIndex + length);
                return this;
            };

            StringBuilder.prototype.replace = function (oldValue, newValue) {
                if (oldValue == null)
                    throw new System.ArgumentNullException("The old value cannot be null.");

                if (oldValue.length == 0)
                    throw new System.ArgumentException("The old value cannot be zero length.");

                this._str = this._str.replace(oldValue, newValue);
                return this;
            };

            /* The Append Methods */
            StringBuilder.prototype.append = function (value) {
                if (value == null)
                    return this;

                value = value.toString();
                this._str += value;

                return this;
            };

            StringBuilder.prototype.clear = function () {
                this._str = System.String.empty;
                return this;
            };

            StringBuilder.prototype.appendLine = function (value) {
                if (typeof value === "undefined") { value = ""; }
                return this.append(value).append(System.Environment.NewLine);
            };

            StringBuilder.prototype.appendFormat = function (format) {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 1); _i++) {
                    args[_i] = arguments[_i + 1];
                }
                return this.append(System.String.format(format, args));
            };

            StringBuilder.prototype.InsertInternal = function (index, value) {
                if (value == null || value.length == 0)
                    return this;

                var s = this._str;

                if (index > this._str.length || index < 0)
                    throw new System.ArgumentOutOfRangeException();

                this._str = s.substring(0, index).concat(value, s.substring(index));

                return this;
            };

            StringBuilder.prototype.insert = function (index, value, count) {
                if (typeof count === "undefined") { count = 1; }
                if (count < 0)
                    throw new System.ArgumentOutOfRangeException();

                for (var insertCount = 0; insertCount < count; insertCount++) {
                    this.InsertInternal(index, value);
                }

                return this;
            };

            //IObject
            StringBuilder.prototype.getType = function () {
                return StringBuilder._type;
            };

            //ISerializable
            StringBuilder.prototype.getObjectData = function (info, context) {
                //info.AddValue("m_MaxCapacity", _maxCapacity);
                //info.AddValue("Capacity", Capacity);
                info.addValue("m_StringValue", this.toString());
                info.addValue("m_currentThread", 0);
            };

            //Serializable constructor
            StringBuilder.ctor_Serializable = function (info, context) {
                var s = info.getString("m_StringValue");
                var result = new StringBuilder(s);

                return result;
            };
            StringBuilder._type = System.Type.registerClass(StringBuilder, "System.Text.StringBuilder", ["System.Runtime.Serialization.ISerializable"]);
            return StringBuilder;
        })();
        Text.StringBuilder = StringBuilder;
    })(System.Text || (System.Text = {}));
    var Text = System.Text;
})(System || (System = {}));
/// <reference path="IObject.ts"/>
/// <reference path="Type.ts"/>
var System;
(function (System) {
    var String = (function () {
        function String() {
        }
        Object.defineProperty(String, "empty", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });

        String.format = function (value) {
            var replacements = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                replacements[_i] = arguments[_i + 1];
            }
            var formatted = value;
            for (var i = 0; i < replacements.length; i++) {
                formatted = formatted.replace(RegExp("\\{" + i + "\\}", 'g'), replacements[i].toString());
            }
            return formatted;
        };

        String.isNullOrEmpty = function (value) {
            return (value == null) || (value.length == 0);
        };

        //IObject
        String.prototype.getType = function () {
            return String._type;
        };
        String._type = System.Type.registerClass(String, "System.String", []);
        return String;
    })();
    System.String = String;
})(System || (System = {}));
var System;
(function (System) {
    (function (TypeCode) {
        TypeCode[TypeCode["Empty"] = 0] = "Empty";
        TypeCode[TypeCode["Object"] = 1] = "Object";
        TypeCode[TypeCode["DBNull"] = 2] = "DBNull";
        TypeCode[TypeCode["Boolean"] = 3] = "Boolean";
        TypeCode[TypeCode["Char"] = 4] = "Char";
        TypeCode[TypeCode["SByte"] = 5] = "SByte";
        TypeCode[TypeCode["Byte"] = 6] = "Byte";
        TypeCode[TypeCode["Int16"] = 7] = "Int16";
        TypeCode[TypeCode["UInt16"] = 8] = "UInt16";
        TypeCode[TypeCode["Int32"] = 9] = "Int32";
        TypeCode[TypeCode["UInt32"] = 10] = "UInt32";
        TypeCode[TypeCode["Int64"] = 11] = "Int64";
        TypeCode[TypeCode["UInt64"] = 12] = "UInt64";
        TypeCode[TypeCode["Single"] = 13] = "Single";
        TypeCode[TypeCode["Double"] = 14] = "Double";
        TypeCode[TypeCode["Decimal"] = 15] = "Decimal";
        TypeCode[TypeCode["DateTime"] = 16] = "DateTime";
        TypeCode[TypeCode["String"] = 18] = "String";
    })(System.TypeCode || (System.TypeCode = {}));
    var TypeCode = System.TypeCode;
})(System || (System = {}));
/// <reference path="../TypeCode.ts" />
/// <reference path="IFormatProvider.ts"/>
/// <reference path="../TypeCode.ts"/>
var System;
(function (System) {
    (function (Globalization) {
        (function (UnicodeCategory) {
            UnicodeCategory[UnicodeCategory["UppercaseLetter"] = 0] = "UppercaseLetter";
            UnicodeCategory[UnicodeCategory["LowercaseLetter"] = 1] = "LowercaseLetter";
            UnicodeCategory[UnicodeCategory["TitlecaseLetter"] = 2] = "TitlecaseLetter";
            UnicodeCategory[UnicodeCategory["ModifierLetter"] = 3] = "ModifierLetter";
            UnicodeCategory[UnicodeCategory["OtherLetter"] = 4] = "OtherLetter";
            UnicodeCategory[UnicodeCategory["NonSpacingMark"] = 5] = "NonSpacingMark";
            UnicodeCategory[UnicodeCategory["SpacingCombiningMark"] = 6] = "SpacingCombiningMark";
            UnicodeCategory[UnicodeCategory["EnclosingMark"] = 7] = "EnclosingMark";
            UnicodeCategory[UnicodeCategory["DecimalDigitNumber"] = 8] = "DecimalDigitNumber";
            UnicodeCategory[UnicodeCategory["LetterNumber"] = 9] = "LetterNumber";
            UnicodeCategory[UnicodeCategory["OtherNumber"] = 10] = "OtherNumber";
            UnicodeCategory[UnicodeCategory["SpaceSeparator"] = 11] = "SpaceSeparator";
            UnicodeCategory[UnicodeCategory["LineSeparator"] = 12] = "LineSeparator";
            UnicodeCategory[UnicodeCategory["ParagraphSeparator"] = 13] = "ParagraphSeparator";
            UnicodeCategory[UnicodeCategory["Control"] = 14] = "Control";
            UnicodeCategory[UnicodeCategory["Format"] = 15] = "Format";
            UnicodeCategory[UnicodeCategory["Surrogate"] = 16] = "Surrogate";
            UnicodeCategory[UnicodeCategory["PrivateUse"] = 17] = "PrivateUse";
            UnicodeCategory[UnicodeCategory["ConnectorPunctuation"] = 18] = "ConnectorPunctuation";
            UnicodeCategory[UnicodeCategory["DashPunctuation"] = 19] = "DashPunctuation";
            UnicodeCategory[UnicodeCategory["OpenPunctuation"] = 20] = "OpenPunctuation";
            UnicodeCategory[UnicodeCategory["ClosePunctuation"] = 21] = "ClosePunctuation";
            UnicodeCategory[UnicodeCategory["InitialQuotePunctuation"] = 22] = "InitialQuotePunctuation";
            UnicodeCategory[UnicodeCategory["FinalQuotePunctuation"] = 23] = "FinalQuotePunctuation";
            UnicodeCategory[UnicodeCategory["OtherPunctuation"] = 24] = "OtherPunctuation";
            UnicodeCategory[UnicodeCategory["MathSymbol"] = 25] = "MathSymbol";
            UnicodeCategory[UnicodeCategory["CurrencySymbol"] = 26] = "CurrencySymbol";
            UnicodeCategory[UnicodeCategory["ModifierSymbol"] = 27] = "ModifierSymbol";
            UnicodeCategory[UnicodeCategory["OtherSymbol"] = 28] = "OtherSymbol";
            UnicodeCategory[UnicodeCategory["OtherNotAssigned"] = 29] = "OtherNotAssigned";
        })(Globalization.UnicodeCategory || (Globalization.UnicodeCategory = {}));
        var UnicodeCategory = Globalization.UnicodeCategory;
    })(System.Globalization || (System.Globalization = {}));
    var Globalization = System.Globalization;
})(System || (System = {}));
/// <reference path="ArgumentException.ts" />
/// <reference path="../IObject.ts" />
/// <reference path="../Type.ts"/>
var System;
(function (System) {
    var ArgumentOutOfRangeException = (function (_super) {
        __extends(ArgumentOutOfRangeException, _super);
        function ArgumentOutOfRangeException(message, innerException, paramName) {
            _super.call(this, message, innerException, paramName);
        }
        //IObject
        ArgumentOutOfRangeException.prototype.getType = function () {
            return ArgumentOutOfRangeException._type;
        };
        ArgumentOutOfRangeException._type = System.Type.registerClass(ArgumentOutOfRangeException, "System.ArgumentOutOfRangeException", []);
        return ArgumentOutOfRangeException;
    })(System.ArgumentException);
    System.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
})(System || (System = {}));
/// <reference path="Exception.ts" />
/// <reference path="../IObject.ts" />
/// <reference path="../Type.ts"/>
var System;
(function (System) {
    var InvalidCastException = (function (_super) {
        __extends(InvalidCastException, _super);
        function InvalidCastException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        InvalidCastException.prototype.getType = function () {
            return InvalidCastException._type;
        };
        InvalidCastException._type = System.Type.registerClass(InvalidCastException, "System.InvalidCastException", []);
        return InvalidCastException;
    })(System.Exception);
    System.InvalidCastException = InvalidCastException;
})(System || (System = {}));
/// <reference path="Exception.ts" />
/// <reference path="../IObject.ts" />
/// <reference path="../Type.ts"/>
var System;
(function (System) {
    var FormatException = (function (_super) {
        __extends(FormatException, _super);
        function FormatException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        FormatException.prototype.getType = function () {
            return FormatException._type;
        };
        FormatException._type = System.Type.registerClass(FormatException, "System.FormatException", []);
        return FormatException;
    })(System.Exception);
    System.FormatException = FormatException;
})(System || (System = {}));
var System;
(function (System) {
    (function (Globalization) {
        var CultureInfo = (function () {
            function CultureInfo() {
            }
            return CultureInfo;
        })();
        Globalization.CultureInfo = CultureInfo;
    })(System.Globalization || (System.Globalization = {}));
    var Globalization = System.Globalization;
})(System || (System = {}));
/// <reference path="IObject.ts" />
/// <reference path="Type.ts" />
/// <reference path="String.ts"/>
/// <reference path="Interfaces/IConvertible.ts" />
/// <reference path="Interfaces/IComparable.ts" />
/// <reference path="Interfaces/IEquatable.ts" />
/// <reference path="Globalization/UnicodeCategory.ts" />
/// <reference path="Exceptions/ArgumentOutOfRangeException.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="Exceptions/ArgumentException.ts"/>
/// <reference path="Exceptions/InvalidCastException.ts"/>
/// <reference path="Exceptions/FormatException.ts"/>
/// <reference path="OutArgument.ts"/>
/// <reference path="Globalization/UnicodeCategory.ts"/>
/// <reference path="Globalization/CultureInfo.ts"/>
/// <reference path="Interfaces/IFormatProvider.ts"/>
/// <reference path="TypeCode.ts"/>
var System;
(function (System) {
    //* docu : http://www.unicode.org/Public/UNIDATA
    //* docu: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
    var Char = (function () {
        function Char(c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            this.value = cc;
        }
        Char.prototype.equals = function (obj) {
            if (!(System.Statements.is(obj, Char._type)))
                return false;

            return obj.value == this.value;
        };

        Char.prototype.compareTo = function (other) {
            if (this.value == other.value)
                return 0;

            if (this.value > other.value)
                return 1;
            else
                return -1;
        };

        Char.convertFromUtf32 = function (utf32) {
            if (utf32 < 0 || utf32 > 0x10FFFF)
                throw new System.ArgumentOutOfRangeException("The argument must be from 0 to 0x10FFFF.", null, "utf32");
            if (0xD800 <= utf32 && utf32 <= 0xDFFF)
                throw new System.ArgumentOutOfRangeException("The argument must not be in surrogate pair range.", null, "utf32");

            if (utf32 < 0x10000)
                return JSString.fromCharCode(utf32);

            utf32 -= 0x10000;
            return JSString.fromCharCode((utf32 >> 10) + 0xD800, (utf32 % 0x0400 + 0xDC00));
        };

        Char.__checkAndConvertArgument = function (arg, index) {
            var typestr = System.Type.getTypeName(arg);
            if (typestr === "string") {
                var s = arg;
                if (s.length == 0)
                    throw new System.ArgumentOutOfRangeException("The argument cannot be an empty string.");
                if (index < 0 || index >= s.length)
                    throw new System.ArgumentOutOfRangeException("The value of index is less than zero, or greater than or equal to the length of s.");
                return s.charCodeAt(index);
            }
            if (typestr === "number") {
                return arg;
            }
            if (typestr === "System.Char") {
                return arg.value;
            }
            throw new System.ArgumentException("Argument not of expected type");
        };

        Char.convertToUtf32 = function (highSurrogate, lowSurrogate) {
            highSurrogate = Char.__checkAndConvertArgument(highSurrogate, 0);

            if (highSurrogate < 0xD800 || 0xDBFF < highSurrogate)
                throw new System.ArgumentOutOfRangeException("highSurrogate");
            if (lowSurrogate < 0xDC00 || 0xDFFF < lowSurrogate)
                throw new System.ArgumentOutOfRangeException("lowSurrogate");

            return 0x10000 + ((highSurrogate - 0xD800) << 10) + (lowSurrogate - 0xDC00);
        };

        Char.convertToUtf32FromString = function (s, index) {
            Char.__internalCheckParameters(s, index);

            if (!Char.isSurrogate(s[index]))
                return s.charCodeAt(index);
            if (!Char.isHighSurrogate(s[index]) || index == s.length - 1 || !Char.isLowSurrogate(s[index + 1]))
                throw new System.ArgumentException(System.String.format("The string contains invalid surrogate pair character at {0}", index));
            return Char.convertToUtf32(s[index], s[index + 1]);
        };

        Char.isSurrogatePair = function (highSurrogate, lowSurrogate) {
            var hs = Char.__checkAndConvertArgument(highSurrogate, 0);
            var ls = Char.__checkAndConvertArgument(lowSurrogate, 0);

            return 0xD800 <= hs && hs <= 0xDBFF && 0xDC00 <= ls && ls <= 0xDFFF;
        };

        Char.isSurrogatePairString = function (s, index) {
            Char.__internalCheckParameters(s, index);
            return index + 1 < s.length && Char.isSurrogatePair(s[index], s[index + 1]);
        };

        Char.prototype.getHashCode = function () {
            return this.value;
        };

        Char.getNumericValue = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return parseInt(JSString.fromCharCode(cc));
        };

        Char.getUnicodeCategory = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            throw new System.NotImplementedException();
            return 0;
            // return (category_data[cc]);
        };

        Char.isControl = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return (Char.getUnicodeCategory(cc) == 14 /* Control */);
        };

        Char.isDigit = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return (Char.getUnicodeCategory(cc) == 8 /* DecimalDigitNumber */);
        };

        Char.isHighSurrogate = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return cc >= 0xD800 && cc <= 0xDBFF;
        };

        Char.isLetter = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return cat <= 4 /* OtherLetter */;
        };

        Char.isLetterOrDigit = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);

            return (cat <= (4 /* OtherLetter */) || cat == (8 /* DecimalDigitNumber */));
        };

        Char.isLower = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat == 1 /* LowercaseLetter */);
        };

        Char.isLowSurrogate = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            return cc >= 0xDC00 && cc <= 0xDFFF;
        };

        Char.isNumber = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (8 /* DecimalDigitNumber */) && cat <= (10 /* OtherNumber */));
        };

        Char.isPunctuation = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (18 /* ConnectorPunctuation */) && cat <= (24 /* OtherPunctuation */));
        };

        Char.isSeparator = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (11 /* SpaceSeparator */) && cat <= (13 /* ParagraphSeparator */));
        };

        Char.isSurrogate = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat == 16 /* Surrogate */);
        };

        Char.isSymbol = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat >= (25 /* MathSymbol */) && cat <= (28 /* OtherSymbol */));
        };

        Char.isUpper = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cat = Char.getUnicodeCategory(c, index);
            return (cat == 0 /* UppercaseLetter */);
        };

        Char.isWhiteSpace = function (c, index) {
            if (typeof index === "undefined") { index = 0; }
            var cc = Char.__checkAndConvertArgument(c, index);
            if (cc < 0x1680)
                return cc == 0x20 || cc >= 0x09 && cc <= 0x0d || cc == 0x85 || cc == 0xA0;

            var cat = Char.getUnicodeCategory(c, index);
            return cat > 10 /* OtherNumber */ && cat <= 13 /* ParagraphSeparator */;
        };

        Char.__internalCheckParameters = function (s, index) {
            if (s == null)
                throw new System.ArgumentNullException("s");

            if (index < 0 || index >= s.length)
                throw new System.ArgumentOutOfRangeException("The value of index is less than zero, or greater than or equal to the length of s.");
        };

        Char.tryParse = function (s, result) {
            if (s == null || s.length != 1) {
                result.value = new Char(0);
                return false;
            }

            result.value = new Char(s);
            return true;
        };

        Char.parse = function (s) {
            if (s == null)
                throw new System.ArgumentNullException("s");

            if (s.length != 1)
                throw new System.FormatException("s contains more than one character.");

            return new Char(s[0]);
        };

        Char.toLower = function (c, culture) {
            //TODO : culture is ignored.
            //use JS string lower
            var cstr = JSString.fromCharCode(c.value).toLocaleLowerCase();
            return new Char(cstr);
        };

        Char.toLowerInvariant = function (c) {
            //use JS string lower
            var cc = Char.__checkAndConvertArgument(c, 0);

            var cstr = JSString.fromCharCode(cc).toLowerCase();
            return new Char(cstr);
        };

        Char.toUpper = function (c, culture) {
            //TODO : culture is ignored.
            //use JS string lower
            var cstr = JSString.fromCharCode(c.value).toLocaleUpperCase();
            return new Char(cstr);
        };

        Char.toUpperInvariant = function (c) {
            var cc = Char.__checkAndConvertArgument(c, 0);
            var cstr = JSString.fromCharCode(cc).toUpperCase();
            return new Char(cstr);
        };

        Char.prototype.toString = function (provider) {
            //provider is ignored?
            return JSString.fromCharCode(this.value);
        };

        Char.toString = function (c) {
            return JSString.fromCharCode(c.value);
        };

        // =========== IConvertible Methods =========== //
        Char.prototype.getTypeCode = function () {
            return 4 /* Char */;
        };

        Char.prototype.toNumber = function (provider) {
            return this.value;
        };

        Char.prototype.toBoolean = function (provider) {
            throw new System.InvalidCastException();
        };
        Char._type = System.Type.registerClass(Char, "System.Char", ["System.IConvertible", "System.IComparable", "System.IEquatable"]);

        Char.MaxValue = 0xffff;
        Char.MinValue = 0x0000;
        return Char;
    })();
    System.Char = Char;
})(System || (System = {}));
/// <reference path="Text/StringBuilder.ts" />
/// <reference path="Exceptions/Exception.ts"/>
/// <reference path="Char.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="Exceptions/ArgumentOutOfRangeException.ts"/>
var System;
(function (System) {
    //* Information about LittleEndian detection
    //* http://stackoverflow.com/questions/7869752/javascript-typed-arrays-and-endianness
    //*
    //TODO : only LittleEndian code is implemented !
    var BitConverter = (function () {
        function BitConverter() {
        }
        BitConverter.AmILittleEndian = function () {
            var a = new ArrayBuffer(4);

            var b = new Uint8Array(a);
            var c = new Uint32Array(a);
            b[0] = 0xa1;
            b[1] = 0xb2;
            b[2] = 0xc3;
            b[3] = 0xd4;
            if (c[0] == 0xd4c3b2a1)
                return true;
            if (c[0] == 0xa1b2c3d4)
                return false;

            throw new System.Exception("This should not be possible.");
        };

        BitConverter.getBytes = function (value) {
            throw new System.NotImplementedException();
        };

        BitConverter.GetBytes_Boolean = function (value) {
            var res = new Uint8Array(1);
            res[0] = (value == true) ? 1 : 0;
            return res;
        };

        BitConverter.getBytes_String = function (value) {
            if (value = null)
                return null;

            //TODO : Test the surrogate cases !
            var res = new Uint8Array(value.length * 2);
            for (var i = 0; i < value.length; i++) {
                //code is 16 bit.
                var charcode = value.charCodeAt(i);
                res[i * 2 + 0] = charcode & 0x0F;
                res[i * 2 + 1] = charcode >> 8;
            }
            return res;
        };

        BitConverter.getBytes_Int16 = function (value) {
            if (value == null)
                throw new System.ArgumentNullException("value");

            var res = new Uint8Array(2);
            res[0] = value & 0xFF;
            value = value >> 8;
            res[1] = value & 0xFF;
            return res;
        };

        BitConverter.getBytes_Int32 = function (value) {
            if (value == null)
                throw new System.ArgumentNullException("value");

            var res = new Uint8Array(4);
            res[0] = value & 0xFF;
            value = value >> 8;
            res[1] = value & 0xFF;
            value = value >> 8;
            res[2] = value & 0xFF;
            value = value >> 8;
            res[3] = value & 0xFF;
            return res;
        };

        BitConverter.toBoolean = function (value, startIndex) {
            BitConverter.__internalCheckParam(value, startIndex, 1);

            if (value[startIndex] != 0)
                return true;

            return false;
        };

        BitConverter.toChar = function (value, startIndex) {
            BitConverter.__internalCheckParam(value, startIndex, 1);

            return new System.Char(value[startIndex]);
        };

        BitConverter.toInt16 = function (value, startIndex) {
            BitConverter.__internalCheckParam(value, startIndex, 2);

            var res = value[startIndex + 0];
            res += (value[startIndex + 1] << 8);

            return new System.Int16(res);
        };

        BitConverter.toInt32 = function (value, startIndex) {
            BitConverter.__internalCheckParam(value, startIndex, 4);

            var res = value[startIndex + 0];
            res += (value[startIndex + 1] << 8);
            res += (value[startIndex + 2] << 16);
            res += (value[startIndex + 3] << 24);

            return new System.Int32(res);
        };

        BitConverter.toString = function (value, startIndex, length) {
            BitConverter.__internalCheckParam(value, startIndex, length);

            if (length == 0)
                return "";

            var builder = new System.Text.StringBuilder();
            var end = startIndex + length;

            for (var i = startIndex; i < end; i++) {
                throw new System.NotImplementedException();
                //if (i > startIndex)
                //    builder.Append('-');
                //	var high  : Char = (char)((value[i] >> 4) & 0x0f);
                //	var low : Char = (char)(value[i] & 0x0f);
                //if (high < 10)
                //    high += '0';
                //else {
                //    high -= (char) 10;
                //    high += 'A';
                //}
                //if (low < 10)
                //    low += '0';
                //else {
                //    low -= (char) 10;
                //    low += 'A';
                //}
                //builder.Append(high);
                //builder.Append(low);
            }

            return builder.ToString();
        };

        BitConverter.__internalCheckParam = function (value, startIndex, length) {
            if (value == null)
                throw new System.ArgumentNullException("value");

            if (length < 0)
                throw new System.ArgumentOutOfRangeException("Value must be positive.", null, "length");

            if (startIndex < 0 || (startIndex > value.length - length))
                throw new System.ArgumentOutOfRangeException("Index was" + " out of range. Must be non-negative and less than the" + " size of the collection.", null, "startIndex");
        };
        BitConverter.IsLittleEndian = BitConverter.AmILittleEndian();
        return BitConverter;
    })();
    System.BitConverter = BitConverter;
})(System || (System = {}));
var System;
(function (System) {
    var Byte = (function () {
        function Byte() {
        }
        Byte.MinValue = 0;
        Byte.MaxValue = 255;
        return Byte;
    })();
    System.Byte = Byte;
})(System || (System = {}));
var System;
(function (System) {
    var DateTime = (function () {
        function DateTime() {
        }
        return DateTime;
    })();
    System.DateTime = DateTime;
})(System || (System = {}));
var System;
(function (System) {
    //TODO : IObject
    var Environment = (function () {
        function Environment() {
        }
        Object.defineProperty(Environment, "NewLine", {
            get: function () {
                return "\r\n";
                //Or : <br />
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Environment, "TickCount", {
            get: function () {
                //simulate the tickcount by returning the millisecond
                return Date.now();
            },
            enumerable: true,
            configurable: true
        });
        return Environment;
    })();
    System.Environment = Environment;
})(System || (System = {}));
/// <reference path="../Type.ts"/>
var System;
(function (System) {
    System.Type.registerInterface("ICloneable");
})(System || (System = {}));
/// <reference path="BitConverter.ts" />
/// <reference path="Interfaces/ICloneable.ts"/>
/// <reference path="IObject.ts"/>
/// <reference path="Type.ts"/>
/// <reference path="String.ts"/>
/// <reference path="Exceptions/FormatException.ts"/>
/// <reference path="Statements.ts"/>
/// <reference path="Text/StringBuilder.ts"/>
/// <reference path="Exceptions/NotImplementedException.ts"/>
/// <reference path="Exceptions/ArgumentNullException.ts"/>
/// <reference path="OutArgument.ts"/>
var System;
(function (System) {
    var Guid = (function () {
        function Guid() {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            //dispatch to correct 'constructor' overload
            if (args) {
                //constructor(g: string);
                if (typeof args[0] == "string") {
                    var g = args[0];
                    Guid.CheckNull(g);
                    g = g.trim();
                    var parser = new GuidParser(g);
                    var outguid = new System.OutArgument();
                    if (!parser.parse(outguid))
                        throw Guid.CreateFormatException(g);
                    this._a = outguid.value._a;
                    this._b = outguid.value._b;
                    this._c = outguid.value._c;
                    this._d = outguid.value._d;
                    this._e = outguid.value._e;
                    this._f = outguid.value._f;
                    this._g = outguid.value._g;
                    this._h = outguid.value._h;
                    this._i = outguid.value._i;
                    this._j = outguid.value._j;
                    this._k = outguid.value._k;
                }

                //constructor(a: number, b,.... etc
                if (typeof args[0] == "number") {
                    this._a = args[0];
                    this._b = args[1];
                    this._c = args[2];
                    this._d = args[3];
                    this._e = args[4];
                    this._f = args[5];
                    this._g = args[6];
                    this._h = args[7];
                    this._i = args[8];
                    this._j = args[9];
                    this._k = args[10];
                }

                //TODO check for object type.
                if (typeof args[0] == "Array") {
                    var b = args;
                    Guid.CheckArray(b, 16);
                    this._a = System.BitConverter.toInt32(b, 0).Value;
                    this._b = System.BitConverter.toInt16(b, 4).Value;
                    this._c = System.BitConverter.toInt16(b, 6).Value;
                    this._d = b[8];
                    this._e = b[9];
                    this._f = b[10];
                    this._g = b[11];
                    this._h = b[12];
                    this._i = b[13];
                    this._j = b[14];
                    this._k = b[15];
                }
            }
        }
        Guid.newGuid = function () {
            var b = new Uint8Array(16);

            for (var i = 0; i < 16; i++) {
                b[i] = Math.floor(Math.random() * 256);
            }

            var res = new Guid(b);

            // Mask in Variant 1-0 in Bit[7..6]
            res._d = ((res._d & 0x3f) | 0x80);

            // Mask in Version 4 (random based Guid) in Bits[15..13]
            res._c = ((res._c & 0x0fff) | 0x4000);
            return res;
        };

        Guid.CreateFormatException = function (s) {
            return new System.FormatException(System.String.format("Invalid Guid format: {0}", s));
        };

        Guid.construct_numbers = function (a, b, c, d, e, f, g, h, i, j, k) {
            var result = new Guid();
            result._a = a;
            result._b = b;
            result._c = c;
            result._d = d;
            result._e = e;
            result._f = f;
            result._g = g;
            result._h = h;
            result._i = i;
            result._j = j;
            result._k = k;
            return result;
        };

        Guid.prototype.equals = function (o) {
            if (System.Statements.is(o, Guid._type))
                return this.compareTo(o) == 0;

            return false;
        };

        //public Equals(g: Guid): boolean {
        //    return this.CompareTo(g) == 0;
        //}
        Guid.__internalCompare = function (x, y) {
            return (x < y) ? -1 : 1;
        };

        Guid.prototype.compareTo = function (value) {
            if (this._a != value._a) {
                return Guid.__internalCompare(this._a, value._a);
            }
            if (this._b != value._b) {
                return Guid.__internalCompare(this._b, value._b);
            }
            if (this._c != value._c) {
                return Guid.__internalCompare(this._c, value._c);
            }
            if (this._d != value._d) {
                return Guid.__internalCompare(this._d, value._d);
            }
            if (this._e != value._e) {
                return Guid.__internalCompare(this._e, value._e);
            }
            if (this._f != value._f) {
                return Guid.__internalCompare(this._f, value._f);
            }
            if (this._g != value._g) {
                return Guid.__internalCompare(this._g, value._g);
            }
            if (this._h != value._h) {
                return Guid.__internalCompare(this._h, value._h);
            }
            if (this._i != value._i) {
                return Guid.__internalCompare(this._i, value._i);
            }
            if (this._j != value._j) {
                return Guid.__internalCompare(this._j, value._j);
            }
            if (this._k != value._k) {
                return Guid.__internalCompare(this._k, value._k);
            }
            return 0;
        };

        Guid.prototype.getHashCode = function () {
            var res;
            res = this._a;
            res = res ^ (this._b << 16 | this._c);
            res = res ^ (this._d << 24);
            res = res ^ (this._e << 16);
            res = res ^ (this._f << 8);
            res = res ^ (this._g);
            res = res ^ (this._h << 24);
            res = res ^ (this._i << 16);
            res = res ^ (this._j << 8);
            res = res ^ (this._k);
            return res;
        };

        Guid.ToHex = function (b) {
            return b.toString(16);
        };

        Guid.prototype.toByteArray = function () {
            var res = new Uint8Array(16);

            var tmp;
            var d = 0;
            var s;

            tmp = System.BitConverter.getBytes_Int32(this._a);

            for (s = 0; s < 4; ++s) {
                res[d++] = tmp[s];
            }

            tmp = System.BitConverter.getBytes_Int16(this._b);
            for (s = 0; s < 2; ++s) {
                res[d++] = tmp[s];
            }

            tmp = System.BitConverter.getBytes_Int16(this._c);
            for (s = 0; s < 2; ++s) {
                res[d++] = tmp[s];
            }

            res[8] = this._d;
            res[9] = this._e;
            res[10] = this._f;
            res[11] = this._g;
            res[12] = this._h;
            res[13] = this._i;
            res[14] = this._j;
            res[15] = this._k;

            return res;
        };

        Guid.appendInt = function (builder, value) {
            builder.append(Guid.ToHex((value >> 28) & 0xf));
            builder.append(Guid.ToHex((value >> 24) & 0xf));
            builder.append(Guid.ToHex((value >> 20) & 0xf));
            builder.append(Guid.ToHex((value >> 16) & 0xf));
            builder.append(Guid.ToHex((value >> 12) & 0xf));
            builder.append(Guid.ToHex((value >> 8) & 0xf));
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        };

        Guid.appendShort = function (builder, value) {
            builder.append(Guid.ToHex((value >> 12) & 0xf));
            builder.append(Guid.ToHex((value >> 8) & 0xf));
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        };

        Guid.appendByte = function (builder, value) {
            builder.append(Guid.ToHex((value >> 4) & 0xf));
            builder.append(Guid.ToHex(value & 0xf));
        };

        Guid.prototype.toString2 = function () {
            return this.toString(1 /* D */);
        };

        Guid.prototype.toString3 = function (format) {
            if (typeof format === "undefined") { format = "D"; }
            return this.toString(Guid.parseFormat(format));
        };

        Guid.prototype.toString = function (format) {
            if (format) {
                if (typeof format === "string") {
                    format = Guid.parseFormat(format);
                }
            } else {
                format = 1 /* D */;
            }

            var length;
            switch (format) {
                case 2 /* B */:
                case 3 /* P */:
                    length = 38;
                    break;
                case 1 /* D */:
                    length = 36;
                    break;
                case 0 /* N */:
                    length = 32;
                    break;
                case 4 /* X */:
                    length = 68;
                    break;
                default:
                    throw new System.NotImplementedException(format.toString());
            }

            var res = new System.Text.StringBuilder();
            var has_hyphen = GuidParser.hasHyphen(format);

            if (format == 3 /* P */) {
                res.append('(');
            } else if (format == 2 /* B */) {
                res.append('{');
            } else if (format == 4 /* X */) {
                res.append('{').append('0').append('x');
            }

            Guid.appendInt(res, this._a);
            if (has_hyphen) {
                res.append('-');
            } else if (format == 4 /* X */) {
                res.append(',').append('0').append('x');
            }

            Guid.appendShort(res, this._b);
            if (has_hyphen) {
                res.append('-');
            } else if (format == 4 /* X */) {
                res.append(',').append('0').append('x');
            }

            Guid.appendShort(res, this._c);
            if (has_hyphen) {
                res.append('-');
            }

            if (format == 4 /* X */) {
                res.append(',').append('{').append('0').append('x');
                Guid.appendByte(res, this._d);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._e);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._f);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._g);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._h);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._i);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._j);
                res.append(',').append('0').append('x');
                Guid.appendByte(res, this._k);
                res.append('}').append('}');
                ;
            } else {
                Guid.appendByte(res, this._d);
                Guid.appendByte(res, this._e);

                if (has_hyphen) {
                    res.append('-');
                }

                Guid.appendByte(res, this._f);
                Guid.appendByte(res, this._g);
                Guid.appendByte(res, this._h);
                Guid.appendByte(res, this._i);
                Guid.appendByte(res, this._j);
                Guid.appendByte(res, this._k);

                if (format == 3 /* P */) {
                    res.append(')');
                } else if (format == 2 /* B */) {
                    res.append('}');
                }
            }

            return res.ToString();
        };

        Guid.op_Equality = function (a, b) {
            return a.equals(b);
        };

        Guid.op_Inequality = function (a, b) {
            return !(a.equals(b));
        };

        Guid.parse = function (input) {
            if (input == null)
                throw new System.ArgumentNullException("input");

            var outguid = new System.OutArgument(null);

            if (!Guid.tryParse(input, outguid))
                throw Guid.CreateFormatException(input);

            return outguid.value;
        };

        Guid.parseExact = function (input, format) {
            if (input == null)
                throw new System.ArgumentNullException("input");
            if (format == null)
                throw new System.ArgumentNullException("format");

            var outguid = new System.OutArgument(null);
            if (!Guid.tryParseExact(input, format, outguid))
                throw Guid.CreateFormatException(input);

            return outguid.value;
        };

        Guid.tryParse = function (input, result) {
            if (input == null) {
                result.value = Guid.empty;
                return false;
            }
            var parser = new GuidParser(input);
            return parser.parse(result);
        };

        Guid.tryParseExact = function (input, format, result) {
            if (input == null || format == null) {
                result.value = Guid.empty;
                return false;
            }

            var parser = new GuidParser(input);

            return parser.parse(result, Guid.parseFormat(format));
        };

        Guid.parseFormat = function (format) {
            if (System.String.isNullOrEmpty(format))
                return 1 /* D */;

            switch (format[0]) {
                case 'N':
                case 'n':
                    return 0 /* N */;
                case 'D':
                case 'd':
                    return 1 /* D */;
                case 'B':
                case 'b':
                    return 2 /* B */;
                case 'P':
                case 'p':
                    return 3 /* P */;
                case 'X':
                case 'x':
                    return 4 /* X */;
            }

            throw new System.FormatException("Format String can be only one of \"D\", \"d\", \"N\", \"n\", \"P\", \"p\", \"B\", \"b\", \"X\" or \"x\"");
        };

        //helpers
        Guid.CheckNull = function (o) {
            if (o == null) {
                throw new System.ArgumentNullException("Value cannot be null.");
            }
        };

        Guid.CheckLength = function (o, l) {
            if (o.length != l) {
                throw new System.ArgumentException(System.String.format("Array should be exactly {0} bytes long.", l));
            }
        };

        Guid.CheckArray = function (o, l) {
            this.CheckNull(o);
            this.CheckLength(o, l);
        };

        //ICloneable
        Guid.prototype.clone = function () {
            return new Guid(this._a, this._b, this._c, this._d, this._e, this._f, this._g, this._h, this._i, this._j, this._k);
        };

        //IObject
        Guid.prototype.getType = function () {
            return Guid._type;
        };
        Guid._type = System.Type.registerClass(Guid, "System.Guid", ["System.ICloneable"]);

        Guid.empty = Guid.construct_numbers(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return Guid;
    })();
    System.Guid = Guid;

    (function (GuidFormat) {
        GuidFormat[GuidFormat["N"] = 0] = "N";
        GuidFormat[GuidFormat["D"] = 1] = "D";
        GuidFormat[GuidFormat["B"] = 2] = "B";
        GuidFormat[GuidFormat["P"] = 3] = "P";
        GuidFormat[GuidFormat["X"] = 4] = "X";
    })(System.GuidFormat || (System.GuidFormat = {}));
    var GuidFormat = System.GuidFormat;

    //intern
    var GuidParser = (function () {
        function GuidParser(src) {
            this._src = src;
            this.reset();
        }
        GuidParser.prototype.reset = function () {
            this._cur = 0;
            this._length = this._src.length;
        };

        Object.defineProperty(GuidParser.prototype, "Eof", {
            get: function () {
                return this._cur >= this._length;
            },
            enumerable: true,
            configurable: true
        });

        GuidParser.hasHyphen = function (format) {
            switch (format) {
                case 1 /* D */:
                case 2 /* B */:
                case 3 /* P */:
                    return true;
                default:
                    return false;
            }
        };

        GuidParser.prototype.parse = function (outguid, format) {
            if (format) {
                if (format == 4 /* X */)
                    return this.TryParseX(outguid);
                return this.TryParseNDBP(format, outguid);
            }

            //
            if (this.TryParseNDBP(0 /* N */, outguid))
                return true;

            this.reset();
            if (this.TryParseNDBP(1 /* D */, outguid))
                return true;

            this.reset();
            if (this.TryParseNDBP(2 /* B */, outguid))
                return true;

            this.reset();
            if (this.TryParseNDBP(3 /* P */, outguid))
                return true;

            this.reset();
            return this.TryParseX(outguid);
        };

        GuidParser.prototype.TryParseNDBP = function (format, outguid) {
            var a = new System.OutArgument(0);
            var b = new System.OutArgument(0);
            var c = new System.OutArgument(0);

            if (format == 2 /* B */ && !this.ParseChar('{'))
                return false;

            if (format == 3 /* P */ && !this.ParseChar('('))
                return false;

            if (!this.ParseHex(8, true, a))
                return false;

            var has_hyphen = GuidParser.hasHyphen(format);

            if (has_hyphen && !this.ParseChar('-'))
                return false;

            if (!this.ParseHex(4, true, b))
                return false;

            if (has_hyphen && !this.ParseChar('-'))
                return false;

            if (!this.ParseHex(4, true, c))
                return false;

            if (has_hyphen && !this.ParseChar('-'))
                return false;

            var d = new Uint8Array(8);
            for (var i = 0; i < d.length; i++) {
                var dd = new System.OutArgument(0);
                if (!this.ParseHex(2, true, dd))
                    return false;

                if (i == 1 && has_hyphen && !this.ParseChar('-'))
                    return false;

                d[i] = (dd.value & 0xFF);
            }

            if (format == 2 /* B */ && !this.ParseChar('}'))
                return false;

            if (format == 3 /* P */ && !this.ParseChar(')'))
                return false;

            if (!this.Eof)
                return false;

            outguid.value = new Guid(a.value, b.value, c.value, d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
            return true;
        };

        GuidParser.prototype.TryParseX = function (outguid) {
            var a = new System.OutArgument(0);
            var b = new System.OutArgument(0);
            var c = new System.OutArgument(0);

            var guid = new Guid();

            if (!(this.ParseChar('{') && this.ParseHexPrefix() && this.ParseHex(8, false, a) && this.ParseChar(',') && this.ParseHexPrefix() && this.ParseHex(4, false, b) && this.ParseChar(',') && this.ParseHexPrefix() && this.ParseHex(4, false, c) && this.ParseChar(',') && this.ParseChar('{'))) {
                return false;
            }

            var d = new Uint8Array(8);
            for (var i = 0; i < d.length; ++i) {
                var dd = new System.OutArgument(0);

                if (!(this.ParseHexPrefix() && this.ParseHex(2, false, dd)))
                    return false;

                d[i] = (dd.value & 0xFF);

                if (i != 7 && !this.ParseChar(','))
                    return false;
            }

            if (!(this.ParseChar('}') && this.ParseChar('}')))
                return false;

            if (!this.Eof)
                return false;

            outguid.value = new Guid(a.value, b.value, c.value, d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
            return true;
        };

        GuidParser.prototype.ParseHexPrefix = function () {
            if (!this.ParseChar('0'))
                return false;

            return this.ParseChar('x');
        };

        GuidParser.prototype.ParseChar = function (c) {
            //TODO : cannot index string by []
            if (!this.Eof && this._src[this._cur] == c) {
                this._cur++;
                return true;
            }

            return false;
        };

        GuidParser.prototype.ParseHex = function (length, strict, res) {
            res.value = 0;
            for (var i = 0; i < length; i++) {
                if (this.Eof)
                    return !(strict && (i + 1 != length));

                //var c: Char = Char.ToLowerInvariant(this._src[this._cur]);
                var nr = parseInt(this._src[this._cur], 16);
                if (isNaN(nr)) {
                    if (!strict)
                        return true;
                    return !(strict && (i + 1 != length));
                } else {
                    res.value = res.value * 16 + nr;
                    this._cur++;
                }
            }

            return true;
        };
        return GuidParser;
    })();
})(System || (System = {}));
/// <reference path="Interfaces/IFormattable.ts" />
/// <reference path="Interfaces/IComparable.ts"/>
/// <reference path="Interfaces/IEquatable.ts"/>
/// <reference path="Globalization/NumberStyles.ts" />
/// <reference path="IObject.ts"/>
/// <reference path="Type.ts"/>
/// <reference path="IntBase.ts"/>
var System;
(function (System) {
    //TODO : IConvertible
    var Int16 = (function (_super) {
        __extends(Int16, _super);
        function Int16(value) {
            _super.call(this, value);
        }
        //IObject
        Int16.prototype.getType = function () {
            return Int16._type;
        };
        Int16._type = System.Type.registerClass(System.Int32, "System.Int16", ["System.IFormattable", "System.IComparable", "System.IEquatable"]);

        Int16.MaxValue = 32767;
        Int16.MinValue = -32768;
        return Int16;
    })(System.IntBase);
    System.Int16 = Int16;
})(System || (System = {}));
/// <reference path="../../Interfaces/IEnumerable.ts"/>
/// <reference path="ICollection.ts"/>
/// <reference path="../../Exceptions/Exception.ts"/>
/// <reference path="../../IObject.ts"/>
var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var KeyNotFoundException = (function (_super) {
                __extends(KeyNotFoundException, _super);
                function KeyNotFoundException() {
                    _super.apply(this, arguments);
                }
                //IObject
                KeyNotFoundException.prototype.getType = function () {
                    return KeyNotFoundException._type;
                };
                KeyNotFoundException._type = System.Type.registerClass(KeyNotFoundException, "System.Collection.Generic.KeyNotFoundException", []);
                return KeyNotFoundException;
            })(System.Exception);
            Generic.KeyNotFoundException = KeyNotFoundException;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            //TODO : [Serializable]
            var KeyValuePair = (function () {
                function KeyValuePair(key, value) {
                    this.key = key;
                    this.value = value;
                }
                Object.defineProperty(KeyValuePair.prototype, "Key", {
                    get: function () {
                        return this.key;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(KeyValuePair.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });

                KeyValuePair.prototype.toString = function () {
                    return "[" + (this.key != null ? this.key.toString() : "") + ", " + (this.value != null ? this.value.toString() : "") + "]";
                };
                return KeyValuePair;
            })();
            Generic.KeyValuePair = KeyValuePair;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
/// <reference path="../../IObject.ts"/>
/// <reference path="../../Interfaces/IEnumerable.ts"/>
/// <reference path="../../Interfaces/IEnumerator.ts"/>
/// <reference path="IList.ts"/>
var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var List = (function () {
                function List() {
                    this.list = [];
                    this.changecount = 0;
                }
                Object.defineProperty(List.prototype, "count", {
                    get: function () {
                        return this.list.length;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(List.prototype, "isReadOnly", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });

                List.prototype.add = function (item) {
                    this.changecount++;
                    this.list.push(item);
                };

                List.prototype.clear = function () {
                    this.changecount++;
                    this.list = [];
                };

                List.prototype.contains = function (item) {
                    return (this.list.indexOf(item) > -1);
                };

                List.prototype.copyTo = function (array, arrayIndex) {
                    for (var i = 0; i < this.list.length; i++) {
                        array[i + arrayIndex] = this.list[i];
                    }
                };

                List.prototype.remove = function (item) {
                    this.changecount++;
                    var index = this.indexOf(item);
                    if (index >= 0) {
                        this.list.splice(index);
                        return true;
                    }
                    return false;
                };

                List.prototype.indexer = function (index) {
                    return this.list[index];
                };

                List.prototype.indexOf = function (item) {
                    return this.list.indexOf(item);
                };

                List.prototype.removeAt = function (index) {
                    if (index >= this.list.length) {
                        throw new System.ArgumentOutOfRangeException("", null, "index");
                    }
                    this.changecount++;
                    this.list.splice(index);
                };

                List.prototype.insert = function (index, item) {
                    this.changecount++;
                    this.list.splice(2, 0, item);
                };

                List.prototype.getEnumerator = function () {
                    return new ListEnumerator(this);
                };

                //IObject
                List.prototype.getType = function () {
                    return List._type;
                };
                List._type = System.Type.registerClass(List, "System.Collections.Generic.List", [""]);
                return List;
            })();
            Generic.List = List;

            var ListEnumerator = (function () {
                function ListEnumerator(list) {
                    this.interalList = list;
                    this.lastchangecount = this.interalList.changecount;
                }
                ListEnumerator.prototype.checkChangeCount = function () {
                    if (this.lastchangecount != this.interalList.changecount) {
                        throw new System.InvalidOperationException("List changed during enumeration");
                    }
                };

                Object.defineProperty(ListEnumerator.prototype, "current", {
                    get: function () {
                        return this._current;
                    },
                    enumerable: true,
                    configurable: true
                });

                ListEnumerator.prototype.moveNext = function () {
                    if (this.index < this.interalList.count) {
                        this.current = this.interalList.indexer(this.index);
                        this.index++;
                        return true;
                    }

                    this.checkChangeCount();

                    this.index = this.interalList.count + 1;
                    this.current = null;
                    return false;
                };

                ListEnumerator.prototype.reset = function () {
                    this.index = -1;
                };

                ListEnumerator.prototype.dispose = function () {
                    this.interalList = null;
                };
                return ListEnumerator;
            })();
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(System.Collections || (System.Collections = {}));
    var Collections = System.Collections;
})(System || (System = {}));
/// <reference path="Exception.ts" />
/// <reference path="../IObject.ts"/>
/// <reference path="../Type.ts"/>
var System;
(function (System) {
    var InvalidOperationException = (function (_super) {
        __extends(InvalidOperationException, _super);
        function InvalidOperationException(message, innerException) {
            _super.call(this, message, innerException);
        }
        //IObject
        InvalidOperationException.prototype.getType = function () {
            return InvalidOperationException._type;
        };
        InvalidOperationException._type = System.Type.registerClass(InvalidOperationException, "System.InvalidOperationException", []);
        return InvalidOperationException;
    })(System.Exception);
    System.InvalidOperationException = InvalidOperationException;
})(System || (System = {}));
/// <reference path="../../Type.ts" />
var System;
(function (System) {
    (function (Runtime) {
        (function (Serialization) {
            //IObject necessary?
            var SerializationEntry = (function () {
                function SerializationEntry(name, type, value) {
                    this.name = name;
                    this.objectType = type;
                    this.value = value;
                }
                Object.defineProperty(SerializationEntry.prototype, "Name", {
                    // Properties
                    get: function () {
                        return this.name;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(SerializationEntry.prototype, "ObjectType", {
                    get: function () {
                        return this.objectType;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(SerializationEntry.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SerializationEntry;
            })();
            Serialization.SerializationEntry = SerializationEntry;
        })(Runtime.Serialization || (Runtime.Serialization = {}));
        var Serialization = Runtime.Serialization;
    })(System.Runtime || (System.Runtime = {}));
    var Runtime = System.Runtime;
})(System || (System = {}));
/// <reference path="../Int32.ts" />
//* Typescript Base Class Library
//* Closing the gap between C# and Javascript
//*
//* Authors : Lucas Vos
//*         : Mono , Stackoverflow
/// <reference path="Code/Action.ts" />
/// <reference path="Code/Attribute.ts" />
/// <reference path="Code/AttributeTargets.ts" />
/// <reference path="Code/AttributeUsageAttribute.ts" />
/// <reference path="Code/BitConverter.ts" />
/// <reference path="Code/Byte.ts" />
/// <reference path="Code/Char.ts" />
/// <reference path="Code/DateTime.ts" />
/// <reference path="Code/Environment.ts" />
/// <reference path="Code/Func.ts" />
/// <reference path="Code/Guid.ts" />
/// <reference path="Code/Int16.ts" />
/// <reference path="Code/Int32.ts" />
/// <reference path="Code/IntBase.ts" />
/// <reference path="Code/IObject.ts" />
/// <reference path="Code/LinqStuff.ts" />
/// <reference path="Code/OutArgument.ts" />
/// <reference path="Code/Statements.ts" />
/// <reference path="Code/String.ts" />
/// <reference path="Code/Type.ts" />
/// <reference path="Code/TypeCode.ts" />
/// <reference path="Code/Collections/Generic/ICollection.ts" />
/// <reference path="Code/Collections/Generic/IList.ts" />
/// <reference path="Code/Collections/Generic/KeyNotFoundException.ts" />
/// <reference path="Code/Collections/Generic/KeyValuePair.ts" />
/// <reference path="Code/Collections/Generic/List.ts" />
/// <reference path="Code/Exceptions/ArgumentException.ts" />
/// <reference path="Code/Exceptions/ArgumentNullException.ts" />
/// <reference path="Code/Exceptions/ArgumentOutOfRangeException.ts" />
/// <reference path="Code/Exceptions/Exception.ts" />
/// <reference path="Code/Exceptions/FormatException.ts" />
/// <reference path="Code/Exceptions/InvalidCastException.ts" />
/// <reference path="Code/Exceptions/InvalidOperationException.ts" />
/// <reference path="Code/Exceptions/NotImplementedException.ts" />
/// <reference path="Code/Globalization/CultureInfo.ts" />
/// <reference path="Code/Globalization/NumberStyles.ts" />
/// <reference path="Code/Globalization/UnicodeCategory.ts" />
/// <reference path="Code/Interfaces/ICloneable.ts" />
/// <reference path="Code/Interfaces/IComparable.ts" />
/// <reference path="Code/Interfaces/IConvertible.ts" />
/// <reference path="Code/Interfaces/IDisposable.ts" />
/// <reference path="Code/Interfaces/IEnumerable.ts" />
/// <reference path="Code/Interfaces/IEnumerator.ts" />
/// <reference path="Code/Interfaces/IEquatable.ts" />
/// <reference path="Code/Interfaces/IFormatProvider.ts" />
/// <reference path="Code/Interfaces/IFormattable.ts" />
/// <reference path="Code/Runtime/Serialization/IFormatConverter.ts" />
/// <reference path="Code/Runtime/Serialization/ISerializable.ts" />
/// <reference path="Code/Runtime/Serialization/SerializationEntry.ts" />
/// <reference path="Code/Runtime/Serialization/SerializationInfo.ts" />
/// <reference path="Code/Runtime/Serialization/StreamingContext.ts" />
/// <reference path="Code/Runtime/Serialization/StreamingContextStates.ts" />
/// <reference path="Code/Text/StringBuilder.ts" />
/// <reference path="Code/Text/StringBuilder2.ts" />
