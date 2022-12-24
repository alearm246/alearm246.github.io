import React, { useState, useEffect, useContext } from "react"
import BoardLetter from "../BoardLetter/BoardLetter"
import { BoardContext } from "../../../context/BoardContext";
import styles from "./Board.module.css"

function Board() {
    const { board } = useContext(BoardContext);
    const [boardId, setBoardId] = useState(0);
    useEffect(() => {
        console.log("board state: ", board.state.forEach(row => console.log("row: ", row)));
    }, [])
    return (
        <div className={styles.boardContainer}>
            {board.state.map((row, i) => {
                return (
                    <div className={styles.letterRow}>
                        {row.map((letter, j) => {
                            return (
                                <BoardLetter key={letter.id} letter={letter} />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board;