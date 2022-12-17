import React from "react";
import { LETTER_STATE } from "../../../data/boardState";
import { COLORS } from "../../../utils/getColor";
import getColor from "../../../utils/getColor";
import styles from "./BoardLetter.module.css"

function BoardLetter({ letter }) {
    const getLetterColor = () => {
        if(letter.letterState !== LETTER_STATE.placed && letter.letterState !== LETTER_STATE.unselected) {
            return COLORS.white;
        } else {
            return COLORS.black;
        }
    }

    const getBoarderColor = () => {
        if(letter.letterState === LETTER_STATE.correct) {
            return COLORS.green;
        } else if(letter.letterState === LETTER_STATE.incorrectSpot) {
            return COLORS.yellow;
        } else if(letter.letterState === LETTER_STATE.wrong) {
            return COLORS.gray;
        } else {
            return COLORS.lightGray;
        }
    }

    return (
        <div className={styles.letterContainer} style={{backgroundColor: getColor(letter), color: getLetterColor(), borderColor: getBoarderColor() }}>
            {letter.letter}
        </div>
    )
}

export default BoardLetter;