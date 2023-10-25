import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";
import validate from "./validate.js";
import axios from "axios";
const Form = () => {
    const [pilot, setPilot] = useState({
        name: "",
        lastname: "",
        nationality: "",
        dob: "",
        team: "",
        desc: "",
    });
    const [img, setImg] = useState(null);
    const [errors, setErrors] = useState({});
    function handleChange(event) {
        setPilot({ ...pilot, [event.target.name]: event.target.value });
        setErrors(
            validate({ ...pilot, [event.target.name]: event.target.value })
        );
    }
    const handleImageChange = (event) => {
        setImg({ ...img, [event.target.name]: event.target.files[0].name });
    };
    async function crearPiloto(infoPiloto) {
        const res = await axios.post(
            "http://localhost:3001/drivers",
            infoPiloto
        );
        return res;
    }
    function handleSubmit(event) {
        event.preventDefault();
        const driver = Object.assign({}, pilot, img);
        if (!Object.keys(errors).length === 0) {
            alert("Algo salio mal :(");
        } else {
            crearPiloto(driver);
            alert("Piloto creado con exito!");
            setPilot({
                name: "",
                lastname: "",
                nationality: "",
                dob: "",
                team: "",
                desc: "",
            });
            setImg("");
        }
    }

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
                    <label htmlFor="lastname">Apellidos</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        onChange={handleChange}
                        value={pilot.lastname}
                    />
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.lastname && (
                        <label className={styles.errorMessage}>
                            {errors.lastname}
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
                    <label htmlFor="dob">Fecha de Nacimiento</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        onChange={handleChange}
                        value={pilot.dob}
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
                    <label htmlFor="team">Escuderia</label>
                    <input
                        type="text"
                        id="team"
                        name="team"
                        onChange={handleChange}
                        value={pilot.team}
                    />
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.team && (
                        <label className={styles.errorMessage}>
                            {errors.team}
                        </label>
                    )}
                </div>
                <div className={styles.row}>
                    <label htmlFor="img">Imagen</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={handleImageChange}
                        accept=".jpg, .jpeg, .png"
                    />
                </div>
                <div className={styles.row}>
                    <label htmlFor="desc">Descripcion</label>
                    <textarea
                        name="desc"
                        id="desc"
                        value={pilot.desc}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className={`${styles.row} ${styles.rowError}`}>
                    {errors.desc && (
                        <label className={styles.errorMessage}>
                            {errors.desc}
                        </label>
                    )}
                </div>
                <button type="submit" className={styles.btn}>
                    Crear piloto
                </button>
            </form>
        </div>
    );
};

export default Form;
