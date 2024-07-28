// Check the paragraf is contain the letter [A-Z] or not

export const isPangram = (phrase: string): boolean => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCasedPhrase = phrase.toLowerCase();

    for (const char of alphabet) {
        if (!lowerCasedPhrase.includes(char)) {
            return false;
        }
    }
    return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // True
console.log(isPangram("Laksamana")) // False
