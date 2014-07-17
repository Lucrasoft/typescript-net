/// <reference path="../Lib/jasmine-1.3.d.ts" />
describe("Char", function () {
    it("should init correctly by number", function () {
        expect(new System.Char(65).toString()).toBe("A");
    });

    it("should init correctly by string", function () {
        expect(new System.Char("A").value).toBe(65);
    });

    it("should convert a number character to a numeric value", function () {
        expect(System.Char.getNumericValue("5")).toBe(5);
    });
});
//# sourceMappingURL=CharSpec.js.map
