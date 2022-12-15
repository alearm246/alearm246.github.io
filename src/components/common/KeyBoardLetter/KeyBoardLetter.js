import React, { useContext } from "react";
import { BoardContext } from "../../../context/BoardContext";
import KeyBoardButton from "../../common/KeyBoardButton/KeyBoardButton";
import styles from "./KeyBoardLetter.module.css";

function KeyBoardLetter({ letter }) {
    const { addLetter } = useContext(BoardContext);

    const handleClick = (e) => {
        e.preventDefault();
        addLetter(e.target.innerHTML);
    }
    return (
        <KeyBoardButton handleClick={handleClick}>
            {letter}
        </KeyBoardButton>
    )
}

export default KeyBoardLetter;