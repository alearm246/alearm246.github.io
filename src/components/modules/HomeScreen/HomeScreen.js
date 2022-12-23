import React from "react";
import SelectionButton from "../../common/SelectionButton/SelectionButton";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
    return (
        <div className={styles.homeScreenContainer}>
            <div className={styles.selectionContainer}>
                <h1>Words of War</h1>
                <SelectionButton name={"single player"} path={"single-player"}/>
                <SelectionButton name={"One v One"} path={"one-v-one"}/>
                <SelectionButton name={"Word Royale"} path={"word-royale"}/>
            </div> 
        </div>
    )
}

export default HomeScreen; 