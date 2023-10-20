import Card from "../card/Card";
import Paginacion from "../paginacion/Paginacion";
import styles from "./Cards.module.css";
const Cards = ({ driver, paginas, page, setPage }) => {
    return (
        <div className={`${styles.contenedor} ${styles.aparezco} `}>
            <div className={styles.cardsContainer}>
                <Card driver={driver}></Card>
            </div>
            <Paginacion
                paginas={paginas}
                page={page}
                setPage={setPage}
            ></Paginacion>
        </div>
    );
};

export default Cards;
