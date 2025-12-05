import { getSingleMinutesRow } from '../src/berlin_clock';
describe('Berlin Clock', () => {
    it("should return '0000' for 0 minutes", () => {
        expect(getSingleMinutesRow(0)).toBe('0000');
    });
    it("should return '1000' for 1 minutes", () => {
        expect(getSingleMinutesRow(1)).toBe('1000');
    });
    it("should return '1100' for 2 minutes", () => {
        expect(getSingleMinutesRow(2)).toBe('1100');
    });
    it("should return '1110' for 3 minutes", () => {
        expect(getSingleMinutesRow(3)).toBe('1110');
    });
    it("should return '1111' for 4 minutes", () => {
        expect(getSingleMinutesRow(4)).toBe('1111');
    });


    /*it("should return 1 for seconds pair", () => {
        expect('1').toBe('1');
    });
    it("should return 0 for seconds odd", () => {
        expect('0').toBe('0');
    });*/
});