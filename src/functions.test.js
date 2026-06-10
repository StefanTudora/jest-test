import {capitalize, reverseString, calculator, caeserCipher} from './functions.js'

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
