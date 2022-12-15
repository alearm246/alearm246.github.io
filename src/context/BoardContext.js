import React, { useState, createContext, useEffect } from "react";
import BOARD_STATE from "../data/boardState";
import { LETTER_STATE } from "../data/boardState";
import BoardLetter from "../components/common/BoardLetter/BoardLetter";
import useSecretWord from "../customHooks/useSecretWord";
import isValidWord from "../utils/isValidWord";

export const BoardContext = createContext(null);
export function BoardContextProvider({ children }) {
    const [board, setBoard] = useState(BOARD_STATE);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentLetter, setCurrentLetter] = useState(0);
    const secretWord = "green";
    let guessedWord = "";

    console.log("secret word: ", secretWord);

    const isGameOver = () => {
        console.log(`guessed word: ${guessedWord} secret word: ${secretWord}`);
        return guessedWord == secretWord;
    }

    const convertLettersIntoWord = () => {
        let word = "";
        if(!board[currentRow]?.length) return "";
        for(let i=0; i<board[currentRow].length; i++) {
            word += board[currentRow][i].letter;
        }
        return word;
    }

    const addLetter = letter => {
        if(isGameOver()) return;
        const newBoard = [...board];
        if(!newBoard[currentRow]?.length) return;
        if(currentLetter >= newBoard[currentRow]?.length ) return;
        if(newBoard[currentRow][currentLetter].letterState == LETTER_STATE.unselected) {
            newBoard[currentRow][currentLetter].letter = letter;
            newBoard[currentRow][currentLetter].letterState = LETTER_STATE.placed;
            setCurrentLetter(currentLetter + 1);
        } 
        setBoard(newBoard);
    }

    const evaluateWord = () => {
        if(isGameOver()) return;
        guessedWord = convertLettersIntoWord().toLowerCase();
        console.log("what is the guessed word: ", guessedWord);
        console.log("length of the word: ", guessedWord.length);
        const newBoard = [...board];
        if(guessedWord.length == 0) return;
        if(!isValidWord(guessedWord) && currentLetter >= board[currentRow].length - 1) return;
        if(currentRow > newBoard.length - 1 || guessedWord.length != 5) return;
        for(let i=0; i<guessedWord.length; i++) {
            if(guessedWord[i] == secretWord[i]) {
                newBoard[currentRow][i].letterState = LETTER_STATE.correct;
            } else if(secretWord.includes(guessedWord[i])) {
                newBoard[currentRow][i].letterState = LETTER_STATE.incorrectSpot
            } else {
                newBoard[currentRow][i].letterState = LETTER_STATE.wrong;
            }
        }
        setCurrentRow(currentRow + 1);
        setCurrentLetter(0);
        setBoard(newBoard);
    }

    const deleteLetter = () => {
        if(currentLetter == 0) return;
        const newBoard = [...board];     
        newBoard[currentRow][currentLetter - 1].letter = "";
        newBoard[currentRow][currentLetter - 1].letterState = LETTER_STATE.unselected;
        setBoard(newBoard);
        setCurrentLetter(currentLetter - 1);
    }

    const value = {
        board,
        setBoard,
        addLetter,
        currentRow,
        setCurrentRow,
        currentLetter,
        setCurrentLetter,
        secretWord,
        evaluateWord,
        deleteLetter
    }

    return (
        <BoardContext.Provider value={value}>
            {children}
        </BoardContext.Provider>
    )
}