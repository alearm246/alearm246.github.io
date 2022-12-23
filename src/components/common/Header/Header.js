import React, { useContext } from "react";
import AuthButton from "../AuthButton/AuthButton";
import { UserContext } from "../../../context/UserContext";
import styles from "./Header.module.css";

function Header(props) {
    const { user } = useContext(UserContext);
    return (
        <div className={styles.headerContainer}>
            <h1>Words of War</h1>
            <h2>{user.email ? user.email : ""}</h2>
            <AuthButton />
        </div>
    )
}

export default Header;