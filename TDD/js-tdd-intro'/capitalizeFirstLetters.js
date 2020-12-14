const assert = require('assert');

const capitalizeFirstLetters = (input) => {
    if (input.length > 0) {
        const eachWord = input
            .split(" ")
            .map(e => e[0].toUpperCase() + e.slice(1))
            .join(" ")
        return eachWord
    } else {
        return ""
    }
}

assert.strictEqual(capitalizeFirstLetters('more than a single word'), 'More Than A Single Word');
assert.strictEqual(capitalizeFirstLetters('a'), 'A');
assert.strictEqual(capitalizeFirstLetters(''), '');