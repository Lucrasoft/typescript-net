/// <reference path="../Lib/jasmine-1.3.d.ts" />



describe("StringBuilder", () => {

    it("should init correcty", () => {
        expect(new System.Text.StringBuilder("hello").ToString()).toBe("hello");
    });

    it("Insert", () => {
        var sb = new System.Text.StringBuilder();
        sb.Append("hello");
        sb.Append("world");
        sb.Insert(5, "-", 2);
        expect(sb.ToString()).toBe("hello--world");
    });

});

