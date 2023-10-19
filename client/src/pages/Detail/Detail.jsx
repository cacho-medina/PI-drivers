import styles from "./Detail.module.css";
import { Link } from "react-router-dom";

const Detail = () => {
    return (
        <>
            <Link to="/home" className={styles.link}>
                Home
            </Link>
            <div className={styles.driverContainer}>
                <div className="styles.imgContainer">
                    <img src="" alt="driver" />
                </div>
                <div>
                    <h1>Nombre Corredor</h1>
                    <h3 className={styles.number}>40</h3>
                    <h3>
                        Team: <span className={styles.info}>X</span>
                    </h3>
                    <h3>Country:🏁</h3>
                    <h3>
                        Date of birth: <span className={styles.info}>X</span>
                    </h3>
                    <h3>
                        Biography: <span className={styles.info}>X</span>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default Detail;
