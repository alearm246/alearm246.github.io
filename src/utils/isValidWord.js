import validWords from "../data/words";

function isValidWord(guessedWord) {
    if(!validWords[guessedWord]) return false;
    return validWords[guessedWord];
}

export default isValidWord;