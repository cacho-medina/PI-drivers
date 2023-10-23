import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//components
import Searchbar from "../../components/searchbar/Searchbar";
import Cards from "../../components/cards/Cards";
import Options from "../../components/options/Options";
//redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerPilotos, showPilotos } from "../../redux/actions/action";
//styles
import styles from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();
    const pilotos = useSelector((state) => state.drivers); //pilotos de API
    const pilotosBD = useSelector((state) => state.driversBD); //pilotos de BD
    const show = useSelector((state) => state.show);

    //const [show, setShow] = useState(false);
    //const [drivers, setDrivers] = useState();

    //funcion reemplazada por la action obtenerPilotos
    /* function getDrivers() {
        fetch("http://localhost:3001/drivers")
            .then((res) => res.json())
            .then((driver) => setDrivers(driver))
            .catch((err) =>
                console.log(`No se pudo obtener los pilotos \n${err}`)
            );
    } */
    function showDrivers() {
        dispatch(showPilotos());
    }
    useEffect(() => {
        //getDrivers();
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
                <Cards pilotos={pilotos}></Cards>
            ) : (
                <button className={styles.btn} onClick={showDrivers}>
                    <span>Mostrar conductores</span>
                </button>
            )}
        </>
    );
};

export default Home;
