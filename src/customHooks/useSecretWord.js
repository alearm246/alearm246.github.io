import React, { useState, useEffect } from "react";
import validWords from "../data/words";

function useSecretWord() {
    const [secretWord, setSecretWord] = useState("");
    const wordKeys = Object.keys(validWords);
    useEffect(() => {
        setSecretWord(wordKeys[Math.floor(Math.random() * (wordKeys.length - 1))]);
    }, []);
    return secretWord;
}

export default useSecretWord;