import React, { useState, useContext } from "react"
import BoardLetter from "../BoardLetter/BoardLetter"
import { BoardContext } from "../../../context/BoardContext";
import styles from "./Board.module.css"

function Board() {
    const { board } = useContext(BoardContext);
   
    return (
        <div className={styles.boardContainer}>
            {board.map((row, i) => {
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