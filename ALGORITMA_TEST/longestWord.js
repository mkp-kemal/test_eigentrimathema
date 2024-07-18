const longest = (sentence) => {
    const words = sentence.split(' ');

    let longestWord = '';

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
};

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = longest(sentence);
console.log(`${longestWord}: ${longestWord.length}: characters`);
