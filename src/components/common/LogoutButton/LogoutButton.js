import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";

function LogoutButton({ styles }) {
    const { setUser, setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const { status } = await axios.get("http://localhost:3001/auth/logout", {
                withCredentials: true
            });
            if(status === 200) {
                setIsLoggedIn(false);
                setUser({});
                navigate("/");
            }
        } catch(err) {
            console.error(err);
        }
    }
    const handleClick = e => {
        e.preventDefault();
        logout();
    }
    return (
        <button className={styles} onClick={handleClick}>
            LOGOUT
        </button>
    )
}

export default LogoutButton;