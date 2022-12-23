import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const UserContext = createContext(null);
export function UserContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [numAttempts, setNumAttempts] = useState(0);
    const [hasWon, setHasWon] = useState(false);

    const getUser = async () => {
        try {
            const { data, status } = await axios.get("http://localhost:3001/users/current", {
                withCredentials: true
            });
            if(status === 200) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            console.log("user data: ", data);
            setUser(data);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    const value = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        numAttempts,
        setNumAttempts,
        hasWon,
        setHasWon,
        getUser
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}