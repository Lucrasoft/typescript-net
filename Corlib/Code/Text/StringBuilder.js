/// <reference path="../Type.ts" />
/// <reference path="../Int32.ts" />
/// <reference path="../Runtime/Serialization/ISerializable.ts" />
/// <reference path="../Runtime/Serialization/SerializationInfo.ts" />
/// <reference path="../Runtime/Serialization/StreamingContext.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    (function (Text) {
        //Basic implementation
        var StringBuilder = (function (_super) {
            __extends(StringBuilder, _super);
            function StringBuilder(value) {
                _super.call(this);
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

            StringBuilder.prototype.toString = function (startIndex, length) {
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
        })(System.Object);
        Text.StringBuilder = StringBuilder;
    })(System.Text || (System.Text = {}));
    var Text = System.Text;
})(System || (System = {}));
//# sourceMappingURL=StringBuilder.js.map
