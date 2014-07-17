/// <reference path="../Lib/jasmine-1.3.d.ts" />
describe("Type", function () {
    it("should return the correct extended type name ", function () {
        var b = new System.Char(65);
        expect(b.getType().name).toBe("System.Char");
    });

    it("should return correct type from a class", function () {
        var b = new System.Char(65);

        var charType = System.Statements.typeOf(System.Char);

        expect(charType.name).toBe("System.Char");
    });

    it("the Is statement should work", function () {
        var b = new System.Char(65);

        var isChar = System.Statements.is(b, System.Char);
        expect(isChar).toBe(true);

        var isCharComparable = System.Statements.is(b, "System.IComparable");
        expect(isChar).toBe(true);
    });
});
//# sourceMappingURL=TypeSpec.js.map
