import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import styles from "./StatsModal.module.css";

function StatsModal({ setIsModalShown, startTime, endTime }) {
    const { user, numAttempts, hasWon } = useContext(UserContext);

    const getWinLossRatio = () => {
        const totalLosses = user.totalLosses === 0 ? 1 : user.totalLosses;
        return (user.totalWins / totalLosses);
    }
    return (
        <div className={styles.statsModalBackground} onClick={() => setIsModalShown(false)}>
            <div className={styles.statsModalContainer} onClick={(e) => e.stopPropagation()}>
                <h2>Total number of attempts: {numAttempts}</h2>
                <h2>Time it took to guess the word correctly: {new Date(endTime - startTime).toISOString().slice(14, 19)}</h2>
                {hasWon ? <h1>You won!!!</h1> : <h1>bro you're ass imagine losing</h1>}
                <h2>max streak: {user.maxStreak}</h2>
                <h2>total wins: {user.totalWins}</h2>
                <h2>total losses: {user.totalLosses}</h2>
                <h2>Win/Loss Ratio: {getWinLossRatio()}</h2>
            </div>
        </div> 
    )
}

export default StatsModal;