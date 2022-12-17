import React, { useContext } from "react";
import { BoardContext } from "../../../context/BoardContext";
import getColor from "../../../utils/getColor";
import { COLORS } from "../../../utils/getColor";
import KeyBoardButton from "../../common/KeyBoardButton/KeyBoardButton";
import styles from "./KeyBoardLetter.module.css";

function KeyBoardLetter({ letter, color }) {
    const { addLetter } = useContext(BoardContext);

    const handleClick = (e) => {
        e.preventDefault();
        addLetter(e.target.innerHTML);
    }

    return (
        <KeyBoardButton 
            handleClick={handleClick} 
            style={{backgroundColor: color, color: color === COLORS.lightGray ? COLORS.black : COLORS.white}}
        >
            {letter}
        </KeyBoardButton>
    )
}

export default KeyBoardLetter;