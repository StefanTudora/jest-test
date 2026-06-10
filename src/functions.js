
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

const calculator = () => {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => {
            if (b === 0) {
                console.log("Divide by zero");
                return undefined;
            }
            return a / b;
        },
        multiply: (a, b) => a * b
    };
}

function caeserCipher(string, idx) {
    const converter = (char) => {
        if (/^\p{L}$/u.test(char) === false) {
            // Char is not letter, keep as is
            return char;
        }
        if (char === char.toUpperCase()) {
            return String.fromCharCode((((char.charCodeAt(0) - 65) + idx) % 26) + 65);
        } else if (char === char.toLowerCase()) {
            return String.fromCharCode((((char.charCodeAt(0) - 97) + idx) % 26) + 97);
        }
    }
    return string.split('').map(char => converter(char)).join('');
}

export { capitalize, reverseString, calculator, caeserCipher };