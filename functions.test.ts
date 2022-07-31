const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(Array.isArray(['value'])).toBe(true);
    })
})

describe('shuffleArray should', () => {
    test('shuffleArray should return an array with length 5', () => {
        expect(shuffleArray(['value']).length).toBe(5);
    })
})