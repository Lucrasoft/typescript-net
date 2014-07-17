/// <reference path="StreamingContextStates.ts" />
/// <reference path="../../Type.ts"/>
/// <reference path="../../Statements.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    (function (Runtime) {
        (function (Serialization) {
            var StreamingContext = (function (_super) {
                __extends(StreamingContext, _super);
                function StreamingContext(state, additional) {
                    if (typeof additional === "undefined") { additional = null; }
                    _super.call(this);
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
            })(System.Object);
            Serialization.StreamingContext = StreamingContext;
        })(Runtime.Serialization || (Runtime.Serialization = {}));
        var Serialization = Runtime.Serialization;
    })(System.Runtime || (System.Runtime = {}));
    var Runtime = System.Runtime;
})(System || (System = {}));
//# sourceMappingURL=StreamingContext.js.map
