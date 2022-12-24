import { useEffect } from "react";

function LoginButton({ styles }) {
    const handleClick = e => {
        e.preventDefault();
        window.location.href = "http://localhost:3001/auth/google";
    }
    return (
        <button className={styles} onClick={handleClick}>
            LOGIN
        </button>
    )
}

export default LoginButton;