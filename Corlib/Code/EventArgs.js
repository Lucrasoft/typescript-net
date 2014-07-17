/// <reference path="Type.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var EventArgs = (function (_super) {
        __extends(EventArgs, _super);
        function EventArgs() {
            _super.call(this);
        }
        //IObject
        EventArgs.prototype.getType = function () {
            return EventArgs._type;
        };
        EventArgs._type = System.Type.registerClass(EventArgs, "System.EventArgs", []);

        EventArgs.Empty = new EventArgs();
        return EventArgs;
    })(System.Object);
    System.EventArgs = EventArgs;
})(System || (System = {}));
//# sourceMappingURL=EventArgs.js.map
