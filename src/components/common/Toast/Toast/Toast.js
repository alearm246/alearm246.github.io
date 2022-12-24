import { useState, useEffect, useContext } from "react";
import { ToastContext } from "../../../../context/ToastContext";
import styles from "./Toast.module.css";

function Toast({ toastData, removeToast }) {
    const { toasts, setToasts } = useContext(ToastContext);

    const handleClick = (e) => {
        e.preventDefault();
        removeToast(toastData);
    }

    return (
        <div className={styles.toastContainer} onClick={handleClick}>
            <h3>{toastData.message}</h3>
        </div>
    )
}

export default Toast;