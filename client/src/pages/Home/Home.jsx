import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//components
import Searchbar from "../../components/searchbar/Searchbar";
import Cards from "../../components/cards/Cards";
import Options from "../../components/options/Options";
//styles
import styles from "./Home.module.css";

const Home = () => {
    const [show, setShow] = useState(false);
    const [driver, setdriver] = useState("");

    function getDrivers() {
        fetch("http://localhost:3001/drivers/2")
            .then((res) => res.json())
            .then((driver) => setdriver(driver))
            .catch((err) => console.log(`Error: ${err}`));
    }
    function showDrivers() {
        setTimeout(() => {
            setShow(!show);
        }, 3000);
    }
    useEffect(() => {
        getDrivers();
    }, []);
    return (
        <>
            <Link to="/" className={styles.link}>
                Inicio
            </Link>
            <Link to="/form" className={styles.form}>
                Ingresar Driver
            </Link>
            <h1 className={styles.title}>F1 drivers</h1>
            <div className={styles.options}>
                <Searchbar></Searchbar>
                <Options></Options>
            </div>
            <button className={styles.btn} onClick={showDrivers}>
                <span>{show ? "🏁" : "Mostrar conductores"}</span>
            </button>
            {show ? <Cards driver={driver}></Cards> : ""}
        </>
    );
};

export default Home;
