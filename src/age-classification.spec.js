const Main = require('./main.js');

describe('Test ageClassification function from main.js', function () {
    const test = new Main().ageClassification;

    it('argument: -1, expect: null', function () {
        expect(test(-1)).toBe(null);
    });

    it('argument: 1, expect: детский возраст', function () {
        expect(test(1)).toBe('детский возраст');
    });

    it('argument: 24, expect: детский возраст', function () {
        expect(test(24)).toBe('детский возраст');
    });

    it('argument: 24.01, expect: молодой возраст', function () {
        expect(test(24.01)).toBe('молодой возраст');
    });

    it('argument: 44, expect: молодой возраст', function () {
        expect(test(44)).toBe('молодой возраст');
    });

    it('argument: 44.01, expect: средний возраст', function () {
        expect(test(44.01)).toBe('средний возраст');
    });

    it('argument: 65, expect: средний возраст', function () {
        expect(test(65)).toBe('средний возраст');
    });

    it('argument: 65.01, expect: пожилой возраст', function () {
        expect(test(65.01)).toBe('пожилой возраст');
    });

    it('argument: 75, expect: пожилой возраст', function () {
        expect(test(75)).toBe('пожилой возраст');
    });

    it('argument: 75.01, expect: старческий возраст', function () {
        expect(test(75.01)).toBe('старческий возраст');
    });

    it('argument: 90, expect: старческий возраст', function () {
        expect(test(90)).toBe('старческий возраст');
    });

    it('argument: 90.01, expect: долгожители', function () {
        expect(test(90.01)).toBe('долгожители');
    });

    it('argument: 122, expect: долгожители', function () {
        expect(test(122)).toBe('долгожители');
    });

    it('argument: 122.01, expect: null', function () {
        expect(test(122.01)).toBe(null);
    });

    it('argument: 150, expect: null', function () {
        expect(test(150)).toBe(null);
    });
});