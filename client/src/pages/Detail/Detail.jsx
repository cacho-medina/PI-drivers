import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
    const { idDriver } = useParams();
    const [driver, setDriver] = useState({});
    function getDriverById() {
        fetch(`http://localhost:3001/drivers/${idDriver}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.name) {
                    setDriver(data);
                } else {
                    window.alert("No existe ese piloto");
                }
            })
            .catch((err) => err.message);
    }
    useEffect(() => {
        getDriverById();
    }, [idDriver]);
    return (
        <>
            <Link to="/home" className={styles.link}>
                Home
            </Link>
            <div className={styles.driverContainer}>
                <div className={styles.imgContainer}>
                    <img src={driver.img} alt="driver" />
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={styles.title}>{driver.name}</h1>
                    <h3 className={styles.number}>{driver.id}</h3>
                    <h3>
                        Team: <span className={styles.info}>{driver.team}</span>
                    </h3>
                    <h3>
                        Country:{" "}
                        <span className={styles.info}>
                            {driver.nationality}
                        </span>
                    </h3>
                    <h3>
                        Date of birth:{" "}
                        <span className={styles.info}>{driver.birthday}</span>
                    </h3>
                    <h3>
                        Biography:{" "}
                        <p className={styles.info}>{driver.description}</p>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default Detail;
