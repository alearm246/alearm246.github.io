import React from "react";
import styles from "./KeyBoardButton.module.css";

function KeyBoardButton({ children, handleClick, style }) {
    return (
        <button className={styles.keyBoardButton} onClick={handleClick} style={{...style}}>
            {children}
        </button> 
    )
}

export default KeyBoardButton;