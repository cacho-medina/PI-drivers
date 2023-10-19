import Card from "../card/Card";
import styles from "./Cards.module.css";
const Cards = ({ driver }) => {
    return (
        <div className={styles.contenedor}>
            <Card driver={driver}></Card>
        </div>
    );
};

export default Cards;
