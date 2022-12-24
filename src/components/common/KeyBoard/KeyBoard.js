import React, { useState, useEffect, useContext, useCallback } from "react";
import KeyBoardLetter from "../KeyBoardLetter/KeyBoardLetter";
import EnterButton from "../EnterButton/EnterButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { BoardContext } from "../../../context/BoardContext";
import { COLORS } from "../../../utils/getColor";
import getColor from "../../../utils/getColor";
import keyBoardState from "../../../data/keyBoardState";
import styles from "./KeyBoard.module.css";

function KeyBoard(props) {
    const { board, currentRow, addLetter, evaluateWord, deleteLetter } = useContext(BoardContext);
    const [keyBoard, setKeyBoard] = useState(keyBoardState);


    const handleKeyDown = useCallback((e) => {
        e.stopPropagation();
        if(e.key === "Enter") {
            evaluateWord();
        } else if(e.key === "Backspace") {
            deleteLetter();
        } else {
            Object.keys(keyBoardState).forEach(key => {
                keyBoardState[key].forEach(({ letter }) => {
                    if(letter === e.key.toUpperCase()) {
                        addLetter(e.key.toUpperCase());
                    }
                })
            })
        }  
    })

    const getKeyBoardRow = (keyBoard, row) => {
        return keyBoard[row - 1].map(({letter}) => {
            return letter;
        })
    }

    const getLetterIndex = (firstKeyBoardRow, secondKeyBoardRow, thirdKeyBoardRow, letter) => {
        if(firstKeyBoardRow.indexOf(letter) !== -1) {
            return [0, firstKeyBoardRow.indexOf(letter)];
        } else if(secondKeyBoardRow.indexOf(letter) !== -1) {
            return [1, secondKeyBoardRow.indexOf(letter)];
        } else {
            return [2, thirdKeyBoardRow.indexOf(letter)];
        }
    }

    const changeKeyBoardColor = () => {
        const newKeyBoard = {...keyBoard};
        const wordRow = !board.state[currentRow - 1] ? board.state[currentRow] : board.state[currentRow - 1];
        const firstKeyBoardRow = getKeyBoardRow(newKeyBoard, 1);
        const secondKeyBoardRow = getKeyBoardRow(newKeyBoard, 2);
        const thirdKeyBoardRow = getKeyBoardRow(newKeyBoard, 3);
        wordRow.forEach((boardLetter) => {
            const [row, letterIndex] = getLetterIndex(firstKeyBoardRow, secondKeyBoardRow, thirdKeyBoardRow, boardLetter.letter);
            if(!newKeyBoard[row][letterIndex]) return;
            const {letter: keyBoardLetter, color } = newKeyBoard[row][letterIndex];
            if(boardLetter.letter === keyBoardLetter) {
                if(color === COLORS.green) return;
                newKeyBoard[row][letterIndex].color = getColor(boardLetter);
            }
        });
        setKeyBoard(newKeyBoard);
    }

    useEffect(() =>{
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [handleKeyDown])

    return (
        <div className={styles.keyBoardContainer} onKeyDown={handleKeyDown}>
            <div className={styles.keyBoardRow}>
                {keyBoardState[0].map(({letter, color}) => {
                    return (
                        <KeyBoardLetter letter={letter} color={color}/>
                    )
                })}
            </div>
            <div className={styles.keyBoardRow}>
            {keyBoardState[1].map(({letter, color}) => {
                    return (
                        <KeyBoardLetter letter={letter} color={color} />
                    )
                })}
            </div>
            <div className={styles.keyBoardRow}>
                <EnterButton changeKeyBoardColor={changeKeyBoardColor}/>
            {keyBoardState[2].map(({letter, color}) => {
                    return (
                        <KeyBoardLetter letter={letter} color={color} />
                    )
                })}
                <DeleteButton />
            </div>
        </div>
    )
}

export default KeyBoard;