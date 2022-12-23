import React from "react";
import { Link } from "react-router-dom";
import styles from "./SelectionButton.module.css";

function SelectionButton({ name, path }) {
    return (
        <Link to={`/${path}`} styles={styles.buttonLink}>
            <button className={styles.selectionButton}>
                {name}
            </button>
        </Link>
    )
}

export default SelectionButton;