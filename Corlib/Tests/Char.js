/// <reference path="../Lib/jasmine-1.3.d.ts" />
var System;
(function (System) {
    (function (Test) {
        describe("Char", function () {
            it("should init correctly by number", function () {
                expect(new System.Char(65).ToString()).toBe("A");
            });

            it("should init correctly by string", function () {
                expect(new System.Char("A").value).toBe(65);
            });

            it("should convert a number character to a numeric value", function () {
                expect(System.Char.GetNumericValue("5")).toBe(5);
            });
        });

        describe("StringBuilder", function () {
            it("should init correcty", function () {
                expect(new System.Text.StringBuilder("hello").ToString()).toBe("hello");
            });

            it("Insert", function () {
                var sb = new System.Text.StringBuilder();
                sb.Append("hello");
                sb.Append("world");
                sb.Insert(5, "-", 2);
                expect(sb.ToString()).toBe("hello--world");
            });
        });
    })(System.Test || (System.Test = {}));
    var Test = System.Test;
})(System || (System = {}));
//# sourceMappingURL=Char.js.map
