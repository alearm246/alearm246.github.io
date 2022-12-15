import React, { useContext } from "react";
import KeyBoardButton from "../KeyBoardButton/KeyBoardButton";
import { BoardContext } from "../../../context/BoardContext";
import styles from "./EnterButton.module.css";

function EnterButton(props) {
    const { evaluateWord } = useContext(BoardContext);
    const handleClick = e => {
        e.preventDefault();
        evaluateWord();
    }

    return (
        <KeyBoardButton handleClick={handleClick}>
            ENTER
        </KeyBoardButton>
    )
}

export default EnterButton;