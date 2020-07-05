// # Time: O(n) | Space: O(n)
const caesarCipherEncryptor = (string, key) => {
    const newLetters = []
    const newKey = key % 26
    for (let i = 0; i < string.length; i++) {
        newLetters.push(getNewLetter(string[i], newKey))
    }
    return newLetters.join()
}

const getNewLetter = (letter, key) => {
    const newLetterCode = letter.charCodeAt(0) + key
    if (newLetterCode <= 122){
        return String.fromCharCode(newLetterCode)
    } else {
        return String.fromCharCode(96 + newLetterCode % 122)
    }
}