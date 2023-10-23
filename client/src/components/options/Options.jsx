import styles from "./Options.module.css";
function Options() {
    return (
        <div className={styles.optionsContainer}>
            <select name="order" id="order" className={styles.options}>
                <option value="">Orden</option>
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
            </select>
            <select name="team" id="team" className={styles.options}>
                <option value="">Escuderia</option>
                <option value="...">team...</option>
            </select>
        </div>
    );
}

export default Options;
