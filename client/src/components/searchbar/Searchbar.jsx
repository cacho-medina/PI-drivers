import styles from "./Searchbar.module.css";
function Searchbar() {
    return (
        <div>
            <input
                type="text"
                placeholder="Busca un conductor..."
                className={styles.input}
            />
        </div>
    );
}

export default Searchbar;
