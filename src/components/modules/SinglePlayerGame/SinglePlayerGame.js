import { useState, useEffect, useContext } from "react";
import { BoardContext } from "../../../context/BoardContext";
import { UserContext } from "../../../context/UserContext";
import Board from "../../common/Board/Board";
import KeyBoard from "../../common/KeyBoard/KeyBoard";
import StatsModal from "../../common/StatsModal/StatsModal";
import axios from "axios";
import styles from "./SinglePlayerGame.module.css";

function SinglePlayerGame() {
    const [isModalShown, setIsModalShown] = useState(false);
    const { isGameOver } = useContext(BoardContext);
    const { user, setUser, hasWon } = useContext(UserContext);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        setStartTime(Date.now());
    }, [])

    useEffect(() => {
        if(isGameOver) {
            setIsModalShown(true);
            setEndTime(Date.now());
        }
    }, [isGameOver, hasWon]);

    useEffect(() => {
        if(isGameOver) {
            setElapsedTime(endTime - startTime);
        }  
    }, [endTime])

    useEffect(() => {
        if(isGameOver) {
            console.log("elapsed time: ", elapsedTime);
            updateUsersStats();
        }    
    }, [elapsedTime]);

    const updateUsersStats = async () => {
        try {
            const { userStatsId } = user;
            const totalWins = hasWon ? 1 : 0;
            const totalLosses = hasWon ? 0 : 1;
            const currentStreak = hasWon ? 1 : 0;
            const maxStreak = hasWon ? 1 : 0;
            const { data } = await axios.put(`http://localhost:3001/users-stats/${userStatsId}/increment`, {
                totalGamesPlayed: 1,
                totalWins,
                totalLosses,
                currentStreak,
                maxStreak,
                totalGamesPlayed: 1,
                totalTimePlayed: elapsedTime
            }, { withCredentials: true });
            setUser(data);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.singleGameContainer}>
            {isModalShown && <StatsModal isModalShown={isModalShown} 
                                         setIsModalShown={setIsModalShown}
                                         startTime={startTime}
                                         endTime={endTime}
                             />}
            <Board />
            <KeyBoard />
        </div>
    )
}

export default SinglePlayerGame;