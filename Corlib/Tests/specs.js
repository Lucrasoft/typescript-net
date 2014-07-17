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
/// <reference path="../Lib/jasmine-1.3.d.ts" />
describe("Guid", function () {
    it("should parse correct", function () {
        var g = System.Guid.parse("{3F2504E0-4F89-11D3-9A0C-0305E82C3301}");
        var b = g.toByteArray();

        expect(b[0]).toBe(224);
        expect(b[1]).toBe(4);
        expect(b[2]).toBe(37);
    });

    it("should display correct", function () {
        //N, // 00000000000000000000000000000000
        //D, // 00000000-0000-0000-0000-000000000000
        //B, // {00000000-0000-0000-0000-000000000000}
        //P, // (00000000-0000-0000-0000-000000000000)
        //X, // {0x00000000,0x0000,0x0000,{0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00}}
        var g = new System.Guid(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        expect(g.toString("N")).toBe("0000000000010002030405060708090a");
        expect(g.toString("D")).toBe("00000000-0001-0002-0304-05060708090a");
        expect(g.toString("B")).toBe("{00000000-0001-0002-0304-05060708090a}");
        expect(g.toString("P")).toBe("(00000000-0001-0002-0304-05060708090a)");
    });
});
/// <reference path="../Lib/jasmine-1.3.d.ts" />
describe("StringBuilder", function () {
    it("should init correcty", function () {
        expect(new System.Text.StringBuilder("hello").toString()).toBe("hello");
    });

    it("Insert", function () {
        var sb = new System.Text.StringBuilder();
        sb.append("hello");
        sb.append("world");
        sb.insert(5, "-", 2);
        expect(sb.toString()).toBe("hello--world");
    });
});
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
