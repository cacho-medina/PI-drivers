import styles from "./Options.module.css";
import { useSelector, useDispatch } from "react-redux";
import { order, filter, filterOrigen } from "../../redux/actions/action";
function Options() {
    const dispatch = useDispatch();
    const teams = useSelector((state) => state.teams);
    function handleOrder(event) {
        dispatch(order(event.target.value));
    }
    function handleFilter(event) {
        dispatch(filter(event.target.value));
    }
    function handleOrigin(event) {
        dispatch(filterOrigen(event.target.value));
    }
    return (
        <div className={styles.optionsContainer}>
            <select
                name="order"
                id="order"
                className={styles.options}
                onChange={handleOrder}
            >
                <option value="default">Orden</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Jovenes">Jovenes - Veteranos</option>
                <option value="Veteranos">Veteranos - Jovenes</option>
            </select>
            <select
                name="origen"
                id="origen"
                className={styles.options}
                onChange={handleOrigin}
            >
                <option value="">Origen</option>
                <option value="bd">Base de Datos</option>
                <option value="api">Api</option>
            </select>
            <select
                name="team"
                id="team"
                className={styles.options}
                onChange={handleFilter}
            >
                <option value="default">Escuderia</option>
                {teams.map((team, index) => {
                    return (
                        <option value={team} key={index}>
                            {team}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default Options;
