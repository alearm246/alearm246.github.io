import React, { useState, createContext, useEffect, useContext } from "react";
import BOARD from "../data/boardState";
import { UserContext } from "./UserContext";
import { ToastContext } from "./ToastContext";
import { LETTER_STATE } from "../data/boardState";
import { v4 as uuidv4 } from 'uuid';
import BoardLetter from "../components/common/BoardLetter/BoardLetter";
import getColor from "../utils/getColor";
import useSecretWord from "../customHooks/useSecretWord";
import isValidWord from "../utils/isValidWord";

export const BoardContext = createContext(null);
export function BoardContextProvider({ children }) {
    const [board, setBoard] = useState(BOARD);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentLetter, setCurrentLetter] = useState(0);
    const [guessedWord, setGuessedWord] = useState({word: ""});
    const [isGameOver, setIsGameOver] = useState(false);
    const { numAttempts, setNumAttempts, setHasWon } = useContext(UserContext)
    const { addToast } = useContext(ToastContext);
    const secretWord = "great";

    useEffect(() => {
        const { word } = guessedWord;
        const newBoardObj = {...board};
        const { state: newBoard } = newBoardObj;
        if(word.length === 0) return;
        
        if(!isValidWord(word)) {
            return addToast({
                id: uuidv4(),
                message: "Not in word list",
                createdAt: Date.now()
            })
        }
        if(!isValidWord(word) && currentLetter >= board[currentRow].length - 1) return;
        if(currentRow > newBoard.length - 1 || word.length != 5) return;
        const letterFreq = getLetterFreq(secretWord);
        //checks if the letter is in the word and in the correct spot
        for(let i=0; i<secretWord.length; i++) {
            if(word[i] === secretWord[i] && letterFreq[word[i]] > 0) {
                newBoard[currentRow][i].letterState = LETTER_STATE.correct;
                letterFreq[word[i]]--;
            }
        }
        //checks if the letter is in the word but not in the correct spot
        for(let i=0; i<secretWord.length; i++) {
            if(word[i].letterState === LETTER_STATE.correct || word[i] === secretWord[i]) {
                continue;
            } else if(secretWord.includes(word[i]) && letterFreq[word[i]] > 0){
                if(secretWord.includes(word[i]) && letterFreq[word[i]] > 0) {
                    newBoard[currentRow][i].letterState = LETTER_STATE.incorrectSpot;
                    letterFreq[word[i]]--;
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
        setNumAttempts(numAttempts + 1);
        setCurrentRow(currentRow + 1);
        setCurrentLetter(0);
        setBoard(newBoardObj);
    }, [guessedWord]);

    useEffect(() => {
        if(currentRow > 6) return;
        if(isWordCorrect()) {
            setIsGameOver(true);
            setHasWon(true);
            console.log("PLAYER HAS WON");
        } else if(numAttempts === 6 && !isWordCorrect()) {
            setIsGameOver(true);
            setHasWon(false);
            console.log("PLAYER HAS LOST");
        }
    }, [numAttempts, currentLetter, currentRow]);

    const isWordCorrect = () => {
        const { state } = board; 
        const check = state[currentRow] ? state[currentRow].length : state[currentRow - 1].length;
        for(let i=0; i<check; i++) {
            if(currentRow > 0) {
                if(state[currentRow - 1][i].letterState != LETTER_STATE.correct) {
                    return false;
                }
            } else {
                if(state[currentRow][i].letterState != LETTER_STATE.correct) {
                    return false;
                }
            }
        }
        return true;
    }

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

    const convertLettersIntoWord = () => {
        const { state } = board;
        let word = "";
        if(!state[currentRow]?.length) return "";
        for(let i=0; i<state[currentRow].length; i++) {
            word += state[currentRow][i].letter;
        }
        return word;
    }

    const addLetter = letter => {
        if(isGameOver) return;
        const newBoardObj = {...board};
        const { state: newBoard } = newBoardObj;
        if(!newBoard[currentRow]?.length) return;
        if(currentLetter >= newBoard[currentRow]?.length ) return;
        if(newBoard[currentRow][currentLetter].letterState === LETTER_STATE.unselected) {
            newBoard[currentRow][currentLetter].letter = letter;
            newBoard[currentRow][currentLetter].letterState = LETTER_STATE.placed;
            setCurrentLetter(currentLetter + 1);
        } 
        setBoard(newBoardObj);
    }

    const evaluateWord = () => {
        const newGuess = convertLettersIntoWord().toLowerCase();
        setGuessedWord({
            word: newGuess
        });
    }

    const deleteLetter = () => {
        if(currentLetter === 0) return;
        const newBoardObj = {...board};
        const { state: newBoard } = newBoardObj;     
        newBoard[currentRow][currentLetter - 1].letter = "";
        newBoard[currentRow][currentLetter - 1].letterState = LETTER_STATE.unselected;
        setBoard(newBoardObj);
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
        setGuessedWord,
        deleteLetter,
        isGameOver,
        setIsGameOver
    }

    return (
        <BoardContext.Provider value={value}>
            {children}
        </BoardContext.Provider>
    )
}