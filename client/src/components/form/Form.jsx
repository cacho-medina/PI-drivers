import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";
const Form = () => {
    const [pilot, setPilot] = useState({});
    return (
        <div className={styles.formContainer}>
            <Link to="/home" className={styles.link}>
                Home
            </Link>
            <h1>Ingresa tu propio piloto</h1>
            <form action="" className={styles.form}>
                <div className={styles.row}>
                    <label htmlFor="name">Nombres</label>
                    <input type="text" />
                </div>
                <div className={styles.row}>
                    <label htmlFor="lastname">Apellidos</label>
                    <input type="text" />
                </div>
                <div className={styles.row}>
                    <label htmlFor="nationality">Nacionalidad</label>
                    <input type="text" />
                </div>
                <div className={styles.row}>
                    <label htmlFor="lastname">Fecha de Nacimiento</label>
                    <input type="date" />
                </div>
                <div className={styles.row}>
                    <label htmlFor="team">Escuderia</label>
                    <input type="text" />
                </div>
                <div className={styles.row}>
                    <label htmlFor="img">Imagen</label>
                    <input type="file" />
                </div>
                <button type="submit" className={styles.btn}>
                    Ingresar
                </button>
            </form>
        </div>
    );
};

export default Form;
