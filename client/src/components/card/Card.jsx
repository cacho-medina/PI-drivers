import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import F1 from "../../assets/F1-v2.png";

const Card = ({ driver }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1 className={styles.id}>
                    {typeof driver.number !== "number"
                        ? driver.id
                        : driver.number}
                </h1>
                <Link to={`/detail/${driver.id}`} className={styles.driverName}>
                    <h2>{driver.name}</h2>
                </Link>
            </div>
            <h3 className={styles.team}>
                {driver.team}
            </h3>
            <img
                src={driver.img === "" ? F1 : driver.img}
                alt="imagen de corredor"
            />
        </div>
    );
};

export default Card;
