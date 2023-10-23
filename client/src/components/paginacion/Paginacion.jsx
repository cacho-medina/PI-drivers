import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { savePage } from "../../redux/actions/action";
import styles from "./Paginacion.module.css";

function Paginacion({ paginas, pagina }) {
    const dispatch = useDispatch();

    const [paginaActual, setPaginaActual] = useState(pagina);

    function nextPage() {
        setPaginaActual(paginaActual + 1);
    }
    function previousPage() {
        setPaginaActual(paginaActual - 1);
    }
    useEffect(() => {
        dispatch(savePage(paginaActual));
    }, [paginaActual]);

    return (
        <div className={styles.container}>
            <button
                className={styles.previousPage}
                onClick={previousPage}
                disabled={pagina <= 1}
            >
                {" "}
                ◀️{" "}
            </button>
            <p>
                {paginaActual} de {Math.ceil(paginas)}
            </p>
            <button
                className={styles.nextPage}
                onClick={nextPage}
                disabled={pagina >= paginas}
            >
                {" "}
                ▶️{" "}
            </button>
        </div>
    );
}

export default Paginacion;
