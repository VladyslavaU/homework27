const Main = require('./main.js');

describe('Test weekFn function from main.js', function () {
    const test = new Main().weekFn;
    it('argument: 1, expect: \'Понедельник\'', function () {
        expect(test(1)).toBe('Понедельник');
    });

    it('argument: 3, expect: \'Среда\'', function () {
        expect(test(3)).toBe('Среда');
    });

    it('argument: 7, expect: \'Воскресенье\'', function () {
        expect(test(7)).toBe('Воскресенье');
    });

    it('argument: 9, expect: null', function () {
        expect(test(9)).toBe(null);
    });

    it('argument: 1.5, expect: null', function () {
        expect(test(1.5)).toBe(null);
    });

    it('argument: \'2\', expect: null', function () {
        expect(test('2')).toBe(null);
    });
});