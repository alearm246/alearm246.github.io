import React from "react";
import { UserContext } from "../../../context/UserContext";

function LoginButton({ styles }) {
    return (
        <a href={"http://localhost:3001/auth/google"}>
            <button className={styles}>
                LOGIN
            </button>
        </a>
        
    )
}

export default LoginButton;