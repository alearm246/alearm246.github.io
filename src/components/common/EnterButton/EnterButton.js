import React, { useContext, useEffect } from "react";
import KeyBoardButton from "../KeyBoardButton/KeyBoardButton";
import { BoardContext } from "../../../context/BoardContext";
import getColor from "../../../utils/getColor";
import styles from "./EnterButton.module.css";

function EnterButton({ changeKeyBoardColor}) {
    const { board, currentRow, evaluateWord } = useContext(BoardContext);

    const handleClick = e => {
        e.preventDefault();
        evaluateWord();
    }

    useEffect(() => {
        if(currentRow > 0) {
            changeKeyBoardColor()
        }  
    }, [board])

    return (
        <KeyBoardButton handleClick={handleClick}>
            ENTER
        </KeyBoardButton>
    )
}

export default EnterButton;