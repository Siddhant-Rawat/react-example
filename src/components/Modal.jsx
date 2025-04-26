import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        // navigate("/");
        // go route 1 level up - parent (just like in terminal)
        navigate("..")
    }

    return (
        <>
            <div className={styles.backdrop} onClick={closeHandler} />
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;
