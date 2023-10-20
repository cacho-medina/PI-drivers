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
    const [page, setPage] = useState(1);
    const [itemPage, setItemPage] = useState(9);

    //paginacion
    const paginas = driver.length / itemPage;

    function getDrivers() {
        fetch("http://localhost:3001/drivers/1")
            .then((res) => res.json())
            .then((driver) => setdriver(driver))
            .catch((err) => console.log(`Error: ${err}`));
    }
    function showDrivers() {
        setShow(!show);
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
            {show ? (
                <Cards
                    driver={driver}
                    paginas={paginas}
                    page={page}
                    setPage={setPage}
                ></Cards>
            ) : (
                <button className={styles.btn} onClick={showDrivers}>
                    <span>Mostrar conductores</span>
                </button>
            )}
        </>
    );
};

export default Home;
