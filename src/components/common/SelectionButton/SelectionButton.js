import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { ToastContext } from "../../../context/ToastContext";
import { v4 as uuidv4 } from 'uuid';
import styles from "./SelectionButton.module.css";

function SelectionButton({ name, path }) {
    const { isLoggedIn } = useContext(UserContext);
    const { addToast } = useContext(ToastContext);

    const handleClick = (e) => {
        isLoggedIn || addToast({ id: uuidv4(), message: "You need to log in", createdAt: Date.now()});
    }

    return (
        <Link to={isLoggedIn ? `/${path}` : "/"} styles={styles.buttonLink} onClick={(e) => console.log(path)}>
            <button className={styles.selectionButton} onClick={handleClick}>
                {name}
            </button>
        </Link>
    )
}

export default SelectionButton;