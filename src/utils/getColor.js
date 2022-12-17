import { LETTER_STATE } from "../data/boardState";

export const COLORS = {
    green: "#6aaa64",
    yellow: "#c9b458",
    gray: "#787c7e",
    lightGray: "#d3d6da",
    white: "#ffffff",
    black: "#000000"
}

function getColor(boardLetter) {
    if(boardLetter.letterState === LETTER_STATE.correct) {
        return COLORS.green;
    } else if(boardLetter.letterState === LETTER_STATE.incorrectSpot) {
        return COLORS.yellow;
    } else if(boardLetter.letterState === LETTER_STATE.wrong) {
        return COLORS.gray;
    } else {
        return COLORS.white;
    }
}

export default getColor;