import React, { useState } from "react";
import KeyBoardLetter from "../KeyBoardLetter/KeyBoardLetter";
import EnterButton from "../EnterButton/EnterButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import styles from "./KeyBoard.module.css";

const letters = {
    firstRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    secondRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    thirdRow: ["Z", "X", "C", "V", "B", "N", "M"]
}

function KeyBoard(props) {

    return (
        <div className={styles.keyBoardContainer}>
            <div className={styles.keyBoardRow}>
                {letters.firstRow.map(letter => {
                    return (
                        <KeyBoardLetter letter={letter} />
                    )
                })}
            </div>
            <div className={styles.keyBoardRow}>
            {letters.secondRow.map(letter => {
                    return (
                        <KeyBoardLetter letter={letter} />
                    )
                })}
            </div>
            <div className={styles.keyBoardRow}>
                <EnterButton />
            {letters.thirdRow.map(letter => {
                    return (
                        <KeyBoardLetter letter={letter} />
                    )
                })}
                <DeleteButton />
            </div>
        </div>
    )
}

export default KeyBoard;