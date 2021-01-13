// transforming a word into piglatin
// need refacoring

function translatePigLatin(str) {
    const VOWEL = ['a', 'e', 'i', 'o', 'u'];
    let newWord = "";
    let vowelStart = 0;
    let noVowel = false;

    for (let i = 0; i < str.length; i++) {
        if (VOWEL.includes(str[i])) {
            vowelStart = i; break;
        }
        noVowel = (i === str.length - 1);
    }

    // creating the word
    let change = '';
    if (!noVowel) {
        change = vowelStart === 0 ?
            'w' : str.slice(0, vowelStart);
    }
    newWord = `${str.slice(vowelStart)}${change}ay`

    return newWord;
}