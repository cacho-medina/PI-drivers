import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ driver }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1 className={styles.id}>{driver.id}</h1>
                <Link to="/detail" className={styles.driverName}>
                    <h2>{driver.name}</h2>
                </Link>
            </div>
            <h3 className={styles.team}>{driver.team[1]}</h3>
            <img src={driver.img} alt="imagen de corredor" />
        </div>
    );
};

export default Card;
