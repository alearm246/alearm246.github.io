import React, { useContext } from "react";
import KeyBoardButton from "../KeyBoardButton/KeyBoardButton";
import { BoardContext } from "../../../context/BoardContext";

function DeleteButton(props) {
    const { deleteLetter } = useContext(BoardContext);
    const handleClick = e => {
        e.preventDefault();
        deleteLetter();
    }

    return (
        <KeyBoardButton handleClick={handleClick}>
            DELETE
        </KeyBoardButton>
    )
}

export default DeleteButton;