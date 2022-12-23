import React, { useContext } from "react";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { UserContext } from "../../../context/UserContext";
import styles from "./AuthButton.module.css";

function AuthButton(props) {
    const { isLoggedIn } = useContext(UserContext);
    return (
        isLoggedIn ? <LogoutButton styles={styles}/> : <LoginButton styles={styles}/>
    )
}

export default AuthButton