import { useState, createContext } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");
export const SocketContext = createContext(socket);
export function SocketContextProvider({ children }) {
    const [socketRef, setSocketRef] = useState(socket);
    const value = {
        socket: socketRef
    }
    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}