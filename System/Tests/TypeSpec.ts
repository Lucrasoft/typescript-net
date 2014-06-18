/// <reference path="../Lib/jasmine-1.3.d.ts" />

describe("Type", () => {

    it("should return the correct extended type name ", () => {
        var b = new System.Char(65);

        expect(b.getType().name == "System.Char");
     
    });

    it("should clone correctly", () => {

        var b = new System.Char(65);
       


    });

});

   