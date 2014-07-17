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
//# sourceMappingURL=Environment.js.map
