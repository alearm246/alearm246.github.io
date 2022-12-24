import { useState, useEffect, useContext } from "react";
import Board from "../../common/Board/Board";
import KeyBoard from "../../common/KeyBoard/KeyBoard";
import StatsModal from "../../common/StatsModal/StatsModal";
import styles from "./OneVOneMode.module.css";
import { BoardContext } from "../../../context/BoardContext";
import { UserContext } from "../../../context/UserContext";
import { v4 as uuidv4 } from 'uuid';
import BOARD_STATE from "../../../data/boardState";
import ToastContainer from "../../common/Toast/ToastContainer/ToastContainer";
import axios from "axios";


function OneVOneMode() {
    const [isModalShown, setIsModalShown] = useState(false);
    const { isGameOver, setBoard } = useContext(BoardContext);
    const { user, setUser, hasWon, isLoggedIn } = useContext(UserContext);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        console.log("is user logged in on mount? ", isLoggedIn);
        setStartTime(Date.now());
        setBoard(BOARD_STATE);
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
            let res;
            console.log("user stats id: ", userStatsId);
            console.log("user: ", user);
            if(hasWon) {
                console.log("user has won");
                res = await axios.put(`http://localhost:3001/users-stats/${userStatsId}/increment`, {
                totalGamesPlayed: 1,
                totalWins: 1,
                totalLosses: 0,
                currentStreak: 1,
                totalGamesPlayed: 1,
                totalTimePlayed: elapsedTime
            }, { withCredentials: true });
            } else {
                console.log("user has lost");
                const res3 = await axios.put(`http://localhost:3001/users-stats/${userStatsId}`, {
                    currentStreak: 0
                }, { withCredentials: true });
                res = await axios.put(`http://localhost:3001/users-stats/${userStatsId}/increment`, {
                totalGamesPlayed: 1,
                totalWins: 0,
                totalLosses: 1,
                currentStreak: 0,
                totalGamesPlayed: 1,
                totalTimePlayed: elapsedTime
            }, { withCredentials: true });
            }
            const { data } = res;
            console.log("data: ", data);
            setUser({...user, ...data});
            
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.oneVOneModeContainer}>
            {isModalShown && <StatsModal isModalShown={isModalShown} 
                                         setIsModalShown={setIsModalShown}
                                         elapsedTime={elapsedTime}
                             />}
            <div className={styles.boardRow}>
                <Board id={user.id}/>
                <Board id={uuidv4()}/>
            </div>
            <KeyBoard />
            <ToastContainer />
        </div>
    )
}

export default OneVOneMode;