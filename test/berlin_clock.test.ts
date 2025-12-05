describe('Berlin Clock', () => {
    it("should return '0000' for 0 minutes", () => {
        expect('0000').toBe('0000');
    });
    it("should return '1000' for 1 minutes", () => {
        expect('1000').toBe('1000');
    });
    it("should return '1100' for 2 minutes", () => {
        expect('1100').toBe('1000');
    });
    it("should return '1110' for 3 minutes", () => {
        expect('1110').toBe('1000');
    });
    it("should return '1111' for 4 minutes", () => {
        expect('1111').toBe('1111');
    });


    /*it("should return 1 for seconds pair", () => {
        expect('1').toBe('1');
    });
    it("should return 0 for seconds odd", () => {
        expect('0').toBe('0');
    });*/
});