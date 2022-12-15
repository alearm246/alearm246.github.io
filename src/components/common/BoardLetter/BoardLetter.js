import React from "react";
import { LETTER_STATE } from "../../../data/boardState";
import styles from "./BoardLetter.module.css"

const COLORS = {
    green: "#6aaa64",
    yellow: "#c9b458",
    gray: "#787c7e",
    white: "#fffff"
}

function BoardLetter({ letter }) {
    const getColor = () => {
        if(letter.letterState == LETTER_STATE.correct) {
            return COLORS.green;
        } else if(letter.letterState == LETTER_STATE.incorrectSpot) {
            return COLORS.yellow;
        } else if(letter.letterState == LETTER_STATE.wrong) {
            return COLORS.gray;
        } else {
            return COLORS.white;
        }
    }

    return (
        <div className={styles.letterContainer} style={{backgroundColor: getColor() }}>
            {letter.letter}
        </div>
    )
}

export default BoardLetter;