import React from "react";
import styles from "./KeyBoardButton.module.css";

function KeyBoardButton({ children, handleClick }) {
    return (
        <button className={styles.keyBoardButton} onClick={handleClick}>
            {children}
        </button> 
    )
}

export default KeyBoardButton;