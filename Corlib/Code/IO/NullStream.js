/// <reference path="../Type.ts" />
/// <reference path="Stream.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    (function (IO) {
        var NullStream = (function (_super) {
            __extends(NullStream, _super);
            function NullStream() {
                _super.apply(this, arguments);
            }
            Object.defineProperty(NullStream.prototype, "canRead", {
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(NullStream.prototype, "canSeek", {
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(NullStream.prototype, "CanWrite", {
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(NullStream.prototype, "Length", {
                get: function () {
                    return 0;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(NullStream.prototype, "Position", {
                get: function () {
                    return 0;
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });

            NullStream.prototype.Flush = function () {
            };

            NullStream.prototype.Read = function (buffer, offset, count) {
                return 0;
            };

            NullStream.prototype.ReadByte = function () {
                return -1;
            };

            NullStream.prototype.Seek = function (offset, origin) {
                return;
            };

            NullStream.prototype.SetLength = function (value) {
            };

            NullStream.prototype.Write = function (buffer, offset, count) {
            };

            NullStream.prototype.WriteByte = function (value) {
            };
            return NullStream;
        })(System.IO.Stream);
        IO.NullStream = NullStream;
    })(System.IO || (System.IO = {}));
    var IO = System.IO;
})(System || (System = {}));
//# sourceMappingURL=NullStream.js.map
