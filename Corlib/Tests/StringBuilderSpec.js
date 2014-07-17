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
//# sourceMappingURL=StringBuilderSpec.js.map
