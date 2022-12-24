import { useState, createContext } from "react";

export const ToastContext = createContext(null);
export function ToastContextProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        setToasts([...toasts, toast]);
    }

    const value = {
        toasts,
        setToasts,
        addToast
    }

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    )
}