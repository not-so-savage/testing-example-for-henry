const app = require('./app');

describe('summing', () => {
    test('sums 2 numbers together', () => {
        const numbers = [2, 2];
        const expectedSum = 4;

        let actualValue = app.calculateSum(numbers);

        expect(actualValue).toEqual(expectedSum);
    });

    test('summing zero values returns 0', () => {
        const numbers = [];
        const expectedSum = 0;

        let actualValue = app.calculateSum(numbers);

        expect(actualValue).toEqual(expectedSum);
    })
})

describe('multiplying', () => {
    test('multiplies 3 numbers together', () => {
        const numbers = [2, 3, 4];
        const expectedProduct = 24;

        let actualValue = app.calculateProduct(numbers);

        expect(actualValue).toEqual(expectedProduct);
    })

    test('multiplies 4 numbers together', () => {
        const numbers = [2, 3, 4, 5];
        const expectedProduct = 120;

        let actualValue = app.calculateProduct(numbers);

        expect(actualValue).toEqual(expectedProduct);
    })

    test('multiplying with a zero returns zero', () => {
        const numbers = [2, 3, 4, 0];
        const expectedProduct = 0;

        let actualValue = app.calculateProduct(numbers);

        expect(actualValue).toEqual(expectedProduct);
    })
})
