import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";
import validate from "./validate.js";
import axios from "axios";
const Form = () => {
    const [pilot, setPilot] = useState({
        name: "",
        surname: "",
        nationality: "",
        birthday: "",
        teams: "",
        description: "",
        img: "",
    });

    const [errors, setErrors] = useState({});
    function handleChange(event) {
        setPilot({ ...pilot, [event.target.name]: event.target.value });
        setErrors(
            validate({ ...pilot, [event.target.name]: event.target.value })
        );
    }
    const crearPiloto = async (pilot) => {
        try {
            const res = await axios.post(
                "http://localhost:3001/drivers",
                pilot
            );
            return res.data;
        } catch (error) {
            return error;
        }
    };
    function handleSubmit(event) {
        event.preventDefault();
        try {
            crearPiloto(pilot)
                .then((data) => {
                    setPilot({
                        name: "",
                        surname: "",
                        nationality: "",
                        birthday: "",
                        teams: "",
                        description: "",
                        img: "",
                    });
                })
                .catch((err) => err.message);

            alert("Piloto creado con exito!");
            console.log(pilot);
        } catch (error) {
            alert(error.message);
        }
    }
    console.log(errors);
    return (
        <div className={styles.formContainer}>
            <Link to="/home" className={styles.link}>
                Home
            </Link>
            <h1>Ingresa tu propio piloto</h1>
            <form
                onSubmit={handleSubmit}
                className={styles.form}
                encType="multipart/form-data"
            >
                <div className={styles.row}>
                    <label htmlFor="name">Nombres</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={pilot.name}
                    />
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.name && (
                        <label className={styles.errorMessage}>
                            {errors.name}
                        </label>
                    )}
                </div>
                <div className={styles.row}>
                    <label htmlFor="surname">Apellidos</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        onChange={handleChange}
                        value={pilot.surname}
                    />
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.surname && (
                        <label className={styles.errorMessage}>
                            {errors.surname}
                        </label>
                    )}
                </div>
                <div className={styles.row}>
                    <label htmlFor="nationality">Nacionalidad</label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        onChange={handleChange}
                        value={pilot.nationality}
                    />
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.nationality && (
                        <label className={styles.errorMessage}>
                            {errors.nationality}
                        </label>
                    )}
                </div>
                <div className={styles.row}>
                    <label htmlFor="birthday">Fecha de Nacimiento</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        onChange={handleChange}
                        value={pilot.birthday}
                    />
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.dob && (
                        <label className={styles.errorMessage}>
                            {errors.dob}
                        </label>
                    )}
                </div>
                <div className={styles.row}>
                    <label htmlFor="teams">Escuderia</label>
                    <input
                        type="text"
                        id="teams"
                        name="teams"
                        onChange={handleChange}
                        value={pilot.teams}
                    />
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.teams && (
                        <label className={styles.errorMessage}>
                            {errors.teams}
                        </label>
                    )}
                </div>
                <div className={styles.row}>
                    <label htmlFor="img">Imagen</label>
                    <input
                        type="url"
                        placeholder="Añade la url de tu imagen"
                        name="img"
                        id="img"
                        className={styles.imgInput}
                        onChange={handleChange}
                        value={pilot.img}
                    />
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.img && (
                        <label className={styles.errorMessage}>
                            {errors.img}
                        </label>
                    )}
                </div>
                <div className={styles.row}>
                    <label htmlFor="description">Descripcion</label>
                    <textarea
                        name="description"
                        id="description"
                        value={pilot.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.description && (
                        <label className={styles.errorMessage}>
                            {errors.description}
                        </label>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={Object.keys(errors).length > 0}
                    className={styles.btn}
                >
                    Crear piloto
                </button>
            </form>
        </div>
    );
};

export default Form;
