import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ driver }) => {
    /* const currentTeam = driver?.teams?.split(","); */
    console.log(driver);
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1 className={styles.id}>
                    {typeof driver.number !== "number"
                        ? driver.id
                        : driver.number}
                </h1>
                <Link to={`/detail/${driver.id}`} className={styles.driverName}>
                    <h2>
                        {driver.name.forename} {driver.name.surname}
                    </h2>
                </Link>
            </div>
            <h3 className={styles.team}>
                {/* {currentTeam[currentTeam.length - 1]} */}
                {driver.teams}
            </h3>
            <img src={driver.image.url} alt="imagen de corredor" />
        </div>
    );
};

export default Card;
