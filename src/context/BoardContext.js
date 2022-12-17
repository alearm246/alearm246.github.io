import React, { useState, createContext, useEffect } from "react";
import BOARD_STATE from "../data/boardState";
import { LETTER_STATE } from "../data/boardState";
import BoardLetter from "../components/common/BoardLetter/BoardLetter";
import getColor from "../utils/getColor";
import useSecretWord from "../customHooks/useSecretWord";
import isValidWord from "../utils/isValidWord";

export const BoardContext = createContext(null);
export function BoardContextProvider({ children }) {
    const [board, setBoard] = useState(BOARD_STATE);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentLetter, setCurrentLetter] = useState(0);
    const [guessedWord, setGuessedWord] = useState("");
    const secretWord = "great";

    useEffect(() => {
        const newBoard = [...board];
        if(guessedWord.length === 0) return;
        if(!isValidWord(guessedWord) && currentLetter >= board[currentRow].length - 1) return;
        if(currentRow > newBoard.length - 1 || guessedWord.length != 5) return;
        const letterFreq = getLetterFreq(secretWord);
        //checks if the letter is in the word and in the correct spot
        for(let i=0; i<secretWord.length; i++) {
            if(guessedWord[i] === secretWord[i] && letterFreq[guessedWord[i]] > 0) {
                newBoard[currentRow][i].letterState = LETTER_STATE.correct;
                letterFreq[guessedWord[i]]--;
            }
        }
        //checks if the letter is in the word but not in the correct spot
        for(let i=0; i<secretWord.length; i++) {
            if(guessedWord[i].letterState === LETTER_STATE.correct || guessedWord[i] === secretWord[i]) {
                continue;
            } else if(secretWord.includes(guessedWord[i]) && letterFreq[guessedWord[i]] > 0){
                if(secretWord.includes(guessedWord[i]) && letterFreq[guessedWord[i]] > 0) {
                    newBoard[currentRow][i].letterState = LETTER_STATE.incorrectSpot;
                    letterFreq[guessedWord[i]]--;
                }
            }
        }
        //checks if the letter is not in the word at all
        for(let i=0; i<secretWord.length; i++) {
            if(newBoard[currentRow][i].letterState === LETTER_STATE.correct || newBoard[currentRow][i].letterState === LETTER_STATE.incorrectSpot) {
                continue;
            } else {
                newBoard[currentRow][i].letterState = LETTER_STATE.wrong;
            }
        }
        setCurrentRow(currentRow + 1);
        setCurrentLetter(0);
        setBoard(newBoard);
    }, [guessedWord])

    const getLetterFreq = (secretWord) => {
        const letterFreq = {};
        for(let i=0; i<secretWord.length; i++) {
            if(letterFreq[secretWord[i]]) {
                letterFreq[secretWord[i]]++;
            } else {
                letterFreq[secretWord[i]] = 1;
            }
        }
        return letterFreq;
    }

    const isGameOver = () => {
        for(let i=0; i<board[currentRow].length; i++) {
            if(currentRow > 0) {
                if(board[currentRow - 1][i].letterState != LETTER_STATE.correct) {
                    return false;
                }
            } else {
                if(board[currentRow][i].letterState != LETTER_STATE.correct) {
                    return false;
                }
            }
        }
        return true;
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
        if(newBoard[currentRow][currentLetter].letterState === LETTER_STATE.unselected) {
            newBoard[currentRow][currentLetter].letter = letter;
            newBoard[currentRow][currentLetter].letterState = LETTER_STATE.placed;
            setCurrentLetter(currentLetter + 1);
        } 
        setBoard(newBoard);
    }

    const evaluateWord = () => {
        setGuessedWord(convertLettersIntoWord().toLowerCase());
    }

    const deleteLetter = () => {
        if(currentLetter === 0) return;
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
        guessedWord,
        deleteLetter
    }

    return (
        <BoardContext.Provider value={value}>
            {children}
        </BoardContext.Provider>
    )
}