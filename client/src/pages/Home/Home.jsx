import { Link } from "react-router-dom";
import { useEffect } from "react";
//components
import Searchbar from "../../components/searchbar/Searchbar";
import Cards from "../../components/cards/Cards";
import Options from "../../components/options/Options";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
    obtenerPilotos,
    showPilotos,
    obtenerTeams,
} from "../../redux/actions/action";
//styles
import styles from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    const pilotos = useSelector((state) => state.drivers); //pilotos de API
    const pilotosBD = useSelector((state) => state.driversBD); //pilotos de BD
    const show = useSelector((state) => state.show);
    const origin = useSelector((state) => state.origin);

    function showDrivers() {
        dispatch(showPilotos());
        if (!show) {
            dispatch(obtenerTeams());
        }
    }
    useEffect(() => {
        dispatch(obtenerPilotos());
    }, [dispatch]);

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
                origin === "bd" ? (
                    !pilotosBD.length ? (
                        <p>No hay pilotos en la Base de Datos</p>
                    ) : (
                        <Cards pilotos={pilotosBD}></Cards>
                    )
                ) : (
                    <Cards pilotos={pilotos}></Cards>
                )
            ) : (
                <button className={styles.btn} onClick={showDrivers}>
                    <span>Mostrar conductores</span>
                </button>
            )}
        </>
    );
};

export default Home;
