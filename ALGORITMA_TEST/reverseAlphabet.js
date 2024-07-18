const reverseAlphabet = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const reversedChars = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (alphabet.includes(char)) {
            reversedChars.push(char);
        }
    }

    const nonAlphabetChars = str.replace(/[a-zA-Z]/g, '');
    const reversedString = reversedChars.reverse().join('') + nonAlphabetChars;

    return reversedString;
};

const inputString = 'NEGIE1';
const reversedString = reverseAlphabet(inputString);
console.log(`Original String: ${inputString}`);
console.log(`Reversed Alphabet String: ${reversedString}`);
