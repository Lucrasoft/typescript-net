/// <reference path="../../Interfaces/IEnumerable.ts"/>
/// <reference path="../../Interfaces/IEnumerator.ts"/>
/// <reference path="IList.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    (function (Collections) {
        (function (Generic) {
            var List = (function (_super) {
                __extends(List, _super);
                function List() {
                    _super.call(this);
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
            })(System.Object);
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
//# sourceMappingURL=List.js.map
