import {capitalize, reverseString, calculator, caeserCipher, analyzeArray } from './functions.js'

test('apple -> Apple', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('orion -> Orion', () => {
    expect(capitalize('orion')).toBe('Orion');
});

test('rock -> Rock', () => {
    expect(capitalize('rock')).toBe('Rock');
});

test('(abc, 3) -> def', () => {
    expect(caeserCipher('abc', 3)).toBe('def');
})

test('(abc32xyz, 3) -> def32abc', () => {
    expect(caeserCipher('abc32xyz', 3)).toBe('def32abc');
})

test('(aBC32xYz, 3) -> dEF32aBc', () => {
    expect(caeserCipher('abc32xyz', 3)).toBe('def32abc');
})

test('[1, 2, 3, 4] -> {2.5, 1, 4, 4}', () => {
    const result = analyzeArray([1, 2, 3, 4]);
    expect(result.avarage).toBeCloseTo(2.5);
    expect(result.minim).toBe(1);
    expect(result.maxim).toBe(4);
    expect(result.length).toBe(4);
});

test('undifined -> undifined', () => {
    const result = analyzeArray();
    expect(result).toBe(undefined);
});




