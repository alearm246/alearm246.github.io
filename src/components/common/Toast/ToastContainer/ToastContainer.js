import { useState, useContext, useEffect } from "react";
import Toast from "../Toast/Toast";
import { ToastContext } from "../../../../context/ToastContext";
import { v4 as uuidv4 } from 'uuid';
import styles from "./ToastContainer.module.css";

function ToastContainer() {
    const { toasts, setToasts } = useContext(ToastContext);
    const [id, setId] = useState(uuidv4());
    const timeouts = [];

    const removeToast = (toast) => {
        const newToasts = [...toasts];
        const toastIndex = newToasts.findIndex(newToast => toast.id === newToast.id);
        newToasts.splice(toastIndex, 1);
        setToasts(newToasts);
    }

    useEffect(() => {
        toasts.forEach(toast => {
            const timeout = setTimeout(() => {
                removeToast(toast);

            }, 3000);
            timeouts.push(timeout);
        });
        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
        }
    }, [toasts]);


    return (
        <div className={styles.toastContainer}>
            {toasts.map(toast => {
                return <Toast key={toast.id} toastData={toast} removeToast={removeToast} />;
            })}
        </div>
    )
}

export default ToastContainer;