var Yielder = (function () {
    function Yielder() {
        this._current = null;
    }
    Yielder.prototype.current = function () {
        return this._current;
    };

    Yielder.prototype.yieldReturn = function (value) {
        this._current = value;
        return true;
    };
    Yielder.prototype.yieldBreaK = function () {
        return false;
    };
    return Yielder;
})();
exports.Yielder = Yielder;

var State;
(function (State) {
    State[State["Before"] = 0] = "Before";
    State[State["Running"] = 1] = "Running";
    State[State["After"] = 2] = "After";
})(State || (State = {}));

var EnumeratorImpl = (function () {
    function EnumeratorImpl(initialize, tryGetNext, Dispose) {
        this.initialize = initialize;
        this.tryGetNext = tryGetNext;
        this.Dispose = Dispose;
        this.yielder = new Yielder();
        this.state = 0 /* Before */;
    }
    Object.defineProperty(EnumeratorImpl.prototype, "current", {
        get: function () {
            return this.yielder.current();
        },
        enumerable: true,
        configurable: true
    });

    EnumeratorImpl.prototype.moveNext = function () {
        try  {
            switch (this.state) {
                case 0 /* Before */:
                    this.state = 1 /* Running */;
                    this.initialize();

                case 1 /* Running */:
                    if (this.tryGetNext.apply(this.yielder)) {
                        return true;
                    } else {
                        this.dispose();
                        return false;
                    }
                case 2 /* After */:
                    return false;
            }
        } catch (e) {
            this.dispose();
            throw e;
        }
    };

    EnumeratorImpl.prototype.reset = function () {
    };

    EnumeratorImpl.prototype.dispose = function () {
        if (this.state != 1 /* Running */)
            return;

        try  {
            this.dispose();
        } finally {
            this.state = 2 /* After */;
        }
    };
    return EnumeratorImpl;
})();
exports.EnumeratorImpl = EnumeratorImpl;
