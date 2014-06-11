/// <reference path="../Lib/jasmine-1.3.d.ts" />

describe("Guid", () => {

    it("should parse correct", () => {


        var g = System.Guid.Parse("{3F2504E0-4F89-11D3-9A0C-0305E82C3301}");
        var b = g.ToByteArray();

        expect(b[0]).toBe(3);
        expect(b[1]).toBe(15);
        expect(b[2]).toBe(2);


    });

    it("should display correct", () => {
        //N, // 00000000000000000000000000000000
        //D, // 00000000-0000-0000-0000-000000000000
        //B, // {00000000-0000-0000-0000-000000000000}
        //P, // (00000000-0000-0000-0000-000000000000)
        //X, // {0x00000000,0x0000,0x0000,{0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00}}

        var g = new System.Guid(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        expect(g.ToString("N")).toBe("0000000000010002030405060708090a");
        expect(g.ToString("D")).toBe("00000000-0001-0002-0304-05060708090a");
        expect(g.ToString("B")).toBe("{00000000-0001-0002-0304-05060708090a}");
        expect(g.ToString("P")).toBe("(00000000-0001-0002-0304-05060708090a)");
    });

 
});