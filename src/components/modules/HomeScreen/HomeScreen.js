import  { useState, useContext } from "react";
import { ToastContext } from "../../../context/ToastContext";
import SelectionButton from "../../common/SelectionButton/SelectionButton";
import ToastContainer from "../../common/Toast/ToastContainer/ToastContainer";
import styles from "./HomeScreen.module.css";

function HomeScreen() {
    const [isShown, setIsShown] = useState(true);
    const { addToast } = useContext(ToastContext);

    return (
        <div className={styles.homeScreenContainer}>
            <div className={styles.selectionContainer}>
                <h1>Words of War</h1>
                <SelectionButton name={"single player"} path={"single-player"}/>
                <SelectionButton name={"One v One"} path={"one-v-one"}/>
                <SelectionButton name={"Word Royale"} path={"word-royale"}/>
            </div> 
            <ToastContainer />
        </div>
    )
}

export default HomeScreen; 