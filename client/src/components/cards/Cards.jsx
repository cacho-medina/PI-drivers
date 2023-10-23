import { useState } from "react";
import Card from "../card/Card";
import Paginacion from "../paginacion/Paginacion";
import styles from "./Cards.module.css";

//redux
import { useSelector } from "react-redux";

const Cards = ({ pilotos }) => {
    const pagina = useSelector((state) => state.pagina);

    //const [page, setPage] = useState(1);
    const [itemPage, setItemPage] = useState(9);
    //paginacion
    const paginas = pilotos?.length / itemPage; //cantidad maxima de paginas
    return (
        <>
            <div className={`${styles.contenedor} ${styles.aparezco} `}>
                {pilotos
                    ?.slice(
                        (pagina - 1) * itemPage,
                        (pagina - 1) * itemPage + itemPage
                    )
                    .map((driver, index) => {
                        return <Card driver={driver} key={index}></Card>;
                    })}
            </div>
            <Paginacion paginas={paginas} pagina={pagina}></Paginacion>
        </>
    );
};

export default Cards;
