import F1 from "../../assets/f1_logo.svg";
import styles from "./Inicio.module.css";
import { Link } from "react-router-dom";
const Inicio = () => {
    return (
        <div className={styles.inicio}>
            <div className={styles.img}>
                <img src={F1} alt="Logo F1" />
            </div>
            <h1 className={styles.title}>Pagina de Inicio</h1>
            <Link to="/home" className={styles.link}>
                Ir a Home
            </Link>
        </div>
    );
};

export default Inicio;
